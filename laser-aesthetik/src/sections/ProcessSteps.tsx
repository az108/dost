import { Container } from "@/components/layout/Container"
import { Section, type SectionTone } from "@/components/layout/Section"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { Reveal } from "@/components/motion/Reveal"
import { useT, type T } from "@/content/ui"

function buildSteps(t: T) {
  return [
    { title: t("bookAppointment"), body: t("stepBookAppointmentBody") },
    { title: t("initialConsultation"), body: t("initialConsultationBody") },
    { title: t("treatmentStep"), body: t("treatmentStepBody") },
    { title: t("aftercare"), body: t("aftercareBody") },
  ]
}

export function ProcessSteps({ tone = "tint" }: { tone?: SectionTone } = {}) {
  const t = useT()
  const steps = buildSteps(t)

  return (
    <Section tone={tone}>
      <Container className="flex flex-col gap-10">
        <SectionHeader eyebrow={t("processEyebrow")} title={t("processTitle")} accent={t("processAccent")} />
        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <li className="flex flex-col gap-3">
                <span className="font-display text-4xl font-extrabold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl font-extrabold">{step.title}</h3>
                <p className="leading-relaxed text-brand-700">{step.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  )
}
