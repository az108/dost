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

  it("shows opening hours only for the open location", () => {
    // A planned site publishing hours is the failure this guards. The open
    // location has three day-group rows; the planned ones have none.
    renderSection()
    expect(screen.getAllByText("Mo – Fr")).toHaveLength(1)
  })
})
