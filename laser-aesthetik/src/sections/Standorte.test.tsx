import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { describe, expect, it } from "vitest"
import { Standorte } from "./Standorte"

const renderSection = () =>
  render(
    <MemoryRouter>
      <Standorte />
    </MemoryRouter>,
  )

describe("Standorte", () => {
  it("lists all three cities", () => {
    renderSection()
    for (const city of ["Landshut", "München", "Stuttgart"]) {
      expect(screen.getByText(city)).toBeInTheDocument()
    }
  })

  it("marks the two planned cities as planned", () => {
    renderSection()
    expect(screen.getAllByText("in Planung")).toHaveLength(2)
  })

  it("renders no opening hours anywhere — the data was never confirmed", () => {
    // Opening hours used to render here as an empty <dl> once the hours
    // data was removed from center.ts. No city's card — open or planned —
    // may show a day-group row or an empty list for one.
    const { container } = renderSection()
    expect(screen.queryByText("Mo – Fr")).not.toBeInTheDocument()
    expect(screen.queryByText("Samstag")).not.toBeInTheDocument()
    expect(container.querySelector("dl")).toBeNull()
  })
})
