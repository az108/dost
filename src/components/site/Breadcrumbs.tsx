import { Link, useNavigate } from "react-router-dom"
import { useUi } from "@/content/ui"

export interface Crumb {
  label: string
  to?: string
}

/**
 * Small, elegant page nav for the treatment/disease pages: a back button on
 * the left plus a breadcrumb trail. Deliberately compact — replaces the big
 * left-hand list of every treatment.
 */
export function Breadcrumbs({
  crumbs,
  backTo,
}: {
  crumbs: Crumb[]
  /** Where the back button goes; falls back to browser history. */
  backTo?: string
}) {
  const ui = useUi()
  const navigate = useNavigate()

  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
      <button
        type="button"
        onClick={() => (backTo ? navigate(backTo) : navigate(-1))}
        className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3 py-1.5 font-medium text-ink transition-colors hover:border-brand/40 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-1"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {ui.common.back}
      </button>

      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-neutral-500">
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1
          return (
            <span key={i} className="inline-flex items-center gap-1.5">
              {c.to && !last ? (
                <Link to={c.to} className="rounded-sm transition-colors hover:text-brand">
                  {c.label}
                </Link>
              ) : (
                <span className={last ? "font-medium text-ink" : undefined} aria-current={last ? "page" : undefined}>
                  {c.label}
                </span>
              )}
              {!last && <span className="text-neutral-300">/</span>}
            </span>
          )
        })}
      </nav>
    </div>
  )
}
