import { renderToString } from "react-dom/server"
import { render } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { Section } from "@/components/layout/Section"

/*
 * Every page on this site is prerendered to static HTML and then hydrated. A
 * scroll-linked transform is the easiest way to break that: if the value the
 * server writes differs from the value the client computes on its first
 * render, React discards the whole prerendered tree and rebuilds it, and the
 * markup we upload stops being the markup anyone sees.
 *
 * These pin the agreement directly — server output and first client render —
 * because it is invisible in normal use. A mismatch does not crash or look
 * wrong; the page simply stops being the prerendered one, and nobody notices
 * until the SEO does.
 */
describe("scroll drift and hydration", () => {
  it("writes a neutral transform into the prerendered HTML", () => {
    const html = renderToString(<Section flank="left">Inhalt</Section>)
    expect(html).toContain("transform:none")
  })

  it("renders the same neutral transform on the client", () => {
    // Matching the server is the entire contract. Any drift range that does
    // not begin at 0 — or any value read from scroll position before mount —
    // breaks it, and breaks it only for readers who arrive mid-page.
    const { container } = render(<Section flank="left">Inhalt</Section>)
    const moving = container.querySelector("[data-flank] > div")
    expect(moving).not.toBeNull()
    expect((moving as HTMLElement).style.transform).toBe("none")
  })
})
