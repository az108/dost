import { center, hasAddress, hasPhone, openLocation } from "@/content/center"

/**
 * JSON-LD for the center, generated from center.ts so it cannot drift from
 * what the footer shows.
 *
 * ONE entity, for the open location. Planned locations emit nothing at all
 * — the same rule the telephone follows below, for the same reason: a
 * placeholder in structured data can be surfaced by search engines, which
 * is worse than having none.
 */
export function medicalClinicJsonLd(): string {
  const location = openLocation()

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: center.brand,
    description:
      "Center für Laserbehandlungen, Kosmetik und ästhetische Medizin sowie Physiotherapie.",
    // City alone while the street address is unsupplied. Emitting
    // `streetAddress: "TODO_ADRESSE_LANDSHUT"` would publish a placeholder
    // to search engines — the exact failure the telephone rule below exists
    // to prevent, and a worse one, because an address is what a search
    // engine shows on a map.
    address: {
      "@type": "PostalAddress",
      ...(hasAddress(location)
        ? { streetAddress: location.street, postalCode: location.postalCode }
        : {}),
      addressLocality: location.city,
      addressCountry: "DE",
    },
    // No openingHoursSpecification: the client never confirmed the hours
    // this site inherited from a predecessor site, and a made-up schedule
    // for a medical provider is misleading advertising. Omitted entirely,
    // not emitted as `[]` — an empty array asserts "we have no hours", a
    // missing field asserts nothing.
  }

  if (hasPhone(location)) data.telephone = location.phone

  // `<` is escaped so this string cannot terminate the <script> tag it is
  // injected into. Still valid JSON — < parses back to "<".
  return JSON.stringify(data).replace(/</g, "\\u003c")
}
