import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router-dom"
import { AppRoutes } from "./App"

// React 19 auto-generates a <link rel="preload" as="image" ...> for every
// eagerly-loaded <img> it renders during SSR (the Navbar logo on every
// page, plus each treatment's hero image on treatment pages). With the
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
 * Renders one route to an HTML string for scripts/prerender.ts. Takes only
 * <AppRoutes/>, not the BrowserRouter-wrapped default export of App.tsx —
 * BrowserRouter reads window.history, which does not exist on the server;
 * StaticRouter is the server-safe substitute, fixed at `pathname` for the
 * single render.
 */
export function render(pathname: string): string {
  const html = renderToString(
    <StaticRouter location={pathname}>
      <AppRoutes />
    </StaticRouter>,
  )
  return stripLeadingPreloadHints(html)
}
