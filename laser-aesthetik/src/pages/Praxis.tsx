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

      <Section>
        <Container>
          <div className="flex max-w-3xl flex-col gap-5">
            <p className="text-lg leading-relaxed text-brand-800">{t("praxisIntro1")}</p>
          </div>
        </Container>
      </Section>

      {/*
       * The gallery that used to separate intro and bio is gone (see
       * CREDITS.md — every image in it was a real photograph of the old
       * Kröning practice, and a separate Landshut center cannot show it).
       * Bands are told apart by spacing and content now, not by a tone
       * that used to flip between them.
       */}
      <Approach />
      <Standorte />
      <TrustRow />
      <CtaBanner />
    </>
  )
}
