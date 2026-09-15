import { readFileSync } from "node:fs"
import { resolve } from "node:path"
import { describe, expect, it } from "vitest"
import { SITE_URL } from "../src/content/seo"
import { allRoutes } from "./allRoutes"

/**
 * scripts/prerender.ts and scripts/generate-sitemap.ts both build their
 * route list from allRoutes() rather than hand-maintaining their own — this
 * asserts that shared list actually matches what generate-sitemap.ts wrote
 * to public/sitemap.xml, so the set of HTML files prerender.ts produces and
 * the URLs search engines are told about cannot drift apart.
 */
describe("prerender route list", () => {
  it("matches the sitemap exactly", () => {
    const sitemap = readFileSync(resolve(__dirname, "../public/sitemap.xml"), "utf8")
    const sitemapPaths = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) =>
      m[1].replace(SITE_URL, ""),
    )
    expect(allRoutes()).toEqual(sitemapPaths)
  })

  it("has exactly 84 routes: 11 German + 7 English static pages, 33 treatments in each language", () => {
    expect(allRoutes()).toHaveLength(84)
  })
})
