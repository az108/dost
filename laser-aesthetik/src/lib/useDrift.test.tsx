import { useRef } from "react"
import { motion } from "motion/react"
import { renderToString } from "react-dom/server"
import { render } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { useDrift } from "@/lib/useDrift"

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
 *
 * Exercised through a minimal harness rather than through a real caller: this
 * hook's only consumer is now Hero, which needs a router and a full prop set
 * just to mount. The measured element and the moving element are still kept
 * separate here, matching Hero's own shape — see useDrift.ts's doc comment
 * for why that separation matters.
 */
function Drifter() {
  const ref = useRef<HTMLDivElement>(null)
  const y = useDrift(ref, 36)
  return (
    <div ref={ref}>
      <motion.div data-testid="drifter" style={{ y }} />
    </div>
  )
}

describe("scroll drift and hydration", () => {
  it("writes a neutral transform into the prerendered HTML", () => {
    const html = renderToString(<Drifter />)
    expect(html).toContain("transform:none")
  })

  it("renders the same neutral transform on the client", () => {
    // Matching the server is the entire contract. Any drift range that does
    // not begin at 0 — or any value read from scroll position before mount —
    // breaks it, and breaks it only for readers who arrive mid-page.
    const { getByTestId } = render(<Drifter />)
    expect(getByTestId("drifter").style.transform).toBe("none")
  })
})
