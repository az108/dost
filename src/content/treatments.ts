import type { Loc } from "@/lib/i18n"
import { respiratoryDiseases } from "@/content/diseases/respiratory"
import { digestiveDiseases } from "@/content/diseases/digestive"
import { metabolismDiseases } from "@/content/diseases/metabolism"
import { psychiatricDiseases } from "@/content/diseases/psychiatric"
import { heartCirculationDiseases } from "@/content/diseases/heart-circulation"
import { musculoskeletalDiseases } from "@/content/diseases/musculoskeletal"
import { skinDiseases } from "@/content/diseases/skin"
import { infectionsDiseases } from "@/content/diseases/infections"
import { urinaryDiseases } from "@/content/diseases/urinary"
import { bloodImmuneDiseases } from "@/content/diseases/blood-immune"
import { eyesSensoryDiseases } from "@/content/diseases/eyes-sensory"
import { injuriesDiseases } from "@/content/diseases/injuries"

export type IllustrationKey = "lungs" | "sinus" | "generic"
export type AreaIcon =
  | "lungs"
  | "heart"
  | "stomach"
  | "skin"
  | "brain"
  | "bone"
  | "eye"
  | "shield"
  | "virus"
  | "bandage"
  | "kidney"
  | "metabolism"

/**
 * A content block inside a migrated section. Text blocks are bilingual; image
 * blocks reference a file under public/diseases/<slug>/ and may carry an
 * "AI generated" caption once a generated image is used.
 */
export type Block =
  | { t: "sub"; text: Loc }
  | { t: "p"; text: Loc }
  | { t: "ul"; items: Loc<string[]> }
  | { t: "img"; src: string; alt: Loc; ai?: boolean }

/** Full migrated page content: the definition plus the five treatment sections. */
export interface RichContent {
  definition: Block[]
  medical: Block[]
  naturopathic: Block[]
  tcm: Block[]
  ayurvedic: Block[]
  physio?: Block[]
}

export interface Disease {
  slug: string
  /** ICD-10 code, copied from drdosthealth where available. */
  icd10: string
  title: Loc
  /** One-line teaser for lists and search. */
  summary: Loc
  /** Condensed fallback content, used only when `rich` is absent (older, not
   *  yet fully-migrated entries). Fully-migrated diseases provide `rich`. */
  definition?: Loc<string[]>
  treatments?: {
    medical: Loc<string[]>
    naturopathic: Loc<string[]>
    tcm: Loc<string[]>
    ayurvedic: Loc<string[]>
    /** Optional – only when physiotherapy is applicable to the condition. */
    physio?: Loc<string[]>
  }
  illustration?: IllustrationKey
  /** true once an AI-generated hero image has replaced the placeholder. */
  aiImage?: boolean
  /** Full migrated content as ordered blocks. When present, the disease page
   *  renders this instead of the condensed `treatments` bullet lists. */
  rich?: RichContent
}

export interface TreatmentArea {
  slug: string
  title: Loc
  excerpt: Loc
  icon: AreaIcon
  diseases: Disease[]
}

/* ── Areas ──────────────────────────────────────────────────────────────── */

/**
 * Treatment areas mirror the drdosthealth.com taxonomy
 * (general-medicine/<area>/<disease>); slugs are kept identical for URL and
 * ICD continuity. The 4 areas filled on the source site are migrated
 * (39 conditions: respiratory, digestive, metabolism, psychiatric). The other
 * 8 areas are empty on the source and carry generated content from the curated
 * worklist in scripts/migration/generated-worklist.json (all 8 now filled).
 * Source map: scripts/migration/drdosthealth-map.json.
 */
export const treatmentAreas: TreatmentArea[] = [
  {
    slug: "general-complaints-respiratory-system-ent",
    icon: "lungs",
    title: { de: "Allgemeinbeschwerden, Atemwege & HNO", en: "General Complaints, Respiratory & ENT" },
    excerpt: {
      de: "Erkrankungen von Nase, Rachen, Bronchien und Lunge.",
      en: "Conditions of the nose, throat, bronchi and lungs.",
    },
    diseases: respiratoryDiseases,
  },
  {
    slug: "stomach-intestinal-tract-liver-abdomen",
    icon: "stomach",
    title: { de: "Magen, Darm, Leber & Bauch", en: "Stomach, Intestines, Liver & Abdomen" },
    excerpt: {
      de: "Verdauung, Magen-Darm-Beschwerden und Bauchraum.",
      en: "Digestion, gastrointestinal complaints and the abdomen.",
    },
    diseases: digestiveDiseases,
  },
  {
    slug: "metabolism-endocrinology-nutrition",
    icon: "metabolism",
    title: { de: "Stoffwechsel, Endokrinologie & Ernährung", en: "Metabolism, Endocrinology & Nutrition" },
    excerpt: {
      de: "Diabetes, Fettstoffwechsel, Hormone und Ernährung.",
      en: "Diabetes, lipid metabolism, hormones and nutrition.",
    },
    diseases: metabolismDiseases,
  },
  {
    slug: "psychiatric-neurological-conditions",
    icon: "brain",
    title: { de: "Psychiatrische & neurologische Erkrankungen", en: "Psychiatric & Neurological Conditions" },
    excerpt: {
      de: "Depression, Angst, Schlaf und das Nervensystem.",
      en: "Depression, anxiety, sleep and the nervous system.",
    },
    diseases: psychiatricDiseases,
  },
  {
    slug: "heart-circulation-blood-vessels",
    icon: "heart",
    title: { de: "Herz, Kreislauf & Gefäße", en: "Heart, Circulation & Blood Vessels" },
    excerpt: {
      de: "Blutdruck, Durchblutung und das Herz-Kreislauf-System.",
      en: "Blood pressure, circulation and the cardiovascular system.",
    },
    diseases: heartCirculationDiseases,
  },
  {
    slug: "musculoskeletal-system-orthopedics-pain-medicine",
    icon: "bone",
    title: { de: "Bewegungsapparat, Orthopädie & Schmerzmedizin", en: "Musculoskeletal System, Orthopedics & Pain Medicine" },
    excerpt: {
      de: "Gelenke, Muskeln, Wirbelsäule und Schmerztherapie.",
      en: "Joints, muscles, the spine and pain therapy.",
    },
    diseases: musculoskeletalDiseases,
  },
  {
    slug: "skin-hair-nails-subcutaneous-tissue",
    icon: "skin",
    title: { de: "Haut, Haare & Nägel", en: "Skin, Hair & Nails" },
    excerpt: {
      de: "Hauterkrankungen, Allergien und Hautgesundheit.",
      en: "Skin conditions, allergies and skin health.",
    },
    diseases: skinDiseases,
  },
  {
    slug: "infections-parasitic-diseases",
    icon: "virus",
    title: { de: "Infektionen & parasitäre Erkrankungen", en: "Infections & Parasitic Diseases" },
    excerpt: {
      de: "Virale, bakterielle und parasitäre Infektionen.",
      en: "Viral, bacterial and parasitic infections.",
    },
    diseases: infectionsDiseases,
  },
  {
    slug: "urinary-tract-kidneys",
    icon: "kidney",
    title: { de: "Harnwege & Nieren", en: "Urinary Tract & Kidneys" },
    excerpt: {
      de: "Nieren, Blase und die ableitenden Harnwege.",
      en: "Kidneys, bladder and the urinary tract.",
    },
    diseases: urinaryDiseases,
  },
  {
    slug: "blood-immune-system-oncological-follow-up-care",
    icon: "shield",
    title: { de: "Blut, Immunsystem & onkologische Nachsorge", en: "Blood, Immune System & Oncological Follow-up" },
    excerpt: {
      de: "Blutbild, Immunsystem und onkologische Nachsorge.",
      en: "Blood, the immune system and oncological follow-up care.",
    },
    diseases: bloodImmuneDiseases,
  },
  {
    slug: "eyes-sensory-organs",
    icon: "eye",
    title: { de: "Augen & Sinnesorgane", en: "Eyes & Sensory Organs" },
    excerpt: {
      de: "Augen, Ohren und die Sinnesorgane.",
      en: "The eyes, ears and sensory organs.",
    },
    diseases: eyesSensoryDiseases,
  },
  {
    slug: "injuries-poisoning-consequences-of-accidents",
    icon: "bandage",
    title: { de: "Verletzungen, Vergiftungen & Unfallfolgen", en: "Injuries, Poisoning & Accident Consequences" },
    excerpt: {
      de: "Wunden, Verletzungen und Folgen von Unfällen.",
      en: "Wounds, injuries and the consequences of accidents.",
    },
    diseases: injuriesDiseases,
  },
]

/* ── Lookups ────────────────────────────────────────────────────────────── */

export function areaBySlug(slug: string | undefined): TreatmentArea | undefined {
  return treatmentAreas.find((a) => a.slug === slug)
}

export function diseaseBySlug(
  areaSlug: string | undefined,
  diseaseSlug: string | undefined,
): { area: TreatmentArea; disease: Disease } | undefined {
  const area = areaBySlug(areaSlug)
  const disease = area?.diseases.find((d) => d.slug === diseaseSlug)
  if (!area || !disease) return undefined
  return { area, disease }
}

/** Flat list of every disease with its area – used by the home search. */
export function allDiseases(): { area: TreatmentArea; disease: Disease }[] {
  return treatmentAreas.flatMap((area) => area.diseases.map((disease) => ({ area, disease })))
}

export function diseasePath(areaSlug: string, diseaseSlug: string): string {
  return `/behandlungen/${areaSlug}/${diseaseSlug}`
}

export function areaPath(areaSlug: string): string {
  return `/behandlungen/${areaSlug}`
}
