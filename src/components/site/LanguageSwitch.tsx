import { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"
import { useLang, LANGS, type Lang } from "@/lib/i18n"
import { cn } from "@/lib/utils"
import { useUi } from "@/content/ui"
import { Flag } from "./Flags"

/** Native name shown next to each flag. */
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

/**
 * Header language picker: a dropdown that shows the active language as flag +
 * name and opens a list of all languages. Uses logical properties (start/end,
 * ps/pe) so it mirrors correctly under right-to-left (Arabic). Closes on
 * outside click, Escape or selection.
 */
export function LanguageSwitch({ className }: { className?: string }) {
  const { lang, setLang } = useLang()
  const ui = useUi()
  const [open, setOpen] = useState(false)
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
        <Flag code={lang} className="h-4 w-6" />
        <span className="hidden sm:inline">{LANG_NAMES[lang]}</span>
        <ChevronDown
          className={cn("size-4 text-neutral-500 transition-transform", open && "rotate-180")}
          aria-hidden="true"
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={ui.nav.langLabel}
          className="absolute end-0 z-50 mt-2 w-52 overflow-hidden rounded-2xl border border-neutral-200 bg-white p-1.5 shadow-xl"
        >
          {LANGS.map((code) => {
            const active = code === lang
            return (
              <li key={code} role="option" aria-selected={active}>
                <button
                  type="button"
                  onClick={() => {
                    setLang(code)
                    setOpen(false)
                  }}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-start text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",
                    active ? "bg-brand-soft font-semibold text-brand" : "text-ink hover:bg-neutral-100",
                  )}
                >
                  <Flag code={code} className="h-4 w-6" />
                  <span className="flex-1">{LANG_NAMES[code]}</span>
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
          })}
        </ul>
      )}
    </div>
  )
}
