import { Link } from "react-router-dom"
import { ArrowRight, Clock } from "lucide-react"
import type { Treatment } from "@/content/types"
import { formatEuro, priceFrom } from "@/content/pricing"
import { useT } from "@/content/ui"
import { useLocale } from "@/lib/locale"
import { treatmentPath } from "@/lib/routes"
import { StatChip } from "./StatChip"

export function TreatmentCard({ treatment }: { treatment: Treatment }) {
  const t = useT()
  const locale = useLocale()
  const from = priceFrom(treatment.pricing)

  return (
    <Link
      to={treatmentPath(treatment.slug, locale)}
      className="group flex flex-col overflow-hidden rounded-card border border-brand-100 bg-white transition-shadow hover:shadow-lg"
    >
      {treatment.image ? (
        <img
          src={treatment.image}
          alt={treatment.imageAlt ?? ""}
          width={1400}
          height={933}
          loading="lazy"
          className="aspect-[3/2] w-full object-cover"
        />
      ) : (
        <div className="aspect-[3/2] w-full bg-gradient-to-br from-brand-100 via-brand-50 to-white" />
      )}

      <div className="flex flex-1 flex-col gap-4 p-6">
        <h3 className="font-display text-xl font-extrabold">{treatment.title}</h3>
        <p className="flex-1 leading-relaxed text-brand-700">{treatment.excerpt}</p>

        <div className="flex flex-wrap gap-2">
          {treatment.durationMin ? (
            <StatChip icon={<Clock className="size-4 text-accent" aria-hidden="true" />}>
              {treatment.durationMin} {t("minutesSuffix")}
            </StatChip>
          ) : null}
          {from !== null ? (
            <StatChip>
              {t("fromPricePrefix")} {formatEuro(from)}
              <span className="text-xs font-normal text-brand-600">{t("perSessionInTenPack")}</span>
            </StatChip>
          ) : null}
        </div>

        <p className="flex items-center gap-2 font-semibold text-brand-ink">
          {from === null ? t("priceOnRequest") : t("detailsAndBook")}
          <ArrowRight
            className="size-4 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </p>
      </div>
    </Link>
  )
}
