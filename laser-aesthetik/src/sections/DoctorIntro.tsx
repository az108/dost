import { Container } from "@/components/layout/Container"
import type { FlankSide, FlankTone } from "@/components/layout/Flank"
import { Section, type SectionTone } from "@/components/layout/Section"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { FeatureList } from "@/components/content/FeatureList"
import { practice } from "@/content/practice"
import { useT } from "@/content/ui"
import doctorPortrait from "@/assets/praxis/dr-dost-portrait.webp"

export function DoctorIntro({
  tone = "light",
  overlap = false,
  flank,
  flankTone,
}: {
  tone?: SectionTone
  overlap?: boolean
  flank?: FlankSide
  flankTone?: FlankTone
} = {}) {
  const t = useT()

  return (
    <Section tone={tone} overlap={overlap} flank={flank} flankTone={flankTone}>
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* A real photograph of the doctor in his own practice, so this slot
            can finally name him. The caption sits over the image rather than
            beside it, so the name and the face are never separated. */}
        <figure className="relative aspect-[4/5] w-full overflow-hidden rounded-card">
          <img
            src={doctorPortrait}
            alt={t("doctorAltAtDesk")}
            width={900}
            height={1125}
            loading="lazy"
            className="size-full object-cover"
          />
          {/* Scrim, not decoration: the caption sits on a photograph whose
              lower half is a light desk, so the text needs its own contrast. */}
          <figcaption className="absolute inset-x-0 bottom-0 flex flex-col gap-1 bg-gradient-to-t from-brand-950/90 via-brand-950/70 to-transparent p-6 pt-16">
            <p className="font-display text-2xl font-extrabold text-white">
              {practice.doctor}
            </p>
            <p className="text-sm leading-relaxed text-brand-100">
              {practice.qualifications}
            </p>
          </figcaption>
        </figure>
        <div className="flex flex-col gap-6">
          <SectionHeader
            eyebrow="Ihr Arzt"
            title={practice.doctorLockup.lead}
            accent={practice.doctorLockup.accent}
          />
          <p className="text-lg leading-relaxed text-brand-800">
            Praktischer Arzt mit Zusatzqualifikationen in Notfallmedizin, Naturheilverfahren
            und Akupunktur. Diese Kombination prägt unseren Ansatz: schulmedizinisch fundiert,
            aber offen für Verfahren, die darüber hinausgehen.
          </p>
          <FeatureList
            items={[
              ...practice.qualifications.split(" · "),
              "Alle ästhetischen Eingriffe persönlich durchgeführt",
            ]}
          />
        </div>
      </Container>
    </Section>
  )
}
