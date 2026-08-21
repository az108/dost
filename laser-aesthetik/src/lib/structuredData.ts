import { hasPhone, practice } from "@/content/practice"

/**
 * JSON-LD for the clinic, generated from practice.ts so it cannot drift from
 * what the footer shows. Telephone is omitted entirely while unknown — an
 * empty or placeholder number in structured data can be surfaced by search
 * engines, which is worse than having none.
 */
export function medicalClinicJsonLd(): string {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: practice.brand,
    description:
      "Privatärztliche Praxis für Laser-Behandlungen, Physiotherapie und ästhetische Medizin.",
    address: {
      "@type": "PostalAddress",
      streetAddress: practice.street,
      postalCode: practice.postalCode,
      addressLocality: practice.city,
      addressCountry: "DE",
    },
    email: practice.email,
    sameAs: [practice.social.facebook, practice.social.linkedin],
    openingHoursSpecification: practice.hours
      .filter((h) => h.schema)
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.schema!.dayOfWeek,
        opens: h.schema!.opens,
        closes: h.schema!.closes,
      })),
  }

  if (hasPhone()) data.telephone = practice.phone

  // `<` is escaped so this string cannot terminate the <script> tag it is
  // injected into. Still valid JSON — < parses back to "<".
  return JSON.stringify(data).replace(/</g, "\\u003c")
}
