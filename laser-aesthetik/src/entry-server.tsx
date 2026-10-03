import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router-dom"
import { AppRoutes } from "./App"
import { basename } from "@/lib/basename"

// React 19 auto-generates a <link rel="preload" as="image" ...> for every
// eagerly-loaded <img> it renders during SSR (each treatment's hero image
// on treatment pages; the navbar contributed one too until its logo was
// replaced by a text wordmark). With the
// streaming renderers that hoist happens into a real <head>; renderToString
// has no <head> to hoist into, so it falls back to emitting the links
// inline, as extra leading siblings of the actual root element. hydrateRoot
// never generates that same leading run of <link> nodes on the client (it
// has no equivalent side-channel for already-server-rendered elements), so
// left in place they are extra nodes hydration cannot match — a real,
// reproducible mismatch (confirmed via a full dev-mode React build; the
// production build stays silent for a single stray link but throws error
// #418 once a page has two, e.g. every treatment detail page). Stripping
// this leading run keeps the preload optimisation's *intent* (the browser
// still discovers and loads these images immediately from the <img> tags
// themselves) while making the server string match what the client mounts.
function stripLeadingPreloadHints(html: string): string {
  return html.replace(/^(?:<link rel="preload"[^>]*>)+/, "")
}

/**
 * Renders one route to an HTML string, given an explicit react-router
 * `basename`. Pulled out of render() below so the one fact that makes this
 * work is directly testable: StaticRouter expects `location` to include the
 * basename and strips it off itself internally. Pass it the bare pathname
 * while `basename` is set and it matches no route at all — renderToString
 * then returns "", silently, which is why this needs its own test rather
 * than trusting that "the 87 files got written" means the pages have
 * content.
 */
export function renderWithBasename(pathname: string, base: string): string {
  const html = renderToString(
    <StaticRouter basename={base} location={`${base}${pathname}`}>
      <AppRoutes />
    </StaticRouter>,
  )
  return stripLeadingPreloadHints(html)
}

/**
 * Renders one route to an HTML string for scripts/prerender.ts. Takes only
 * <AppRoutes/>, not the BrowserRouter-wrapped default export of App.tsx —
 * BrowserRouter reads window.history, which does not exist on the server;
 * StaticRouter is the server-safe substitute, fixed at `pathname` for the
 * single render.
 *
 * Signature stays `render(pathname: string): string` — the clean route
 * (`/preise`), never the basename-prefixed one — so scripts/prerender.ts
 * and anything else calling this with allRoutes()'s output keep working
 * unchanged regardless of PREVIEW_BASE. `basename` (from
 * import.meta.env.BASE_URL, "" outside of a preview build) is applied here,
 * once, via renderWithBasename above.
 */
export function render(pathname: string): string {
  return renderWithBasename(pathname, basename)
}
