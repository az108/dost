import { HeartHandshake, ShieldCheck, Stethoscope } from "lucide-react"
import { Container } from "@/components/layout/Container"
import { Section, type SectionTone } from "@/components/layout/Section"
import { Reveal } from "@/components/motion/Reveal"
import { practice } from "@/content/practice"
import { useT, type T } from "@/content/ui"

function buildPoints(t: T) {
  return [
    {
      icon: Stethoscope,
      title: t("physicianLed"),
      body: `${t("trustDoctorPrefix")} ${practice.doctor} ${t("trustDoctorSuffix")}`,
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

export function TrustRow({ tone = "light" }: { tone?: SectionTone } = {}) {
  const t = useT()
  const points = buildPoints(t)

  return (
    <Section tone={tone}>
      <Container className="grid gap-10 sm:grid-cols-3">
        {points.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08} className="flex flex-col items-center gap-4 text-center">
            <span className="flex size-12 items-center justify-center rounded-card bg-brand-50">
              <p.icon className="size-6 text-success" aria-hidden="true" />
            </span>
            <h3 className="font-display text-xl font-extrabold">{p.title}</h3>
            <p className="leading-relaxed text-brand-700">{p.body}</p>
          </Reveal>
        ))}
      </Container>
    </Section>
  )
}
