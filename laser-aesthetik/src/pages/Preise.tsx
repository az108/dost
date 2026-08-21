import { treatmentsByPillar } from "@/content/treatments"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { PriceTable } from "@/components/content/PriceTable"
import { TreatmentCard } from "@/components/content/TreatmentCard"
import { CtaBanner } from "@/components/cta/CtaBanner"
import { Hero } from "@/sections/Hero"
import { useSeo } from "@/lib/useSeo"

export default function Preise() {
  useSeo({
    title: "Preise",
    description:
      "Alle Laser-Behandlungszonen mit festen Preisen und Paketrabatten von bis zu 45 %.",
    canonicalPath: "/preise",
  })

  const laser = treatmentsByPillar("laser")
  const onRequest = [
    ...treatmentsByPillar("physio"),
    ...treatmentsByPillar("aesthetik"),
    ...laser.filter((t) => t.pricing.kind === "onRequest"),
  ]

  return (
    <>
      <Hero
        eyebrow="Preise"
        lead="Preise, die"
        accent="niemanden überraschen"
        description="Alle Laser-Zonen mit festen Preisen. Paketrabatte: 20 % im 3er, 40 % im 5er, 45 % im 10er."
      />

      <Section>
        <Container className="flex flex-col gap-12">
          <PriceTable treatments={laser} />
        </Container>
      </Section>

      <Section tone="tint">
        <Container className="flex flex-col gap-10">
          <SectionHeader
            eyebrow="Individuell"
            title="Behandlungen auf"
            accent="Anfrage"
            lead="Bei diesen Behandlungen hängt der Preis vom Befund ab. Wir nennen ihn verbindlich im Erstgespräch, bevor eine Behandlung beginnt."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {onRequest.map((t) => (
              <TreatmentCard key={t.slug} treatment={t} />
            ))}
          </div>
        </Container>
      </Section>

      <CtaBanner />
    </>
  )
}
