import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { MemoryRouter } from "react-router-dom"
import CategoryPage from "./CategoryPage"
import { treatmentsByPillar } from "@/content/treatments"

function renderPage(pillar: "laser" | "physio" | "aesthetik") {
  return render(
    <MemoryRouter>
      <CategoryPage pillar={pillar} />
    </MemoryRouter>,
  )
}

describe("CategoryPage", () => {
  it("renders the pillar headline as the only h1", () => {
    renderPage("laser")
    const h1s = screen.getAllByRole("heading", { level: 1 })
    expect(h1s).toHaveLength(1)
    expect(h1s[0]).toHaveTextContent("Laser, der wirklich wirkt")
  })

  it("renders a card for every treatment in the pillar", () => {
    renderPage("physio")
    for (const t of treatmentsByPillar("physio", "de")) {
      expect(screen.getByRole("heading", { level: 3, name: t.title })).toBeInTheDocument()
    }
  })

  it("shows no treatments from other pillars", () => {
    renderPage("aesthetik")
    expect(screen.queryByRole("heading", { level: 3, name: "Achseln" })).toBeNull()
  })

  it("renders the pillar intro paragraphs", () => {
    renderPage("laser")
    expect(screen.getByText(/Moderne Lasertechnologie arbeitet gezielt/)).toBeInTheDocument()
  })

  it("offers a booking link", () => {
    renderPage("laser")
    expect(screen.getAllByRole("link", { name: /Termin/ }).length).toBeGreaterThan(0)
  })
})
