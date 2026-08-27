import { useState } from "react"
import { motion } from "motion/react"
import { Container } from "@/components/layout/Container"
import { Section, type SectionTone } from "@/components/layout/Section"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { useT, type T } from "@/content/ui"
import handpiece from "@/assets/praxis/laser-handstueck-arzt.webp"

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

        <div className="lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:items-start lg:gap-16">
          {/*
           * The constant, beside the sequence. The photograph holds still on
           * `position: sticky` while the four steps move past it — no scroll
           * listener, no wheel hijacking, nothing to undo when the section
           * ends. top-28 clears the sticky navbar (z-50, ~4.5rem tall); the
           * max-height keeps the whole frame on screen on short laptops,
           * where an un-clamped 4:5 crop would hang off the bottom and never
           * finish pinning.
           */}
          <div className="hidden lg:sticky lg:top-28 lg:block">
            <figure className="aspect-[4/5] overflow-hidden rounded-card lg:max-h-[calc(100dvh-9rem)]">
              <img
                src={handpiece}
                alt={t("praxisAltDoctorWithHandpiece")}
                width={1200}
                height={800}
                loading="lazy"
                // The source is 3:2 landscape and this frame is 4:5, so cover
                // crops nearly half the width. Centred, that crop lands on the
                // wall to his left and cuts him out of his own photograph;
                // 68% holds both him and the handpiece in frame.
                className="size-full object-cover object-[68%_50%]"
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
                // brand-100 disappears against the tint band; the inactive
                // rail has to stay visible as a track for the lit one to read
                // as progress along it.
                // last:min-h-0 ends the rail on "Nachsorge" instead of letting
                // it run half a screen past the final step and stop in empty
                // space, which reads as a line someone forgot to close.
                className="group flex flex-col gap-3 lg:min-h-[min(34vh,24rem)] lg:justify-center lg:border-l-2 lg:border-brand-200 lg:pl-10 lg:transition-colors lg:duration-500 lg:last:min-h-0 lg:data-[active=true]:border-accent"
              >
                <span className="font-display text-4xl font-extrabold text-accent lg:text-brand-300 lg:transition-colors lg:duration-500 lg:group-data-[active=true]:text-accent">
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
