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
  /**
   * Copy we drafted rather than the client supplying. content.test.ts
   * fails while any treatment carries it, so unreviewed medical claims
   * cannot ship.
   */
  draft?: boolean
}

/**
 * What a content file holds for a treatment whose copy has been localized —
 * mirrors `LocalizedPillarInfo`. `resolveTreatment()` (src/content/localize.ts)
 * turns this into the flat `Treatment` components consume. Every treatment
 * (laser, physio and Ästhetik) is defined in this shape.
 */
export interface LocalizedTreatment {
  slug: Localized<string>
  pillar: Pillar
  title: Localized<string>
  headline: Localized<{ lead: string; accent: string }>
  excerpt: Localized<string>
  body: Localized<string[]>
  benefits: Localized<string[]>
  durationMin?: number
  sessions?: Localized<string>
  pricing: Pricing
  /** Price-table grouping, e.g. "Gesicht & Kopf" / "Face & Head". */
  group?: Localized<string>
  image?: string
  imageAlt?: Localized<string>
  faq?: Localized<FaqItem[]>
  /**
   * Copy we drafted rather than the client supplying. content.test.ts
   * fails while any treatment carries it, so unreviewed medical claims
   * cannot ship.
   */
  draft?: boolean
}

export interface PillarInfo {
  id: Pillar
  /** Route path, e.g. "/laser" */
  path: string
  /** Short nav label, e.g. "Laser" */
  label: string
  /** Page title, e.g. "Laserbehandlungen" */
  title: string
  headline: { lead: string; accent: string }
  /** One-line teaser for the home-page pillar card */
  excerpt: string
  /** Intro paragraphs for the category page */
  intro: string[]
  /** Shown on the home-page pillar card and in the category-page hero */
  image?: string
  imageAlt?: string
  faq?: FaqItem[]
}

/**
 * What a content file holds for a pillar: every language-bearing field
 * carries both locales side by side, so content cannot be added or edited
 * without seeing both. `resolvePillar()` (src/content/localize.ts) turns
 * this into the flat `PillarInfo` components consume — `path` is not
 * stored here at all, it is computed from `pillarPath(id, locale)`.
 */
export interface LocalizedPillarInfo {
  id: Pillar
  label: Localized<string>
  title: Localized<string>
  headline: Localized<{ lead: string; accent: string }>
  excerpt: Localized<string>
  intro: Localized<string[]>
  /** Imported asset URL — not localized; only its alt text is */
  image?: string
  imageAlt?: Localized<string>
  faq?: Localized<FaqItem[]>
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

/**
 * One physical site of the center. `planned` locations carry a city and
 * nothing else: publishing an address or opening hours for a site that
 * cannot be visited is an SEO liability and, for a medical service, a
 * misleading-advertising risk.
 */
export interface Location {
  /** "Landshut" */
  city: string
  status: "open" | "planned"
  street?: string
  postalCode?: string
  phone?: string
  hours?: OpeningHours[]
  /** Absent until this location has its own booking profile. */
  bookingUrl?: string
}

export interface Center {
  /** Brand shown in nav, footer and page titles. */
  brand: string
  /** Short brand for tight spaces (the footer copyright line). */
  shortBrand: string
  /**
   * False while `brand` is our working name rather than the client's.
   * Deliberately a flag beside the value, not a TODO_ sentinel inside it:
   * a site whose every heading reads TODO_MARKENNAME cannot be shown to
   * the client, which is the whole point of having a working name.
   */
  brandApproved: boolean
  email: string
  locations: Location[]
  /** Only the networks the center actually has. See center.ts. */
  social: { facebook?: string; linkedin?: string }
}
