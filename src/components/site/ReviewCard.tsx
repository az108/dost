import { cn } from "@/lib/utils"
import { useT } from "@/lib/i18n"
import { Stars } from "@/components/site/Stars"
import { useUi } from "@/content/ui"
import type { Review } from "@/content/reviews"

// Soft avatar tints from the site palette, picked per author so the grid
// doesn't read as one repeated block.
const TINTS = ["bg-brand-soft text-brand", "bg-mint/20 text-emerald-800", "bg-sky-100 text-info-ink", "bg-amber-100 text-amber-800"]

function tintFor(name: string) {
  let h = 0
  for (const c of name) h = (h * 31 + c.charCodeAt(0)) >>> 0
  return TINTS[h % TINTS.length]
}

/** One patient review: stars, quote, author with avatar initial, source and year. */
export function ReviewCard({ review, short = false, className }: { review: Review; short?: boolean; className?: string }) {
  const t = useT()
  const ui = useUi()
  const author = typeof review.author === "string" ? review.author : t(review.author)
  const quote = t(short && review.excerpt ? review.excerpt : review.quote)
  const label = review.source === "google" ? ui.reviewsPage.google : ui.reviewsPage.jameda

  return (
    <figure
      className={cn(
        "relative flex h-full flex-col overflow-hidden rounded-3xl border border-neutral-100 bg-white p-7 shadow-sm",
        className,
      )}
    >
      <span aria-hidden="true" className="pointer-events-none absolute -top-4 right-5 font-serif text-[7rem] leading-none text-brand/10">
        “
      </span>
      <Stars size={16} />
      <blockquote className="relative mt-4 flex-1 text-lg leading-relaxed text-body">“{quote}”</blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span className={cn("grid size-10 shrink-0 place-items-center rounded-full text-base font-bold", tintFor(author))} aria-hidden="true">
          {author.charAt(0).toUpperCase()}
        </span>
        <span>
          <span className="block font-semibold text-ink">{author}</span>
          <span className="block text-sm text-neutral-500">
            {label} · {review.year}
          </span>
        </span>
      </figcaption>
    </figure>
  )
}
