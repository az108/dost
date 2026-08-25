import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { MemoryRouter } from "react-router-dom"
import { AppRoutes } from "@/App"

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <AppRoutes />
    </MemoryRouter>,
  )
}

const routes: [string, RegExp][] = [
  ["/en", /delivers visible results/],
  ["/en/laser", /actually works/],
  ["/en/physio", /pain-free/],
  ["/en/aesthetics", /yourself/],
  ["/en/treatments/underarms", /Underarms/],
  ["/en/prices", /surprise no one/],
  ["/en/practice", /takes its time/],
  ["/en/contact", /reach us/],
]

describe("routing (English)", () => {
  it.each(routes)("renders %s with exactly one h1", (path, pattern) => {
    renderAt(path)
    const h1s = screen.getAllByRole("heading", { level: 1 })
    expect(h1s).toHaveLength(1)
    expect(h1s[0].textContent).toMatch(pattern)
  })

  it.each(routes)("renders %s with no skipped heading level", (path) => {
    renderAt(path)
    const levels = screen
      .getAllByRole("heading")
      .map((h) => Number(h.tagName[1]))
    for (let i = 1; i < levels.length; i++) {
      expect(
        levels[i] - levels[i - 1],
        `heading jumped from h${levels[i - 1]} to h${levels[i]} on ${path}`,
      ).toBeLessThanOrEqual(1)
    }
  })

  it("renders NotFound in English for an unknown English path", () => {
    renderAt("/en/gibt-es-nicht")
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/page not found/i)
  })

  it("404s a German slug requested on the English treatment route, in English", () => {
    // "achseln" is the German slug for the "underarms" treatment.
    // treatmentBySlug() matches per-locale, so an English route must not
    // resolve a German slug — it should fall through to NotFound. The 404
    // itself must render in English too: an English visitor who mistypes a
    // URL must not be shown German copy or sent back to the German home.
    renderAt("/en/treatments/achseln")
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/page not found/i)
    expect(screen.getByRole("link", { name: /go to the homepage/i })).toHaveAttribute("href", "/en")
  })

  it("renders the navigation and footer landmarks on every English page", () => {
    renderAt("/en/laser")
    expect(screen.getByRole("navigation", { name: "Hauptnavigation" })).toBeInTheDocument()
    expect(screen.getByRole("contentinfo")).toBeInTheDocument()
  })
})
