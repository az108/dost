import { readFileSync } from "node:fs"
import { resolve } from "node:path"
import { describe, expect, it } from "vitest"
import { SITE_URL } from "../src/content/seo"
import { seoForRoute } from "../src/lib/seoForRoute"
import { allRoutes } from "./allRoutes"

const sitemapPaths = (): string[] => {
  const sitemap = readFileSync(resolve(__dirname, "../public/sitemap.xml"), "utf8")
  return [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(SITE_URL, ""))
}

/**
 * scripts/prerender.ts and scripts/generate-sitemap.ts both build their
 * route list from allRoutes() rather than hand-maintaining their own — this
 * asserts that shared list actually matches what generate-sitemap.ts wrote
 * to public/sitemap.xml, so the set of HTML files prerender.ts produces and
 * the URLs search engines are told about cannot drift apart.
 *
 * The two lists are deliberately not the same length. Every route gets an
 * HTML file; only the indexable ones are submitted.
 */
describe("prerender route list", () => {
  it("matches the sitemap once the noindex routes are removed", () => {
    expect(allRoutes().filter((p) => !seoForRoute(p).noindex)).toEqual(sitemapPaths())
  })

  it("has exactly 87 routes: 14 German + 7 English static pages, 33 treatments in each language", () => {
    expect(allRoutes()).toHaveLength(87)
  })

  it("never submits a noindex route to search engines", () => {
    // A sitemap entry is a request to index; the page it points at answers
    // with <meta name="robots" content="noindex">. Search Console reports
    // that contradiction as an error, and the two checkout return pages are
    // the only routes on the site that can produce it.
    const noindexRoutes = allRoutes().filter((p) => seoForRoute(p).noindex)
    expect(noindexRoutes).toEqual(["/termin/erfolg", "/termin/abbruch"])
    for (const route of noindexRoutes) {
      expect(sitemapPaths(), `sitemap lists noindex route ${route}`).not.toContain(route)
    }
  })
})
