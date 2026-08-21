import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { CtaBanner } from "@/components/cta/CtaBanner"
import { DoctorIntro } from "@/sections/DoctorIntro"
import { TrustRow } from "@/sections/TrustRow"
import { Hero } from "@/sections/Hero"
import { useSeo } from "@/lib/useSeo"

export default function Praxis() {
  useSeo({
    title: "Praxis",
    description:
      "Privatärztliche Praxis in Köning — ärztlich geführte Laser-, Physio- und Ästhetikbehandlungen.",
    canonicalPath: "/praxis",
  })

  return (
    <>
      <Hero
        eyebrow="Die Praxis"
        lead="Medizin mit"
        accent="Zeit für Sie"
        description="Eine privatärztliche Praxis, in der ein Termin ein Termin ist — und kein Fünf-Minuten-Fenster zwischen zwei anderen."
      />

      <Section>
        <Container className="flex max-w-3xl flex-col gap-5">
          <p className="text-lg leading-relaxed text-brand-800">
            Als Privatpraxis planen wir bewusst längere Termine. Das gibt uns Raum für eine
            gründliche Untersuchung und ein Gespräch, in dem auch Ihre Fragen Platz haben.
          </p>
          <p className="text-lg leading-relaxed text-brand-800">
            Unsere drei Bereiche greifen ineinander: Wer wegen chronischer Schmerzen kommt,
            profitiert oft von einer Kombination aus manueller Therapie und Akupunktur. Wer
            eine ästhetische Behandlung wünscht, bekommt zuerst eine ehrliche Einschätzung,
            ob sie medizinisch sinnvoll ist.
          </p>
        </Container>
      </Section>

      <DoctorIntro />
      <TrustRow />
      <CtaBanner />
    </>
  )
}
