import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router-dom"
import { AppRoutes } from "./App"
import { basename } from "@/lib/basename"
import { pageTitle, ssrSeoSink } from "@/lib/useSeo"
import { SITE_URL, DEFAULT_DESCRIPTION } from "@/content/seo"

// React 19's renderToString emits <link rel="preload"> hints for eagerly
// rendered <img>s inline (it has no <head> to hoist them into), as leading
// siblings of the root element. hydrateRoot never produces them on the client,
// so left in place they are a hydration mismatch. Stripping them keeps the
// server markup identical to what the client mounts; the <img> tags still
// trigger the same image loads.
function stripLeadingPreloadHints(html: string): string {
  return html.replace(/^(?:<link rel="preload"[^>]*>)+/, "")
}

export interface Rendered {
  html: string
  title: string
  description?: string
  canonical: string
}

/**
 * Render one clean route (e.g. "/impressum") to HTML plus the SEO the page
 * declared via useSeo during that render. StaticRouter is the server-safe
 * substitute for App's BrowserRouter (which reads window.history); it expects
 * `location` to include the basename and strips it off internally.
 */
export function render(pathname: string): Rendered {
  ssrSeoSink.title = pageTitle(undefined)
  ssrSeoSink.description = DEFAULT_DESCRIPTION

  const location = `${basename === "/" ? "" : basename}${pathname}`
  const html = renderToString(
    <StaticRouter basename={basename} location={location}>
      <AppRoutes />
    </StaticRouter>,
  )

  return {
    html: stripLeadingPreloadHints(html),
    title: ssrSeoSink.title,
    description: ssrSeoSink.description,
    canonical: SITE_URL + pathname,
  }
}
