import { mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { render } from "../dist-ssr/entry-server.js"
import { allRoutes } from "./allRoutes"
import { injectHead, injectRoot } from "./prerenderHtml"

function outputPathFor(route: string): string {
  if (route === "/") return join("dist", "index.html")
  return join("dist", route, "index.html")
}

// Not a real route — renders the catch-all NotFound branch for dist/404.html,
// which GitHub Pages serves for any unmatched path.
const NOT_FOUND_PATH = "/404"

function writeRoute(route: string, outPath: string, template: string) {
  const r = render(route)
  const html = injectRoot(injectHead(template, r), r.html)
  mkdirSync(dirname(outPath), { recursive: true })
  writeFileSync(outPath, html)
}

function main() {
  const template = readFileSync(join("dist", "index.html"), "utf8")
  const routes = allRoutes()

  for (const route of routes) writeRoute(route, outputPathFor(route), template)

  writeRoute(NOT_FOUND_PATH, join("dist", "404.html"), template)

  // Keep GitHub Pages' Jekyll from ignoring any build output.
  writeFileSync(join("dist", ".nojekyll"), "")

  console.log(`prerender: wrote ${routes.length} routes + 404.html`)
}

main()
