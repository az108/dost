import { describe, expect, it } from "vitest"
import {
  ADDRESS_TODO,
  BOOKING_TODO,
  EMAIL_TODO,
  PHONE_TODO,
  center,
  formatAddress,
  hasAddress,
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
    // A planned site must not publish an address or a booking link. Those
    // fields reaching a template is how a location nobody can visit ends up
    // in structured data.
    for (const l of center.locations.filter((l) => l.status === "planned")) {
      expect(l.street, `${l.city} has a street`).toBeUndefined()
      expect(l.postalCode, `${l.city} has a postal code`).toBeUndefined()
      expect(l.phone, `${l.city} has a phone`).toBeUndefined()
      expect(l.bookingUrl, `${l.city} has a booking URL`).toBeUndefined()
    }
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

  it("reports an address as absent until both halves are supplied", () => {
    // formatAddress() interpolates street and postalCode together, so a
    // half-filled address still renders a broken line. And a planned
    // location has neither field at all.
    const landshut = openLocation()
    expect(hasAddress(landshut)).toBe(false)
    expect(hasAddress({ ...landshut, street: "Musterweg 1" })).toBe(false)
    expect(hasAddress({ ...landshut, postalCode: "84028" })).toBe(false)
    expect(hasAddress({ ...landshut, street: "Musterweg 1", postalCode: "84028" })).toBe(true)
    expect(hasAddress(center.locations[1])).toBe(false)
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

  it("returns null rather than a plausible-looking string it cannot format", () => {
    // The whole point of the nullable return. While this returned a string
    // unconditionally it produced "TODO_ADRESSE_LANDSHUT,
    // TODO_ADRESSE_LANDSHUT Landshut" for the live seed data, and every
    // call site had to remember an external hasAddress() guard. Three
    // unguarded calls were written during this slice.
    expect(formatAddress(openLocation())).toBeNull()
    expect(formatAddress(center.locations[1])).toBeNull()
    expect(formatAddress({ ...openLocation(), street: "Musterweg 1" })).toBeNull()
    expect(formatAddress({ ...openLocation(), postalCode: "84028" })).toBeNull()
  })

  it("returns non-null exactly when hasAddress() is true", () => {
    // The two must not drift: hasAddress() is still what call sites branch
    // on where a boolean reads better than a null check.
    for (const l of [
      ...center.locations,
      { ...openLocation(), street: "Musterweg 1", postalCode: "84028" },
    ]) {
      expect(formatAddress(l) !== null, `${l.city}`).toBe(hasAddress(l))
    }
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
