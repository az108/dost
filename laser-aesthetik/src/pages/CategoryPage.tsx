import type { Pillar } from "@/content/types"
import { pillarById } from "@/content/pillars"
import { treatmentsByPillar } from "@/content/treatments"
import { useT } from "@/content/ui"
import { useLocale } from "@/lib/locale"
import { homePath, pillarPath } from "@/lib/routes"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"
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
  const locale = useLocale()
  const info = pillarById(pillar, locale)
  const treatments = treatmentsByPillar(pillar, locale)
  const tr = useT()

  useSeo({
    title: info.title,
    description: info.excerpt,
    canonicalPath: pillarPath(pillar, locale),
  })

  return (
    <>
      <Hero
        eyebrow={info.title}
        lead={info.headline.lead}
        accent={info.headline.accent}
        description={info.excerpt}
        image={info.image}
        imageAlt={info.imageAlt}
        breadcrumbs={
          // Matches the trail on treatment pages minus its last crumb, so
          // Start › Physio › Schmerztherapie stays consistent one level up.
          <Breadcrumbs
            trail={[
              { label: tr("breadcrumbHome"), to: homePath(locale) },
              { label: info.label },
            ]}
          />
        }
      />

      <Section>
        <Container>
          <div className="flex max-w-3xl flex-col gap-5">
            {info.intro.map((p) => (
              <p key={p.slice(0, 40)} className="text-lg leading-relaxed text-brand-800">
                {p}
              </p>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="flex flex-col gap-10">
          <SectionHeader
            eyebrow={tr("treatmentsLabel")}
            title={tr("allInThisTitle")}
            accent={tr("allInThisAccent")}
            lead={`${treatments.length} ${tr("categoryTreatmentsCountSuffix")}`}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {treatments.map((treatment, i) => (
              <Reveal key={treatment.slug} delay={(i % 3) * 0.06}>
                <TreatmentCard treatment={treatment} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {info.faq?.length ? (
        <Section>
          <Container>
            <div className="flex max-w-3xl flex-col gap-8">
              <SectionHeader eyebrow={tr("faqEyebrow")} title={tr("goodToKnowTitle")} accent={tr("goodToKnowAccent")} />
              <FaqAccordion items={info.faq} />
            </div>
          </Container>
        </Section>
      ) : null}

      <CtaBanner />
    </>
  )
}
