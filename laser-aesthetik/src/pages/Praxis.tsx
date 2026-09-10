import { useT } from "@/content/ui"
import { useLocale } from "@/lib/locale"
import { pagePath } from "@/lib/routes"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { CtaBanner } from "@/components/cta/CtaBanner"
import { Approach } from "@/sections/Approach"
import { Standorte } from "@/sections/Standorte"
import { TrustRow } from "@/sections/TrustRow"
import { Hero } from "@/sections/Hero"
import { useSeo } from "@/lib/useSeo"

export default function Praxis() {
  const t = useT()
  const locale = useLocale()

  useSeo({
    title: t("practice"),
    description: t("praxisMetaDescription"),
    canonicalPath: pagePath("practice", locale),
  })

  return (
    <>
      <Hero
        eyebrow={t("thePracticeEyebrow")}
        lead={t("praxisHeroLead")}
        accent={t("praxisHeroAccent")}
        description={t("praxisHeroDescription")}
      />

      <Section overlap flank="left" flankTone="blush">
        <Container>
          <div className="flex max-w-3xl flex-col gap-5">
            <p className="text-lg leading-relaxed text-brand-800">{t("praxisIntro1")}</p>
          </div>
        </Container>
      </Section>

      {/* Tones alternate down the page where something sits between two
          bands: intro and bio are both light with nothing between them
          (the gallery, which used to separate them, is gone — see
          CREDITS.md, every image in it was a real photograph of the
          Kröning practice, and a separate Landshut center cannot show
          it). Standorte and trust row DO sit back to back, so Standorte
          stays tint and trust row drops to light, keeping those two from
          reading as one long tinted section before the dark CTA closes
          the page. */}
      <Approach tone="light" overlap flank="left" flankTone="accent" />
      <Standorte tone="tint" overlap />
      <TrustRow tone="light" overlap />
      <CtaBanner overlap />
    </>
  )
}
