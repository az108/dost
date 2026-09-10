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

  it("never links a booking provider while the sentinel is unfilled", () => {
    renderButton()
    expect(screen.getByRole("link").getAttribute("href")).not.toContain("doctolib")
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
