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
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "10:00",
        closes: "18:00",
      },
    ],
  }

  if (hasPhone()) data.telephone = practice.phone

  return JSON.stringify(data)
}
