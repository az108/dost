import { Link } from "react-router-dom"
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react"
import { pillars } from "@/content/pillars"
import { formatAddress, hasPhone, practice } from "@/content/practice"
import { useT } from "@/content/ui"
import { useLocale } from "@/lib/locale"
import { legalPath, pagePath, pillarPath } from "@/lib/routes"
import { Container } from "./Container"

export function Footer() {
  const t = useT()
  const locale = useLocale()

  // White on every page, deliberately. It used to be bg-brand-50, which is
  // exactly a `tint` section, so it merged into whatever sat above it.
  //
  // White only works because no page ends on a white section: pages either
  // close with the CtaBanner's blue band or with a tint section. Legal pages
  // and the 404 are tinted for that reason alone — see their `tone` props.
  return (
    <footer className="border-t border-brand-100 bg-white py-14 text-brand-900">
      <Container className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-3">
          <p className="font-display text-lg font-extrabold text-brand-900">{practice.brand}</p>
          <p className="text-sm leading-relaxed text-brand-700">{practice.doctor}</p>
          <p className="text-sm leading-relaxed text-brand-700">{practice.qualifications}</p>
        </div>

        <nav className="flex flex-col gap-2" aria-label={t("treatmentsLabel")}>
          <p className="text-sm font-bold uppercase tracking-wider text-brand-600">{t("treatmentsLabel")}</p>
          {pillars(locale).map((p) => (
            <Link key={p.path} to={pillarPath(p.id, locale)} className="text-sm text-brand-800 hover:text-brand">
              {p.title}
            </Link>
          ))}
          <Link to={pagePath("prices", locale)} className="text-sm text-brand-800 hover:text-brand">
            {t("prices")}
          </Link>
        </nav>

        <div className="flex flex-col gap-2">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-600">{t("contact")}</p>
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
          <div className="mt-2 flex flex-col gap-2">
            <a
              href={practice.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-brand-800 hover:text-brand"
            >
              <ExternalLink className="size-4 shrink-0 text-accent" aria-hidden="true" />
              Facebook
            </a>
            <a
              href={practice.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-brand-800 hover:text-brand"
            >
              <ExternalLink className="size-4 shrink-0 text-accent" aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-600">{t("openingHours")}</p>
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
        <p>
          © {new Date().getFullYear()} {practice.shortBrand}. {t("allRightsReserved")}
        </p>
        <nav className="flex gap-4" aria-label={t("legalNavLabel")}>
          <Link to={legalPath("impressum")} className="hover:text-brand-900">
            {locale === "en" ? t("legalImprintGermanOnly") : t("legalImprint")}
          </Link>
          <Link to={legalPath("datenschutz")} className="hover:text-brand-900">
            {locale === "en" ? t("legalPrivacyGermanOnly") : t("legalPrivacy")}
          </Link>
        </nav>
      </Container>
    </footer>
  )
}
