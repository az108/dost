import { Link } from "react-router-dom"
import { ChevronRight } from "lucide-react"

/*
 * Links hover to brand-900, not brand-700. The <ol> already sets brand-700,
 * so hovering to that same value was no change at all — and these links
 * carry no underline, which left the cursor as the only affordance that
 * they are clickable. Darkening rather than lightening keeps it AA (9.41:1);
 * the display teal would have dropped it to 3.95:1.
 */
export function Breadcrumbs({ trail }: { trail: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Brotkrumennavigation">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-brand-700">
        {trail.map((crumb, i) => (
          <li key={crumb.label} className="flex items-center gap-1">
            {crumb.to ? (
              <Link to={crumb.to} className="hover:text-brand-900">
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
