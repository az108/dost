import { useParams } from "react-router-dom"
import { treatmentBySlug, treatmentsByPillar } from "@/content/treatments"
import { pillarById } from "@/content/pillars"
import { formatEuro, packageTiers, priceFrom } from "@/content/pricing"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { Reveal } from "@/components/motion/Reveal"
import { FeatureList } from "@/components/content/FeatureList"
import { FaqAccordion } from "@/components/content/FaqAccordion"
import { SpecRow } from "@/components/content/SpecRow"
import { TreatmentCard } from "@/components/content/TreatmentCard"
import { BookingButton } from "@/components/cta/BookingButton"
import { CtaBanner } from "@/components/cta/CtaBanner"
import { useSeo } from "@/lib/useSeo"
import NotFound from "./NotFound"

export default function TreatmentDetail() {
  const { slug } = useParams<{ slug: string }>()
  const treatment = slug ? treatmentBySlug(slug) : undefined

  // Hooks must run unconditionally, so useSeo is called before the early
  // return, with fallbacks for the not-found case.
  useSeo({
    title: treatment?.title ?? "Seite nicht gefunden",
    description: treatment?.excerpt,
    keywords: treatment?.keywords,
    canonicalPath: treatment ? `/behandlungen/${treatment.slug}` : undefined,
  })

  if (!treatment) return <NotFound />

  const pillar = pillarById(treatment.pillar)
  const tiers = packageTiers(treatment.pricing)
  const from = priceFrom(treatment.pricing)
  const related = treatmentsByPillar(treatment.pillar)
    .filter((t) => t.slug !== treatment.slug)
    .slice(0, 3)

  const specs = [
    treatment.durationMin ? { label: "Dauer", value: `${treatment.durationMin} Min.` } : null,
    treatment.sessions ? { label: "Sitzungen", value: treatment.sessions } : null,
    // "Auf Anfrage" (not "Preis auf Anfrage") on purpose: the pricing section
    // below already renders the exact string "Preis auf Anfrage" once, and
    // TreatmentDetail.test.tsx asserts on that single occurrence with an
    // unscoped getByText. Repeating it here would make the match ambiguous.
    { label: "Preis", value: from === null ? "Auf Anfrage" : `ab ${formatEuro(from)}` },
  ].filter(Boolean) as { label: string; value: string }[]

  return (
    <>
      <Section tone="tint" className="pt-8">
        <Container className="flex flex-col gap-8">
          <Breadcrumbs
            trail={[
              { label: "Start", to: "/" },
              { label: pillar.label, to: pillar.path },
              { label: treatment.title },
            ]}
          />

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col gap-6">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent">
                {pillar.title}
              </p>
              <h1 className="text-4xl leading-tight sm:text-5xl lg:text-6xl">
                {treatment.headline.lead}{" "}
                <em className="font-display italic text-accent">{treatment.headline.accent}</em>
              </h1>
              <p className="text-lg leading-relaxed text-brand-700">{treatment.excerpt}</p>
              <SpecRow items={specs} />
              <div className="flex flex-wrap gap-3">
                <BookingButton />
              </div>
            </div>

            {treatment.image ? (
              <img
                src={treatment.image}
                alt={treatment.imageAlt ?? ""}
                width={1400}
                height={933}
                loading="eager"
                fetchPriority="high"
                className="aspect-[3/2] w-full rounded-card object-cover"
              />
            ) : (
              <div className="aspect-[3/2] w-full rounded-card bg-gradient-to-br from-brand-200 via-brand-100 to-white" />
            )}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-12 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-5">
            <SectionHeader eyebrow="So funktioniert's" title="Ihre Behandlung" accent="im Detail" />
            {treatment.body.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-brand-800">
                {p}
              </p>
            ))}
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-6 rounded-card bg-brand-50 p-8">
            <h2 className="font-display text-2xl font-extrabold text-brand">Ihre Vorteile</h2>
            <FeatureList items={treatment.benefits} />
          </Reveal>
        </Container>
      </Section>

      <Section tone="tint">
        <Container className="flex flex-col gap-8">
          <SectionHeader eyebrow="Preise" title="Was diese Behandlung" accent="kostet" />
          {treatment.pricing.kind === "onRequest" ? (
            <div
              data-testid="pricing-block"
              className="flex flex-col items-start gap-4 rounded-card border border-brand-100 bg-white p-8"
            >
              <p className="font-display text-2xl font-extrabold text-brand">
                Preis auf Anfrage
              </p>
              <p className="max-w-xl leading-relaxed text-brand-700">
                Der Preis hängt vom Befund und vom Behandlungsumfang ab. Wir besprechen ihn
                im Erstgespräch — verbindlich und bevor eine Behandlung beginnt.
              </p>
              <BookingButton>Beratungstermin buchen</BookingButton>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col gap-1 rounded-card border border-brand-100 bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-600">
                  Einzelsitzung
                </p>
                <p className="font-display text-3xl font-extrabold text-brand">
                  {formatEuro(treatment.pricing.single)}
                </p>
              </div>
              {tiers.map((tier) => (
                <div
                  key={tier.sessions}
                  className="flex flex-col gap-1 rounded-card border border-brand-100 bg-white p-6"
                >
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-600">
                    {tier.sessions}er-Paket{" "}
                    <span className="text-accent">−{tier.discountPct} %</span>
                  </p>
                  <p className="font-display text-3xl font-extrabold text-brand">
                    {formatEuro(tier.perSession)}
                    <span className="text-sm font-semibold text-brand-600">/Sitzung</span>
                  </p>
                  <p className="text-sm text-brand-600">gesamt {formatEuro(tier.total)}</p>
                </div>
              ))}
            </div>
          )}
          <p className="text-sm text-brand-600">
            Alle Preise inkl. MwSt. Paketpreise gelten bei Vorauszahlung des Gesamtpakets.
          </p>
        </Container>
      </Section>

      {treatment.faq?.length ? (
        <Section>
          <Container className="flex max-w-3xl flex-col gap-8">
            <SectionHeader eyebrow="Häufige Fragen" title="Gut zu" accent="wissen" />
            <FaqAccordion items={treatment.faq} />
          </Container>
        </Section>
      ) : null}

      {related.length > 0 ? (
        <Section tone="tint">
          <Container className="flex flex-col gap-8">
            <SectionHeader
              eyebrow={pillar.label}
              title="Weitere Behandlungen"
              accent="in diesem Bereich"
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((t) => (
                <TreatmentCard key={t.slug} treatment={t} />
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      <CtaBanner />
    </>
  )
}
