import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import type { PillarInfo } from "@/content/types"
import { useT } from "@/content/ui"

export function PillarCard({ pillar }: { pillar: PillarInfo }) {
  const t = useT()

  return (
    <Link
      to={pillar.path}
      // Depth at rest, not only on hover: a card that is flat until you touch
      // it reads as part of the band behind it, which undoes the layering the
      // page spends its whole scroll building.
      className="group flex h-full flex-col overflow-hidden rounded-card border border-brand-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {pillar.image ? (
        <img
          src={pillar.image}
          alt={pillar.imageAlt ?? ""}
          width={1400}
          height={933}
          loading="lazy"
          className="aspect-[3/2] w-full object-cover"
        />
      ) : (
        <div className="aspect-[3/2] w-full bg-gradient-to-br from-brand-100 via-brand-50 to-white" />
      )}

      <div className="flex flex-1 flex-col gap-4 p-8">
        {/* Two lines reserved: "Physiotherapie & Schmerzmedizin" wraps where
            the other two pillars do not, and that alone left one card taller
            than its neighbours. 2rem is the line height at this size. */}
        <h3 className="min-h-[calc(2*2rem)] font-display text-2xl font-extrabold">
          {pillar.title}
        </h3>
        {/* A fixed text box for the same reason TreatmentCard has one: in a
            single column nothing stretches, so this has to be a set size or
            the cards come out ragged.

            Four lines, the same as a treatment card. Three clipped the last
            line off copy that is genuinely teaser-length: the pillar teasers
            run 106-115 characters and several treatment teasers 94-100, all
            of which overflow three lines somewhere between 320 and 390px. */}
        <p className="line-clamp-4 min-h-[calc(4*1.625rem)] flex-1 leading-relaxed text-brand-700">
          {pillar.excerpt}
        </p>
        <span className="flex items-center gap-2 font-semibold text-brand-700">
          {t("learnMore")}
          <ArrowRight
            className="size-4 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  )
}
