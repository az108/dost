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
    // On wide screens this section pins a photograph and scrolls the steps
    // past it. That is decoration. The four steps have to stay readable as an
    // ordered list when the sticky column is not rendered at all — narrow
    // screens, print, a screen reader walking the document.
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

  it("gives the pinned photograph real alternative text", () => {
    // It carries the section's meaning — the physician performs the treatment
    // himself — so it is content, not an empty-alt spacer.
    renderSteps()
    expect(screen.getByRole("img", { name: /Laserhandstück/ })).toBeInTheDocument()
  })
})
