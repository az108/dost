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
      className="group flex h-full flex-col overflow-hidden rounded-card border border-brand-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
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
        {/*
          Three lines, always. Excerpts run from two lines to seven, and the
          longest one used to set the height of every card in its row. min-h
          matters as much as the clamp: in a single column — every phone —
          there is no row to stretch to, so without it short cards collapse and
          the stack still looks ragged. 1.625rem is leading-relaxed at this
          size.
        */}
        <p className="line-clamp-3 min-h-[calc(3*1.625rem)] flex-1 leading-relaxed text-brand-700">
          {treatment.excerpt}
        </p>

        {/*
          Every card gets a price chip, figure or not. An on-request treatment
          used to render no chip and bury the words in the link below, so its
          chip row was empty and the card came out shorter than its neighbours.

          min-h-16 is two chip rows. A duration and a price chip wrap onto two
          lines on a phone while a lone price chip stays on one, which is the
          last thing that made two cards in a stack differ. content-start stops
          flex-wrap from stretching a single row to fill the reserved space.
        */}
        <div className="flex min-h-16 flex-wrap content-start items-start gap-2">
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
          ) : (
            <StatChip>{t("priceOnRequest")}</StatChip>
          )}
        </div>

        <p className="flex items-center gap-2 font-semibold text-brand-ink">
          {t("detailsAndBook")}
          <ArrowRight
            className="size-4 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </p>
      </div>
    </Link>
  )
}
