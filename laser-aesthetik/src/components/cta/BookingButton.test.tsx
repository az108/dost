import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { describe, expect, it, vi } from "vitest"
import { BookingButton } from "./BookingButton"

const renderButton = () =>
  render(
    <MemoryRouter>
      <BookingButton />
    </MemoryRouter>,
  )

describe("BookingButton", () => {
  it("routes to the contact page while the center has no booking profile", () => {
    // The old Doctolib URL belonged to Privatpraxis Dr. Dost. Until the
    // center has its own profile, the honest destination is our own form.
    renderButton()
    expect(screen.getByRole("link")).toHaveAttribute("href", "/kontakt")
  })

  it("names no booking provider in either the destination or the label", () => {
    // This used to assert on the href alone, which passed for months while
    // ctaLead, stepBookAppointmentBody and contactMetaDescriptionSuffix all
    // still told the reader they were about to be sent to Doctolib. A link
    // whose target is right and whose words are wrong is still a promise the
    // site cannot keep, so both halves are checked here.
    //
    // The copy itself is guarded where it lives: content.test.ts greps every
    // .ts/.tsx source under src/ for the provider's name.
    const { container } = renderButton()
    const link = screen.getByRole("link")
    expect(link.getAttribute("href")).not.toContain("doctolib")
    expect(container.textContent?.toLowerCase()).not.toContain("doctolib")
  })

  it("links out to the booking provider once one is supplied", async () => {
    vi.resetModules()
    vi.doMock("@/content/center", async () => {
      const actual = await vi.importActual<typeof import("@/content/center")>(
        "@/content/center",
      )
      return {
        ...actual,
        openLocation: () => ({
          ...actual.openLocation(),
          bookingUrl: "https://booking.example.test/aurea",
        }),
      }
    })
    const { BookingButton: Fresh } = await import("./BookingButton")
    render(
      <MemoryRouter>
        <Fresh />
      </MemoryRouter>,
    )
    const link = screen.getByRole("link")
    expect(link).toHaveAttribute("href", "https://booking.example.test/aurea")
    expect(link).toHaveAttribute("target", "_blank")
    expect(link).toHaveAttribute("rel", "noopener noreferrer")
    vi.doUnmock("@/content/center")
  })

  it("renders nothing on the page its fallback would link to", () => {
    // A CTA linking to the route the visitor is already reading is not a
    // call to action. On /kontakt this button sat directly above the form it
    // pointed at, while the form's own lead told the reader to book "über
    // die Terminbuchung oben" — a closed loop with no way out.
    const { container } = render(
      <MemoryRouter initialEntries={["/kontakt"]}>
        <BookingButton />
      </MemoryRouter>,
    )
    expect(container.querySelector("a")).toBeNull()
  })

  it("still renders on the English contact page's German counterpart, and vice versa", () => {
    // The suppression is per-locale: /en/contact is a different route from
    // /kontakt, and a visitor on one is not on the other.
    render(
      <MemoryRouter initialEntries={["/en/contact"]}>
        <BookingButton />
      </MemoryRouter>,
    )
    expect(screen.queryByRole("link")).toBeNull()

    const { container } = render(
      <MemoryRouter initialEntries={["/preise"]}>
        <BookingButton />
      </MemoryRouter>,
    )
    expect(container.querySelector('a[href="/kontakt"]')).not.toBeNull()
  })

  it("uses the German label by default", () => {
    renderButton()
    expect(screen.getByRole("link")).toHaveTextContent("Termin buchen")
  })

  it("accepts a custom label", () => {
    render(
      <MemoryRouter>
        <BookingButton>Jetzt anfragen</BookingButton>
      </MemoryRouter>,
    )
    expect(screen.getByRole("link")).toHaveTextContent("Jetzt anfragen")
  })
})
