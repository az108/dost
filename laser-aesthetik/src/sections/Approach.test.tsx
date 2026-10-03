import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { describe, expect, it } from "vitest"
import { Approach } from "./Approach"

// Both locales. The section reads its copy from ui.ts through useT(), so a
// German-only render exercises exactly half the strings — and a name left
// behind in the English half would have passed unseen.
const LOCALE_ROUTES = [
  ["German", "/"],
  ["English", "/en"],
] as const

function renderAt(route: string) {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <Approach />
    </MemoryRouter>,
  )
}

describe("Approach", () => {
  it.each(LOCALE_ROUTES)("names no person and shows no portrait in %s", (_locale, route) => {
    // The section it replaces carried the doctor's portrait, his name and
    // his qualifications. The center has no staff to name yet, and naming
    // him here is exactly the confusion this slice removes.
    renderAt(route)
    expect(screen.queryByText(/Dost/)).not.toBeInTheDocument()
    expect(screen.queryByRole("img")).not.toBeInTheDocument()
  })

  it("describes how the three areas work together", () => {
    renderAt("/")
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

  it("describes it in English on an English route", () => {
    // Proves the locale above actually reached the component, rather than
    // the German render passing twice.
    renderAt("/en")
    expect(
      screen.getByRole("heading", { level: 2, name: /three areas/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/work together/i)).toBeInTheDocument()
  })
})
