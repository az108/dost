import { ExternalLink, Mail, MapPin, Phone } from "lucide-react"
import { formatAddress, hasPhone, practice } from "@/content/practice"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { BookingButton } from "@/components/cta/BookingButton"
import { Hero } from "@/sections/Hero"
import { useSeo } from "@/lib/useSeo"

const mapsUrl = `https://www.openstreetmap.org/search?query=${encodeURIComponent(
  `${practice.street}, ${practice.postalCode} ${practice.city}`,
)}`

export default function Kontakt() {
  useSeo({
    title: "Kontakt",
    description: `Praxis ${practice.shortBrand}, ${formatAddress()}. Termine online über Doctolib.`,
    canonicalPath: "/kontakt",
  })

  return (
    <>
      <Hero
        eyebrow="Kontakt"
        lead="So erreichen"
        accent="Sie uns"
        description="Termine buchen Sie am schnellsten online. Für alles andere schreiben Sie uns einfach."
      />

      <Section>
        <Container className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <SectionHeader eyebrow="Praxis" title="Adresse &" accent="Anfahrt" />
            <p className="flex items-start gap-3 text-lg text-brand-800">
              <MapPin className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />
              {formatAddress()}
            </p>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 self-start font-semibold text-action hover:underline"
            >
              Auf der Karte ansehen
              <ExternalLink className="size-4" aria-hidden="true" />
            </a>
            <a
              href={`mailto:${practice.email}`}
              className="flex items-center gap-3 text-lg text-brand-800 hover:text-brand"
            >
              <Mail className="size-5 shrink-0 text-accent" aria-hidden="true" />
              {practice.email}
            </a>
            {hasPhone() ? (
              <a
                href={`tel:${practice.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-lg text-brand-800 hover:text-brand"
              >
                <Phone className="size-5 shrink-0 text-accent" aria-hidden="true" />
                {practice.phone}
              </a>
            ) : null}
          </div>

          <div className="flex flex-col gap-6 rounded-card bg-brand-50 p-8">
            <SectionHeader eyebrow="Öffnungszeiten" title="Wann wir" accent="da sind" />
            <dl className="flex flex-col gap-3">
              {practice.hours.map((h) => (
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
    </>
  )
}
