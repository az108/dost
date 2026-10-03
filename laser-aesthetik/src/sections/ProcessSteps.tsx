import { useState } from "react"
import { motion } from "motion/react"
import { Container } from "@/components/layout/Container"
import { Section, type SectionTone } from "@/components/layout/Section"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { useT, type T } from "@/content/ui"
import ablaufImg from "@/assets/center/ablauf.webp"

function buildSteps(t: T) {
  return [
    { title: t("bookAppointment"), body: t("stepBookAppointmentBody") },
    { title: t("initialConsultation"), body: t("initialConsultationBody") },
    { title: t("treatmentStep"), body: t("treatmentStepBody") },
    { title: t("aftercare"), body: t("aftercareBody") },
  ]
}

export function ProcessSteps({
  tone = "light",
}: { tone?: SectionTone } = {}) {
  const t = useT()
  const steps = buildSteps(t)

  /*
   * Which step the reader is on. Starts at 0 rather than null so the
   * pre-rendered HTML already has one step lit — the observer below cannot
   * run until hydration, and four dim rails is not a state this section
   * should ever be caught in.
   */
  const [active, setActive] = useState(0)

  return (
    <Section tone={tone}>
      <Container className="flex flex-col gap-10">
        <SectionHeader eyebrow={t("processEyebrow")} title={t("processTitle")} accent={t("processAccent")} />

        <div className="lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:items-start lg:gap-16">
          {/*
           * The constant, beside the sequence. The photograph holds still on
           * `position: sticky` while the four steps move past it — no scroll
           * listener, no wheel hijacking, nothing to undo when the section
           * ends. top-28 clears the sticky navbar (z-50, ~4.5rem tall); the
           * max-height keeps the whole frame on screen on short laptops,
           * where an un-clamped 4:5 crop would hang off the bottom and never
           * finish pinning.
           *
           * Slice 1 removed this column — its photograph was the doctor at
           * work in his own practice — and left the `lg:min-h` pacing below
           * standing with nothing to pace against. The replacement is a
           * stock photograph cropped to 4:5 at source, so `cover` has
           * nothing to trim and no object-position fudge is needed.
           */}
          <div className="hidden lg:sticky lg:top-28 lg:block">
            <figure className="aspect-[4/5] overflow-hidden rounded-card lg:max-h-[calc(100dvh-9rem)]">
              <img
                src={ablaufImg}
                alt={t("processImageAlt")}
                width={1100}
                height={1375}
                loading="lazy"
                className="size-full object-cover"
              />
            </figure>
          </div>

          {/*
           * Numbered because this genuinely is a sequence — you cannot be
           * treated before you are examined — so the numerals carry the
           * active state and the body copy never dims. Text that fades is
           * text someone cannot read; a numeral that changes colour is just
           * a position marker doing its job.
           */}
          <ol className="grid gap-8 sm:grid-cols-2 lg:block lg:gap-0">
            {steps.map((step, i) => (
              <motion.li
                key={step.title}
                data-active={active === i ? "true" : undefined}
                onViewportEnter={() => setActive(i)}
                // Only the middle tenth of the viewport counts as "here", so
                // exactly one step is current while the photograph is pinned.
                viewport={{ margin: "-45% 0px -45% 0px" }}
                // The height is what paces the scroll — one step arrives per
                // screenful — but capped in rem so a tall monitor spreads the
                // four steps into voids instead of a sequence.
                // brand-100 barely registers on white; the inactive rail has
                // to stay visible as a track for the lit one to read as
                // progress along it.
                // last:min-h-0 ends the rail on "Nachsorge" instead of letting
                // it run half a screen past the final step and stop in empty
                // space, which reads as a line someone forgot to close.
                className="group flex flex-col gap-3 lg:min-h-[min(34vh,24rem)] lg:justify-center lg:border-l-2 lg:border-brand-200 lg:pl-10 lg:transition-colors lg:duration-500 lg:last:min-h-0 lg:data-[active=true]:border-action-ink"
              >
                <span className="font-display text-4xl font-extrabold text-action-ink lg:text-brand-300 lg:transition-colors lg:duration-500 lg:group-data-[active=true]:text-action-ink">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl font-extrabold">{step.title}</h3>
                <p className="leading-relaxed text-brand-700">{step.body}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  )
}
