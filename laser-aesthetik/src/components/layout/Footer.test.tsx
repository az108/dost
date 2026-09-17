import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { MemoryRouter } from "react-router-dom"
import { center } from "@/content/center"
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

  it("renders no opening-hours heading or list — the data was never confirmed", () => {
    // A previous defect shipped the "Öffnungszeiten" heading over an empty
    // <dl> once the hours data was removed. The invariant is not just "the
    // old times are gone" — the heading and the list markup must be gone
    // too, or a visitor sees a section promising hours with nothing in it.
    const { container } = renderFooter()
    expect(screen.queryByText("Öffnungszeiten")).not.toBeInTheDocument()
    expect(screen.queryByText("Mo – Fr")).not.toBeInTheDocument()
    expect(screen.queryByText("Samstag")).not.toBeInTheDocument()
    expect(screen.queryByText("Geschlossen")).not.toBeInTheDocument()
    expect(container.querySelector("dl")).toBeNull()
  })

  it("links Impressum and Datenschutz", () => {
    renderFooter()
    expect(screen.getByRole("link", { name: "Impressum" })).toHaveAttribute("href", "/impressum")
    expect(screen.getByRole("link", { name: "Datenschutz" })).toHaveAttribute("href", "/datenschutz")
  })

  it("links AGB and Widerruf", () => {
    renderFooter()
    expect(screen.getByRole("link", { name: "AGB" })).toHaveAttribute("href", "/agb")
    expect(screen.getByRole("link", { name: "Widerruf" })).toHaveAttribute("href", "/widerruf")
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

  it("shows the center brand, not a person", () => {
    renderFooter()
    expect(screen.getByText(center.brand)).toBeInTheDocument()
    expect(screen.queryByText(/Dost/)).not.toBeInTheDocument()
  })

  it("shows the open location's address and no planned one", () => {
    renderFooter()
    expect(screen.getByText(/Landshut/)).toBeInTheDocument()
    expect(screen.queryByText(/Stuttgart/)).not.toBeInTheDocument()
  })

  it("renders no social links while the center has no profiles", () => {
    renderFooter()
    expect(screen.queryByText("Facebook")).not.toBeInTheDocument()
    expect(screen.queryByText("LinkedIn")).not.toBeInTheDocument()
  })

  it("renders no TODO_ sentinel anywhere in the footer", () => {
    // Named for what it checks. The old name promised an assertion about
    // the email line, and about an address, and made neither.
    const { container } = renderFooter()
    expect(container.innerHTML).not.toMatch(/TODO_/)
  })
})
