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
  ["/", /sichtbar wirkt/],
  ["/laser", /wirklich wirkt/],
  ["/physio", /ohne Schmerz/],
  ["/aesthetik", /Sie selbst/],
  ["/behandlungen/achseln", /Achseln/],
  ["/preise", /niemanden überraschen/],
  ["/praxis", /Zeit für Sie/],
  ["/kontakt", /So erreichen/],
  ["/impressum", /Impressum/],
  ["/datenschutz", /Datenschutz/],
]

describe("routing", () => {
  it.each(routes)("renders %s with exactly one h1", (path, pattern) => {
    renderAt(path)
    const h1s = screen.getAllByRole("heading", { level: 1 })
    expect(h1s).toHaveLength(1)
    expect(h1s[0].textContent).toMatch(pattern)
  })

  it("renders NotFound for an unknown path", () => {
    renderAt("/gibt-es-nicht")
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/nicht gefunden/i)
  })

  it("renders the navigation and footer landmarks on every page", () => {
    renderAt("/laser")
    expect(screen.getByRole("navigation", { name: "Hauptnavigation" })).toBeInTheDocument()
    expect(screen.getByRole("contentinfo")).toBeInTheDocument()
  })
})
