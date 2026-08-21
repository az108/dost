import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { FeatureList } from "@/components/content/FeatureList"
import { practice } from "@/content/practice"

export function DoctorIntro() {
  return (
    <Section>
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <img
          src="/arzt-portrait.jpg"
          alt={`Portrait von ${practice.doctor}`}
          width={800}
          height={1000}
          loading="lazy"
          className="aspect-[4/5] w-full rounded-card object-cover"
        />
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
