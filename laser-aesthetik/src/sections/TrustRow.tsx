import { useId } from "react"
import { HeartHandshake, ShieldCheck, Stethoscope } from "lucide-react"
import { Container } from "@/components/layout/Container"
import { Section, type SectionTone } from "@/components/layout/Section"
import { Reveal } from "@/components/motion/Reveal"
import { useT, type T } from "@/content/ui"

function buildPoints(t: T) {
  return [
    {
      icon: Stethoscope,
      title: t("physicianLed"),
      body: t("physicianLedBody"),
    },
    {
      icon: ShieldCheck,
      title: t("consultBeforeTreatment"),
      body: t("consultBeforeTreatmentBody"),
    },
    {
      icon: HeartHandshake,
      title: t("transparentPricing"),
      body: t("transparentPricingBody"),
    },
  ]
}

export function TrustRow({
  tone = "light",
  overlap = false,
  /**
   * Raise the three points onto one panel that straddles the seam with the
   * band above. Used once, directly under the home hero.
   */
  float = false,
}: { tone?: SectionTone; overlap?: boolean; float?: boolean } = {}) {
  const t = useT()
  const points = buildPoints(t)
  const headingId = useId()

  const heading = (
    <h2 id={headingId} className="sr-only">
      {t("trustGroupTitle")}
    </h2>
  )

  const items = points.map((p, i) => (
    <Reveal key={p.title} delay={i * 0.08} className="flex flex-col items-center gap-4 text-center">
      <span className="flex size-12 items-center justify-center rounded-card bg-brand-50">
        <p.icon className="size-6 text-success" aria-hidden="true" />
      </span>
      <h3 className="font-display text-xl font-extrabold">{p.title}</h3>
      <p className="leading-relaxed text-brand-700">{p.body}</p>
    </Reveal>
  ))

  /*
   * The floating variant is deliberately NOT a `Section`. A Section is a band
   * — a full-width stripe of colour with its own vertical padding — and this
   * is the opposite: a panel with no band behind it, lifted so its top half
   * lands on the hero's wash and its bottom half on the page. Bending Section
   * into it would mean zeroing its padding at every breakpoint and fighting
   * the merge order, for a shape it was never meant to make.
   *
   * `flow-root` is load-bearing. Without it the panel's negative top margin
   * collapses out through this element and moves the whole section up instead
   * of only the panel, and the overlap silently disappears.
   */
  /*
   * The bottom padding carries the same numbers as a sheet's compensating top
   * padding (5/6/7.5rem), because the next band IS a sheet and pulls
   * 2/2.5/3.5rem of it straight back off. Padded like an ordinary band, the
   * panel ends up almost touching the sheet below it.
   */
  if (float) {
    return (
      <section aria-labelledby={headingId} className="relative flow-root pb-20 sm:pb-24 lg:pb-30">
        <Container>
          {/*
           * Pulled far enough to land ON the hero photograph, not just near
           * it. The hero's own bottom padding is 3/4/5rem, so anything under
           * about -24 leaves the panel hovering a few pixels off the image —
           * which reads as a collision rather than a decision.
           */}
          <div className="-mt-24 grid gap-10 rounded-card border border-brand-100 bg-white p-8 shadow-xl sm:-mt-28 sm:grid-cols-3 sm:p-10 lg:-mt-32 lg:p-12">
            {heading}
            {items}
          </div>
        </Container>
      </section>
    )
  }

  return (
    <Section tone={tone} overlap={overlap} aria-labelledby={headingId}>
      <Container className="grid gap-10 sm:grid-cols-3">
        {heading}
        {items}
      </Container>
    </Section>
  )
}
