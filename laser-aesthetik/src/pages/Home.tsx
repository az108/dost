import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { pillars } from "@/content/pillars"
import { treatmentBySlug } from "@/content/treatments"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { Reveal } from "@/components/motion/Reveal"
import { PillarCard } from "@/components/content/PillarCard"
import { TreatmentCard } from "@/components/content/TreatmentCard"
import { CtaBanner } from "@/components/cta/CtaBanner"
import { Hero } from "@/sections/Hero"
import { TrustRow } from "@/sections/TrustRow"
import { ProcessSteps } from "@/sections/ProcessSteps"
import { DoctorIntro } from "@/sections/DoctorIntro"
import { useSeo } from "@/lib/useSeo"

const POPULAR = ["achseln", "beine-komplett", "bikinizone", "faltenbehandlung", "schmerztherapie", "kryolipolyse"]

export default function Home() {
  useSeo({
    title: undefined,
    description:
      "Privatärztliche Praxis für Laser-Behandlungen, Physiotherapie und ästhetische Medizin in Köning. Ärztlich durchgeführt, mit transparenten Preisen.",
    canonicalPath: "/",
  })

  const popular = POPULAR.map(treatmentBySlug).filter(
    (t): t is NonNullable<typeof t> => Boolean(t),
  )

  return (
    <>
      <Hero
        eyebrow="Laser · Physio · Ästhetik"
        lead="Medizin, die"
        accent="sichtbar wirkt"
        description="Dauerhafte Laser-Haarentfernung, Physiotherapie und ästhetische Medizin — ärztlich durchgeführt, in Köning bei Landshut."
      >
        <Link
          to="/preise"
          className="flex items-center gap-2 font-semibold text-brand hover:text-action"
        >
          Preise ansehen
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Hero>

      <Section tone="tint">
        <Container className="flex flex-col gap-10">
          <SectionHeader
            eyebrow="Drei Bereiche"
            title="Wobei können wir"
            accent="helfen?"
            align="center"
            className="items-center"
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.08}>
                <PillarCard pillar={p} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <TrustRow />

      <Section tone="tint">
        <Container className="flex flex-col gap-10">
          <SectionHeader
            eyebrow="Beliebt"
            title="Häufig gebuchte"
            accent="Behandlungen"
            lead="Ein Auszug. Alle Behandlungen und Preise finden Sie in der vollständigen Preisliste."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {popular.map((t, i) => (
              <Reveal key={t.slug} delay={(i % 3) * 0.06}>
                <TreatmentCard treatment={t} />
              </Reveal>
            ))}
          </div>
          <Link
            to="/preise"
            className="flex items-center gap-2 self-start font-semibold text-action hover:underline"
          >
            Zur vollständigen Preisliste
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Container>
      </Section>

      <ProcessSteps />
      <DoctorIntro />
      <CtaBanner />
    </>
  )
}
