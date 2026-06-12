import { Link, useParams } from "react-router-dom"
import type { TopicEntry } from "@/content/types"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import NotFound from "@/pages/NotFound"

export default function TopicDetail({
  entries,
  sectionLabel,
}: {
  entries: TopicEntry[]
  sectionLabel: string
}) {
  const { slug } = useParams()
  const entry = entries.find((e) => e.slug === slug)
  if (!entry) {
    return <NotFound />
  }
  return (
    <main className="mx-auto max-w-3xl px-6 py-28">
      <p className="text-sm uppercase tracking-widest text-neutral-500">{sectionLabel}</p>
      <h1 className="font-display mt-2 text-5xl">{entry.title}</h1>
      {entry.image && (
        <img
          src={entry.image}
          alt={entry.imageAlt ?? entry.title}
          className="mt-10 aspect-[16/9] w-full rounded-2xl object-cover shadow-xl"
        />
      )}
      <div className="mt-10 space-y-6 text-lg leading-relaxed text-neutral-700">
        {entry.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <Link
        to="/#kontakt"
        className={cn(
          buttonVariants({ size: "lg" }),
          "mt-12 rounded-full bg-brand text-neutral-900 hover:bg-brand/80",
        )}
      >
        Termin buchen
      </Link>
    </main>
  )
}
