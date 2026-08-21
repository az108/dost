import { Link } from "react-router-dom"
import { Activity, ArrowRight, Sparkles, Zap } from "lucide-react"
import type { PillarInfo } from "@/content/types"

const icons = { Zap, Activity, Sparkles } as const

export function PillarCard({ pillar }: { pillar: PillarInfo }) {
  const Icon = icons[pillar.icon as keyof typeof icons] ?? Zap

  return (
    <Link
      to={pillar.path}
      className="group flex flex-col gap-4 rounded-card border border-brand-100 bg-white p-8 transition-shadow hover:shadow-lg"
    >
      <span className="flex size-12 items-center justify-center rounded-card bg-brand-50">
        <Icon className="size-6 text-accent" aria-hidden="true" />
      </span>
      <h3 className="font-display text-2xl font-extrabold text-brand">{pillar.title}</h3>
      <p className="flex-1 leading-relaxed text-brand-700">{pillar.excerpt}</p>
      <span className="flex items-center gap-2 font-semibold text-action">
        Mehr erfahren
        <ArrowRight
          className="size-4 transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        />
      </span>
    </Link>
  )
}
