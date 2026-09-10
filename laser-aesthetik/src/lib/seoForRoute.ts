import type { Locale } from "@/content/types"
import type { UiKey } from "@/content/ui"
import { ui } from "@/content/ui"
import { center, formatAddress, hasAddress, openLocation } from "@/content/center"
import { pillarById } from "@/content/pillars"
import { treatmentBySlug } from "@/content/treatments"
import { impressum, datenschutz } from "@/content/legal"
import { SITE_URL } from "@/content/seo"
import {
  counterpartPath,
  hasCounterpart,
  homePath,
  legalPath,
  pagePath,
  pillarPath,
  treatmentPath,
} from "@/lib/routes"

export interface RouteSeo {
  locale: Locale
  title: string
  description: string
  canonical: string
  alternates: { hreflang: string; href: string }[]
  ogImage: string
}

const PILLAR_IDS = ["laser", "physio", "aesthetik"] as const
const PAGES = ["prices", "practice", "contact"] as const
const LEGAL_DOCS = { impressum, datenschutz } as const

const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`

/**
 * Plain (non-hook) equivalent of useT()'s lookup — seoForRoute is a pure
 * function with no Router context, so it cannot call useT()/useLocale()
 * itself. Locale is already known from the pathname by the time this runs.
 */
function t(key: UiKey, locale: Locale): string {
  return ui[key][locale]
}

/**
 * Same rule useLocale() and routes.ts's localeOf() apply: a path starting
 * "/en" or equal to "/en" is English, everything else is German. Kept as a
 * free function (not imported from lib/locale.ts, which requires a Router
 * context) so this stays callable outside React entirely.
 */
function localeOf(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "de"
}

function withBrand(title: string | undefined): string {
  return title ? `${title} | ${center.brand}` : center.brand
}

/**
 * de/en/x-default hreflang alternates for a path that has a counterpart in
 * the other language — empty for the German-only legal pages. Mirrors what
 * useSeo did inline before this module existed.
 */
function alternatesFor(pathname: string, locale: Locale): { hreflang: string; href: string }[] {
  if (!hasCounterpart(pathname)) return []
  const dePath = locale === "de" ? pathname : counterpartPath(pathname, "de")
  const enPath = locale === "en" ? pathname : counterpartPath(pathname, "en")
  return [
    { hreflang: "de", href: `${SITE_URL}${dePath}` },
    { hreflang: "en", href: `${SITE_URL}${enPath}` },
    // x-default points at German — the primary market.
    { hreflang: "x-default", href: `${SITE_URL}${dePath}` },
  ]
}

/**
 * Derives every SEO-relevant value for a route from the content layer and
 * src/lib/routes.ts — the same data each page component already reads via
 * useT()/pillarById()/treatmentBySlug() to build its own useSeo() call.
 *
 * This exists so metadata can be produced without mounting the React tree:
 * scripts/prerender.ts calls it directly to fill in each static HTML file's
 * <head>, and useSeo() calls it too for the canonical/alternates/og:image/
 * locale it used to compute inline — one function, so the prerendered
 * values and the client-side ones cannot drift apart.
 */
export function seoForRoute(pathname: string): RouteSeo {
  const locale = localeOf(pathname)
  const canonical = `${SITE_URL}${pathname}`
  const alternates = alternatesFor(pathname, locale)

  if (pathname === homePath("de") || pathname === homePath("en")) {
    return {
      locale,
      title: withBrand(undefined),
      description: t("homeMetaDescription", locale),
      canonical,
      alternates,
      ogImage: DEFAULT_OG_IMAGE,
    }
  }

  for (const pillar of PILLAR_IDS) {
    if (pathname === pillarPath(pillar, locale)) {
      const info = pillarById(pillar, locale)
      return {
        locale,
        title: withBrand(info.title),
        description: info.excerpt,
        canonical,
        alternates,
        ogImage: DEFAULT_OG_IMAGE,
      }
    }
  }

  for (const page of PAGES) {
    if (pathname === pagePath(page, locale)) {
      // The Landshut location's street/postalCode are still TODO sentinels
      // (see center.ts), so formatAddress() must never run unguarded here —
      // matches the same hasAddress() guard the Kontakt page's own useSeo
      // call uses for this exact string.
      const location = openLocation()
      const description =
        page === "contact"
          ? `${center.brand}, ${
              hasAddress(location) ? formatAddress(location) : location.city
            }. ${t("contactMetaDescriptionSuffix", locale)}`
          : page === "practice"
            ? t("praxisMetaDescription", locale)
            : t("pricesMetaDescription", locale)
      return {
        locale,
        title: withBrand(t(page, locale)),
        description,
        canonical,
        alternates,
        ogImage: DEFAULT_OG_IMAGE,
      }
    }
  }

  for (const page of Object.keys(LEGAL_DOCS) as (keyof typeof LEGAL_DOCS)[]) {
    if (pathname === legalPath(page)) {
      const doc = LEGAL_DOCS[page]
      return {
        locale: "de",
        title: withBrand(doc.title),
        description: doc.intro,
        canonical,
        // German-only pages emit no hreflang pair at all — claiming an
        // English alternate that does not exist is worse than omitting it.
        alternates: [],
        ogImage: DEFAULT_OG_IMAGE,
      }
    }
  }

  const treatmentPrefix = locale === "en" ? "/en/treatments/" : "/behandlungen/"
  if (pathname.startsWith(treatmentPrefix)) {
    const slug = pathname.slice(treatmentPrefix.length)
    const treatment = treatmentBySlug(slug, locale)
    if (treatment) {
      return {
        locale,
        title: withBrand(treatment.title),
        description: treatment.excerpt,
        canonical: `${SITE_URL}${treatmentPath(treatment.slug, locale)}`,
        alternates,
        ogImage: DEFAULT_OG_IMAGE,
      }
    }
  }

  // Unmapped path (e.g. a 404) — never hit by the 74 sitemap routes, but
  // kept total so callers do not need a separate not-found branch.
  return {
    locale,
    title: withBrand(t("notFoundTitle", locale)),
    description: "",
    canonical,
    alternates: [],
    ogImage: DEFAULT_OG_IMAGE,
  }
}
