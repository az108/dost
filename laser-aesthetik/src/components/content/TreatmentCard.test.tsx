import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { MemoryRouter } from "react-router-dom"
import { TreatmentCard } from "./TreatmentCard"
import type { Treatment } from "@/content/types"

const base: Treatment = {
  slug: "achseln",
  pillar: "laser",
  title: "Achseln",
  headline: { lead: "Achseln", accent: "dauerhaft glatt" },
  excerpt: "Die beliebteste Zone.",
  body: ["Absatz."],
  benefits: ["Eins", "Zwei"],
  durationMin: 10,
  pricing: { kind: "fixed", single: 69 },
}

function renderCard(t: Treatment) {
  return render(
    <MemoryRouter>
      <TreatmentCard treatment={t} />
    </MemoryRouter>,
  )
}

describe("TreatmentCard", () => {
  it("links to the treatment detail page", () => {
    renderCard(base)
    expect(screen.getByRole("link")).toHaveAttribute("href", "/behandlungen/achseln")
  })

  it("shows the title and excerpt", () => {
    renderCard(base)
    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent("Achseln")
    expect(screen.getByText("Die beliebteste Zone.")).toBeInTheDocument()
  })

  it("shows the duration chip when a duration is given", () => {
    renderCard(base)
    expect(screen.getByText("10 Min.")).toBeInTheDocument()
  })

  it("shows the lowest per-session price with its unit and condition", () => {
    // 69 € single, 45% off in the 10er tier => 38 €. The figure must never
    // appear bare: 38 € is one session inside a 380 € prepaid package, and an
    // unqualified "ab 38 €" reads as the price of the whole course.
    renderCard(base)
    const chip = screen.getByText(/ab 38 €/)
    expect(chip).toHaveTextContent("/Sitzung im 10er-Paket")
  })

  it("shows 'Preis auf Anfrage' for on-request pricing, and no euro figure", () => {
    renderCard({ ...base, pricing: { kind: "onRequest" } })
    expect(screen.getByText("Preis auf Anfrage")).toBeInTheDocument()
    expect(screen.queryByText(/€/)).toBeNull()
  })

  it("omits the duration chip when no duration is given", () => {
    renderCard({ ...base, durationMin: undefined })
    expect(screen.queryByText(/Min\./)).toBeNull()
  })

  it("fills the height of its grid cell", () => {
    // Grid items stretch to the tallest in the row, but the card is a child
    // of the Reveal wrapper that stretches — without h-full the card keeps its
    // own content height and the row is visibly ragged.
    renderCard(base)
    expect(screen.getByRole("link").className).toContain("h-full")
  })

  it("clamps the excerpt to a fixed three lines", () => {
    // Excerpts run anywhere from two to seven lines. Left alone, the longest
    // one sets the height of every card beside it; reserving three lines as
    // well as capping them keeps short cards from collapsing in a single
    // column, where there is no row to stretch to.
    renderCard({ ...base, excerpt: "Ein sehr langer Auszug. ".repeat(20) })
    const excerpt = screen.getByText(/Ein sehr langer Auszug/)
    expect(excerpt.className).toContain("line-clamp-3")
    expect(excerpt.className).toMatch(/min-h-/)
  })

  it("reserves the chip row at two rows", () => {
    // A duration and a price chip wrap onto two lines on a phone; a lone
    // price chip stays on one. Reserving the taller case is what makes the
    // last 36px of difference between two stacked cards go away.
    renderCard(base)
    const chipRow = screen.getByText("10 Min.").closest("div")
    expect(chipRow?.className).toContain("min-h-16")
  })

  it("carries a price chip whether or not there is a figure", () => {
    // The chip row is the other thing that changed height card to card: an
    // on-request treatment used to render no price chip at all and hide the
    // words down in the link. Same row on every card, and the price stops
    // being the one fact you have to read the small print for.
    renderCard({ ...base, pricing: { kind: "onRequest" } })
    expect(screen.getByText("Preis auf Anfrage").className).toContain("rounded-pill")
    expect(screen.getByRole("link")).toHaveTextContent("Details & buchen")
  })
})
