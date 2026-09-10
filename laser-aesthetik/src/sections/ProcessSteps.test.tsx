import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { MemoryRouter } from "react-router-dom"
import { ProcessSteps } from "./ProcessSteps"

function renderSteps() {
  // The section reads the locale off the route, so it needs a router.
  return render(
    <MemoryRouter>
      <ProcessSteps />
    </MemoryRouter>,
  )
}

describe("ProcessSteps", () => {
  it("renders every step as a list item in an ordered list", () => {
    // The four steps have to stay readable as an ordered list on any
    // surface — narrow screens, print, a screen reader walking the
    // document — not only as the scroll-paced rail wide screens get.
    const { container } = renderSteps()
    expect(container.querySelector("ol")).not.toBeNull()
    expect(screen.getAllByRole("listitem")).toHaveLength(4)
  })

  it("marks the first step active so the pre-rendered page never arrives fully dimmed", () => {
    // Which step is lit is driven by IntersectionObserver, which does not
    // exist until hydration. Defaulting to the first step means the static
    // HTML we upload already has one step lit, rather than four grey rails
    // waiting for JavaScript that may be slow or blocked.
    renderSteps()
    const active = screen
      .getAllByRole("listitem")
      .filter((li) => li.dataset.active === "true")
    expect(active).toHaveLength(1)
    expect(active[0]).toHaveTextContent("Termin")
  })

  // A third test asserted the alt text of the photograph this section used
  // to pin beside the steps — the doctor holding the laser handpiece in his
  // own practice. Both the photograph and the test went with the separation
  // from Privatpraxis Dr. Dost. The import path named neither him nor his
  // practice, so only that alt text gave the picture away; the grep guard in
  // content.test.ts would never have caught it. Slice 2 sources a
  // replacement the center can actually claim.
})
