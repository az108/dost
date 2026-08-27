import { Link } from "react-router-dom"
import type { Treatment } from "@/content/types"
import { formatEuro, packageTiers, PACKAGE_DISCOUNTS } from "@/content/pricing"
import { useT } from "@/content/ui"
import { useLocale } from "@/lib/locale"
import { treatmentPath } from "@/lib/routes"

function groupBy(treatments: Treatment[], otherLabel: string): [string, Treatment[]][] {
  const groups = new Map<string, Treatment[]>()
  for (const treatment of treatments) {
    if (treatment.pricing.kind !== "fixed") continue
    const key = treatment.group ?? otherLabel
    groups.set(key, [...(groups.get(key) ?? []), treatment])
  }
  return [...groups.entries()]
}

export function PriceTable({ treatments }: { treatments: Treatment[] }) {
  const tr = useT()
  const locale = useLocale()
  const groups = groupBy(treatments, tr("otherTreatments"))

  return (
    <div className="flex flex-col gap-12">
      {groups.map(([group, rows]) => (
        <div key={group} className="flex flex-col gap-4">
          <h3 className="font-display text-2xl font-extrabold">{group}</h3>

          {/* The table is wider than a phone. It scrolls inside this wrapper
              so the page body never scrolls horizontally. */}
          <div className="overflow-x-auto rounded-card border border-brand-100">
            <table className="w-full min-w-[42rem] border-collapse text-left">
              <caption className="sr-only">
                {tr("pricesForCaption")} {group}
              </caption>
              <thead className="bg-brand-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-brand-700">
                    {tr("zone")}
                  </th>
                  <th scope="col" className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-brand-700">
                    {tr("duration")}
                  </th>
                  <th scope="col" className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-brand-700">
                    {tr("single")}
                  </th>
                  {PACKAGE_DISCOUNTS.map((d) => (
                    <th
                      key={d.sessions}
                      scope="col"
                      className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-brand-700"
                    >
                      {d.sessions}
                      {tr("packageColumnSuffix")} <span className="text-accent">−{d.discountPct} %</span>
                    </th>
                  ))}
                  <th scope="col" className="px-4 py-3">
                    <span className="sr-only">{tr("detailsLink")}</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((treatment) => {
                  const tiers = packageTiers(treatment.pricing)
                  const single = treatment.pricing.kind === "fixed" ? treatment.pricing.single : 0
                  return (
                    <tr key={treatment.slug} className="border-t border-brand-100">
                      <th scope="row" className="px-4 py-4 font-display font-bold text-brand-ink">
                        {treatment.title}
                      </th>
                      <td className="px-4 py-4 text-sm text-brand-700">
                        {treatment.durationMin ? `${treatment.durationMin} ${tr("minutesSuffix")}` : "—"}
                      </td>
                      <td className="px-4 py-4 font-semibold text-brand-900">
                        {formatEuro(single)}
                      </td>
                      {tiers.map((tier) => (
                        <td key={tier.sessions} className="px-4 py-4 text-brand-800">
                          <span className="font-semibold">
                            {formatEuro(tier.perSession)}
                            <span className="text-xs font-normal text-brand-600">
                              {tr("perSession")}
                            </span>
                          </span>
                          <span className="block text-xs text-brand-600">
                            {tr("totalLabel")} {formatEuro(tier.total)}
                          </span>
                        </td>
                      ))}
                      <td className="px-4 py-4">
                        <Link
                          to={treatmentPath(treatment.slug, locale)}
                          className="font-semibold text-brand-ink hover:underline"
                        >
                          {tr("detailsLink")}
                        </Link>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  )
}
