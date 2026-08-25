import type { Locale, Localized, Pillar } from "@/content/types"
import { treatments } from "@/content/treatments"

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

const LEGAL_PATHS: readonly string[] = ["/impressum", "/datenschutz"]

/**
 * True when `pathname` has an equivalent page in the other language. Only
 * the legal pages (Impressum, Datenschutz) do not — they stay German-only.
 */
export function hasCounterpart(pathname: string): boolean {
  return !LEGAL_PATHS.includes(pathname)
}

function localeOf(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "de"
}

/**
 * Maps the current path to its equivalent in the other language. Falls back
 * to that language's home page when there is no counterpart — the legal
 * pages are German-only, so switching to English from /impressum has nowhere
 * specific to land.
 */
export function counterpartPath(pathname: string, target: Locale): string {
  const source = localeOf(pathname)
  if (source === target) return pathname
  if (!hasCounterpart(pathname)) return homePath(target)

  if (pathname === homePath(source)) return homePath(target)

  for (const id of Object.keys(PILLAR_PATHS) as Pillar[]) {
    if (PILLAR_PATHS[id][source] === pathname) return PILLAR_PATHS[id][target]
  }

  for (const page of Object.keys(PAGE_PATHS) as Page[]) {
    if (PAGE_PATHS[page][source] === pathname) return PAGE_PATHS[page][target]
  }

  const treatmentPrefix = source === "en" ? "/en/treatments/" : "/behandlungen/"
  if (pathname.startsWith(treatmentPrefix)) {
    const slug = pathname.slice(treatmentPrefix.length)
    const sourceList = treatments(source)
    const index = sourceList.findIndex((t) => t.slug === slug)
    if (index !== -1) {
      return treatmentPath(treatments(target)[index].slug, target)
    }
  }

  return homePath(target)
}
