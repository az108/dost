import { writeFileSync } from "node:fs"
import { SITE_URL } from "../src/content/seo"
import { allRoutes } from "./allRoutes"

// Writes public/sitemap.xml and public/robots.txt so `vite build` copies both
// into dist/. Both derive their URLs from SITE_URL (src/content/seo.ts) — the
// one place the production origin is set — so switching domains is a one-line
// change there.
const routes = allRoutes()

const urls = routes.map((p) => `  <url><loc>${SITE_URL}${p}</loc></url>`).join("\n")

writeFileSync(
  "public/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
)

writeFileSync("public/robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`)

console.log(`sitemap.xml: ${routes.length} URLs; robots.txt written`)
