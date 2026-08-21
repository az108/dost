import type { ReactNode } from "react"
import { Container } from "@/components/layout/Container"
import { BookingButton } from "@/components/cta/BookingButton"

export function Hero({
  eyebrow,
  lead,
  accent,
  description,
  children,
}: {
  eyebrow: string
  lead: string
  accent: string
  description: string
  children?: ReactNode
}) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-50">
      {/* Decorative gradient wash — a genuine overlay, not layout. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 hero-wash"
      />
      <Container className="flex flex-col gap-8 py-20 sm:py-28 lg:py-32">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
        <h1 className="max-w-4xl text-4xl leading-[1.05] sm:text-6xl lg:text-7xl">
          {lead} <em className="font-display italic text-accent">{accent}</em>
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-brand-700 sm:text-xl">
          {description}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <BookingButton />
          {children}
        </div>
      </Container>
    </section>
  )
}
