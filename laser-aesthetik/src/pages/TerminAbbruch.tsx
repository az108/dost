import { Link } from "react-router-dom"
import { useT } from "@/content/ui"
import { terminPath } from "@/lib/routes"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { useSeo } from "@/lib/useSeo"

export default function TerminAbbruch() {
  const t = useT()

  useSeo({
    title: t("bookingCancelled"),
    description: t("bookingCancelledMetaDescription"),
    canonicalPath: "/termin/abbruch",
    noindex: true,
  })

  return (
    <Section>
      <Container>
        <div className="flex max-w-2xl flex-col gap-6">
          <SectionHeader
            eyebrow={t("booking")}
            title={t("bookingCancelledTitle")}
            accent={t("bookingCancelledAccent")}
          />
          {/* Der Besucher kommt hier an, nachdem er bei Stripe abgebrochen
              hat, und weiß in diesem Moment vor allem eines nicht: ob er
              schon bezahlt hat. Das steht deshalb im ersten Satz. Dass kein
              Termin gebucht wurde, gilt hier ohnehin — es wurde ja nicht
              einmal gezahlt. */}
          <p className="text-lg leading-relaxed text-brand-800">
            Die Zahlung wurde abgebrochen. Es wurde <strong>nichts belastet</strong> und
            keine Buchung angelegt. Ihr Wunschtermin ist damit hinfällig — wenn Sie es
            noch einmal versuchen möchten, wählen Sie Behandlung und Termin einfach neu.
          </p>
          <Link to={terminPath("index")} className="font-semibold text-brand-700 underline">
            {t("bookingRestart")}
          </Link>
        </div>
      </Container>
    </Section>
  )
}
