import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { MemoryRouter } from "react-router-dom"
import Home from "./Home"

function renderHome() {
  return render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>,
  )
}

describe("Home", () => {
  it("renders exactly one h1", () => {
    renderHome()
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1)
  })

  it("links to all three pillar pages", () => {
    renderHome()
    for (const path of ["/laser", "/physio", "/aesthetik"]) {
      expect(
        screen.getAllByRole("link").some((l) => l.getAttribute("href") === path),
      ).toBe(true)
    }
  })

  it("shows a selection of popular treatments", () => {
    renderHome()
    expect(screen.getByRole("heading", { level: 3, name: "Achseln" })).toBeInTheDocument()
  })

  it("links to the price page", () => {
    renderHome()
    expect(
      screen.getAllByRole("link").some((l) => l.getAttribute("href") === "/preise"),
    ).toBe(true)
  })

  it("offers booking above the fold", () => {
    renderHome()
    expect(screen.getAllByRole("link", { name: /Termin/ }).length).toBeGreaterThan(0)
  })
})
