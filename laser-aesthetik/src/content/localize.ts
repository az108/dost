import type { Locale, LocalizedPillarInfo, PillarInfo } from "./types"
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
    icon: p.icon,
    faq: p.faq?.[locale],
  }
}
