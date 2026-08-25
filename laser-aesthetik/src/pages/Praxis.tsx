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
  useSeo({
    title: "Praxis",
    description:
      "Privatärztliche Praxis in Köning — ärztlich geführte Laser-, Physio- und Ästhetikbehandlungen.",
    canonicalPath: "/praxis",
  })

  return (
    <>
      <Hero
        eyebrow="Die Praxis"
        lead="Medizin mit"
        accent="Zeit für Sie"
        description="Eine privatärztliche Praxis, in der ein Termin ein Termin ist — und kein Fünf-Minuten-Fenster zwischen zwei anderen."
      />

      <Section>
        <Container className="flex max-w-3xl flex-col gap-5">
          <p className="text-lg leading-relaxed text-brand-800">
            Als Privatpraxis planen wir bewusst längere Termine. Das gibt uns Raum für eine
            gründliche Untersuchung und ein Gespräch, in dem auch Ihre Fragen Platz haben.
          </p>
          <p className="text-lg leading-relaxed text-brand-800">
            Unsere drei Bereiche greifen ineinander: Wer wegen chronischer Schmerzen kommt,
            profitiert oft von einer Kombination aus manueller Therapie und Akupunktur. Wer
            eine ästhetische Behandlung wünscht, bekommt zuerst eine ehrliche Einschätzung,
            ob sie medizinisch sinnvoll ist.
          </p>
        </Container>
      </Section>

      <Section tone="tint">
        <Container className="flex flex-col gap-10">
          <SectionHeader
            eyebrow="Einblicke"
            title="Unsere"
            accent="Räume und Technik"
            lead="Die Aufnahmen zeigen Beispielbilder aus vergleichbaren Praxen — sie geben einen Eindruck von Ausstattung und Atmosphäre."
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
