import type { TopicEntry } from "@/content/types"
import { TopicCard } from "@/components/site/TopicCard"
import { Reveal } from "@/components/site/Reveal"

export function TopicGrid({
  id,
  title,
  intro,
  entries,
  basePath,
  tinted = false,
}: {
  id: string
  title: string
  intro: string
  entries: TopicEntry[]
  basePath: string
  tinted?: boolean
}) {
  return (
    <section id={id} className={`scroll-mt-20 py-24 ${tinted ? "bg-orange-50/40" : ""}`}>
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="font-display text-4xl font-semibold md:text-5xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-lg text-neutral-600">{intro}</p>
        </Reveal>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {entries.map((e, i) => (
            <Reveal key={e.slug} delay={i * 0.08} className="h-full">
              <TopicCard entry={e} basePath={basePath} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
