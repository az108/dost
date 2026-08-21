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

  it("shows the lowest per-session price as an 'ab' figure", () => {
    // 69 € single, 45% off in the 10er tier => 38 €
    renderCard(base)
    expect(screen.getByText(/ab 38 €/)).toBeInTheDocument()
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
})
