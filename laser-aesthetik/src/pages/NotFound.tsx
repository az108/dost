import { Link } from "react-router-dom"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { useSeo } from "@/lib/useSeo"

export default function NotFound() {
  useSeo({ title: "Seite nicht gefunden" })
  return (
    <Section>
      <Container className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-4xl sm:text-5xl">Seite nicht gefunden</h1>
        <p className="max-w-md text-lg text-brand-700">
          Diese Seite gibt es nicht — oder nicht mehr. Vielleicht finden Sie über die
          Startseite, was Sie suchen.
        </p>
        <Link
          to="/"
          className="font-semibold text-action-ink hover:underline"
        >
          Zur Startseite
        </Link>
      </Container>
    </Section>
  )
}
