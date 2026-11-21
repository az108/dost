import { useEffect, useMemo, useRef, useState, type ReactNode } from "react"
import { ChevronDown, Search } from "lucide-react"
import { useLang, LANGS, isStaticLang, AUTO_LANGS, type Lang } from "@/lib/i18n"
import { cn } from "@/lib/utils"
import { useUi } from "@/content/ui"
import { Flag, CountryFlag } from "./Flags"

/** Native name shown next to each reviewed language's flag. */
const LANG_NAMES: Record<Lang, string> = {
  de: "Deutsch",
  en: "English",
  es: "Español",
  fr: "Français",
  it: "Italiano",
  tr: "Türkçe",
  ru: "Русский",
  ar: "العربية",
}

const REVIEWED = LANGS as readonly Lang[]

/**
 * Header language picker. Shows the active language as flag + name and opens a
 * list with the reviewed languages first, then a searchable list of every other
 * language the browser can translate on the fly. Uses logical properties
 * (start/end, ps/pe) so it mirrors correctly under right-to-left. Closes on
 * outside click, Escape or selection.
 */
export function LanguageSwitch({ className }: { className?: string }) {
  const { lang, setLang } = useLang()
  const ui = useUi()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("mousedown", onDoc)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("mousedown", onDoc)
      document.removeEventListener("keydown", onKey)
    }
  }, [open])

  // Reset the filter whenever the menu closes.
  useEffect(() => {
    if (!open) setQuery("")
  }, [open])

  const q = query.trim().toLowerCase()
  const reviewed = useMemo(
    () => (q ? REVIEWED.filter((c) => LANG_NAMES[c].toLowerCase().includes(q) || c.includes(q)) : REVIEWED),
    [q],
  )
  const more = useMemo(
    () =>
      q
        ? AUTO_LANGS.filter(
            (l) =>
              l.name.toLowerCase().includes(q) ||
              l.english.toLowerCase().includes(q) ||
              l.code.toLowerCase().includes(q),
          )
        : AUTO_LANGS,
    [q],
  )

  // How to render the active language in the trigger button.
  const activeStatic = isStaticLang(lang)
  const activeAuto = AUTO_LANGS.find((l) => l.code === lang)
  const activeName = activeStatic ? LANG_NAMES[lang] : (activeAuto?.name ?? lang)

  const choose = (code: string) => {
    setLang(code)
    setOpen(false)
  }

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={ui.nav.langLabel}
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white py-2 pe-2 ps-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand/40 hover:bg-brand-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-1"
      >
        {activeStatic ? (
          <Flag code={lang} className="h-4 w-6" />
        ) : (
          <CountryFlag country={activeAuto?.country ?? ""} className="w-6" />
        )}
        <span className="hidden sm:inline">{activeName}</span>
        <ChevronDown
          className={cn("size-4 text-neutral-500 transition-transform", open && "rotate-180")}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div className="absolute end-0 z-50 mt-2 w-64 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl">
          {/* Search filter */}
          <div className="border-b border-neutral-100 p-2">
            <div className="flex items-center gap-2 rounded-xl bg-neutral-100 px-3 py-2">
              <Search className="size-4 shrink-0 text-neutral-400" aria-hidden="true" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={ui.nav.langLabel}
                aria-label={ui.nav.langLabel}
                className="w-full bg-transparent text-sm text-ink placeholder:text-neutral-400 focus:outline-none"
              />
            </div>
          </div>

          <ul role="listbox" aria-label={ui.nav.langLabel} className="max-h-[60vh] overflow-auto p-1.5">
            {reviewed.map((code) => (
              <LangRow
                key={code}
                active={code === lang}
                onClick={() => choose(code)}
                flag={<Flag code={code} className="h-4 w-6" />}
                name={LANG_NAMES[code]}
              />
            ))}

            {more.length > 0 && (
              <li
                aria-hidden="true"
                className="px-3 pb-1 pt-3 text-xs font-semibold uppercase tracking-wide text-neutral-400"
              >
                {ui.nav.moreLanguages}
              </li>
            )}
            {more.map((l) => (
              <LangRow
                key={l.code}
                active={l.code === lang}
                onClick={() => choose(l.code)}
                flag={<CountryFlag country={l.country} className="w-6" />}
                name={l.name}
              />
            ))}

            {reviewed.length === 0 && more.length === 0 && (
              <li className="px-3 py-4 text-center text-sm text-neutral-400">—</li>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}

function LangRow({
  active,
  onClick,
  flag,
  name,
}: {
  active: boolean
  onClick: () => void
  flag: ReactNode
  name: string
}) {
  return (
    <li role="option" aria-selected={active}>
      <button
        type="button"
        onClick={onClick}
        className={cn(
          "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-start text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",
          active ? "bg-brand-soft font-semibold text-brand" : "text-ink hover:bg-neutral-100",
        )}
      >
        {flag}
        <span className="flex-1">{name}</span>
        {active && (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M5 12l5 5 9-11"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </li>
  )
}
