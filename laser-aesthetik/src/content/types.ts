export type Pillar = "laser" | "physio" | "aesthetik"

export type Locale = "de" | "en"

/**
 * A value that exists in both languages. Deliberately inline rather than in
 * parallel per-language files: you cannot add or edit content without seeing
 * both slots, so the two cannot silently drift apart.
 */
export type Localized<T = string> = { de: T; en: T }

export interface FaqItem {
  question: string
  answer: string
}

/** A package price that cannot be derived from the standard discount tiers. */
export interface PackageOverride {
  sessions: 3 | 5 | 10
  perSession: number
}

export type Pricing =
  | { kind: "onRequest" }
  | { kind: "fixed"; single: number; overrides?: PackageOverride[] }

/** A computed package tier, produced by packageTiers() in pricing.ts. */
export interface PackageTier {
  sessions: 3 | 5 | 10
  discountPct: number
  perSession: number
  total: number
}

export interface Treatment {
  slug: string
  pillar: Pillar
  title: string
  /** Rendered as "<lead> <em>accent</em>" in the detail-page h1 */
  headline: { lead: string; accent: string }
  /** Teaser shown on cards */
  excerpt: string
  /** Body paragraphs for the detail page */
  body: string[]
  /** Checklist items, rendered with success-coloured checkmarks */
  benefits: string[]
  durationMin?: number
  /** Free text, e.g. "6 – 8 Sitzungen" */
  sessions?: string
  pricing: Pricing
  /** Price-table grouping, e.g. "Gesicht & Kopf". Laser zones only. */
  group?: string
  image?: string
  imageAlt?: string
  faq?: FaqItem[]
  keywords?: string[]
}

export interface PillarInfo {
  id: Pillar
  /** Route path, e.g. "/laser" */
  path: string
  /** Short nav label, e.g. "Laser" */
  label: string
  /** Page title, e.g. "Laser-Behandlungen" */
  title: string
  headline: { lead: string; accent: string }
  /** One-line teaser for the home-page pillar card */
  excerpt: string
  /** Intro paragraphs for the category page */
  intro: string[]
  /** lucide-react icon name, e.g. "Zap" */
  icon: string
  image?: string
  imageAlt?: string
  faq?: FaqItem[]
}

export interface OpeningHours {
  /** Display label, e.g. "Mo – Fr" */
  days: string
  /** Display value, e.g. "9:00 – 20:00 Uhr" */
  time: string
  /**
   * Machine-readable equivalent for schema.org JSON-LD, in schema.org's own
   * vocabulary (English day names, 24-hour times). Omitted for closed days.
   * It lives beside the display strings deliberately: the two cannot drift
   * because you cannot edit one without seeing the other.
   */
  schema?: { dayOfWeek: string[]; opens: string; closes: string }
}

export interface Practice {
  /** Full brand, used in titles and the header lockup */
  brand: string
  /** Short brand for tight spaces */
  shortBrand: string
  doctor: string
  /**
   * The doctor's name split for display lockups that emphasise the surname.
   * Its two halves must concatenate back to `doctor` — practice.test.ts
   * asserts this, so the split cannot drift from the canonical string.
   */
  doctorLockup: { lead: string; accent: string }
  qualifications: string
  street: string
  postalCode: string
  city: string
  email: string
  phone: string
  hours: OpeningHours[]
  social: { facebook: string; linkedin: string }
  bookingUrl: string
}
