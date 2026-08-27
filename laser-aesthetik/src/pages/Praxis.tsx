import type { Localized } from "@/content/types"
import type { UiKey } from "@/content/ui"
import { useT } from "@/content/ui"
import { useLocale } from "@/lib/locale"
import { pagePath } from "@/lib/routes"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { CtaBanner } from "@/components/cta/CtaBanner"
import { Reveal } from "@/components/motion/Reveal"
import { DoctorIntro } from "@/sections/DoctorIntro"
import { TrustRow } from "@/sections/TrustRow"
import { Hero } from "@/sections/Hero"
import { useSeo } from "@/lib/useSeo"
import laserGeraet from "@/assets/praxis/laser-geraet.webp"
import laserHandstueckArzt from "@/assets/praxis/laser-handstueck-arzt.webp"
import sprechzimmer from "@/assets/praxis/sprechzimmer.webp"
import drDostSchreibtisch from "@/assets/praxis/dr-dost-schreibtisch.webp"

// All real photographs of this practice. laserHandstueckArzt is absent
// because it greets visitors in the hero above; repeating it a screen later
// reads as padding rather than as a second thing worth seeing.
const galleryImages: { src: string; altKey: UiKey }[] = [
  { src: laserGeraet, altKey: "praxisAltLaserDevice" },
  { src: sprechzimmer, altKey: "praxisAltConsultingRoom" },
  { src: drDostSchreibtisch, altKey: "doctorAltAtDesk" },
]

/**
 * Content, not chrome: names a treatment-efficacy-adjacent benefit ("often
 * benefits from a combination of manual therapy and acupuncture"), so it
 * lives here as a Localized value rather than in ui.ts. The English wording
 * is held to the same discipline as pillars.ts/treatments.ts — it hedges at
 * least as much as the German ("oft" / "often"), makes no guaranteed-outcome
 * claim, and does not name any condition the German does not already name.
 */
const pillarSynergyIntro: Localized = {
  de: "Unsere drei Bereiche greifen ineinander: Wer wegen chronischer Schmerzen kommt, profitiert oft von einer Kombination aus manueller Therapie und Akupunktur. Wer eine ästhetische Behandlung wünscht, bekommt zuerst eine ehrliche Einschätzung, ob sie medizinisch sinnvoll ist.",
  en: "Our three areas work together: patients who come to us for chronic pain often benefit from a combination of manual therapy and acupuncture. Patients who want an aesthetic treatment first receive an honest assessment of whether it makes medical sense.",
}

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
        image={laserHandstueckArzt}
        imageAlt={t("praxisAltDoctorWithHandpiece")}
      />

      <Section>
        <Container>
          <div className="flex max-w-3xl flex-col gap-5">
            <p className="text-lg leading-relaxed text-brand-800">{t("praxisIntro1")}</p>
            <p className="text-lg leading-relaxed text-brand-800">{pillarSynergyIntro[locale]}</p>
          </div>
        </Container>
      </Section>

      <Section tone="tint">
        <Container className="flex flex-col gap-10">
          <SectionHeader
            eyebrow={t("insightsEyebrow")}
            title={t("roomsAndTechTitle")}
            accent={t("roomsAndTechAccent")}
            lead={t("galleryLead")}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, i) => (
              <Reveal key={image.src} delay={(i % 3) * 0.06}>
                <img
                  src={image.src}
                  alt={t(image.altKey)}
                  width={1400}
                  height={933}
                  loading="lazy"
                  className="aspect-[3/2] w-full rounded-card object-cover"
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Tones alternate down the page: light intro, tint gallery, light
          bio, tint trust row, then the dark CTA. Two neighbours sharing a
          tone read as one long section with a gap in the middle. */}
      <DoctorIntro tone="light" />
      <TrustRow tone="tint" />
      <CtaBanner />
    </>
  )
}
