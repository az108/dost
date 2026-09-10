import { ExternalLink, Mail, MapPin, Phone } from "lucide-react"
import { center, formatAddress, hasAddress, hasEmail, hasPhone, openLocation } from "@/content/center"
import { useT } from "@/content/ui"
import { useLocale } from "@/lib/locale"
import { pagePath } from "@/lib/routes"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { BookingButton } from "@/components/cta/BookingButton"
import { ContactForm } from "@/components/content/ContactForm"
import { Hero } from "@/sections/Hero"
import { useSeo } from "@/lib/useSeo"

export default function Kontakt() {
  const t = useT()
  const locale = useLocale()
  const location = openLocation()

  // The Landshut location's street/postalCode are still TODO sentinels, so
  // formatAddress() must never run unguarded here — see the hasAddress()
  // checks below for what an unguarded call would do to each surface.
  const mapsUrl = hasAddress(location)
    ? `https://www.openstreetmap.org/search?query=${encodeURIComponent(formatAddress(location))}`
    : null

  useSeo({
    title: t("contact"),
    // center.brand, not t("practice") — a later task retitles the "practice"
    // UI key to "Über uns", which would otherwise leak "Über uns Aurea
    // Center, …" into the page's meta description.
    description: `${center.brand}, ${
      hasAddress(location) ? formatAddress(location) : location.city
    }. ${t("contactMetaDescriptionSuffix")}`,
    canonicalPath: pagePath("contact", locale),
  })

  return (
    <>
      <Hero
        eyebrow={t("contact")}
        lead={t("contactHeroLead")}
        accent={t("contactHeroAccent")}
        description={t("contactHeroDescription")}
      />

      <Section overlap flank="left" flankTone="blush">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <SectionHeader eyebrow={t("practice")} title={t("addressTitle")} accent={t("addressAccent")} />
            <p className="flex items-start gap-3 text-lg text-brand-800">
              <MapPin className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />
              {hasAddress(location) ? formatAddress(location) : location.city}
            </p>
            {/* No street address yet means no useful map target — a link
                pointing at an OpenStreetMap search for the placeholder
                string would be worse than no link at all. */}
            {mapsUrl ? (
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 self-start font-semibold text-brand-800 hover:text-brand"
              >
                {t("viewOnMap")}
                <ExternalLink className="size-4" aria-hidden="true" />
              </a>
            ) : null}
            {hasEmail() ? (
              <a
                href={`mailto:${center.email}`}
                className="flex items-center gap-3 text-lg text-brand-800 hover:text-brand"
              >
                <Mail className="size-5 shrink-0 text-accent" aria-hidden="true" />
                {center.email}
              </a>
            ) : null}
            {hasPhone(location) ? (
              <a
                href={`tel:${location.phone!.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-lg text-brand-800 hover:text-brand"
              >
                <Phone className="size-5 shrink-0 text-accent" aria-hidden="true" />
                {location.phone}
              </a>
            ) : null}
          </div>

          <div className="flex flex-col gap-6 rounded-card bg-brand-50 p-8">
            <SectionHeader eyebrow={t("openingHours")} title={t("whenWereThereTitle")} accent={t("whenWereThereAccent")} />
            <dl className="flex flex-col gap-3">
              {(location.hours ?? []).map((h) => (
                <div
                  key={h.days}
                  className="flex justify-between gap-4 border-b border-brand-200 pb-3 last:border-0"
                >
                  <dt className="text-brand-700">{h.days}</dt>
                  <dd className="font-semibold text-brand-900">{h.time}</dd>
                </div>
              ))}
            </dl>
            <BookingButton />
          </div>
        </Container>
      </Section>

      <Section tone="tint" overlap flank="right" flankTone="blue">
        <Container>
          <div className="mx-auto flex max-w-2xl flex-col gap-8">
            <SectionHeader
              eyebrow={t("messageEyebrow")}
              title={t("writeToUsTitle")}
              accent={t("writeToUsAccent")}
              lead={t("contactFormLead")}
            />
            <ContactForm />
          </div>
        </Container>
      </Section>
    </>
  )
}
