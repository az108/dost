import type { Center, Location } from "./types"

/**
 * Sentinels for facts the client has not supplied yet. center.test.ts fails
 * while any of them survives, so an unfilled placeholder cannot reach
 * production. Same convention as the phone number always used.
 */
export const PHONE_TODO = "TODO_TELEFONNUMMER"
/**
 * While this is the value of `locations[0].bookingUrl`, BookingButton routes
 * to the contact form and the site has exactly one booking channel.
 *
 * Filling it in restores the external link everywhere in one edit, but the
 * copy around the button does NOT follow automatically. These keys in ui.ts
 * describe the form by name and have to be rewritten with it:
 * `ctaLead`, `stepBookAppointmentBody`, `contactMetaDescriptionSuffix`,
 * `contactFormLead`, `contactHeroDescription`. So does the Terminbuchung
 * section of legal.ts's Datenschutz, which is deliberately absent while
 * there is no third party to disclose.
 */
export const BOOKING_TODO = "TODO_BUCHUNGSLINK"
export const ADDRESS_TODO = "TODO_ADRESSE_LANDSHUT"
export const EMAIL_TODO = "TODO_EMAIL"

/**
 * Single source of truth for the center's identity and locations. The nav,
 * footer, contact page and JSON-LD all read from here.
 *
 * The doctor is deliberately absent. He is the legally responsible operator
 * and lives in legal.ts alone — the center is a separate business and every
 * marketing surface must be able to say so. content.test.ts greps for his
 * name across src/ to keep it that way.
 */
export const center: Center = {
  brand: "Aurea Center",
  shortBrand: "Aurea",
  brandApproved: false,
  email: EMAIL_TODO,
  locations: [
    {
      city: "Landshut",
      status: "open",
      street: ADDRESS_TODO,
      postalCode: ADDRESS_TODO,
      phone: PHONE_TODO,
      bookingUrl: BOOKING_TODO,
    },
    { city: "München", status: "planned" },
    { city: "Stuttgart", status: "planned" },
  ],
  // Empty on purpose. The old practice.social pointed at the doctor's
  // personal Facebook page and LinkedIn profile; an empty social row is
  // better than one linking a different business.
  social: {},
}

/**
 * The one location visitors can actually attend. Throws rather than
 * returning undefined: every consumer treats this as a fact, and a silent
 * undefined would surface as a blank address rather than a build failure.
 */
export function openLocation(c: Center = center): Location {
  const open = c.locations.find((l) => l.status === "open")
  if (!open) throw new Error("Kein geöffneter Standort in center.locations")
  return open
}

function supplied(value: string | undefined, sentinel: string): boolean {
  return value !== undefined && value !== sentinel && value.trim().length > 0
}

/**
 * "Musterweg 1, 84028 Landshut", or null when this location has no address
 * worth printing.
 *
 * Null rather than a string, because the string version was the direct cause
 * of three separate defects in one slice: it returned a plausible-looking
 * "TODO_ADRESSE_LANDSHUT, TODO_ADRESSE_LANDSHUT Landshut" for input it
 * cannot format, so every call site had to remember an external hasAddress()
 * guard and three of them did not. A nullable return moves that from
 * something a reviewer has to notice to something the compiler does.
 */
export function formatAddress(l: Location): string | null {
  if (!hasAddress(l)) return null
  return `${l.street}, ${l.postalCode} ${l.city}`
}

export function hasPhone(l: Location): boolean {
  return supplied(l.phone, PHONE_TODO)
}

export function hasBookingUrl(l: Location): boolean {
  return supplied(l.bookingUrl, BOOKING_TODO)
}

/**
 * True when this location has a street address worth printing.
 *
 * Both halves must be present: formatAddress() interpolates street AND
 * postalCode, so one without the other still renders a broken line. A
 * `planned` location has neither — supplied() treats `undefined` and the
 * sentinel alike, which is what keeps "undefined, undefined München" off
 * the page.
 */
export function hasAddress(l: Location): boolean {
  return supplied(l.street, ADDRESS_TODO) && supplied(l.postalCode, ADDRESS_TODO)
}

export function hasEmail(c: Center = center): boolean {
  return supplied(c.email, EMAIL_TODO)
}
