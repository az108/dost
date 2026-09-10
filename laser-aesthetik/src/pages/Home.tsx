import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { homeFaq, pillars } from "@/content/pillars"
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
import { FaqAccordion } from "@/components/content/FaqAccordion"
import { CtaBanner } from "@/components/cta/CtaBanner"
import { Hero } from "@/sections/Hero"
import { TrustRow } from "@/sections/TrustRow"
import { ProcessSteps } from "@/sections/ProcessSteps"
import { Approach } from "@/sections/Approach"
import { useSeo } from "@/lib/useSeo"
import heroImage from "@/assets/praxis/dr-dost-schreibtisch.webp"

export const POPULAR = ["achseln", "beine-komplett", "bikinizone", "faltenbehandlung", "schmerztherapie", "kryolipolyse"]

export default function Home() {
  const t = useT()
  const locale = useLocale()

  useSeo({
    title: undefined,
    description: t("homeMetaDescription"),
    canonicalPath: homePath(locale),
  })

  const popular = POPULAR.map((slug) => treatmentBySlug(slug, locale)).filter(
    (treatment): treatment is NonNullable<typeof treatment> => Boolean(treatment),
  )

  return (
    <>
      <Hero
        eyebrow="Laser · Physio · Ästhetik"
        lead={t("homeHeroLead")}
        accent={t("homeHeroAccent")}
        description={t("homeHeroDescription")}
        image={heroImage}
        imageAlt={t("doctorAltAtDesk")}
      >
        <Link
          to={pagePath("prices", locale)}
          className="flex items-center gap-2 font-semibold text-brand-ink hover:text-brand-900"
        >
          {t("viewPrices")}
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Hero>

      {/* Straddles the seam under the hero: the first thing below the fold is
          a panel that is visibly in front of the page, not another stripe. */}
      <TrustRow float />

      <Section tone="tint" overlap flank="left" flankTone="blush">
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

      <Section overlap flank="right" flankTone="blue">
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
            className="flex items-center gap-2 self-start font-semibold text-brand-ink hover:text-brand-900"
          >
            {t("viewFullPriceList")}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Container>
      </Section>

      {/* Every band below the hero is a sheet layered over the one before it,
          and the tones still alternate underneath that: white trust panel,
          tint pillars, light popular, tint process, light bio, tint FAQ,
          blue CTA. The overlap adds depth; the tones keep doing the work of
          telling two adjacent bands apart.

          Flanks alternate sides on top of that — left, right, none, left,
          right — and Ablauf is the deliberate gap. It already carries the
          pinned photograph and the rail, and a slab behind those would be
          three devices competing inside one section. */}
      <ProcessSteps tone="tint" overlap />
      <Approach tone="light" overlap flank="left" flankTone="accent" />

      <Section tone="tint" overlap flank="right" flankTone="blue">
        <Container>
          <div className="flex max-w-3xl flex-col gap-8">
            <SectionHeader
              eyebrow={t("faqEyebrow")}
              title={t("goodToKnowTitle")}
              accent={t("goodToKnowAccent")}
            />
            <FaqAccordion items={homeFaq(locale)} />
          </div>
        </Container>
      </Section>

      <CtaBanner overlap />
    </>
  )
}
