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
import laserKonsole from "@/assets/praxis/laser-konsole.webp"
import laserHandstueck from "@/assets/praxis/laser-handstueck.webp"
import behandlungsgeraet from "@/assets/praxis/behandlungsgeraet.webp"
import behandlungsraum from "@/assets/praxis/behandlungsraum.webp"
import wartebereich from "@/assets/praxis/wartebereich.webp"
import beratungsecke from "@/assets/praxis/beratungsecke.webp"

const galleryImages = [
  { src: laserKonsole, alt: "Bedienfeld eines Lasergeräts mit angeschlossenen Handstücken" },
  { src: laserHandstueck, alt: "Laser-Handstück in der Hand einer Fachkraft" },
  { src: behandlungsgeraet, alt: "Bedienung eines Behandlungsgeräts per Touchscreen, mit Handschuhen" },
  { src: behandlungsraum, alt: "Behandlungsliege in einem hellen Behandlungsraum" },
  { src: wartebereich, alt: "Heller Wartebereich mit Sitzgelegenheiten und Pflanzen" },
  { src: beratungsecke, alt: "Ruhige Sitzecke für Beratungsgespräche" },
]

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

      <Section>
        <Container>
          <div className="flex max-w-3xl flex-col gap-5">
            <p className="text-lg leading-relaxed text-brand-800">{t("praxisIntro1")}</p>
            {/* This paragraph makes a treatment-efficacy-adjacent claim
                ("often benefits from a combination of manual therapy and
                acupuncture"), so it stays out of the UI dictionary and out
                of this step's scope — see the phase report. */}
            <p className="text-lg leading-relaxed text-brand-800">
              Unsere drei Bereiche greifen ineinander: Wer wegen chronischer Schmerzen kommt,
              profitiert oft von einer Kombination aus manueller Therapie und Akupunktur. Wer
              eine ästhetische Behandlung wünscht, bekommt zuerst eine ehrliche Einschätzung,
              ob sie medizinisch sinnvoll ist.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="tint">
        <Container className="flex flex-col gap-10">
          <SectionHeader
            eyebrow={t("insightsEyebrow")}
            title={t("roomsAndTechTitle")}
            accent={t("roomsAndTechAccent")}
            lead={t("galleryDisclaimer")}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, i) => (
              <Reveal key={image.src} delay={(i % 3) * 0.06}>
                <img
                  src={image.src}
                  alt={image.alt}
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

      <DoctorIntro />
      <TrustRow />
      <CtaBanner />
    </>
  )
}
