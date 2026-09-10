import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { describe, expect, it } from "vitest"
import { TrustRow } from "./TrustRow"

// Both locales. The section reads its copy from ui.ts through useT(), so a
// German-only render exercises exactly half the strings — and a name left
// behind in the English half would have passed unseen.
const LOCALE_ROUTES = [
  ["German", "/"],
  ["English", "/en"],
] as const

describe("TrustRow", () => {
  it.each(LOCALE_ROUTES)("names no person in %s", (_locale, route) => {
    // This component rendered "Jede Behandlung führt Dr. med. univ. Dost
    // Mohammad persönlich durch." on the home page, interpolated from
    // practice.doctor. The grep guard below could never have caught it —
    // the source said `practice.doctor`, and only the rendered output said
    // his name. This test covers what that guard structurally cannot.
    render(
      <MemoryRouter initialEntries={[route]}>
        <TrustRow />
      </MemoryRouter>,
    )
    expect(screen.queryByText(/Dost/)).not.toBeInTheDocument()
    expect(screen.queryByText(/Dr\. med\./)).not.toBeInTheDocument()
  })

  it("renders the English copy on an English route", () => {
    // Proves the locale above actually reached the component, rather than
    // the German render passing twice.
    render(
      <MemoryRouter initialEntries={["/en"]}>
        <TrustRow />
      </MemoryRouter>,
    )
    expect(screen.getByText("Physician-led")).toBeInTheDocument()
  })
})
