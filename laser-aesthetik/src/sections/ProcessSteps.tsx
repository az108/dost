import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { Reveal } from "@/components/motion/Reveal"

const steps = [
  {
    title: "Termin buchen",
    body: "Online über Doctolib, in unter einer Minute. Sie wählen Zeitfenster und Behandlung selbst.",
  },
  {
    title: "Erstgespräch",
    body: "Wir bestimmen Ihren Hauttyp, prüfen Kontraindikationen und legen gemeinsam fest, was sinnvoll ist.",
  },
  {
    title: "Behandlung",
    body: "Die eigentliche Sitzung dauert je nach Zone zwischen fünf und sechzig Minuten.",
  },
  {
    title: "Nachsorge",
    body: "Sie erhalten konkrete Pflegehinweise für die Tage danach — und einen Folgetermin, wenn sinnvoll.",
  },
]

export function ProcessSteps() {
  return (
    <Section tone="tint">
      <Container className="flex flex-col gap-10">
        <SectionHeader eyebrow="Ablauf" title="So läuft Ihre" accent="Behandlung ab" />
        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <li className="flex flex-col gap-3">
                <span className="font-display text-4xl font-extrabold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl font-extrabold text-brand">{step.title}</h3>
                <p className="leading-relaxed text-brand-700">{step.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  )
}
