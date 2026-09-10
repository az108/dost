import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { useT } from "@/content/ui"
import { BookingButton } from "./BookingButton"

export function CtaBanner({
  title,
  accent,
  lead,
}: {
  title?: string
  accent?: string
  lead?: string
}) {
  const t = useT()

  return (
    <Section tone="brand">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl">
          {title ?? t("ctaTitle")}{" "}
          <em className="font-display italic text-white/70">{accent ?? t("ctaAccent")}</em>
        </h2>
        <p className="max-w-xl text-lg leading-relaxed text-brand-100">{lead ?? t("ctaLead")}</p>
        <BookingButton />
      </Container>
    </Section>
  )
}
