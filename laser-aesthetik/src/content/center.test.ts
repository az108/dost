import { describe, expect, it } from "vitest"
import {
  ADDRESS_TODO,
  BOOKING_TODO,
  EMAIL_TODO,
  PHONE_TODO,
  center,
  formatAddress,
  hasBookingUrl,
  hasEmail,
  hasPhone,
  openLocation,
} from "./center"

describe("center data", () => {
  it("names the three cities in the agreed order", () => {
    expect(center.locations.map((l) => l.city)).toEqual([
      "Landshut",
      "München",
      "Stuttgart",
    ])
  })

  it("has exactly one open location", () => {
    const open = center.locations.filter((l) => l.status === "open")
    expect(open).toHaveLength(1)
    expect(open[0].city).toBe("Landshut")
  })

  it("gives planned locations nothing but a city", () => {
    // A planned site must not publish an address, hours or a booking link.
    // Those fields reaching a template is how a location nobody can visit
    // ends up in structured data.
    for (const l of center.locations.filter((l) => l.status === "planned")) {
      expect(l.street, `${l.city} has a street`).toBeUndefined()
      expect(l.postalCode, `${l.city} has a postal code`).toBeUndefined()
      expect(l.phone, `${l.city} has a phone`).toBeUndefined()
      expect(l.hours, `${l.city} has hours`).toBeUndefined()
      expect(l.bookingUrl, `${l.city} has a booking URL`).toBeUndefined()
    }
  })

  it("gives the open location the full set of display hours", () => {
    expect(openLocation().hours?.map((h) => [h.days, h.time])).toEqual([
      ["Mo – Fr", "9:00 – 20:00 Uhr"],
      ["Samstag", "10:00 – 18:00 Uhr"],
      ["Sonntag", "Geschlossen"],
    ])
  })

  it("keeps machine-readable hours in step with the display strings", () => {
    // The schema.org form lives in the same objects as the display strings
    // precisely so the two cannot drift.
    const hours = openLocation().hours!
    expect(hours[0].schema).toEqual({
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "20:00",
    })
    expect(hours[1].schema).toEqual({
      dayOfWeek: ["Saturday"],
      opens: "10:00",
      closes: "18:00",
    })
    expect(hours[2].schema).toBeUndefined()
  })

  it("reports every unsupplied fact as absent rather than rendering it", () => {
    // Each helper is what stops a TODO_ string reaching a template. If one
    // ever returns true for a sentinel, the placeholder ships.
    const landshut = openLocation()
    expect(hasPhone({ ...landshut, phone: PHONE_TODO })).toBe(false)
    expect(hasPhone({ ...landshut, phone: "0871 123456" })).toBe(true)
    expect(hasBookingUrl({ ...landshut, bookingUrl: BOOKING_TODO })).toBe(false)
    expect(hasBookingUrl({ ...landshut, bookingUrl: "https://x.test" })).toBe(true)
    expect(hasEmail({ ...center, email: EMAIL_TODO })).toBe(false)
    expect(hasEmail({ ...center, email: "hallo@example.test" })).toBe(true)
  })

  it("treats a missing field as absent, not just a sentinel value", () => {
    // A planned location has no phone at all. `undefined` must be as safe
    // as the sentinel, or the helpers only protect half the cases.
    const planned = center.locations[1]
    expect(hasPhone(planned)).toBe(false)
    expect(hasBookingUrl(planned)).toBe(false)
  })

  it("formats an address as street, postcode and city", () => {
    expect(
      formatAddress({
        city: "Landshut",
        status: "open",
        street: "Musterweg 1",
        postalCode: "84028",
      }),
    ).toBe("Musterweg 1, 84028 Landshut")
  })

  it("carries no social link it does not actually have", () => {
    // The practice's Facebook and LinkedIn are the DOCTOR's personal
    // profiles. A center denying any connection to him must not link them.
    expect(center.social.facebook).toBeUndefined()
    expect(center.social.linkedin).toBeUndefined()
  })

  // ── Go-live guards ────────────────────────────────────────────────────
  // Each fails on purpose until the client supplies the fact. To fix: set
  // the value in center.ts and delete the corresponding test.

  it("FAILS UNTIL the client approves the brand name", () => {
    expect(center.brandApproved).toBe(true)
  })

  it("FAILS UNTIL the Landshut address is supplied", () => {
    expect(openLocation().street).not.toBe(ADDRESS_TODO)
    expect(openLocation().postalCode).not.toBe(ADDRESS_TODO)
  })

  it("FAILS UNTIL the center has an email address on its own domain", () => {
    expect(center.email).not.toBe(EMAIL_TODO)
  })

  it("FAILS UNTIL the real phone number is supplied", () => {
    expect(openLocation().phone).not.toBe(PHONE_TODO)
  })

  it("FAILS UNTIL the center has its own booking profile", () => {
    expect(openLocation().bookingUrl).not.toBe(BOOKING_TODO)
  })
})
