import { cleanup, render } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { afterEach, describe, expect, it } from "vitest"
import { allRoutes } from "../scripts/allRoutes"
import { AppRoutes } from "@/App"
import { seoForRoute } from "@/lib/seoForRoute"
import { medicalClinicJsonLd } from "@/lib/structuredData"

/**
 * The whole-site sweep for unfilled sentinels.
 *
 * Sentinel guards existed per surface — Footer, Kontakt, ContactForm,
 * legal — and nothing covered Home, Über uns, Standorte or the JSON-LD. All
 * three unguarded formatAddress() calls found during this slice were on
 * surfaces no sentinel test rendered; each was caught by a human reading a
 * diff, which is not a mechanism.
 *
 * The route list comes from scripts/allRoutes(), the same function
 * prerender.ts and generate-sitemap.ts build from, rather than being
 * hand-listed here: a route added to the site is swept from the moment it
 * exists, and one that is removed stops being swept without a stale test.
 */
const SENTINEL = /TODO_/

afterEach(cleanup)

describe("no unfilled sentinel reaches a rendered page", () => {
  it.each(allRoutes())("%s", (route) => {
    const { container } = render(
      <MemoryRouter initialEntries={[route]}>
        <AppRoutes />
      </MemoryRouter>,
    )

    // innerHTML, not textContent: a sentinel in an href, a src, an alt or a
    // title attribute never appears in the text and is just as shipped.
    expect(container.innerHTML, `${route} renders a TODO_ sentinel`).not.toMatch(SENTINEL)

    // useSeo() writes the title, description, canonical and og: tags into
    // the real document head, which is outside `container` entirely.
    expect(document.title, `${route} has a TODO_ sentinel in its title`).not.toMatch(SENTINEL)
    expect(document.head.innerHTML, `${route} has a TODO_ sentinel in <head>`).not.toMatch(SENTINEL)
  })
})

describe("no unfilled sentinel reaches machine-readable output", () => {
  it.each(allRoutes())("seoForRoute(%s)", (route) => {
    // The prerenderer does not mount React: it writes each page's <head>
    // from seoForRoute() directly. A sentinel here ships to 84 static files
    // and to every crawler, without any component ever rendering it.
    expect(JSON.stringify(seoForRoute(route)), `${route} SEO metadata`).not.toMatch(SENTINEL)
  })

  it("medicalClinicJsonLd()", () => {
    // Injected by main.tsx into document.head at startup, so it belongs to
    // no route and the sweep above cannot see it. A placeholder address or
    // phone number here is published to search engines as structured data.
    expect(medicalClinicJsonLd()).not.toMatch(SENTINEL)
  })
})
