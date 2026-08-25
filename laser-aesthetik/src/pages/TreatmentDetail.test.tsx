import { render, screen, within } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import TreatmentDetail from "./TreatmentDetail"
import NotFound from "./NotFound"
import { treatmentsByPillar } from "@/content/treatments"

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/behandlungen/:slug" element={<TreatmentDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MemoryRouter>,
  )
}

describe("TreatmentDetail", () => {
  it("renders the headline as the page's only h1, with the accent word", () => {
    renderAt("/behandlungen/achseln")
    const h1s = screen.getAllByRole("heading", { level: 1 })
    expect(h1s).toHaveLength(1)
    expect(h1s[0]).toHaveTextContent("Achseln dauerhaft glatt")
  })

  it("renders every body paragraph", () => {
    renderAt("/behandlungen/achseln")
    expect(screen.getByText(/Klassiker der Laser-Haarentfernung/)).toBeInTheDocument()
  })

  it("renders the benefit checklist", () => {
    renderAt("/behandlungen/achseln")
    expect(screen.getByText("Kein Rasurbrand, keine eingewachsenen Haare")).toBeInTheDocument()
  })

  it("shows duration and price in the spec row", () => {
    renderAt("/behandlungen/achseln")
    // Scoped to the spec row on purpose: the related-treatment cards at the
    // foot of the page render duration chips too, and "Kinn" is also 10 Min.
    // An unscoped getByText would match twice and throw.
    expect(screen.getByText("Dauer").closest("div")).toHaveTextContent("10 Min.")
    expect(screen.getByText("Preis").closest("div")).toHaveTextContent("ab 38 €")
  })

  it("shows the package tiers for a fixed-price treatment", () => {
    renderAt("/behandlungen/achseln")
    expect(screen.getByText(/165 €/)).toBeInTheDocument()
    expect(screen.getByText(/380 €/)).toBeInTheDocument()
  })

  it("shows 'Preis auf Anfrage' and no package tiers for on-request treatments", () => {
    renderAt("/behandlungen/faltenbehandlung")
    // Scoped to the pricing panel: related-treatment cards for other
    // on-request treatments render the same string, so an unscoped query
    // matches several and throws.
    const pricing = screen.getByTestId("pricing-block")
    expect(within(pricing).getByText("Preis auf Anfrage")).toBeInTheDocument()
    expect(screen.queryByText(/3er/)).toBeNull()
  })

  it("breadcrumbs back through the pillar", () => {
    renderAt("/behandlungen/achseln")
    expect(screen.getByRole("link", { name: "Laser" })).toHaveAttribute("href", "/laser")
  })

  it("suggests other treatments from the same pillar, never itself", () => {
    renderAt("/behandlungen/achseln")
    const nav = screen.getByRole("navigation", { name: "Weitere Behandlungen" })
    const related = within(nav).getAllByRole("link")
    expect(related.length).toBeGreaterThan(0)
    expect(
      related.every((l) => l.getAttribute("href") !== "/behandlungen/achseln"),
    ).toBe(true)
  })

  it("lists every sibling treatment in the sidebar, excluding the current one", () => {
    renderAt("/behandlungen/achseln")
    const nav = screen.getByRole("navigation", { name: "Weitere Behandlungen" })
    const links = within(nav).getAllByRole("link")
    expect(links.length).toBe(treatmentsByPillar("laser").length - 1)
    expect(links.map((l) => l.getAttribute("href"))).not.toContain("/behandlungen/achseln")
  })

  it("renders NotFound for an unknown slug instead of crashing", () => {
    renderAt("/behandlungen/gibt-es-nicht")
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/nicht gefunden/i)
  })

  it("offers a booking link", () => {
    renderAt("/behandlungen/achseln")
    const booking = screen.getAllByRole("link", { name: /Termin/ })
    expect(booking.length).toBeGreaterThan(0)
  })

  it("still suggests related treatments when every sibling is on-request", () => {
    // Regression guard: filtering related treatments by whether they have a
    // displayable price silently removed this section from all 10 physio and
    // Ästhetik pages. Cross-linking must not depend on pricing.
    renderAt("/behandlungen/faltenbehandlung")
    const nav = screen.getByRole("navigation", { name: "Weitere Behandlungen" })
    const links = within(nav)
      .getAllByRole("link")
      .map((l) => l.getAttribute("href"))
      .filter((h) => h?.startsWith("/behandlungen/"))
    expect(links.length).toBeGreaterThan(0)
    expect(links).not.toContain("/behandlungen/faltenbehandlung")
  })
})
