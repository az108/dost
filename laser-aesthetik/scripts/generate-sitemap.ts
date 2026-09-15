import { writeFileSync } from "node:fs"
import { SITE_URL } from "../src/content/seo"
import { seoForRoute } from "../src/lib/seoForRoute"
import { allRoutes } from "./allRoutes"

// allRoutes() is the list of pages that get an HTML file; this is the list
// submitted to search engines, which is not the same thing. Two reasons keep
// a built page out of this list, and they are deliberately separate fields:
//
//   noindex             — never index this. The two checkout return pages
//                         carry <meta name="robots" content="noindex">, and a
//                         sitemap is a request to index, so submitting a URL
//                         that then refuses indexing comes back as an error in
//                         Search Console.
//   withheldFromSitemap — not yet. /termin is meant to be indexed; it must not
//                         be submitted while the legal go-live guard is red,
//                         because the navigation withholds the same link for
//                         the same reason and a sitemap entry would undo that
//                         decision. See src/lib/seoForRoute.ts and DEPLOY.md.
//
// Asking seoForRoute() rather than re-listing the paths keeps the one
// authority: the same function decides what the prerenderer writes into the
// page's head.
const paths = allRoutes().filter((p) => {
  const seo = seoForRoute(p)
  return !seo.noindex && !seo.withheldFromSitemap
})

const urls = paths
  .map((p) => `  <url><loc>${SITE_URL}${p}</loc></url>`)
  .join("\n")

writeFileSync(
  "public/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
)
console.log(`sitemap.xml: ${paths.length} URLs`)
