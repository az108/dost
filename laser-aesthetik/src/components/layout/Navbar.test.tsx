import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it } from "vitest"
import { MemoryRouter } from "react-router-dom"
import { Navbar } from "./Navbar"

function renderNav() {
  return render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>,
  )
}

describe("Navbar", () => {
  it("renders a navigation landmark", () => {
    renderNav()
    expect(screen.getByRole("navigation")).toBeInTheDocument()
  })

  it("links to all three pillars", () => {
    renderNav()
    for (const [label, path] of [
      ["Laser", "/laser"],
      ["Physio", "/physio"],
      ["Ästhetik", "/aesthetik"],
    ]) {
      const links = screen.getAllByRole("link", { name: label })
      expect(links.some((l) => l.getAttribute("href") === path)).toBe(true)
    }
  })

  it("links home from the brand lockup", () => {
    renderNav()
    expect(screen.getByRole("link", { name: /Zur Startseite/i })).toHaveAttribute("href", "/")
  })

  it("has a skip link to the main content", () => {
    renderNav()
    expect(screen.getByRole("link", { name: /Zum Inhalt springen/i })).toHaveAttribute(
      "href",
      "#hauptinhalt",
    )
  })

  it("toggles the mobile menu and reports its state to assistive tech", async () => {
    const user = userEvent.setup()
    renderNav()
    const toggle = screen.getByRole("button", { name: /Menü/i })
    expect(toggle).toHaveAttribute("aria-expanded", "false")
    await user.click(toggle)
    expect(toggle).toHaveAttribute("aria-expanded", "true")
    await user.click(toggle)
    expect(toggle).toHaveAttribute("aria-expanded", "false")
  })

  it("closes the mobile menu on Escape", async () => {
    const user = userEvent.setup()
    renderNav()
    const toggle = screen.getByRole("button", { name: /Menü/i })
    await user.click(toggle)
    await user.keyboard("{Escape}")
    expect(toggle).toHaveAttribute("aria-expanded", "false")
  })
})
