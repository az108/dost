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
    // Bound to the heading specifically. The h2's accessible name is
    // "Drei Bereiche, ein Konzept", a single unique match — where a bare
    // getByText(/drei Bereiche/i) also matches the body paragraph and
    // throws on the ambiguity.
    expect(
      screen.getByRole("heading", { level: 2, name: /drei Bereiche/i }),
    ).toBeInTheDocument()

    // A substring unique to the body, so the two assertions verify the two
    // halves independently instead of one vague OR-condition.
    expect(screen.getByText(/greifen ineinander/i)).toBeInTheDocument()
  })
})
