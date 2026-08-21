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

  it("hides the phone row while no number has been supplied", () => {
    // practice.phone is still the TODO sentinel, so no phone line should
    // render at all — better an absent number than a placeholder one.
    renderFooter()
    expect(screen.queryByText(/TODO/i)).toBeNull()
  })
})
