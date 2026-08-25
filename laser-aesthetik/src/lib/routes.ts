import type { Locale, Localized, Pillar } from "@/content/types"

/**
 * Every route helper a component should use instead of building a path by
 * hand. English gets its own keyword-bearing path segments rather than a
 * bare "/en" prefix on the German ones — that is the whole point of having
 * separate URLs per locale.
 *
 * Legal pages (Impressum, Datenschutz) are deliberately absent from this
 * table: they stay German-only, with no English route.
 */

const PILLAR_PATHS: Record<Pillar, Localized> = {
  laser: { de: "/laser", en: "/en/laser" },
  physio: { de: "/physio", en: "/en/physio" },
  aesthetik: { de: "/aesthetik", en: "/en/aesthetics" },
}

type Page = "prices" | "practice" | "contact"

const PAGE_PATHS: Record<Page, Localized> = {
  prices: { de: "/preise", en: "/en/prices" },
  practice: { de: "/praxis", en: "/en/practice" },
  contact: { de: "/kontakt", en: "/en/contact" },
}

export function homePath(locale: Locale): string {
  return locale === "en" ? "/en" : "/"
}

export function pillarPath(pillarId: Pillar, locale: Locale): string {
  return PILLAR_PATHS[pillarId][locale]
}

/**
 * Takes an already-resolved slug string — resolving which slug belongs to
 * which locale happens in the content layer, not here.
 */
export function treatmentPath(slug: string, locale: Locale): string {
  return locale === "en" ? `/en/treatments/${slug}` : `/behandlungen/${slug}`
}

export function pagePath(page: Page, locale: Locale): string {
  return PAGE_PATHS[page][locale]
}

export function legalPath(page: "impressum" | "datenschutz"): string {
  return `/${page}`
}
