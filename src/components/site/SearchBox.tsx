import { useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useLang } from "@/lib/i18n"
import { useUi } from "@/content/ui"
import { allDiseases, diseasePath } from "@/content/treatments"
import { cn } from "@/lib/utils"

/**
 * Home search over the disease index. Live-filters as you type and links each
 * result straight to its disease page. This is the primary "Feeling unwell?"
 * entry point on the home page.
 */
export function SearchBox() {
  const { lang } = useLang()
  const ui = useUi()
  const navigate = useNavigate()
  const [q, setQ] = useState("")
  const [open, setOpen] = useState(false)

  const index = useMemo(() => allDiseases(), [])
  const results = useMemo(() => {
    const term = q.trim().toLowerCase()
    if (!term) return []
    return index
      .filter(({ disease }) => {
        const hay = `${disease.title[lang]} ${disease.summary[lang]} ${disease.icd10}`.toLowerCase()
        return hay.includes(term)
      })
      .slice(0, 6)
  }, [q, index, lang])

  const go = (areaSlug: string, diseaseSlug: string) => {
    setOpen(false)
    setQ("")
    navigate(diseasePath(areaSlug, diseaseSlug))
  }

  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <div className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2 shadow-lg shadow-brand/5 focus-within:border-brand/50">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 text-brand">
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
          <path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <input
          type="search"
          value={q}
          onChange={(e) => {
            setQ(e.target.value)
            setOpen(true)
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
          placeholder={ui.search.placeholder}
          aria-label={ui.search.placeholder}
          className="h-11 w-full bg-transparent text-base text-ink placeholder:text-neutral-400 focus:outline-none"
        />
      </div>

      {open && q.trim() && (
        <div className="absolute z-30 mt-2 w-full overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-xl">
          {results.length === 0 ? (
            <p className="px-5 py-4 text-sm text-neutral-500">{ui.search.noResults}</p>
          ) : (
            <ul className="max-h-80 overflow-auto py-1">
              {results.map(({ area, disease }) => (
                <li key={`${area.slug}/${disease.slug}`}>
                  <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => go(area.slug, disease.slug)}
                    className={cn(
                      "flex w-full items-center justify-between gap-3 px-5 py-3 text-left transition-colors hover:bg-brand-soft",
                    )}
                  >
                    <span>
                      <span className="block font-medium text-ink">{disease.title[lang]}</span>
                      <span className="block text-xs text-neutral-500">
                        {ui.search.resultsIn} {area.title[lang]}
                      </span>
                    </span>
                    <span className="shrink-0 rounded-full bg-neutral-100 px-2 py-0.5 text-[11px] font-semibold text-neutral-500">
                      {disease.icd10}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}
