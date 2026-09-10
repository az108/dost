import { Link } from "react-router-dom"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { useT } from "@/content/ui"
import { useLocale } from "@/lib/locale"
import { homePath } from "@/lib/routes"
import { useSeo } from "@/lib/useSeo"

export default function NotFound() {
  const t = useT()
  const locale = useLocale()

  useSeo({ title: t("notFoundTitle") })

  return (
    // Tinted for the same reason as the legal pages: no CtaBanner below, so
    // the white footer needs something other than white above it.
    <Section tone="tint">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-4xl sm:text-5xl">{t("notFoundTitle")}</h1>
        <p className="max-w-md text-lg text-brand-700">{t("notFoundBody")}</p>
        <Link
          to={homePath(locale)}
          className="font-semibold text-brand-700 hover:underline"
        >
          {t("notFoundHomeLink")}
        </Link>
      </Container>
    </Section>
  )
}
