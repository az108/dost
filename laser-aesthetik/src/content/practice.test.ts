import { describe, expect, it } from "vitest"
import { practice, PHONE_TODO } from "./practice"

describe("practice data", () => {
  it("carries the agreed address", () => {
    expect(practice.street).toBe("Weiher 3")
    expect(practice.postalCode).toBe("84166")
    expect(practice.city).toBe("Köning")
  })

  it("carries the agreed contact details", () => {
    expect(practice.email).toBe("info@drdosthealth.com")
    expect(practice.social.facebook).toBe("https://www.facebook.com/drdostmohammad")
    expect(practice.social.linkedin).toBe(
      "https://www.linkedin.com/in/dost-mohammad-483165155/",
    )
  })

  it("uses the exact Doctolib booking URL", () => {
    expect(practice.bookingUrl).toBe(
      "https://www.doctolib.de/privatpraxis/landshut/dr-med-univ-dost-mohammad-city-center-landshut/booking?profile_skipped=true&source=external_referral",
    )
  })

  it("lists opening hours for all three day groups", () => {
    expect(practice.hours).toEqual([
      { days: "Mo – Fr", time: "9:00 – 20:00 Uhr" },
      { days: "Samstag", time: "10:00 – 18:00 Uhr" },
      { days: "Sonntag", time: "Geschlossen" },
    ])
  })

  // ── Go-live guard ─────────────────────────────────────────────────────
  // The clinic has not published a phone number. This test fails on purpose
  // until someone supplies one, so the site cannot ship with a placeholder
  // where patients expect a number. To fix: set practice.phone to the real
  // number and delete this test.
  it("FAILS UNTIL the real phone number is supplied", () => {
    expect(practice.phone).not.toBe(PHONE_TODO)
  })
})
