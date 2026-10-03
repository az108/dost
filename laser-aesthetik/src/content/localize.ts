import type { Locale, LocalizedPillarInfo, LocalizedTreatment, PillarInfo, Treatment } from "./types"
import { pillarPath } from "@/lib/routes"

/**
 * Resolves a `LocalizedPillarInfo` content entry into the flat `PillarInfo`
 * components consume, by picking each `Localized` field for `locale`. Kept
 * dumb and total: no branching beyond the locale pick, so every field is
 * guaranteed to resolve for both locales.
 */
export function resolvePillar(p: LocalizedPillarInfo, locale: Locale): PillarInfo {
  return {
    id: p.id,
    path: pillarPath(p.id, locale),
    label: p.label[locale],
    title: p.title[locale],
    headline: p.headline[locale],
    excerpt: p.excerpt[locale],
    intro: p.intro[locale],
    image: p.image,
    imageAlt: p.imageAlt?.[locale],
    faq: p.faq?.[locale],
  }
}

/**
 * Resolves a `LocalizedTreatment` content entry into the flat `Treatment`
 * components consume, by picking each `Localized` field for `locale`. Same
 * shape and intent as `resolvePillar()`: dumb and total, no branching beyond
 * the locale pick — `slug` resolves to that locale's own slug, so callers
 * that look treatments up by slug get the right one for free.
 */
export function resolveTreatment(t: LocalizedTreatment, locale: Locale): Treatment {
  return {
    slug: t.slug[locale],
    pillar: t.pillar,
    title: t.title[locale],
    headline: t.headline[locale],
    excerpt: t.excerpt[locale],
    body: t.body[locale],
    benefits: t.benefits[locale],
    durationMin: t.durationMin,
    sessions: t.sessions?.[locale],
    pricing: t.pricing,
    group: t.group?.[locale],
    image: t.image,
    imageAlt: t.imageAlt?.[locale],
    faq: t.faq?.[locale],
    draft: t.draft,
  }
}
