import type { Pillar, PillarInfo } from "./types"

export const pillars: PillarInfo[] = [
  {
    id: "laser",
    path: "/laser",
    label: "Laser",
    title: "Laser-Behandlungen",
    headline: { lead: "Laser, der", accent: "wirklich wirkt" },
    excerpt:
      "Dauerhafte Haarreduktion, Gefäße, Pigmentflecken und Aknenarben — medizinisch geführt, mit transparenten Preisen.",
    intro: [
      "Moderne Lasertechnologie arbeitet gezielt: Das Licht wird nur dort aufgenommen, wo es wirken soll — im Haarfollikel, im erweiterten Gefäß oder im Pigment. Das umliegende Gewebe bleibt geschont.",
      "Jede Behandlung beginnt bei uns mit einem ärztlichen Gespräch. Wir bestimmen Ihren Hauttyp, prüfen Kontraindikationen und legen gemeinsam fest, wie viele Sitzungen realistisch nötig sind.",
      "Fachlich korrekt spricht man von dauerhafter Haarreduktion: Bei den meisten Patientinnen und Patienten bleibt ein kleiner Teil der Haare erhalten. Wie viele Sitzungen nötig sind und wie vollständig das Ergebnis ausfällt, hängt von Haut- und Haartyp ab.",
    ],
    icon: "Zap",
  },
  {
    id: "physio",
    path: "/physio",
    label: "Physio",
    title: "Physiotherapie & Schmerzmedizin",
    headline: { lead: "Beweglich", accent: "ohne Schmerz" },
    excerpt:
      "Schmerztherapie, manuelle Therapie, Sportmedizin und Akupunktur — ärztlich begleitet, individuell geplant.",
    intro: [
      "Schmerz ist ein Signal, kein Schicksal. Wir suchen die Ursache, statt nur das Symptom zu dämpfen — und kombinieren dafür schulmedizinische und naturheilkundliche Verfahren.",
      "Ob nach einer Sportverletzung, bei chronischen Rückenbeschwerden oder Problemen mit dem Bewegungsapparat: Ihr Behandlungsplan entsteht nach einer gründlichen Untersuchung, nicht nach Schema F.",
    ],
    icon: "Activity",
  },
  {
    id: "aesthetik",
    path: "/aesthetik",
    label: "Ästhetik",
    title: "Ästhetische Medizin",
    headline: { lead: "Natürlich", accent: "Sie selbst" },
    excerpt:
      "Faltenbehandlung, Hyaluron, Kryolipolyse und Skinbooster — zurückhaltend dosiert, ärztlich durchgeführt.",
    intro: [
      "Ästhetische Medizin soll nicht auffallen. Unser Anspruch ist ein Ergebnis, das ausgeruht wirkt und Ihre Mimik erhält — nicht ein Gesicht, das behandelt aussieht.",
      "Alle Eingriffe führt Dr. med. univ. Dost Mohammad persönlich durch. Vor jeder Behandlung besprechen wir offen, was medizinisch sinnvoll ist und wovon wir abraten.",
    ],
    icon: "Sparkles",
  },
]

export function pillarById(id: Pillar): PillarInfo {
  const found = pillars.find((p) => p.id === id)
  if (!found) throw new Error(`Unbekannte Kategorie: ${id}`)
  return found
}
