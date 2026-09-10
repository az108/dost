import { Link } from "react-router-dom"
import { ChevronRight } from "lucide-react"

export function Breadcrumbs({ trail }: { trail: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Brotkrumennavigation">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-brand-600">
        {trail.map((crumb, i) => (
          <li key={crumb.label} className="flex items-center gap-1">
            {crumb.to ? (
              <Link to={crumb.to} className="hover:text-brand-700">
                {crumb.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-brand-800">{crumb.label}</span>
            )}
            {i < trail.length - 1 ? (
              <ChevronRight className="size-4 shrink-0" aria-hidden="true" />
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  )
}
