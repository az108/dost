import { mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { render } from "../dist-ssr/entry-server.js"
import { center } from "../src/content/center"
import { seoForRoute } from "../src/lib/seoForRoute"
import { allRoutes } from "./allRoutes"

/**
 * Every value below is interpolated into the static HTML template as a raw
 * string (not via DOM APIs, which would escape automatically) — an
 * unescaped "<" or "&" in a treatment title or description would corrupt
 * the document, so every injected value goes through this first.
 */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

// Replaces the content="..." attribute of the single <meta>/<link> tag
// matched by `tagPattern`. The template carries a static default for each
// of these tags already, so this replaces it in place rather than adding a
// duplicate. Uses the replacer-function form of String.replace throughout
// this file so a "$" in the injected value (e.g. a price) is never
// misread as a replacement pattern.
function replaceAttr(html: string, tagPattern: RegExp, attr: string, value: string): string {
  const escaped = escapeHtml(value)
  return html.replace(tagPattern, (tag) => tag.replace(new RegExp(`${attr}="[^"]*"`), `${attr}="${escaped}"`))
}

function injectHead(html: string, seo: ReturnType<typeof seoForRoute>): string {
  let out = html

  out = out.replace(/<html lang="[^"]*"/, () => `<html lang="${escapeHtml(seo.locale)}"`)
  out = out.replace(/<title>[\s\S]*?<\/title>/, () => `<title>${escapeHtml(seo.title)}</title>`)
  out = replaceAttr(out, /<meta name="description"[^>]*>/, "content", seo.description)
  out = replaceAttr(out, /<meta property="og:title"[^>]*>/, "content", seo.title)
  out = replaceAttr(out, /<meta property="og:description"[^>]*>/, "content", seo.description)
  out = replaceAttr(out, /<meta property="og:locale"[^>]*>/, "content", seo.locale === "en" ? "en_GB" : "de_DE")
  out = replaceAttr(out, /<meta property="og:image"[^>]*>/, "content", seo.ogImage)
  // og:site_name is not part of RouteSeo — it is the same on every route —
  // but it still has to be rewritten here. useSeo() sets it from
  // center.brand inside an effect, so without this line the template's
  // static fallback is what every crawler, link-preview scraper and no-JS
  // visitor reads on all 87 pages.
  out = replaceAttr(out, /<meta property="og:site_name"[^>]*>/, "content", center.brand)

  // These have no static default in the template — the plain page has no
  // one true canonical URL, and a page with no English counterpart must
  // emit no hreflang pair at all. Both are inserted fresh, right before
  // </head>, rather than replaced.
  const inserted = [
    `<link rel="canonical" href="${escapeHtml(seo.canonical)}" />`,
    `<meta property="og:url" content="${escapeHtml(seo.canonical)}" />`,
    ...(seo.noindex ? ['<meta name="robots" content="noindex" />'] : []),
    ...seo.alternates.map(
      (alt) => `<link rel="alternate" hreflang="${escapeHtml(alt.hreflang)}" href="${escapeHtml(alt.href)}" />`,
    ),
  ].join("\n    ")
  out = out.replace("</head>", () => `    ${inserted}\n  </head>`)

  return out
}

function injectRoot(html: string, markup: string): string {
  return html.replace('<div id="root"></div>', () => `<div id="root">${markup}</div>`)
}

function outputPathFor(route: string): string {
  if (route === "/") return join("dist", "index.html")
  return join("dist", route, "index.html")
}

function main() {
  const template = readFileSync(join("dist", "index.html"), "utf8")
  const routes = allRoutes()

  for (const route of routes) {
    const markup = render(route)
    const seo = seoForRoute(route)
    const html = injectRoot(injectHead(template, seo), markup)

    const outPath = outputPathFor(route)
    mkdirSync(dirname(outPath), { recursive: true })
    writeFileSync(outPath, html)
  }

  console.log(`prerender: wrote ${routes.length} routes`)
}

main()
