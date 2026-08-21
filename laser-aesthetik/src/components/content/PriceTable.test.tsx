import { render, screen, within } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { MemoryRouter } from "react-router-dom"
import { PriceTable } from "./PriceTable"
import type { Treatment } from "@/content/types"

const achseln: Treatment = {
  slug: "achseln",
  pillar: "laser",
  title: "Achseln",
  headline: { lead: "Achseln", accent: "glatt" },
  excerpt: "Kurz.",
  body: ["Absatz."],
  benefits: ["Eins", "Zwei"],
  durationMin: 10,
  pricing: { kind: "fixed", single: 69 },
  group: "Oberkörper",
}

const oberlippe: Treatment = {
  ...achseln,
  slug: "oberlippe",
  title: "Oberlippe",
  durationMin: 5,
  pricing: { kind: "fixed", single: 39 },
  group: "Gesicht & Kopf",
}

function renderTable(ts: Treatment[]) {
  return render(
    <MemoryRouter>
      <PriceTable treatments={ts} />
    </MemoryRouter>,
  )
}

describe("PriceTable", () => {
  it("renders one table per group, captioned with the group name", () => {
    renderTable([achseln, oberlippe])
    expect(screen.getAllByRole("table")).toHaveLength(2)
    expect(screen.getByText("Oberkörper")).toBeInTheDocument()
    expect(screen.getByText("Gesicht & Kopf")).toBeInTheDocument()
  })

  it("shows the single price and all three package tiers for a zone", () => {
    renderTable([achseln])
    const row = screen.getByRole("row", { name: /Achseln/ })
    expect(within(row).getByText("69 €")).toBeInTheDocument()
    expect(within(row).getByText("55 €")).toBeInTheDocument()
    expect(within(row).getByText("41 €")).toBeInTheDocument()
    expect(within(row).getByText("38 €")).toBeInTheDocument()
  })

  it("labels the package columns with their discounts", () => {
    renderTable([achseln])
    // Queried by role, not text: the discount sits in a <span> inside the
    // <th>, so both elements match a /−20 %/ text query and getByText throws.
    expect(screen.getByRole("columnheader", { name: /3er.*20 %/ })).toBeInTheDocument()
    expect(screen.getByRole("columnheader", { name: /10er.*45 %/ })).toBeInTheDocument()
  })

  it("skips on-request treatments, which have no table row", () => {
    renderTable([achseln, { ...oberlippe, pricing: { kind: "onRequest" } }])
    expect(screen.queryByText("Oberlippe")).toBeNull()
  })

  it("wraps each table so wide content scrolls without the page scrolling", () => {
    const { container } = renderTable([achseln])
    expect(container.querySelector(".overflow-x-auto")).not.toBeNull()
  })
})
