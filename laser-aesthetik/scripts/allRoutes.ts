import { treatments } from "../src/content/treatments"
import { pillars } from "../src/content/pillars"

/**
 * Every route the site serves, in one place. generate-sitemap.ts and
 * prerender.ts both build their route list from this function instead of
 * each hand-maintaining their own — otherwise the sitemap and the set of
 * HTML files actually written would be free to drift apart.
 *
 * This is the list of routes that get an HTML file, not the list submitted
 * to search engines: /termin/erfolg and /termin/abbruch are noindex, and
 * generate-sitemap.ts filters them back out by asking seoForRoute(). Both
 * files have to exist regardless — Stripe redirects a paying customer
 * straight to one of them.
 */
export function allRoutes(): string[] {
  return [
    // 14 static German routes
    "/",
    ...pillars("de").map((p) => p.path),
    "/preise",
    "/praxis",
    "/kontakt",
    "/impressum",
    "/datenschutz",
    "/agb",
    "/widerruf",
    "/termin",
    "/termin/erfolg",
    "/termin/abbruch",
    // 7 static English routes — no English legal pages, they stay German-only
    "/en",
    ...pillars("en").map((p) => p.path),
    "/en/prices",
    "/en/practice",
    "/en/contact",
    // 33 German + 33 English treatments
    ...treatments("de").map((t) => `/behandlungen/${t.slug}`),
    ...treatments("en").map((t) => `/en/treatments/${t.slug}`),
  ]
}
