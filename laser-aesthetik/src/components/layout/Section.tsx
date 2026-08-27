import type { ReactNode } from "react"
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

export function Section({
  id,
  tone = "light",
  className,
  children,
  ...rest
}: {
  id?: string
  tone?: keyof typeof tones
  className?: string
  children: ReactNode
} & React.HTMLAttributes<HTMLElement>) {
  return (
    <section
      id={id}
      className={cn("py-12 sm:py-14 lg:py-16", tones[tone], className)}
      {...rest}
    >
      {tone === "wash" ? (
        <div aria-hidden="true" className="absolute inset-0 -z-10 hero-wash" />
      ) : null}
      {children}
    </section>
  )
}
