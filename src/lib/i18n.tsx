import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react"
import { AUTO_LANGS, autoLangByCode, type AutoLang } from "@/content/languages"
import {
  availability,
  clearQueue,
  drainQueue,
  enqueue,
  getCachedMap,
  onEnqueue,
  putCachedMap,
  translateStrings,
  warmUp,
} from "@/lib/translator"

/**
 * Every language the codebase carries strings/content for. German is the
 * canonical source language. This drives the `Lang` type, so the UI-chrome
 * tables (`ui.ts`, `Flags`, `LANG_NAMES`) stay exhaustive even for languages
 * that are not currently offered — adding one back is then just a matter of
 * listing it in `LANGS` below.
 */
export const ALL_LANGS = ["de", "en", "es", "fr", "it", "tr", "ru", "ar"] as const
export type Lang = (typeof ALL_LANGS)[number]

/**
 * The reviewed languages — German plus the four with hand-checked/offline
 * overlays shipped as `public/i18n/<lang>.json`. Every other language a visitor
 * can pick (see `AUTO_LANGS`) is translated on their own device at runtime.
 */
export const LANGS = ["de", "en", "es", "fr", "it"] as const satisfies readonly Lang[]

/** Languages written right-to-left (drives <html dir>). */
export const RTL_LANGS = new Set<Lang>(["ar"])

/** An active language is any reviewed `Lang` code or any `AUTO_LANGS` code. */
export function isStaticLang(code: string): code is Lang {
  return (LANGS as readonly string[]).includes(code)
}
export function isAutoLang(code: string): boolean {
  return autoLangByCode.has(code)
}
export function isValidLang(code: string | null | undefined): boolean {
  return !!code && (isStaticLang(code) || isAutoLang(code))
}
export function isRtl(code: string): boolean {
  return RTL_LANGS.has(code as Lang) || !!autoLangByCode.get(code)?.rtl
}

/**
 * A localised value. German and English are always present (the reviewed
 * source content); the machine-translated languages are optional and resolved
 * through the fallback chain in `resolveLoc` (inline → machine overlay keyed by
 * the German source → English → German), so a value that has not been
 * translated yet still renders real text rather than a blank.
 */
export type Loc<T = string> = { de: T; en: T } & Partial<Record<Lang, T>>

/**
 * A machine-translation overlay for one language: a flat map from a German
 * source string to its translation. For the reviewed languages it is served as
 * `public/i18n/<lang>.json`; for the long-tail languages it is produced on the
 * visitor's device by `src/lib/translator.ts`. Either way it is keyed by the
 * German source string, so the resolvers below are identical for both.
 */
export type Overlay = Record<string, string>

const STORAGE_KEY = "dost-lang"

/** Module-level cache so toggling back to a reviewed language never refetches. */
const overlayCache = new Map<string, Overlay>()

async function loadOverlay(lang: string, base: string): Promise<Overlay> {
  const cached = overlayCache.get(lang)
  if (cached) return cached
  // No network (SSR / jsdom tests) → behave as an empty overlay (German text).
  if (typeof fetch !== "function") return {}
  try {
    const res = await fetch(`${base}i18n/${lang}.json`, { cache: "force-cache" })
    if (!res.ok) return {}
    const data = (await res.json()) as Overlay
    overlayCache.set(lang, data)
    return data
  } catch {
    // Overlay not generated yet, or a fetch error — fall back to source text.
    return {}
  }
}

/** The status of auto-translation for the active language. */
export type AutoStatus = "off" | "loading" | "ready"

interface LangCtx {
  lang: string
  setLang: (l: string) => void
}

interface AutoInfo {
  status: AutoStatus
  /** The active auto language's metadata, or null when not an auto language. */
  target: AutoLang | null
}

const LanguageContext = createContext<LangCtx | null>(null)
const OverlayContext = createContext<Overlay | null>(null)
const AutoContext = createContext<AutoInfo>({ status: "off", target: null })

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always start at the German default so the server-rendered HTML and the
  // first client render agree (hydration). A returning visitor who chose
  // another language is switched over in the effect just after mount.
  const [lang, setLang] = useState<string>("de")
  const [overlay, setOverlay] = useState<Overlay | null>(null)
  const [autoStatus, setAutoStatus] = useState<AutoStatus>("off")

  // Refs so the (register-once) translation worker always sees current values.
  const langRef = useRef(lang)
  const overlayRef = useRef(overlay)
  langRef.current = lang
  overlayRef.current = overlay

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored && stored !== "de" && isValidLang(stored)) setLang(stored)
  }, [])

  // React to a language change: set <html> attributes, persist the choice, and
  // load the right overlay — a static file for a reviewed language, or the
  // on-device translator for a long-tail one (falling back to a toast when the
  // browser cannot do it).
  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = isRtl(lang) ? "rtl" : "ltr"
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* storage unavailable (private mode) — not fatal */
    }

    clearQueue()
    let cancelled = false

    if (lang === "de") {
      setOverlay(null)
      setAutoStatus("off")
      return
    }

    if (isStaticLang(lang)) {
      setAutoStatus("off")
      const base = import.meta.env.BASE_URL ?? "/"
      void loadOverlay(lang, base).then((o) => {
        if (!cancelled) setOverlay(o)
      })
      return () => {
        cancelled = true
      }
    }

    // Long-tail language: translate on the visitor's own device where the
    // browser supports it, otherwise via the Worker — so it always resolves.
    setAutoStatus("loading")
    setOverlay({})
    void (async () => {
      const avail = await availability(lang)
      if (cancelled) return
      // On-device available: kick off the model download now, while the
      // selection still counts as a user activation.
      if (avail === "available") warmUp(lang)
      const cached = await getCachedMap(lang)
      if (cancelled) return
      // Merge cache under anything the worker has already produced this session.
      setOverlay((prev) => ({ ...cached, ...(prev ?? {}) }))
      setAutoStatus("ready")
    })()
    return () => {
      cancelled = true
    }
  }, [lang])

  // Translation worker: components enqueue the German strings they render; here
  // we drain that queue, translate the ones we don't have yet on-device, and
  // merge the results in (persisting them so a return visit is instant).
  useEffect(() => {
    return onEnqueue(() => {
      const target = langRef.current
      if (!isAutoLang(target)) {
        clearQueue()
        return
      }
      const have = overlayRef.current ?? {}
      const missing = drainQueue().filter((s) => !(s in have))
      if (missing.length === 0) return
      void translateStrings(target, missing).then((map) => {
        if (langRef.current !== target || Object.keys(map).length === 0) return
        setOverlay((prev) => {
          const next = { ...(prev ?? {}), ...map }
          void putCachedMap(target, next)
          return next
        })
      })
    })
  }, [])

  const value = useMemo(() => ({ lang, setLang }), [lang])
  const auto = useMemo<AutoInfo>(
    () => ({ status: autoStatus, target: autoLangByCode.get(lang) ?? null }),
    [autoStatus, lang],
  )

  return (
    <LanguageContext.Provider value={value}>
      <OverlayContext.Provider value={overlay}>
        <AutoContext.Provider value={auto}>{children}</AutoContext.Provider>
      </OverlayContext.Provider>
    </LanguageContext.Provider>
  )
}

export function useLang(): LangCtx {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLang must be used within a LanguageProvider")
  return ctx
}

/** The active language's translation overlay (null for German). */
export function useOverlay(): Overlay | null {
  return useContext(OverlayContext)
}

/** On-device auto-translation status + target, for the notice/toast UI. */
export function useAutoTranslate(): AutoInfo {
  return useContext(AutoContext)
}

/** All long-tail languages, for the switcher. */
export { AUTO_LANGS }
export type { AutoLang }

/**
 * Resolve a `Loc` for the active language, in order: an inline translation
 * (German and English are always inline; other languages may be), then the
 * overlay keyed by the German source, then English, then German. Lists are
 * resolved element by element against the same overlay. Pure — string
 * collection for the on-device translator happens in the hooks below.
 */
export function resolveLoc<T>(loc: Loc<T>, lang: string, overlay: Overlay | null): T {
  const inline = loc[lang as Lang]
  if (inline != null) return inline
  if (lang === "de") return loc.de
  const de = loc.de
  if (Array.isArray(de)) {
    return de.map((s) => (typeof s === "string" ? overlay?.[s] ?? s : s)) as T
  }
  if (typeof de === "string") {
    return (overlay?.[de] ?? loc.en ?? de) as T
  }
  return (loc.en ?? loc.de) as T
}

/**
 * Pure, overlay-free resolver (target → English → German) for the few code
 * paths that run outside React and therefore have no overlay — e.g. the chat
 * retrieval index. Components use `useT`, which is overlay-aware.
 */
export function pick<T>(loc: Loc<T>, lang: Lang): T {
  return (loc[lang] ?? loc.en ?? loc.de) as T
}

/** Queue any German source strings behind a `Loc` for on-device translation. */
function collectLoc<T>(loc: Loc<T>, overlay: Overlay | null): void {
  const de = loc.de
  if (typeof de === "string") {
    if (de.trim() && !overlay?.[de]) enqueue(de)
  } else if (Array.isArray(de)) {
    for (const s of de) if (typeof s === "string" && s.trim() && !overlay?.[s]) enqueue(s)
  }
}

/**
 * Returns a resolver `t` that picks the current language out of a `Loc` value,
 * consulting the overlay (and falling back to English then German) for
 * languages without an inline translation. For an on-device auto language it
 * also queues any not-yet-translated strings it encounters.
 */
export function useT() {
  const { lang } = useLang()
  const overlay = useContext(OverlayContext)
  const auto = isAutoLang(lang)
  return function t<T>(loc: Loc<T>): T {
    if (auto) collectLoc(loc, overlay)
    return resolveLoc(loc, lang, overlay)
  }
}

/**
 * Returns a resolver `tx` for plain German source strings that are not wrapped
 * in a `Loc` (the topic pages and a few hardcoded UI phrases). It translates
 * via the active language's overlay, falling back to the German source, and
 * queues untranslated strings for the on-device translator.
 */
export function useTx() {
  const { lang } = useLang()
  const overlay = useContext(OverlayContext)
  const auto = isAutoLang(lang)
  return function tx(de: string): string {
    if (lang === "de") return de
    if (auto && de.trim() && !overlay?.[de]) enqueue(de)
    return overlay?.[de] ?? de
  }
}
