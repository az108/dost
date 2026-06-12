import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { MemoryRouter } from "react-router-dom"
import { AppRoutes } from "./App"
import { behandlungen } from "./content/behandlungen"
import { fachbereiche } from "./content/fachbereiche"

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <AppRoutes />
    </MemoryRouter>,
  )
}

describe("routes", () => {
  it("renders home with brand", () => {
    renderAt("/")
    expect(screen.getAllByText(/Dr\. Dost/i).length).toBeGreaterThan(0)
  })

  it("renders a detail page for every Behandlung", () => {
    for (const e of behandlungen) {
      const { unmount } = renderAt(`/behandlungen/${e.slug}`)
      expect(
        screen.getAllByRole("heading", { name: new RegExp(e.title, "i") }).length,
      ).toBeGreaterThan(0)
      unmount()
    }
  })

  it("renders a detail page for every Fachbereich", () => {
    for (const e of fachbereiche) {
      const { unmount } = renderAt(`/fachbereiche/${e.slug}`)
      expect(
        screen.getAllByRole("heading", { name: new RegExp(e.title, "i") }).length,
      ).toBeGreaterThan(0)
      unmount()
    }
  })

  it("renders Impressum and Datenschutz", () => {
    const { unmount } = renderAt("/impressum")
    expect(screen.getByRole("heading", { name: /Impressum/i })).toBeInTheDocument()
    unmount()
    renderAt("/datenschutz")
    expect(screen.getByRole("heading", { name: /Datenschutz/i })).toBeInTheDocument()
  })

  it("renders a 404 page for unknown paths", () => {
    const { unmount } = renderAt("/gibt-es-nicht")
    expect(
      screen.getByRole("heading", { name: /Seite nicht gefunden/i }),
    ).toBeInTheDocument()
    unmount()
    renderAt("/behandlungen/unbekannter-slug")
    expect(
      screen.getByRole("heading", { name: /Seite nicht gefunden/i }),
    ).toBeInTheDocument()
  })
})
