import { Link } from "react-router-dom"
import type { Treatment } from "@/content/types"
import { formatEuro, packageTiers, PACKAGE_DISCOUNTS } from "@/content/pricing"

function groupBy(treatments: Treatment[]): [string, Treatment[]][] {
  const groups = new Map<string, Treatment[]>()
  for (const t of treatments) {
    if (t.pricing.kind !== "fixed") continue
    const key = t.group ?? "Weitere Behandlungen"
    groups.set(key, [...(groups.get(key) ?? []), t])
  }
  return [...groups.entries()]
}

export function PriceTable({ treatments }: { treatments: Treatment[] }) {
  const groups = groupBy(treatments)

  return (
    <div className="flex flex-col gap-12">
      {groups.map(([group, rows]) => (
        <div key={group} className="flex flex-col gap-4">
          <h3 className="font-display text-2xl font-extrabold text-brand">{group}</h3>

          {/* The table is wider than a phone. It scrolls inside this wrapper
              so the page body never scrolls horizontally. */}
          <div className="overflow-x-auto rounded-card border border-brand-100">
            <table className="w-full min-w-[42rem] border-collapse text-left">
              <caption className="sr-only">Preise für {group}</caption>
              <thead className="bg-brand-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-brand-700">
                    Zone
                  </th>
                  <th scope="col" className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-brand-700">
                    Dauer
                  </th>
                  <th scope="col" className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-brand-700">
                    Einzeln
                  </th>
                  {PACKAGE_DISCOUNTS.map((d) => (
                    <th
                      key={d.sessions}
                      scope="col"
                      className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-brand-700"
                    >
                      {d.sessions}er <span className="text-accent">−{d.discountPct} %</span>
                    </th>
                  ))}
                  <th scope="col" className="px-4 py-3">
                    <span className="sr-only">Details</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((t) => {
                  const tiers = packageTiers(t.pricing)
                  const single = t.pricing.kind === "fixed" ? t.pricing.single : 0
                  return (
                    <tr key={t.slug} className="border-t border-brand-100">
                      <th scope="row" className="px-4 py-4 font-display font-bold text-brand">
                        {t.title}
                      </th>
                      <td className="px-4 py-4 text-sm text-brand-700">
                        {t.durationMin ? `${t.durationMin} Min.` : "—"}
                      </td>
                      <td className="px-4 py-4 font-semibold text-brand-900">
                        {formatEuro(single)}
                      </td>
                      {tiers.map((tier) => (
                        <td key={tier.sessions} className="px-4 py-4 text-brand-800">
                          <span className="font-semibold">
                            {formatEuro(tier.perSession)}
                            <span className="text-xs font-normal text-brand-600">/Sitzung</span>
                          </span>
                          <span className="block text-xs text-brand-600">
                            gesamt {formatEuro(tier.total)}
                          </span>
                        </td>
                      ))}
                      <td className="px-4 py-4">
                        <Link
                          to={`/behandlungen/${t.slug}`}
                          className="font-semibold text-brand hover:underline"
                        >
                          Details
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
