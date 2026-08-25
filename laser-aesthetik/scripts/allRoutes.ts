import { treatments } from "../src/content/treatments"
import { pillars } from "../src/content/pillars"

/**
 * Every route the site serves, in one place. generate-sitemap.ts and
 * prerender.ts both build their route list from this function instead of
 * each hand-maintaining their own — otherwise the sitemap and the set of
 * HTML files actually written would be free to drift apart.
 */
export function allRoutes(): string[] {
  return [
    // 9 static German routes
    "/",
    ...pillars("de").map((p) => p.path),
    "/preise",
    "/praxis",
    "/kontakt",
    "/impressum",
    "/datenschutz",
    // 7 static English routes — no English legal pages, they stay German-only
    "/en",
    ...pillars("en").map((p) => p.path),
    "/en/prices",
    "/en/practice",
    "/en/contact",
    // 29 German + 29 English treatments
    ...treatments("de").map((t) => `/behandlungen/${t.slug}`),
    ...treatments("en").map((t) => `/en/treatments/${t.slug}`),
  ]
}
