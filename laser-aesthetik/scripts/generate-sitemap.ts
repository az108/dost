import { writeFileSync } from "node:fs"
import { treatments } from "../src/content/treatments"
import { pillars } from "../src/content/pillars"
import { SITE_URL } from "../src/content/seo"

const paths = [
  "/",
  ...pillars("de").map((p) => p.path),
  "/preise",
  "/praxis",
  "/kontakt",
  "/impressum",
  "/datenschutz",
  ...treatments.map((t) => `/behandlungen/${t.slug}`),
]

const urls = paths
  .map((p) => `  <url><loc>${SITE_URL}${p}</loc></url>`)
  .join("\n")

writeFileSync(
  "public/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
)
console.log(`sitemap.xml: ${paths.length} URLs`)
