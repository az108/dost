import { Link } from "react-router-dom"
import type { TopicEntry } from "@/content/types"
import { cn } from "@/lib/utils"

interface TopicSidebarProps {
  entries: TopicEntry[]
  basePath: string
  currentSlug: string
  sectionLabel: string
}

function NavList({ entries, basePath, currentSlug }: Omit<TopicSidebarProps, "sectionLabel">) {
  return (
    <ul className="space-y-0.5">
      {entries.map((e) => {
        const active = e.slug === currentSlug
        return (
          <li key={e.slug}>
            <Link
              to={`${basePath}/${e.slug}`}
              aria-current={active ? "page" : undefined}
              className={cn(
                "block rounded-lg border-l-2 px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
                active
                  ? "border-brand bg-brand/5 font-semibold text-brand-ink"
                  : "border-transparent text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900",
              )}
            >
              {e.title}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export function TopicSidebar({ entries, basePath, currentSlug, sectionLabel }: TopicSidebarProps) {
  const overviewAnchor = `/#${basePath.replace(/^\//, "")}`
  return (
    <div>
      {/* Mobile: collapsible dropdown above the article */}
      <details className="mb-10 rounded-xl border border-neutral-200 bg-white lg:hidden">
        <summary className="cursor-pointer select-none px-4 py-3 text-sm font-medium text-neutral-700">
          Weitere {sectionLabel}
        </summary>
        <div className="border-t border-neutral-100 p-2">
          <NavList entries={entries} basePath={basePath} currentSlug={currentSlug} />
        </div>
      </details>

      {/* Desktop: sticky vertical selector */}
      <nav
        aria-label={`Weitere ${sectionLabel}`}
        className="sticky top-24 hidden lg:block"
      >
        <Link
          to={overviewAnchor}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400 transition-colors hover:text-brand-ink"
        >
          {sectionLabel}
        </Link>
        <div className="mt-4 max-h-[calc(100vh-9rem)] overflow-y-auto pr-1">
          <NavList entries={entries} basePath={basePath} currentSlug={currentSlug} />
        </div>
      </nav>
    </div>
  )
}
