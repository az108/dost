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
 * HTML file; only the ones that are both indexable and released are
 * submitted.
 */
const submitted = () =>
  allRoutes().filter((p) => {
    const seo = seoForRoute(p)
    return !seo.noindex && !seo.withheldFromSitemap
  })

describe("prerender route list", () => {
  it("matches the sitemap once the noindex and withheld routes are removed", () => {
    expect(submitted()).toEqual(sitemapPaths())
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

  it("hält /termin zurück, ohne es auf noindex zu setzen", () => {
    // Zwei verschiedene Gründe, zwei verschiedene Felder. /termin SOLL
    // indexiert werden — nur nicht, solange der Rechts-Guard in
    // src/deploy.test.ts rot ist und die Navigation denselben Link
    // zurückhält. Es auf noindex zu setzen wäre die falsche Aussage: sie
    // gälte dann auch nach der Freischaltung weiter, und die Seite trüge das
    // robots-Meta im ausgelieferten HTML.
    //
    // Die Route bleibt in allRoutes(): das HTML muss gebaut werden, sonst
    // gibt es die Seite gar nicht.
    const withheld = allRoutes().filter((p) => seoForRoute(p).withheldFromSitemap)
    expect(withheld).toEqual(["/termin"])
    expect(allRoutes()).toContain("/termin")
    expect(seoForRoute("/termin").noindex).toBeUndefined()
    expect(sitemapPaths()).not.toContain("/termin")
  })

  it("reicht 84 URLs ein: 87 Routen minus die beiden noindex und /termin", () => {
    expect(submitted()).toHaveLength(84)
  })
})
