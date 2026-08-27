import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import type { PillarInfo } from "@/content/types"
import { useT } from "@/content/ui"

export function PillarCard({ pillar }: { pillar: PillarInfo }) {
  const t = useT()

  return (
    <Link
      to={pillar.path}
      className="group flex h-full flex-col overflow-hidden rounded-card border border-brand-100 bg-white transition-shadow hover:shadow-lg"
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
        <h3 className="font-display text-2xl font-extrabold">{pillar.title}</h3>
        <p className="flex-1 leading-relaxed text-brand-700">{pillar.excerpt}</p>
        <span className="flex items-center gap-2 font-semibold text-brand-ink">
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
