import { Link } from "react-router-dom"
import type { TopicEntry } from "@/content/types"

const gradients = [
  "from-brand/30 to-brand-green/30",
  "from-brand-green/30 to-brand/20",
  "from-amber-100 to-brand/30",
]

export function TopicCard({
  entry,
  basePath,
  index,
}: {
  entry: TopicEntry
  basePath: string
  index: number
}) {
  return (
    <Link
      to={`${basePath}/${entry.slug}`}
      className="group block h-full overflow-hidden rounded-3xl border border-neutral-200/70 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
    >
      <div className="aspect-[16/10] overflow-hidden">
        {entry.image ? (
          <img
            src={entry.image}
            alt={entry.imageAlt ?? entry.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className={`flex h-full w-full items-end bg-gradient-to-br p-5 ${gradients[index % gradients.length]}`}
          >
            <span className="font-display text-5xl text-neutral-900/20">
              {entry.title.charAt(0)}
            </span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold">{entry.title}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-600">
          {entry.excerpt}
        </p>
        <span className="mt-4 inline-block text-sm font-medium text-amber-700">
          Mehr erfahren →
        </span>
      </div>
    </Link>
  )
}
