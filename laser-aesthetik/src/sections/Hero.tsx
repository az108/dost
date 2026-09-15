import { useRef, type ReactNode } from "react"
import { motion } from "motion/react"
import { useLocation } from "react-router-dom"
import { Container } from "@/components/layout/Container"
import { BookingButton, bookingButtonHidden } from "@/components/cta/BookingButton"
import { useDrift } from "@/lib/useDrift"
import { useLocale } from "@/lib/locale"
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
  const ref = useRef<HTMLElement>(null)
  // "start start" rather than "start end": the hero is already at the top of
  // the page on arrival, so progress has to be measured from the page's own
  // scroll position, not from the section entering the viewport.
  const y = useDrift(ref, 48, ["start start", "end start"])
  const { pathname } = useLocation()
  const locale = useLocale()
  // On /kontakt and on /termin*, BookingButton renders nothing (see
  // bookingButtonHidden) and no page passes children there either, which
  // left an empty flex row and its gap-4 of dead space below the
  // description. Render the row only when it will hold something.
  //
  // This asks the shared predicate rather than taking a per-page prop. The
  // prop version suppressed the hero button on /termin and left the Navbar's
  // and StickyMobileCta's copies of the same button untouched — a page-level
  // decision made in one component cannot bind the other two.
  const showButton = !bookingButtonHidden(pathname, locale)
  const showButtonRow = children != null || showButton

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-brand-50">
      {/*
        Decorative gradient wash — a genuine overlay, not layout. It drifts
        down as the hero scrolls away, which is the one piece of background
        movement everybody sees. -inset-y-16 gives it room to move without
        exposing a bare edge of brand-50 at the bottom of the band.
      */}
      <motion.div
        aria-hidden="true"
        style={{ y }}
        className="absolute -inset-y-16 inset-x-0 -z-10 hero-wash"
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
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">
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
              {lead} <em className="font-display italic text-action-ink">{accent}</em>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-brand-700 sm:text-xl">
              {description}
            </p>
            {showButtonRow ? (
              <div className="flex flex-wrap items-center gap-4">
                {showButton ? <BookingButton /> : null}
                {children}
              </div>
            ) : null}
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
