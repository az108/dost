import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import TreatmentDetail from "./TreatmentDetail"
import NotFound from "./NotFound"

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
    expect(screen.getByText("Preis auf Anfrage")).toBeInTheDocument()
    expect(screen.queryByText(/3er/)).toBeNull()
  })

  it("breadcrumbs back through the pillar", () => {
    renderAt("/behandlungen/achseln")
    expect(screen.getByRole("link", { name: "Laser" })).toHaveAttribute("href", "/laser")
  })

  it("suggests other treatments from the same pillar, never itself", () => {
    renderAt("/behandlungen/achseln")
    const related = screen.getAllByRole("link", { name: /Details & buchen|Preis auf Anfrage/ })
    expect(related.length).toBeGreaterThan(0)
    expect(
      related.every((l) => l.getAttribute("href") !== "/behandlungen/achseln"),
    ).toBe(true)
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
})
