import { mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { render } from "../dist-ssr/entry-server.js"
import { seoForRoute } from "../src/lib/seoForRoute"
import { allRoutes } from "./allRoutes"
import { injectHead, injectRoot, PREVIEW_ROBOTS_TXT } from "./prerenderHtml"

function outputPathFor(route: string): string {
  if (route === "/") return join("dist", "index.html")
  return join("dist", route, "index.html")
}

// No route in allRoutes() (scripts/allRoutes.ts) is this path — it exists
// only so render()/seoForRoute() hit the same catch-all NotFound branch
// every unmapped URL does, to build dist/404.html's content.
const NOT_FOUND_PATH = "/404"

/**
 * GitHub Pages-only files, written after the route loop below and only
 * when PREVIEW_BASE is set — none of this exists in the production dist/,
 * which is served from Apache and does not need it.
 */
function writePreviewOnlyFiles(template: string) {
  // Pages ignores files and folders starting with "_" (Jekyll's default)
  // unless this marker is present.
  writeFileSync(join("dist", ".nojekyll"), "")

  // Overrides the production robots.txt that `vite build` already copied
  // from public/robots.txt into dist/ verbatim.
  writeFileSync(join("dist", "robots.txt"), PREVIEW_ROBOTS_TXT)

  // Pages serves this file for any path with no matching route. The site's
  // own NotFound page is the right content, rendered through the same
  // template/head/root pipeline as every other page (forceNoindex: true,
  // like everything else in this build).
  const notFoundHtml = injectRoot(
    injectHead(template, seoForRoute(NOT_FOUND_PATH), true),
    render(NOT_FOUND_PATH),
  )
  writeFileSync(join("dist", "404.html"), notFoundHtml)
}

function main() {
  const template = readFileSync(join("dist", "index.html"), "utf8")
  const routes = allRoutes()
  const isPreview = Boolean(process.env.PREVIEW_BASE)

  for (const route of routes) {
    const markup = render(route)
    const seo = seoForRoute(route)
    const html = injectRoot(injectHead(template, seo, isPreview), markup)

    const outPath = outputPathFor(route)
    mkdirSync(dirname(outPath), { recursive: true })
    writeFileSync(outPath, html)
  }

  console.log(`prerender: wrote ${routes.length} routes`)

  if (isPreview) {
    writePreviewOnlyFiles(template)
    console.log("prerender: wrote preview-only .nojekyll, robots.txt and 404.html")
  }
}

main()
