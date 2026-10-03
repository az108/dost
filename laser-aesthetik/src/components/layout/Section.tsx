import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

/*
 * Two tones. The page is white, and the one dark band closes it.
 *
 * There used to be five — light, tint, brand, wash — plus a `sheet` overlap
 * that pulled each band over the one above it and a `Flank` that anchored a
 * slab of colour to one edge. The client asked for a white base colour, and
 * all of that was the opposite of one. See slice 2 of the 2026-09-09 spec.
 *
 * Bands are told apart by spacing and by their content now, not by
 * alternating background colours.
 */
/*
 * Exported so Section.test.tsx can assert this map has EXACTLY these two
 * keys. Asserting that `light` and `brand` render their classes is not the
 * same fact: it leaves a third decorative tone free to be added under any
 * other name, which the grep guards — scoped to the literal strings
 * `tone="tint"` and `tone="wash"` — would not see either. That hole was
 * deferred three times before being closed here.
 */
export const tones = {
  light: "bg-white text-brand-950",
  // The one dark surface on the site, for CtaBanner. White body copy on
  // brand-900 is 9.41:1.
  brand: "bg-brand-900 text-white [&_:is(h1,h2,h3,h4)]:text-white",
} as const

export type SectionTone = keyof typeof tones

export function Section({
  id,
  tone = "light",
  className,
  children,
  ...rest
}: {
  id?: string
  tone?: SectionTone
  className?: string
  children: ReactNode
} & React.HTMLAttributes<HTMLElement>) {
  return (
    <section
      id={id}
      className={cn("py-12 sm:py-14 lg:py-16", tones[tone], className)}
      {...rest}
    >
      {children}
    </section>
  )
}
