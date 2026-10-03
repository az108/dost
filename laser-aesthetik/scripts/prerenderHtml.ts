import { center } from "../src/content/center"
import { seoForRoute } from "../src/lib/seoForRoute"

/**
 * The pure HTML-templating half of scripts/prerender.ts, split out so it is
 * importable by a test without pulling in the filesystem-writing main() —
 * that would run the real prerender step (and needs dist-ssr/entry-server.js
 * to already exist) on every `import`, including a test's.
 */

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

/**
 * The single <meta name="robots"> value for one page, or null to emit none.
 * Two independent reasons a page can end up noindex, and they must not
 * collide into two tags on one page:
 *
 *   - forceNoindex: every page in the PREVIEW_BASE build, regardless of
 *     route. The preview is publicly reachable and carries the unfinished
 *     legal scaffolds; robots.txt's Disallow only stops crawling, not the
 *     indexing of a URL discovered some other way, so this has to ship too.
 *   - seo.noindex: the two checkout return pages, in every build — nothing
 *     to do with the preview.
 *
 * forceNoindex wins when both apply: "noindex, nofollow" is a strict
 * superset of "noindex" alone.
 */
export function robotsMetaContent(seo: ReturnType<typeof seoForRoute>, forceNoindex: boolean): string | null {
  if (forceNoindex) return "noindex, nofollow"
  if (seo.noindex) return "noindex"
  return null
}

/**
 * dist/robots.txt for the GitHub Pages preview build. Swapped in by
 * prerender.ts's main() after `vite build` has already copied
 * public/robots.txt into dist/ — the production robots.txt is that file,
 * unmodified, in every build that does not set PREVIEW_BASE.
 */
export const PREVIEW_ROBOTS_TXT = "User-agent: *\nDisallow: /\n"

export function injectHead(html: string, seo: ReturnType<typeof seoForRoute>, forceNoindex: boolean): string {
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
  const robotsContent = robotsMetaContent(seo, forceNoindex)
  const inserted = [
    `<link rel="canonical" href="${escapeHtml(seo.canonical)}" />`,
    `<meta property="og:url" content="${escapeHtml(seo.canonical)}" />`,
    ...(robotsContent ? [`<meta name="robots" content="${robotsContent}" />`] : []),
    ...seo.alternates.map(
      (alt) => `<link rel="alternate" hreflang="${escapeHtml(alt.hreflang)}" href="${escapeHtml(alt.href)}" />`,
    ),
  ].join("\n    ")
  out = out.replace("</head>", () => `    ${inserted}\n  </head>`)

  return out
}

export function injectRoot(html: string, markup: string): string {
  return html.replace('<div id="root"></div>', () => `<div id="root">${markup}</div>`)
}
