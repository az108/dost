import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { MemoryRouter } from "react-router-dom"
import { Footer } from "./Footer"

function renderFooter() {
  return render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>,
  )
}

describe("Footer", () => {
  it("renders a contentinfo landmark", () => {
    renderFooter()
    expect(screen.getByRole("contentinfo")).toBeInTheDocument()
  })

  it("shows the practice address", () => {
    renderFooter()
    expect(screen.getByText(/Weiher 3, 84166 Köning/)).toBeInTheDocument()
  })

  it("links the email as a mailto", () => {
    renderFooter()
    expect(screen.getByRole("link", { name: "info@drdosthealth.com" })).toHaveAttribute(
      "href",
      "mailto:info@drdosthealth.com",
    )
  })

  it("lists all three opening-hours rows", () => {
    renderFooter()
    expect(screen.getByText("Mo – Fr")).toBeInTheDocument()
    expect(screen.getByText("Samstag")).toBeInTheDocument()
    expect(screen.getByText("Geschlossen")).toBeInTheDocument()
  })

  it("links Impressum and Datenschutz", () => {
    renderFooter()
    expect(screen.getByRole("link", { name: "Impressum" })).toHaveAttribute("href", "/impressum")
    expect(screen.getByRole("link", { name: "Datenschutz" })).toHaveAttribute("href", "/datenschutz")
  })

  it("renders no phone affordance at all while no number has been supplied", () => {
    // The invariant is not "the sentinel string is hidden" — it is that there
    // is no phone link whatsoever. A future edit rendering "Telefonnummer
    // folgt" instead would pass a string check but still show patients a
    // placeholder where they expect a number.
    const { container } = renderFooter()
    expect(screen.queryByText(/TODO/i)).toBeNull()
    expect(container.querySelector('a[href^="tel:"]')).toBeNull()
  })
})
