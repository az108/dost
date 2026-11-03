import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"

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
 * The languages actually offered to visitors (shown in the switcher, accepted
 * from storage). Currently German plus the four fully-translated languages;
 * Turkish, Russian and Arabic are built but held back until their body-content
 * translations are complete.
 */
export const LANGS = ["de", "en", "es", "fr", "it"] as const satisfies readonly Lang[]

/** Languages written right-to-left (drives <html dir>). */
export const RTL_LANGS = new Set<Lang>(["ar"])

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
 * source string to its translation. Produced by `scripts/translate.ts` and
 * served as `public/i18n/<lang>.json`, lazily fetched the first time a visitor
 * switches to that language. German needs no overlay (it is the source), and
 * English keeps its hand-written inline translations, so only the
 * machine-translated languages (and the plain-German topic pages) consult it.
 */
export type Overlay = Record<string, string>

const STORAGE_KEY = "dost-lang"

function isLang(value: string | null): value is Lang {
  return value != null && (LANGS as readonly string[]).includes(value)
}

/** Module-level cache so toggling back to a language never refetches it. */
const overlayCache = new Map<Lang, Overlay>()

async function loadOverlay(lang: Lang, base: string): Promise<Overlay> {
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

interface LangCtx {
  lang: Lang
  setLang: (l: Lang) => void
}

const LanguageContext = createContext<LangCtx | null>(null)
const OverlayContext = createContext<Overlay | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always start at the German default so the server-rendered HTML and the
  // first client render agree (hydration). A returning visitor who chose
  // another language is switched over in the effect just after mount.
  const [lang, setLang] = useState<Lang>("de")
  const [overlay, setOverlay] = useState<Overlay | null>(null)

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (isLang(stored) && stored !== "de") setLang(stored)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = RTL_LANGS.has(lang) ? "rtl" : "ltr"
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* storage unavailable (private mode) — not fatal */
    }
  }, [lang])

  // Load (or clear) the machine-translation overlay for the active language.
  // German is the source language and needs none.
  useEffect(() => {
    if (lang === "de") {
      setOverlay(null)
      return
    }
    const cached = overlayCache.get(lang)
    if (cached) {
      setOverlay(cached)
      return
    }
    let cancelled = false
    const base = import.meta.env.BASE_URL ?? "/"
    void loadOverlay(lang, base).then((o) => {
      if (!cancelled) setOverlay(o)
    })
    return () => {
      cancelled = true
    }
  }, [lang])

  const value = useMemo(() => ({ lang, setLang }), [lang])
  return (
    <LanguageContext.Provider value={value}>
      <OverlayContext.Provider value={overlay}>{children}</OverlayContext.Provider>
    </LanguageContext.Provider>
  )
}

export function useLang(): LangCtx {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLang must be used within a LanguageProvider")
  return ctx
}

/** The active language's machine-translation overlay (null for German). */
export function useOverlay(): Overlay | null {
  return useContext(OverlayContext)
}

/**
 * Resolve a `Loc` for the active language, in order: an inline translation
 * (German and English are always inline; other languages may be), then the
 * machine overlay keyed by the German source, then English, then German. Lists
 * are resolved element by element against the same overlay.
 */
export function resolveLoc<T>(loc: Loc<T>, lang: Lang, overlay: Overlay | null): T {
  const inline = loc[lang]
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

/**
 * Returns a resolver `t` that picks the current language out of a `Loc` value,
 * consulting the machine-translation overlay (and falling back to English then
 * German) for languages without an inline translation.
 * `t({ de: "Hallo", en: "Hello" })` → "Hallo", "Hello", "Hola", …
 */
export function useT() {
  const { lang } = useLang()
  const overlay = useContext(OverlayContext)
  return function t<T>(loc: Loc<T>): T {
    return resolveLoc(loc, lang, overlay)
  }
}

/**
 * Returns a resolver `tx` for plain German source strings that are not wrapped
 * in a `Loc` (the topic pages and a few hardcoded UI phrases). It translates
 * via the active language's overlay, falling back to the German source.
 * `tx("Mehr erfahren")` → "Mehr erfahren", "Learn more", "Más información", …
 */
export function useTx() {
  const { lang } = useLang()
  const overlay = useContext(OverlayContext)
  return function tx(de: string): string {
    if (lang === "de") return de
    return overlay?.[de] ?? de
  }
}
