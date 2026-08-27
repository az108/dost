import { treatmentsByPillar } from "@/content/treatments"
import { useT } from "@/content/ui"
import { useLocale } from "@/lib/locale"
import { pagePath } from "@/lib/routes"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { PriceTable } from "@/components/content/PriceTable"
import { TreatmentCard } from "@/components/content/TreatmentCard"
import { CtaBanner } from "@/components/cta/CtaBanner"
import { Hero } from "@/sections/Hero"
import { useSeo } from "@/lib/useSeo"

export default function Preise() {
  const t = useT()
  const locale = useLocale()

  useSeo({
    title: t("prices"),
    description: t("pricesMetaDescription"),
    canonicalPath: pagePath("prices", locale),
  })

  const laser = treatmentsByPillar("laser", locale)
  const onRequest = [
    ...treatmentsByPillar("physio", locale),
    ...treatmentsByPillar("aesthetik", locale),
    ...laser.filter((treatment) => treatment.pricing.kind === "onRequest"),
  ]

  return (
    <>
      <Hero
        eyebrow={t("prices")}
        lead={t("pricesHeroLead")}
        accent={t("pricesHeroAccent")}
        description={t("pricesHeroDescription")}
      />

      <Section overlap flank="left" flankTone="blush">
        <Container className="flex flex-col gap-12">
          <SectionHeader
            eyebrow="Laser"
            title={t("allZonesTitle")}
            accent={t("allZonesAccent")}
            lead={t("packagePricesLead")}
          />
          <PriceTable treatments={laser} />
        </Container>
      </Section>

      <Section tone="tint" overlap flank="right" flankTone="blue">
        <Container className="flex flex-col gap-10">
          <SectionHeader
            eyebrow={t("individualEyebrow")}
            title={t("treatmentsOnRequestTitle")}
            accent={t("treatmentsOnRequestAccent")}
            lead={t("onRequestLead")}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {onRequest.map((treatment) => (
              <TreatmentCard key={treatment.slug} treatment={treatment} />
            ))}
          </div>
        </Container>
      </Section>

      <CtaBanner overlap />
    </>
  )
}
