import type { ReactNode } from "react"
import { Flank, type FlankSide, type FlankTone } from "@/components/layout/Flank"
import { cn } from "@/lib/utils"

const tones = {
  light: "bg-white text-brand-950",
  tint: "bg-brand-50 text-brand-950",
  // brand-ink, not brand-900: the navy read as heavy next to the rest of the
  // palette. brand-ink is the brightest blue that still carries white body
  // copy (4.51:1); the display blue would drop this band's lead to 3.56:1.
  brand: "bg-brand-ink text-white [&_:is(h1,h2,h3,h4)]:text-white",
  // Same treatment the Hero gives its own band, exposed as a tone so a page
  // that builds its opening section by hand (TreatmentDetail, which has to
  // fit breadcrumbs and a spec row in) still lands on the identical wash
  // rather than a flat tint that reads blue next to it.
  wash: "relative isolate overflow-hidden bg-brand-50 text-brand-950",
} as const

export type SectionTone = keyof typeof tones

/*
 * Pulls the band up over the one above it and rounds the top corners, so the
 * page reads as a stack of sheets rather than a column of touching blocks.
 *
 * The margin and the padding are one decision, not two. Both ends of the
 * padding grow by exactly what the margin pulls (2+3=5, 2.5+3.5=6,
 * 3.5+4=7.5rem):
 *
 *   - the TOP, or the pull drops the first line of content onto the rounded
 *     edge;
 *   - the BOTTOM, because the next band is a sheet too and will pull that
 *     same amount straight back off. Pad only the top and each sheet quietly
 *     eats its predecessor's bottom padding — the FAQ ends up with 8px of air
 *     under it before the CTA slides over.
 *
 * The net effect is that content rhythm between two sheets is identical to
 * two ordinary bands. Change one number and you have to change all three.
 *
 * No z-index ladder is needed. These are positioned siblings with equal z, so
 * they already paint in document order — each sheet lands on top of the one
 * before it for free.
 */
const OVERLAP = "sheet relative -mt-8 py-20 sm:-mt-10 sm:py-24 lg:-mt-14 lg:py-30"

export function Section({
  id,
  tone = "light",
  overlap = false,
  flank,
  flankTone,
  className,
  children,
  ...rest
}: {
  id?: string
  tone?: keyof typeof tones
  /** Layer this band over the one above it. Opt-in: default is a flat seam. */
  overlap?: boolean
  /** Anchor a slab of colour to this edge of the viewport, behind the content. */
  flank?: FlankSide
  flankTone?: FlankTone
  className?: string
  children: ReactNode
} & React.HTMLAttributes<HTMLElement>) {
  return (
    <section
      id={id}
      className={cn(
        "py-12 sm:py-14 lg:py-16",
        tones[tone],
        overlap && OVERLAP,
        // `isolate`, and deliberately not `overflow-hidden`. The flank paints
        // at -z-10, which without a stacking context lands behind the
        // section's own background and vanishes. Clipping would fix nothing
        // (the flank is inset well inside its section) and would turn every
        // flanked band into a scroll container, breaking `position: sticky`
        // for the treatment sidebar and the pinned Ablauf photo.
        flank && "relative isolate",
        className,
      )}
      {...rest}
    >
      {tone === "wash" ? (
        <div aria-hidden="true" className="absolute inset-0 -z-10 hero-wash" />
      ) : null}
      {flank ? <Flank side={flank} tone={flankTone} /> : null}
      {children}
    </section>
  )
}
