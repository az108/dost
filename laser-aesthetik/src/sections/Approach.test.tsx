import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { describe, expect, it } from "vitest"
import { Approach } from "./Approach"

describe("Approach", () => {
  it("names no person", () => {
    // The section it replaces carried the doctor's portrait, his name and
    // his qualifications. The center has no staff to name yet, and naming
    // him here is exactly the confusion this slice removes.
    render(
      <MemoryRouter>
        <Approach />
      </MemoryRouter>,
    )
    expect(screen.queryByText(/Dost/)).not.toBeInTheDocument()
    expect(screen.queryByRole("img")).not.toBeInTheDocument()
  })

  it("describes how the three areas work together", () => {
    render(
      <MemoryRouter>
        <Approach />
      </MemoryRouter>,
    )
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument()
    // Both the heading ("Drei Bereiche, ein Konzept") and the body copy
    // ("Unsere drei Bereiche greifen ineinander...") legitimately contain
    // this phrase, so getByText's single-match assumption doesn't hold here
    // — getAllByText asserts presence without assuming uniqueness.
    expect(screen.getAllByText(/drei Bereiche/i).length).toBeGreaterThan(0)
  })
})
