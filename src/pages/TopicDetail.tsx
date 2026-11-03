import { Link, useParams } from "react-router-dom"
import type { TopicEntry } from "@/content/types"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useSeo } from "@/lib/useSeo"
import { useTx } from "@/lib/i18n"
import { useUi } from "@/content/ui"
import { TopicSidebar } from "@/components/site/TopicSidebar"
import NotFound from "@/pages/NotFound"

export default function TopicDetail({
  entries,
  sectionLabel,
  basePath,
}: {
  entries: TopicEntry[]
  sectionLabel: string
  basePath: string
}) {
  const { slug } = useParams()
  const tx = useTx()
  const ui = useUi()
  const entry = entries.find((e) => e.slug === slug)
  useSeo({
    title: entry ? tx(entry.title) : undefined,
    description: entry ? tx(entry.excerpt) : undefined,
    keywords: entry ? [`${tx(entry.title)} Magersdorf`, ...(entry.keywords ?? [])] : undefined,
  })
  if (!entry) {
    return <NotFound />
  }
  return (
    <main className="mx-auto max-w-7xl px-6 py-28">
      <div className="lg:grid lg:grid-cols-[15rem_1fr] lg:gap-14">
        <TopicSidebar
          entries={entries}
          basePath={basePath}
          currentSlug={entry.slug}
          sectionLabel={sectionLabel}
        />
        <article>
          <p className="text-sm uppercase tracking-widest text-neutral-500">{tx(sectionLabel)}</p>
          <h1 className="font-display mt-2 text-5xl">{tx(entry.title)}</h1>
          {entry.image && (
            <img
              src={entry.image}
              alt={tx(entry.imageAlt ?? entry.title)}
              className="mt-10 aspect-[2/1] w-full rounded-2xl object-cover shadow-xl"
            />
          )}
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-neutral-700">
            {entry.body.map((p, i) => (
              <p key={i}>{tx(p)}</p>
            ))}
          </div>
          <Link
            to="/#kontakt"
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-12 rounded-full bg-brand text-white hover:bg-brand/90",
            )}
          >
            {ui.topic.book}
          </Link>
        </article>
      </div>
    </main>
  )
}
