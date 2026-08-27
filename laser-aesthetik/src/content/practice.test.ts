import { describe, expect, it } from "vitest"
import { practice, PHONE_TODO } from "./practice"

describe("practice data", () => {
  it("carries the agreed address", () => {
    expect(practice.street).toBe("Weiher 3")
    expect(practice.postalCode).toBe("84178")
    expect(practice.city).toBe("Kröning")
  })

  it("carries the agreed contact details", () => {
    // The doctor's name appears in the Impressum, where §5 TMG makes it
    // legally consequential. A one-character typo must not pass silently.
    expect(practice.doctor).toBe("Dr. med. univ. Dost Mohammad")
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
    expect(practice.hours.map((h) => [h.days, h.time])).toEqual([
      ["Mo – Fr", "9:00 – 20:00 Uhr"],
      ["Samstag", "10:00 – 18:00 Uhr"],
      ["Sonntag", "Geschlossen"],
    ])
  })

  it("carries machine-readable hours for the two open day groups", () => {
    // The schema.org form must stay in step with the display strings above —
    // that is the whole reason it lives in the same objects.
    expect(practice.hours[0].schema).toEqual({
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "20:00",
    })
    expect(practice.hours[1].schema).toEqual({
      dayOfWeek: ["Saturday"],
      opens: "10:00",
      closes: "18:00",
    })
    expect(practice.hours[2].schema).toBeUndefined()
  })

  it("keeps the doctor display lockup in step with the canonical name", () => {
    // The lockup exists so a heading can emphasise the surname. If it ever
    // stops concatenating back to `doctor`, the homepage bio and the
    // Impressum would show different names for the same person.
    const { lead, accent } = practice.doctorLockup
    expect(`${lead} ${accent}`).toBe(practice.doctor)
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
