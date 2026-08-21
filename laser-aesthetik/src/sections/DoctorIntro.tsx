import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { FeatureList } from "@/components/content/FeatureList"
import { practice } from "@/content/practice"

export function DoctorIntro() {
  return (
    <Section>
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* No portrait of the doctor exists yet. A stock face capitioned with
            a real physician's name would misrepresent them to patients, so
            this slot deliberately claims nothing until a real photograph is
            supplied. See DEPLOY.md's go-live list. */}
        <div className="flex aspect-[4/5] w-full flex-col items-center justify-center gap-6 rounded-card bg-gradient-to-br from-brand via-brand-900 to-brand-950 p-10 text-center">
          <img
            src="/logo.png"
            alt=""
            width={160}
            height={160}
            loading="lazy"
            className="size-40 max-w-full"
          />
          <p className="font-display text-2xl font-extrabold text-white">
            {practice.doctor}
          </p>
          <p className="text-sm leading-relaxed text-brand-200">
            {practice.qualifications}
          </p>
        </div>
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
