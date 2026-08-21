import type { SVGProps } from "react"
import { Link } from "react-router-dom"
import { Mail, MapPin, Phone } from "lucide-react"
import { pillars } from "@/content/pillars"
import { formatAddress, hasPhone, practice } from "@/content/practice"
import { Container } from "./Container"

// lucide-react dropped brand/logo glyphs (trademark reasons), so Facebook
// and LinkedIn are not among its exports. Two small local marks stand in,
// sized and coloured the same way any lucide icon would be.
function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 448 512" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
    </svg>
  )
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 448 512" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-brand-100 bg-brand-50 py-14 text-brand-900">
      <Container className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-3">
          <p className="font-display text-lg font-extrabold text-brand">{practice.brand}</p>
          <p className="text-sm leading-relaxed text-brand-700">{practice.doctor}</p>
          <p className="text-sm leading-relaxed text-brand-700">{practice.qualifications}</p>
        </div>

        <nav className="flex flex-col gap-2" aria-label="Behandlungen">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-600">Behandlungen</p>
          {pillars.map((p) => (
            <Link key={p.path} to={p.path} className="text-sm text-brand-800 hover:text-brand">
              {p.title}
            </Link>
          ))}
          <Link to="/preise" className="text-sm text-brand-800 hover:text-brand">
            Preise
          </Link>
        </nav>

        <div className="flex flex-col gap-2">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-600">Kontakt</p>
          <p className="flex items-start gap-2 text-sm text-brand-800">
            <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
            {formatAddress()}
          </p>
          <a
            href={`mailto:${practice.email}`}
            className="flex items-center gap-2 text-sm text-brand-800 hover:text-brand"
          >
            <Mail className="size-4 shrink-0 text-accent" aria-hidden="true" />
            {practice.email}
          </a>
          {hasPhone() ? (
            <a
              href={`tel:${practice.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-sm text-brand-800 hover:text-brand"
            >
              <Phone className="size-4 shrink-0 text-accent" aria-hidden="true" />
              {practice.phone}
            </a>
          ) : null}
          <div className="mt-2 flex gap-3">
            <a
              href={practice.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-brand-700 hover:text-brand"
            >
              <FacebookIcon className="size-5" />
            </a>
            <a
              href={practice.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-brand-700 hover:text-brand"
            >
              <LinkedinIcon className="size-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-600">Öffnungszeiten</p>
          <dl className="flex flex-col gap-1 text-sm">
            {practice.hours.map((h) => (
              <div key={h.days} className="flex justify-between gap-4">
                <dt className="text-brand-700">{h.days}</dt>
                <dd className="font-medium text-brand-900">{h.time}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>

      <Container className="mt-10 flex flex-col gap-3 border-t border-brand-200 pt-6 text-sm text-brand-700 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {practice.shortBrand}. Alle Rechte vorbehalten.</p>
        <nav className="flex gap-4" aria-label="Rechtliches">
          <Link to="/impressum" className="hover:text-brand">Impressum</Link>
          <Link to="/datenschutz" className="hover:text-brand">Datenschutz</Link>
        </nav>
      </Container>
    </footer>
  )
}
