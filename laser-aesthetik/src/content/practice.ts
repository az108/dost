import type { Practice } from "./types"

/**
 * Sentinel for contact data the clinic has not published yet.
 * practice.test.ts fails while any user-visible field still holds it, so an
 * unfilled placeholder cannot reach production.
 */
export const PHONE_TODO = "TODO_TELEFONNUMMER"

/**
 * Single source of truth for contact data. The footer, contact page,
 * Impressum and JSON-LD structured data all read from here — filling in the
 * phone number is a one-line change that propagates everywhere.
 *
 * Note the deliberate split: patients visit Köning, but booking runs through
 * the clinic's Doctolib profile in Landshut. This is intentional; do not
 * "correct" it.
 */
export const practice: Practice = {
  brand: "Dr. Dost — Laser, Physio & Ästhetik",
  shortBrand: "Dr. Dost",
  doctor: "Dr. med. univ. Dost Mohammad",
  doctorLockup: { lead: "Dr. med. univ.", accent: "Dost Mohammad" },
  qualifications: "Praktischer Arzt · Notfallmedizin · Naturheilverfahren und Akupunktur",
  street: "Weiher 3",
  postalCode: "84166",
  city: "Köning",
  email: "info@drdosthealth.com",
  phone: PHONE_TODO,
  hours: [
    {
      days: "Mo – Fr",
      time: "9:00 – 20:00 Uhr",
      schema: {
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "20:00",
      },
    },
    {
      days: "Samstag",
      time: "10:00 – 18:00 Uhr",
      schema: { dayOfWeek: ["Saturday"], opens: "10:00", closes: "18:00" },
    },
    { days: "Sonntag", time: "Geschlossen" },
  ],
  social: {
    facebook: "https://www.facebook.com/drdostmohammad",
    linkedin: "https://www.linkedin.com/in/dost-mohammad-483165155/",
  },
  bookingUrl:
    "https://www.doctolib.de/privatpraxis/landshut/dr-med-univ-dost-mohammad-city-center-landshut/booking?profile_skipped=true&source=external_referral",
}

/** "Weiher 3, 84166 Köning" — used in the footer and structured data. */
export function formatAddress(p: Practice = practice): string {
  return `${p.street}, ${p.postalCode} ${p.city}`
}

/** True when a phone number has actually been supplied. */
export function hasPhone(p: Practice = practice): boolean {
  return p.phone !== PHONE_TODO && p.phone.trim().length > 0
}
