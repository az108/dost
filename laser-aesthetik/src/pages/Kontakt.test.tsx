import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { MemoryRouter } from "react-router-dom"
import { center, openLocation } from "@/content/center"
import Kontakt from "./Kontakt"

function renderKontakt() {
  return render(
    <MemoryRouter>
      <Kontakt />
    </MemoryRouter>,
  )
}

describe("Kontakt", () => {
  it("renders no TODO_ sentinel anywhere", () => {
    // The Landshut location's street/postalCode/phone and the center's email
    // are all still unfilled TODO sentinels. Every guard on this page exists
    // to keep those placeholders off the rendered page and out of links/meta.
    const { container } = renderKontakt()
    expect(container.textContent).not.toMatch(/TODO_/)
  })

  it("omits the map link while the location has no real address", () => {
    // An unguarded mapsUrl would send the visitor to an OpenStreetMap search
    // for the literal placeholder string. Missing affordance beats a broken
    // one, so the link must not render at all.
    const { container } = renderKontakt()
    expect(screen.queryByRole("link", { name: /Auf der Karte ansehen/i })).not.toBeInTheDocument()
    expect(container.querySelector('a[href*="openstreetmap.org"]')).toBeNull()
  })

  it("falls back to the location's city when no street address is supplied", () => {
    renderKontakt()
    const location = openLocation(center)
    expect(screen.getByText(location.city)).toBeInTheDocument()
  })

  it("renders no email link while the center has no email supplied", () => {
    renderKontakt()
    expect(screen.queryByRole("link", { name: /@/ })).not.toBeInTheDocument()
  })

  it("renders no phone link while the location has no phone supplied", () => {
    const { container } = renderKontakt()
    expect(container.querySelector('a[href^="tel:"]')).toBeNull()
  })

  it("lists the open location's opening hours", () => {
    renderKontakt()
    const location = openLocation(center)
    for (const h of location.hours ?? []) {
      expect(screen.getByText(h.days)).toBeInTheDocument()
    }
  })

  it("sets a meta description with the city but no TODO sentinel", () => {
    renderKontakt()
    const meta = document.head.querySelector('meta[name="description"]')
    expect(meta).not.toBeNull()
    expect(meta?.getAttribute("content")).not.toMatch(/TODO_/)
    expect(meta?.getAttribute("content")).toContain(openLocation(center).city)
  })
})
