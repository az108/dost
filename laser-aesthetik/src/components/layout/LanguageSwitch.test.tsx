import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { MemoryRouter } from "react-router-dom"
import { LanguageSwitch } from "./LanguageSwitch"

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <LanguageSwitch />
    </MemoryRouter>,
  )
}

describe("LanguageSwitch", () => {
  it("renders a Sprache / Language navigation landmark", () => {
    renderAt("/")
    expect(screen.getByRole("navigation", { name: "Sprache / Language" })).toBeInTheDocument()
  })

  it("renders both languages with full-word accessible names", () => {
    renderAt("/")
    expect(screen.getByRole("link", { name: "Deutsch" })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "English" })).toBeInTheDocument()
  })

  it("marks the current language as active via aria-current, and only that one", () => {
    renderAt("/")
    expect(screen.getByRole("link", { name: "Deutsch" })).toHaveAttribute("aria-current", "true")
    expect(screen.getByRole("link", { name: "English" })).not.toHaveAttribute("aria-current")
  })

  it("carries an hreflang attribute on each link", () => {
    renderAt("/")
    expect(screen.getByRole("link", { name: "Deutsch" })).toHaveAttribute("hreflang", "de")
    expect(screen.getByRole("link", { name: "English" })).toHaveAttribute("hreflang", "en")
  })

  it("links from a German treatment page to its exact English counterpart, not the English home page", () => {
    renderAt("/behandlungen/achseln")
    expect(screen.getByRole("link", { name: "English" })).toHaveAttribute(
      "href",
      "/en/treatments/underarms",
    )
  })

  it("links from an English treatment page back to its exact German counterpart", () => {
    renderAt("/en/treatments/underarms")
    expect(screen.getByRole("link", { name: "Deutsch" })).toHaveAttribute(
      "href",
      "/behandlungen/achseln",
    )
    expect(screen.getByRole("link", { name: "English" })).toHaveAttribute("aria-current", "true")
  })

  it("uses the brand token for the active state, never action/action-ink or premium", () => {
    renderAt("/")
    const active = screen.getByRole("link", { name: "Deutsch" })
    expect(active.className).toContain("bg-brand")
    expect(active.className).not.toMatch(/\baction\b|\baction-ink\b|\bpremium\b/)
    const inactive = screen.getByRole("link", { name: "English" })
    expect(inactive.className).not.toMatch(/\baction\b|\baction-ink\b|\bpremium\b/)
  })
})
