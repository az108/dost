import { writeFileSync } from "node:fs"
import { SITE_URL } from "../src/content/seo"
import { seoForRoute } from "../src/lib/seoForRoute"
import { allRoutes } from "./allRoutes"

// allRoutes() is the list of pages that get an HTML file; this is the list
// submitted to search engines, which is not the same thing. The two checkout
// return pages carry <meta name="robots" content="noindex"> and must not be
// listed here — a sitemap is a request to index, so submitting a URL that
// then refuses indexing is reported back as an error in Search Console.
// Asking seoForRoute() rather than re-listing the paths keeps the one
// authority: the same function decides what the prerenderer writes into the
// page's head.
const paths = allRoutes().filter((p) => !seoForRoute(p).noindex)

const urls = paths
  .map((p) => `  <url><loc>${SITE_URL}${p}</loc></url>`)
  .join("\n")

writeFileSync(
  "public/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
)
console.log(`sitemap.xml: ${paths.length} URLs`)
