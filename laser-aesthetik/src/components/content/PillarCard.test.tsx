import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { MemoryRouter } from "react-router-dom"
import { PillarCard } from "./PillarCard"
import type { PillarInfo } from "@/content/types"

const laser: PillarInfo = {
  id: "laser",
  path: "/laser",
  label: "Laser",
  title: "Laserbehandlungen",
  headline: { lead: "Laser, der", accent: "wirklich wirkt" },
  excerpt: "Dauerhafte Haarreduktion, medizinisch geführt.",
  intro: ["Absatz."],
}

function renderCard(pillar: PillarInfo) {
  return render(
    <MemoryRouter>
      <PillarCard pillar={pillar} />
    </MemoryRouter>,
  )
}

describe("PillarCard", () => {
  it("links to the pillar page with its title and excerpt", () => {
    renderCard(laser)
    expect(screen.getByRole("link")).toHaveAttribute("href", "/laser")
    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent("Laserbehandlungen")
    expect(screen.getByText(/Dauerhafte Haarreduktion/)).toBeInTheDocument()
  })

  it("holds every card to one height", () => {
    // Three cards sit side by side, and on a phone they stack, where nothing
    // stretches to match anything. Both variable blocks are therefore given a
    // fixed size: the title reserves the two lines that "Physiotherapie &
    // Schmerzmedizin" needs and the other two pillars do not, and the excerpt
    // reserves its lines whether it fills them or not.
    renderCard(laser)
    expect(screen.getByRole("link").className).toContain("h-full")
    expect(screen.getByRole("heading", { level: 3 }).className).toMatch(/min-h-/)

    // Four lines, matching TreatmentCard. All three pillar teasers run
    // 106-115 characters, which is more than three lines on a phone, so a
    // three-line box clipped the last line off every one of them.
    const excerpt = screen.getByText(/Dauerhafte Haarreduktion/)
    expect(excerpt.className).toContain("line-clamp-4")
    expect(excerpt.className).toMatch(/min-h-/)
  })
})
