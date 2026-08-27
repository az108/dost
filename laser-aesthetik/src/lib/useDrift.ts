import type { RefObject } from "react"
import { useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react"

/**
 * Vertical parallax drift for a decorative element, tied to how far its
 * section has travelled through the viewport.
 *
 * The range always STARTS at 0. That is not cosmetic: every page here is
 * pre-rendered, so the server writes the value at progress 0 into the static
 * HTML and the client has to agree with it on its first render, or React
 * throws the prerendered tree away and rebuilds it — losing exactly what the
 * prerender exists to provide. Starting at 0 means both sides emit
 * `transform: none` whatever the reader's motion preference is, where a range
 * like [-20, 20] would have the server emit -20px and a reduced-motion client
 * emit nothing. Drift is relative, so starting at zero costs nothing visually.
 * useDrift.test.tsx pins both halves of that agreement.
 *
 * Reduced motion collapses the range rather than skipping the hook, for the
 * same reason: the element keeps its shape and its style attribute, it just
 * stops moving.
 */
export function useDrift(
  ref: RefObject<HTMLElement | null>,
  distance: number,
  offset: ["start end", "end start"] | ["start start", "end start"] = ["start end", "end start"],
): MotionValue<number> {
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset })
  return useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : distance])
}
