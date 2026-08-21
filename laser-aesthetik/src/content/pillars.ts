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
    faq: [
      {
        question: "Tut die Behandlung weh?",
        answer:
          "Die meisten Patientinnen und Patienten beschreiben die Behandlung als kurzes, warmes Prickeln. Das Handstück kühlt die Haut währenddessen. Eine Betäubung ist in der Regel nicht nötig.",
      },
      {
        question: "Wie viele Sitzungen brauche ich?",
        answer:
          "Das hängt von Haar- und Hauttyp, von der Hormonlage und von der behandelten Zone ab. Üblich sind sechs bis zwölf Sitzungen im Abstand von mehreren Wochen. Im Erstgespräch schätzen wir das für Sie ein.",
      },
      {
        question: "Was muss ich rund um die Behandlung beachten?",
        answer:
          "Rasieren Sie die Zone am Vortag. Verzichten Sie in den zwei Wochen davor und danach auf direkte Sonne und auf Solarium. Konkrete Pflegehinweise erhalten Sie nach jeder Sitzung.",
      },
      {
        question: "Bleibt das Ergebnis dauerhaft?",
        answer:
          "Fachlich spricht man von dauerhafter Haarreduktion. Bei den meisten Patientinnen und Patienten bleibt ein kleiner Teil der Haare erhalten, sodass gelegentliche Auffrischungen sinnvoll sein können.",
      },
    ],
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
    faq: [
      {
        question: "Brauche ich eine Überweisung?",
        answer:
          "Nein. Als Privatpraxis behandeln wir Sie ohne Überweisung. Vorhandene Befunde oder Bildgebung bringen Sie gerne mit.",
      },
      {
        question: "Wie läuft der erste Termin ab?",
        answer:
          "Zuerst untersuchen wir gründlich und sprechen über Vorgeschichte und Beschwerden. Erst danach legen wir gemeinsam fest, welche Verfahren sinnvoll sind.",
      },
      {
        question: "Übernimmt meine Versicherung die Kosten?",
        answer:
          "Wir rechnen privatärztlich ab. Ob und in welchem Umfang Ihre Versicherung erstattet, klären Sie bitte vorab direkt mit ihr.",
      },
    ],
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
    faq: [
      {
        question: "Sieht man mir die Behandlung an?",
        answer:
          "Unser Anspruch ist ein Gesicht, das ausgeruht wirkt und seine Mimik behält. Wir dosieren bewusst zurückhaltend.",
      },
      {
        question: "Wer führt die Behandlung durch?",
        answer:
          "Alle ästhetischen Eingriffe führt Dr. med. univ. Dost Mohammad persönlich durch.",
      },
      {
        question: "Was passiert im Erstgespräch?",
        answer:
          "Wir besprechen Ihren Wunsch, sehen uns die betreffende Region an und sagen offen, was medizinisch sinnvoll ist — und wovon wir abraten.",
      },
    ],
  },
]

export function pillarById(id: Pillar): PillarInfo {
  const found = pillars.find((p) => p.id === id)
  if (!found) throw new Error(`Unbekannte Kategorie: ${id}`)
  return found
}
