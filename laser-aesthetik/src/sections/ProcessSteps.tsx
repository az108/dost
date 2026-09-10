import { useState } from "react"
import { motion } from "motion/react"
import { Container } from "@/components/layout/Container"
import { Section, type SectionTone } from "@/components/layout/Section"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { useT, type T } from "@/content/ui"

function buildSteps(t: T) {
  return [
    { title: t("bookAppointment"), body: t("stepBookAppointmentBody") },
    { title: t("initialConsultation"), body: t("initialConsultationBody") },
    { title: t("treatmentStep"), body: t("treatmentStepBody") },
    { title: t("aftercare"), body: t("aftercareBody") },
  ]
}

export function ProcessSteps({
  tone = "tint",
  overlap = false,
}: { tone?: SectionTone; overlap?: boolean } = {}) {
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
    <Section tone={tone} overlap={overlap}>
      <Container className="flex flex-col gap-10">
        <SectionHeader eyebrow={t("processEyebrow")} title={t("processTitle")} accent={t("processAccent")} />

        {/*
         * Numbered because this genuinely is a sequence — you cannot be
         * treated before you are examined — so the numerals carry the
         * active state and the body copy never dims. Text that fades is
         * text someone cannot read; a numeral that changes colour is just
         * a position marker doing its job.
         *
         * The steps used to share this row with a pinned photograph of the
         * doctor at work in his own practice. That photograph went with the
         * separation from Privatpraxis Dr. Dost; slice 2 sources a
         * replacement. Until then the rail is the whole section and runs the
         * full width rather than leaving the old column standing empty —
         * only the body copy keeps a measure, so the lines stay readable at
         * that width.
         */}
        <ol className="grid gap-8 sm:grid-cols-2 lg:block lg:gap-0">
          {steps.map((step, i) => (
            <motion.li
              key={step.title}
              data-active={active === i ? "true" : undefined}
              onViewportEnter={() => setActive(i)}
              // Only the middle tenth of the viewport counts as "here", so
              // exactly one step is current at a time.
              viewport={{ margin: "-45% 0px -45% 0px" }}
              // The height is what paces the scroll — one step arrives per
              // screenful — but capped in rem so a tall monitor spreads the
              // four steps into voids instead of a sequence.
              // brand-100 disappears against the tint band; the inactive
              // rail has to stay visible as a track for the lit one to read
              // as progress along it.
              // last:min-h-0 ends the rail on "Nachsorge" instead of letting
              // it run half a screen past the final step and stop in empty
              // space, which reads as a line someone forgot to close.
              className="group flex flex-col gap-3 lg:min-h-[min(34vh,24rem)] lg:justify-center lg:border-l-2 lg:border-brand-200 lg:pl-10 lg:transition-colors lg:duration-500 lg:last:min-h-0 lg:data-[active=true]:border-action-ink"
            >
              <span className="font-display text-4xl font-extrabold text-action-ink lg:text-brand-300 lg:transition-colors lg:duration-500 lg:group-data-[active=true]:text-action-ink">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-xl font-extrabold">{step.title}</h3>
              <p className="leading-relaxed text-brand-700 lg:max-w-2xl">{step.body}</p>
            </motion.li>
          ))}
        </ol>
      </Container>
    </Section>
  )
}
