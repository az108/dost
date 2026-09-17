import { describe, expect, it } from "vitest"
import { render, renderWithBasename } from "./entry-server"

/**
 * The trap this file exists to catch: StaticRouter expects `location` to
 * include the basename and strips it off itself. Pass the bare pathname
 * through unchanged while `basename` is set, and react-router matches no
 * route at all — renderToString then returns "", which is a well-formed
 * empty string, not a thrown error. A test that only checks the prerendered
 * *files* exist (scripts/routes.test.ts, the "87 routes" build check) would
 * never see that: the file is there, it is just empty inside <div id="root">.
 *
 * render()'s public signature stays `render(pathname: string): string` — a
 * route stays "/preise", never "/laser-aesthetik-preview/preise" — because
 * scripts/prerender.ts and a route-sweeping test on another branch call it
 * with the clean route. renderWithBasename() is the same StaticRouter call
 * with the basename made an explicit parameter instead of read from
 * import.meta.env.BASE_URL, so the exact failure mode above is exercised
 * directly without needing to flip that build-time env var mid-suite.
 */
describe("render", () => {
  it("renders real markup at the default (root) basename", () => {
    const html = render("/preise")
    expect(html).not.toBe("")
    expect(html).toContain("Preise")
  })
})

describe("renderWithBasename", () => {
  it("is not empty when a basename is set and location includes it", () => {
    const html = renderWithBasename("/preise", "/laser-aesthetik-preview")
    expect(html).not.toBe("")
    expect(html).toContain("Preise")
  })

  it("prefixes internal links with the basename", () => {
    const html = renderWithBasename("/preise", "/laser-aesthetik-preview")
    expect(html).toContain('href="/laser-aesthetik-preview/laser"')
  })

  it("still renders correctly with an empty basename (the default build)", () => {
    const html = renderWithBasename("/preise", "")
    expect(html).not.toBe("")
    expect(html).toContain("Preise")
    expect(html).toContain('href="/laser"')
  })
})
