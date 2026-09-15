import { Link, useSearchParams } from "react-router-dom"
import { useT } from "@/content/ui"
import { useLocale } from "@/lib/locale"
import { homePath, terminPath } from "@/lib/routes"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { useSeo } from "@/lib/useSeo"

export default function TerminErfolg() {
  const t = useT()
  const locale = useLocale()
  const [params] = useSearchParams()
  const sessionId = params.get("session_id")

  useSeo({
    title: t("bookingSuccess"),
    description: t("bookingSuccessMetaDescription"),
    canonicalPath: terminPath("erfolg"),
    noindex: true,
  })

  return (
    <Section>
      <Container>
        <div className="flex max-w-2xl flex-col gap-6">
          <SectionHeader
            eyebrow={t("booking")}
            title={t("bookingSuccessTitle")}
            accent={t("bookingSuccessAccent")}
            // Die einzige Überschrift der Seite — ohne level={1} hätte sie
            // gar keine h1.
            level={1}
          />
          {/* Sagt bewusst NICHT, dass ein Termin gebucht ist. Der Kunde hat
              ein Datum angeklickt und glaubt deshalb, es gelte — das ist
              genau der Irrtum, dem hier widersprochen werden muss. */}
          <p className="text-lg leading-relaxed text-brand-800">{t("bookingSuccessBody")}</p>
          {sessionId ? (
            <p className="text-sm text-brand-700">
              {t("bookingReference")}: <span className="font-mono">{sessionId}</span>
            </p>
          ) : null}
          <Link to={homePath(locale)} className="font-semibold text-brand-700 underline">
            {t("backToHome")}
          </Link>
        </div>
      </Container>
    </Section>
  )
}
