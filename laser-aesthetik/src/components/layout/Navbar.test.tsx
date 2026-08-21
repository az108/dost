import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it } from "vitest"
import { MemoryRouter, Routes, Route } from "react-router-dom"
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

  it("closes the mobile menu when the route changes", async () => {
    const user = userEvent.setup()
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Navbar />
        <Routes>
          <Route path="/" element={<p>Startseiteninhalt</p>} />
          <Route path="/laser" element={<p>Laserseiteninhalt</p>} />
        </Routes>
      </MemoryRouter>,
    )

    const toggle = screen.getByRole("button", { name: /Menü/i })
    await user.click(toggle)
    expect(toggle).toHaveAttribute("aria-expanded", "true")

    // The mobile panel and the desktop bar both render a "Laser" link; the
    // last one is the mobile panel's, which is what a phone user taps.
    const laserLinks = screen.getAllByRole("link", { name: "Laser" })
    await user.click(laserLinks[laserLinks.length - 1])

    // Proves the navigation actually happened, so the assertion below is
    // testing route-change behaviour and not just a click handler.
    expect(screen.getByText("Laserseiteninhalt")).toBeInTheDocument()
    expect(toggle).toHaveAttribute("aria-expanded", "false")
  })
})
