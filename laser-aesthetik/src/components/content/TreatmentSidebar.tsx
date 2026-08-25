import { Link } from "react-router-dom"
import type { Locale, PillarInfo, Treatment } from "@/content/types"
import { treatmentsByPillar } from "@/content/treatments"
import { useT } from "@/content/ui"
import { useLocale } from "@/lib/locale"
import { treatmentPath } from "@/lib/routes"

/**
 * Splits a pillar's treatments into named groups (first-appearance order,
 * per the `group` field) plus a trailing bucket of ungrouped treatments.
 * Laser's 19 zones use groups; physio and Ästhetik have none, so they each
 * render as a single ungrouped list — that is correct, not a bug.
 */
function groupTreatments(items: Treatment[]) {
  const named: { name: string; items: Treatment[] }[] = []
  const ungrouped: Treatment[] = []

  for (const treatment of items) {
    if (!treatment.group) {
      ungrouped.push(treatment)
      continue
    }
    const existing = named.find((g) => g.name === treatment.group)
    if (existing) existing.items.push(treatment)
    else named.push({ name: treatment.group, items: [treatment] })
  }

  return { named, ungrouped }
}

function TreatmentList({
  items,
  currentSlug,
  locale,
}: {
  items: Treatment[]
  currentSlug: string
  locale: Locale
}) {
  return (
    <ul className="flex flex-col gap-1">
      {items.map((treatment) => (
        <li key={treatment.slug}>
          {treatment.slug === currentSlug ? (
            <span
              aria-current="page"
              className="block rounded-lg bg-brand-50 px-3 py-2 font-semibold text-brand"
            >
              {treatment.title}
            </span>
          ) : (
            <Link
              to={treatmentPath(treatment.slug, locale)}
              state={{ preserveScroll: true }}
              className="block rounded-lg px-3 py-2 text-brand-700 transition-colors hover:bg-brand-50 hover:text-brand"
            >
              {treatment.title}
            </Link>
          )}
        </li>
      ))}
    </ul>
  )
}

export function TreatmentSidebar({
  pillar,
  currentSlug,
}: {
  pillar: PillarInfo
  currentSlug: string
}) {
  const t = useT()
  const locale = useLocale()
  const { named, ungrouped } = groupTreatments(treatmentsByPillar(pillar.id))

  return (
    <nav
      aria-label={t("otherTreatments")}
      className="lg:sticky lg:top-24 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto"
    >
      <div className="flex flex-col gap-6">
        {named.map((group) => (
          <div key={group.name} className="flex flex-col gap-2">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-600">
              {group.name}
            </p>
            <TreatmentList items={group.items} currentSlug={currentSlug} locale={locale} />
          </div>
        ))}
        {ungrouped.length > 0 ? (
          <TreatmentList items={ungrouped} currentSlug={currentSlug} locale={locale} />
        ) : null}
      </div>
    </nav>
  )
}
