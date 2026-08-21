import type { Pillar } from "@/content/types"
import { pillarById } from "@/content/pillars"
import { treatmentsByPillar } from "@/content/treatments"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { Reveal } from "@/components/motion/Reveal"
import { TreatmentCard } from "@/components/content/TreatmentCard"
import { FaqAccordion } from "@/components/content/FaqAccordion"
import { CtaBanner } from "@/components/cta/CtaBanner"
import { Hero } from "@/sections/Hero"
import { useSeo } from "@/lib/useSeo"

export default function CategoryPage({ pillar }: { pillar: Pillar }) {
  const info = pillarById(pillar)
  const treatments = treatmentsByPillar(pillar)

  useSeo({
    title: info.title,
    description: info.excerpt,
    canonicalPath: info.path,
  })

  return (
    <>
      <Hero
        eyebrow={info.title}
        lead={info.headline.lead}
        accent={info.headline.accent}
        description={info.excerpt}
      />

      <Section>
        <Container className="flex max-w-3xl flex-col gap-5">
          {info.intro.map((p) => (
            <p key={p.slice(0, 40)} className="text-lg leading-relaxed text-brand-800">
              {p}
            </p>
          ))}
        </Container>
      </Section>

      <Section tone="tint">
        <Container className="flex flex-col gap-10">
          <SectionHeader
            eyebrow="Behandlungen"
            title="Alles in diesem"
            accent="Bereich"
            lead={`${treatments.length} Behandlungen — jede mit ärztlicher Beratung vorab.`}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {treatments.map((t, i) => (
              <Reveal key={t.slug} delay={(i % 3) * 0.06}>
                <TreatmentCard treatment={t} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {info.faq?.length ? (
        <Section>
          <Container className="flex max-w-3xl flex-col gap-8">
            <SectionHeader eyebrow="Häufige Fragen" title="Gut zu" accent="wissen" />
            <FaqAccordion items={info.faq} />
          </Container>
        </Section>
      ) : null}

      <CtaBanner />
    </>
  )
}
