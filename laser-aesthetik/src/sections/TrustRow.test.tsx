import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { describe, expect, it } from "vitest"
import { TrustRow } from "./TrustRow"

describe("TrustRow", () => {
  it("names no person", () => {
    // This component rendered "Jede Behandlung führt Dr. med. univ. Dost
    // Mohammad persönlich durch." on the home page, interpolated from
    // practice.doctor. The grep guard below could never have caught it —
    // the source said `practice.doctor`, and only the rendered output said
    // his name. This test covers what that guard structurally cannot.
    render(
      <MemoryRouter>
        <TrustRow />
      </MemoryRouter>,
    )
    expect(screen.queryByText(/Dost/)).not.toBeInTheDocument()
    expect(screen.queryByText(/Dr\. med\./)).not.toBeInTheDocument()
  })
})
