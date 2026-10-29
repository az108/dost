/**
 * The pure HTML-templating half of scripts/prerender.ts, split out so it is
 * unit-testable without the filesystem-writing main() (which imports the built
 * dist-ssr/entry-server.js and would run the real prerender on import).
 *
 * Values are spliced into the raw HTML template as strings, not via DOM APIs
 * that would escape automatically, so each goes through escapeHtml first — an
 * unescaped "<" or "&" in a condition title or description would corrupt the
 * document.
 */
export interface RouteSeo {
  title: string
  description?: string
  canonical: string
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

// Replaces the content="..." of the single tag matched by `tagPattern`. The
// replacer-function form of String.replace keeps a "$" in an injected value
// from being read as a replacement pattern.
function replaceAttr(html: string, tagPattern: RegExp, attr: string, value: string): string {
  const escaped = escapeHtml(value)
  return html.replace(tagPattern, (tag) =>
    tag.replace(new RegExp(`${attr}="[^"]*"`), `${attr}="${escaped}"`),
  )
}

export function injectHead(html: string, seo: RouteSeo): string {
  let out = html
  out = out.replace(/<title>[\s\S]*?<\/title>/, () => `<title>${escapeHtml(seo.title)}</title>`)
  out = replaceAttr(out, /<meta property="og:title"[^>]*>/, "content", seo.title)
  if (seo.description) {
    out = replaceAttr(out, /<meta name="description"[^>]*>/, "content", seo.description)
    out = replaceAttr(out, /<meta property="og:description"[^>]*>/, "content", seo.description)
  }
  // No static default in the template for these — inserted fresh per page.
  const inserted = [
    `<link rel="canonical" href="${escapeHtml(seo.canonical)}" />`,
    `<meta property="og:url" content="${escapeHtml(seo.canonical)}" />`,
  ].join("\n    ")
  out = out.replace("</head>", () => `    ${inserted}\n  </head>`)
  return out
}

export function injectRoot(html: string, markup: string): string {
  return html.replace('<div id="root"></div>', () => `<div id="root">${markup}</div>`)
}
