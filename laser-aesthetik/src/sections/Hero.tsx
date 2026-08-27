import type { ReactNode } from "react"
import { Container } from "@/components/layout/Container"
import { BookingButton } from "@/components/cta/BookingButton"
import { cn } from "@/lib/utils"

export function Hero({
  eyebrow,
  lead,
  accent,
  description,
  image,
  imageAlt,
  breadcrumbs,
  children,
}: {
  eyebrow: string
  lead: string
  accent: string
  description: string
  /** Rendered above the eyebrow, inside the wash, as on treatment pages. */
  breadcrumbs?: ReactNode
  /** Optional. Without it the hero keeps its original full-width text layout. */
  image?: string
  imageAlt?: string
  children?: ReactNode
}) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-50">
      {/* Decorative gradient wash — a genuine overlay, not layout. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 hero-wash"
      />
      <Container className="py-12 sm:py-16 lg:py-20">
        {/* Full width, above the split: breadcrumbs belong to the page, not
            to the text column beside the image. */}
        {breadcrumbs ? <div className="mb-8">{breadcrumbs}</div> : null}

        <div
          className={cn(
            image
              ? "grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16"
              : "flex flex-col gap-5",
          )}
        >
          <div className="flex flex-col gap-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-ink">
              {eyebrow}
            </p>
            <h1
              className={cn(
                "text-4xl leading-[1.05]",
                // Half the width means the display size has to come down, or
                // the headline breaks into a column of two-word lines.
                image ? "sm:text-5xl lg:text-6xl" : "max-w-4xl sm:text-6xl lg:text-7xl",
              )}
            >
              {lead} <em className="font-display italic text-accent">{accent}</em>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-brand-700 sm:text-xl">
              {description}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <BookingButton />
              {children}
            </div>
          </div>

          {image ? (
            <img
              src={image}
              alt={imageAlt ?? ""}
              width={1400}
              height={933}
              // Above the fold on every page that passes one, so it is the LCP
              // candidate: never lazy, and flagged so the browser fetches it
              // ahead of the rest of the page.
              loading="eager"
              fetchPriority="high"
              className="aspect-[3/2] w-full rounded-card object-cover shadow-lg"
            />
          ) : null}
        </div>
      </Container>
    </section>
  )
}
