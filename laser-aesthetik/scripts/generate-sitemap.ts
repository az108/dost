import { writeFileSync } from "node:fs"
import { SITE_URL } from "../src/content/seo"
import { allRoutes } from "./allRoutes"

const paths = allRoutes()

const urls = paths
  .map((p) => `  <url><loc>${SITE_URL}${p}</loc></url>`)
  .join("\n")

writeFileSync(
  "public/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
)
console.log(`sitemap.xml: ${paths.length} URLs`)
