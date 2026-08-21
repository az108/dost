import { HeartHandshake, ShieldCheck, Stethoscope } from "lucide-react"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { Reveal } from "@/components/motion/Reveal"

const points = [
  {
    icon: Stethoscope,
    title: "Ärztlich durchgeführt",
    body: "Jede Behandlung führt Dr. med. univ. Dost Mohammad persönlich durch — keine kosmetische Anwendung ohne ärztliche Aufsicht.",
  },
  {
    icon: ShieldCheck,
    title: "Beratung vor Behandlung",
    body: "Vor jedem Eingriff klären wir Hauttyp, Kontraindikationen und realistische Erwartungen. Auch wenn das heißt, von einer Behandlung abzuraten.",
  },
  {
    icon: HeartHandshake,
    title: "Transparente Preise",
    body: "Alle Laser-Zonen mit festen Preisen und Paketrabatten. Keine versteckten Kosten, keine Überraschung am Empfang.",
  },
]

export function TrustRow() {
  return (
    <Section>
      <Container className="grid gap-10 sm:grid-cols-3">
        {points.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08} className="flex flex-col gap-4">
            <span className="flex size-12 items-center justify-center rounded-card bg-brand-50">
              <p.icon className="size-6 text-success" aria-hidden="true" />
            </span>
            <h3 className="font-display text-xl font-extrabold text-brand">{p.title}</h3>
            <p className="leading-relaxed text-brand-700">{p.body}</p>
          </Reveal>
        ))}
      </Container>
    </Section>
  )
}
