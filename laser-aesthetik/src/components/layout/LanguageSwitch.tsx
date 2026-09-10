import { Link, useLocation } from "react-router-dom"
import { LOCALES, useLocale } from "@/lib/locale"
import { counterpartPath } from "@/lib/routes"
import { cn } from "@/lib/utils"

const LABEL: Record<"de" | "en", string> = { de: "Deutsch", en: "English" }

/**
 * DE / EN switch that always lands on the counterpart of the current page,
 * never on the target language's home page. Real <Link>s, not buttons — so
 * the URLs are right-clickable, middle-clickable and crawlable.
 */
export function LanguageSwitch({ className }: { className?: string }) {
  const { pathname } = useLocation()
  const locale = useLocale()

  return (
    <nav aria-label="Sprache / Language" className={cn("flex items-center gap-1", className)}>
      {LOCALES.map((loc) => {
        const isActive = loc === locale
        const to = isActive ? pathname : counterpartPath(pathname, loc)
        return (
          <Link
            key={loc}
            to={to}
            hrefLang={loc}
            aria-current={isActive ? "true" : undefined}
            aria-label={LABEL[loc]}
            className={cn(
              "rounded-md px-2 py-1 text-xs font-bold uppercase tracking-wider transition-colors",
              // brand-900 (active) and brand-700 (hover), not brand: the label
              // is 12px, so the pill needs an AA-safe dark teal rather than
              // the display teal.
              isActive ? "bg-brand-900 text-white" : "text-brand-600 hover:text-brand-700",
            )}
          >
            {loc}
          </Link>
        )
      })}
    </nav>
  )
}
