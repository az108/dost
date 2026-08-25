import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { pillars } from "@/content/pillars"
import { treatmentBySlug } from "@/content/treatments"
import { useT } from "@/content/ui"
import { useLocale } from "@/lib/locale"
import { homePath, pagePath } from "@/lib/routes"
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

export const POPULAR = ["achseln", "beine-komplett", "bikinizone", "faltenbehandlung", "schmerztherapie", "kryolipolyse"]

export default function Home() {
  const t = useT()
  const locale = useLocale()

  useSeo({
    title: undefined,
    description: t("homeMetaDescription"),
    canonicalPath: homePath(locale),
  })

  const popular = POPULAR.map(treatmentBySlug).filter(
    (treatment): treatment is NonNullable<typeof treatment> => Boolean(treatment),
  )

  return (
    <>
      <Hero
        eyebrow="Laser · Physio · Ästhetik"
        lead={t("homeHeroLead")}
        accent={t("homeHeroAccent")}
        description={t("homeHeroDescription")}
      >
        <Link
          to={pagePath("prices", locale)}
          className="flex items-center gap-2 font-semibold text-brand hover:text-action-ink"
        >
          {t("viewPrices")}
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Hero>

      <Section tone="tint">
        <Container className="flex flex-col gap-10">
          <SectionHeader
            eyebrow={t("threeAreas")}
            title={t("homePillarsTitle")}
            accent={t("homePillarsAccent")}
            align="center"
            className="items-center"
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {pillars(locale).map((p, i) => (
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
            eyebrow={t("popularEyebrow")}
            title={t("popularTreatmentsTitle")}
            accent={t("popularTreatmentsAccent")}
            lead={t("popularTreatmentsLead")}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {popular.map((treatment, i) => (
              <Reveal key={treatment.slug} delay={(i % 3) * 0.06}>
                <TreatmentCard treatment={treatment} />
              </Reveal>
            ))}
          </div>
          <Link
            to={pagePath("prices", locale)}
            className="flex items-center gap-2 self-start font-semibold text-brand hover:text-action-ink"
          >
            {t("viewFullPriceList")}
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
