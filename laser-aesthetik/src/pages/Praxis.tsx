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
        eyebrow={t("aboutUsEyebrow")}
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

      {/*
       * Tones alternate down the page: light intro, tint bio, light
       * Standorte, tint trust row, then the dark CTA. The gallery that
       * used to separate intro and bio is gone (see CREDITS.md — every
       * image in it was a real photograph of the old Kröning practice, and
       * a separate Landshut center cannot show it), so bio and Standorte
       * each flip a tone to keep every neighbour distinct without it.
       */}
      <Approach tone="tint" overlap flank="left" flankTone="accent" />
      <Standorte tone="light" overlap />
      <TrustRow tone="tint" overlap />
      <CtaBanner overlap />
    </>
  )
}
