import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { MemoryRouter } from "react-router-dom"
import { center, openLocation } from "@/content/center"
import { Layout } from "@/components/layout/Layout"
import Kontakt from "./Kontakt"

// Mounted at its own path, not at "/". Components below it read the route:
// useLocale() derives the language from it, and BookingButton suppresses
// itself when its fallback destination is the page already being read. At
// "/" this page rendered in a state no visitor can ever reach.
function renderKontakt() {
  return render(
    <MemoryRouter initialEntries={["/kontakt"]}>
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

  it("sends the visitor nowhere in a circle: no booking CTA back to this page", () => {
    // With the BOOKING_TODO sentinel unfilled, BookingButton links to the
    // contact page. Rendered on the contact page that is a link to itself,
    // and it sat directly above a form lead saying appointments are booked
    // "über die Terminbuchung oben" — the form being, in fact, the only
    // booking channel there is.
    const { container } = renderKontakt()
    const selfLinks = [...container.querySelectorAll('a[href="/kontakt"]')]
    expect(selfLinks, "the contact page links to itself").toHaveLength(0)
  })

  it("describes the form as the booking channel, not as the leftover", () => {
    renderKontakt()
    expect(screen.getByText(/Über dieses Formular läuft alles/)).toBeInTheDocument()
    expect(screen.queryByText(/Terminbuchung oben/)).not.toBeInTheDocument()
  })

  it("gives the address block its own eyebrow, not the navbar's label", () => {
    // t("practice") was borrowed here while it still read "Praxis"; task 7
    // retitled it to "Über uns" for the navbar and this page started
    // rendering "Über uns / Adresse & Anfahrt".
    renderKontakt()
    expect(screen.getByText("Standort")).toBeInTheDocument()
    expect(screen.queryByText("Über uns")).not.toBeInTheDocument()
  })

  it("sets a meta description with the city but no TODO sentinel", () => {
    renderKontakt()
    const meta = document.head.querySelector('meta[name="description"]')
    expect(meta).not.toBeNull()
    expect(meta?.getAttribute("content")).not.toMatch(/TODO_/)
    expect(meta?.getAttribute("content")).toContain(openLocation(center).city)
  })

  it("renders no empty sticky mobile CTA bar when mounted inside Layout", () => {
    // The other tests in this file mount <Kontakt/> bare, which is why none
    // of them saw this: StickyMobileCta lives in Layout, one level up.
    // BookingButton correctly renders nothing on the contact page (its
    // fallback destination is the page already being read), but
    // StickyMobileCta used to wrap it in fixed, bordered chrome regardless,
    // shipping a blank bar pinned across the bottom of the viewport over the
    // contact form. Asserting on the container's absence, not just the
    // link's, is the point: a container with the link removed is exactly
    // the bug this guards against.
    render(
      <MemoryRouter initialEntries={["/kontakt"]}>
        <Layout>
          <Kontakt />
        </Layout>
      </MemoryRouter>,
    )
    expect(screen.queryByTestId("sticky-mobile-cta")).not.toBeInTheDocument()
  })
})
