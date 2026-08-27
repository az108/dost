import { useRef } from "react"
import { motion } from "motion/react"
import { useDrift } from "@/lib/useDrift"
import { cn } from "@/lib/utils"

/*
 * The soft tones. Their inner edge FADES rather than stopping, and that is not
 * a stylistic preference — it is what makes the device safe to use at all.
 *
 * A hard-edged slab is fine behind a card grid, where the edge lands between
 * cards that carry their own background. Behind running prose it draws a
 * vertical line down the middle of a paragraph, so every sentence changes
 * colour halfway through and the page looks broken. Inner pages are mostly
 * prose, so the shape that survives everywhere is the one that wins.
 *
 * from-60% holds the colour at full strength for most of the slab's width
 * before releasing it, so it still reads as a band pushed in from the edge
 * rather than a vague smudge. Same logic as .hero-wash, which has always sat
 * under the h1 without trouble.
 */
const soft = {
  /** Warm counterweight to the blue ramp. The default. */
  blush: "from-blush",
  /** The blue ramp's lightest usable step above the `tint` band itself. */
  blue: "from-brand-100",
} as const

export type FlankTone = keyof typeof soft | "accent"
export type FlankSide = "left" | "right"

/**
 * A field of colour anchored to one edge of the viewport, bleeding off it,
 * rounded only on the inner edge so it reads as a slab pushed in from the side
 * rather than another full-width stripe. Sections alternate which side it is
 * on, which is what stops a long page from feeling like a single column of
 * bands.
 *
 * lg and up only. Every two-column layout on this site collapses below lg, so
 * a narrower screen puts body copy exactly where the flank is — harmless under
 * blush, but unreadable under `accent`. One breakpoint for all three tones is
 * simpler than a per-tone rule, and phones already get the sheets and the
 * tinted bands.
 */
export function Flank({ side, tone = "blush" }: { side: FlankSide; tone?: FlankTone }) {
  // The measured box and the moving box are deliberately different elements.
  // useScroll reads the target's position, and a transform feeds straight back
  // into that measurement — pointing it at the element it drives makes the
  // drift chase its own tail.
  const ref = useRef<HTMLDivElement>(null)
  const y = useDrift(ref, 36)

  return (
    <div
      ref={ref}
      data-flank={side}
      aria-hidden="true"
      className={cn(
        // inset-y-12 against a 36px drift keeps the slab inside its section at
        // every scroll position, which is what lets the section skip
        // overflow-hidden and stay usable as a sticky container.
        "pointer-events-none absolute inset-y-12 -z-10 hidden w-[38%] lg:block",
        side === "left" ? "left-0" : "right-0",
      )}
    >
      <motion.div
        style={{ y }}
        className={cn(
          "size-full",
          tone === "accent"
            ? // The one hard-edged slab on the site. It keeps its edge because
              // it sits behind a photograph, which overhangs it — the edge
              // lands on the portrait, never on a line of text.
              cn("bg-accent", side === "left" ? "rounded-r-[3rem]" : "rounded-l-[3rem]")
            : cn(
                side === "left" ? "bg-gradient-to-r" : "bg-gradient-to-l",
                "from-60% to-transparent",
                soft[tone],
              ),
        )}
      />
    </div>
  )
}
