import type { Locale, LocalizedPillarInfo, Pillar, PillarInfo } from "./types"
import { resolvePillar } from "./localize"

const PILLARS: LocalizedPillarInfo[] = [
  {
    id: "laser",
    label: { de: "Laser", en: "Laser" },
    title: { de: "Laser-Behandlungen", en: "Laser Treatments" },
    headline: {
      de: { lead: "Laser, der", accent: "wirklich wirkt" },
      en: { lead: "Laser that", accent: "actually works" },
    },
    excerpt: {
      de: "Dauerhafte Haarreduktion, Gefäße, Pigmentflecken und Aknenarben — medizinisch geführt, mit transparenten Preisen.",
      en: "Permanent hair reduction, vascular lesions, pigmentation and acne scars — physician-led, with transparent pricing.",
    },
    intro: {
      de: [
        "Moderne Lasertechnologie arbeitet gezielt: Das Licht wird nur dort aufgenommen, wo es wirken soll — im Haarfollikel, im erweiterten Gefäß oder im Pigment. Das umliegende Gewebe bleibt geschont.",
        "Jede Behandlung beginnt bei uns mit einem ärztlichen Gespräch. Wir bestimmen Ihren Hauttyp, prüfen Kontraindikationen und legen gemeinsam fest, wie viele Sitzungen realistisch nötig sind.",
        "Fachlich korrekt spricht man von dauerhafter Haarreduktion: Bei den meisten Patientinnen und Patienten bleibt ein kleiner Teil der Haare erhalten. Wie viele Sitzungen nötig sind und wie vollständig das Ergebnis ausfällt, hängt von Haut- und Haartyp ab.",
      ],
      en: [
        "Modern laser technology works with precision: the light is absorbed only where it needs to act — in the hair follicle, the dilated vessel, or the pigment. The surrounding tissue is left unaffected.",
        "Every treatment with us begins with a medical consultation. We assess your skin type, check for contraindications, and agree together on how many sessions are realistically needed.",
        "The medically correct term is permanent hair reduction: in most patients, a small proportion of hair remains. How many sessions are needed, and how complete the result is, depends on skin and hair type.",
      ],
    },
    icon: "Zap",
    faq: {
      de: [
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
      en: [
        {
          question: "Does the treatment hurt?",
          answer:
            "Most patients describe the treatment as a brief, warm tingling sensation. The handpiece cools the skin throughout. Anaesthesia is not usually necessary.",
        },
        {
          question: "How many sessions will I need?",
          answer:
            "This depends on your hair and skin type, your hormonal profile and the area being treated. Six to twelve sessions, spaced several weeks apart, is typical. We'll give you an estimate at your initial consultation.",
        },
        {
          question: "What should I keep in mind around the treatment?",
          answer:
            "Shave the area the day before. Avoid direct sun and sunbeds for two weeks before and after each session. You'll receive specific aftercare instructions after every session.",
        },
        {
          question: "Is the result permanent?",
          answer:
            "The medically correct term is permanent hair reduction. In most patients, a small proportion of hair remains, so occasional touch-up sessions can be worthwhile.",
        },
      ],
    },
  },
  {
    id: "physio",
    label: { de: "Physio", en: "Physio" },
    title: { de: "Physiotherapie & Schmerzmedizin", en: "Physiotherapy & Pain Medicine" },
    headline: {
      de: { lead: "Beweglich", accent: "ohne Schmerz" },
      en: { lead: "Move", accent: "pain-free" },
    },
    excerpt: {
      de: "Schmerztherapie, manuelle Therapie, Sportmedizin und Akupunktur — ärztlich begleitet, individuell geplant.",
      en: "Pain therapy, manual therapy, sports medicine and acupuncture — medically supervised, individually planned.",
    },
    intro: {
      de: [
        "Schmerz ist ein Signal, kein Schicksal. Wir suchen die Ursache, statt nur das Symptom zu dämpfen — und kombinieren dafür schulmedizinische und naturheilkundliche Verfahren.",
        "Ob nach einer Sportverletzung, bei chronischen Rückenbeschwerden oder Problemen mit dem Bewegungsapparat: Ihr Behandlungsplan entsteht nach einer gründlichen Untersuchung, nicht nach Schema F.",
      ],
      en: [
        "Pain is a signal, not fate. We look for the cause instead of merely dampening the symptom — combining conventional medicine with naturopathic methods to do so.",
        "Whether after a sports injury, with chronic back pain, or issues with the musculoskeletal system: your treatment plan is developed after a thorough examination, not from a standard template.",
      ],
    },
    icon: "Activity",
    faq: {
      de: [
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
      en: [
        {
          question: "Do I need a referral?",
          answer:
            "No. As a private practice, we treat you without a referral. Feel free to bring any existing findings or imaging with you.",
        },
        {
          question: "What happens at the first appointment?",
          answer:
            "We begin with a thorough examination and discuss your history and symptoms. Only after that do we decide together which methods make sense.",
        },
        {
          question: "Will my insurance cover the cost?",
          answer:
            "We bill on a private basis. Please check directly with your insurer beforehand whether, and to what extent, they will reimburse you.",
        },
      ],
    },
  },
  {
    id: "aesthetik",
    label: { de: "Ästhetik", en: "Aesthetics" },
    title: { de: "Ästhetische Medizin", en: "Aesthetic Medicine" },
    headline: {
      de: { lead: "Natürlich", accent: "Sie selbst" },
      en: { lead: "Naturally", accent: "yourself" },
    },
    excerpt: {
      de: "Faltenbehandlung, Hyaluron, Kryolipolyse und Skinbooster — zurückhaltend dosiert, ärztlich durchgeführt.",
      en: "Wrinkle treatment, hyaluronic acid, cryolipolysis and skin boosters — dosed conservatively, carried out by a physician.",
    },
    intro: {
      de: [
        "Ästhetische Medizin soll nicht auffallen. Unser Anspruch ist ein Ergebnis, das ausgeruht wirkt und Ihre Mimik erhält — nicht ein Gesicht, das behandelt aussieht.",
        "Alle Eingriffe führt Dr. med. univ. Dost Mohammad persönlich durch. Vor jeder Behandlung besprechen wir offen, was medizinisch sinnvoll ist und wovon wir abraten.",
      ],
      en: [
        "Aesthetic medicine shouldn't be noticeable. Our aim is a result that looks well-rested and preserves your natural expression — not a face that looks treated.",
        "Every procedure is carried out personally by Dr. med. univ. Dost Mohammad. Before each treatment, we discuss openly what makes medical sense — and what we would advise against.",
      ],
    },
    icon: "Sparkles",
    faq: {
      de: [
        {
          question: "Sieht man mir die Behandlung an?",
          answer:
            "Unser Anspruch ist ein Gesicht, das ausgeruht wirkt und seine Mimik behält. Wir dosieren bewusst zurückhaltend.",
        },
        {
          question: "Wer führt die Behandlung durch?",
          answer: "Alle ästhetischen Eingriffe führt Dr. med. univ. Dost Mohammad persönlich durch.",
        },
        {
          question: "Was passiert im Erstgespräch?",
          answer:
            "Wir besprechen Ihren Wunsch, sehen uns die betreffende Region an und sagen offen, was medizinisch sinnvoll ist — und wovon wir abraten.",
        },
      ],
      en: [
        {
          question: "Will people be able to tell I've had treatment?",
          answer:
            "Our aim is a face that looks well-rested and keeps its natural expression. We deliberately dose conservatively.",
        },
        {
          question: "Who carries out the treatment?",
          answer: "All aesthetic procedures are carried out personally by Dr. med. univ. Dost Mohammad.",
        },
        {
          question: "What happens at the initial consultation?",
          answer:
            "We discuss what you'd like, examine the area in question, and tell you openly what makes medical sense — and what we'd advise against.",
        },
      ],
    },
  },
]

export function pillars(locale: Locale): PillarInfo[] {
  return PILLARS.map((p) => resolvePillar(p, locale))
}

export function pillarById(id: Pillar, locale: Locale): PillarInfo {
  const found = PILLARS.find((p) => p.id === id)
  if (!found) throw new Error(`Unbekannte Kategorie: ${id}`)
  return resolvePillar(found, locale)
}
