import { writeFileSync } from "node:fs"
import { treatments } from "../src/content/treatments"
import { pillars } from "../src/content/pillars"
import { SITE_URL } from "../src/content/seo"

const paths = [
  // 9 static German routes
  "/",
  ...pillars("de").map((p) => p.path),
  "/preise",
  "/praxis",
  "/kontakt",
  "/impressum",
  "/datenschutz",
  // 8 static English routes — no English legal pages, they stay German-only
  "/en",
  ...pillars("en").map((p) => p.path),
  "/en/prices",
  "/en/practice",
  "/en/contact",
  // 29 German + 29 English treatments
  ...treatments("de").map((t) => `/behandlungen/${t.slug}`),
  ...treatments("en").map((t) => `/en/treatments/${t.slug}`),
]

const urls = paths
  .map((p) => `  <url><loc>${SITE_URL}${p}</loc></url>`)
  .join("\n")

writeFileSync(
  "public/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
)
console.log(`sitemap.xml: ${paths.length} URLs`)
