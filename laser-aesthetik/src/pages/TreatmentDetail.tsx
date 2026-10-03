import { useParams } from "react-router-dom"
import { treatmentBySlug } from "@/content/treatments"
import { pillarById } from "@/content/pillars"
import { formatEuro, packageTiers, priceFrom } from "@/content/pricing"
import { useT } from "@/content/ui"
import { useLocale } from "@/lib/locale"
import { homePath, pillarPath, treatmentPath } from "@/lib/routes"
import { Breadcrumbs } from "@/components/layout/Breadcrumbs"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { Reveal } from "@/components/motion/Reveal"
import { FeatureList } from "@/components/content/FeatureList"
import { FaqAccordion } from "@/components/content/FaqAccordion"
import { SpecRow } from "@/components/content/SpecRow"
import { TreatmentSidebar } from "@/components/content/TreatmentSidebar"
import { BookingButton } from "@/components/cta/BookingButton"
import { CtaBanner } from "@/components/cta/CtaBanner"
import { useSeo } from "@/lib/useSeo"
import NotFound from "./NotFound"

export default function TreatmentDetail() {
  const { slug } = useParams<{ slug: string }>()
  const t = useT()
  const locale = useLocale()
  const treatment = slug ? treatmentBySlug(slug, locale) : undefined

  // Hooks must run unconditionally, so useSeo is called before the early
  // return, with fallbacks for the not-found case.
  useSeo({
    title: treatment?.title ?? t("notFoundTitle"),
    description: treatment?.excerpt,
    keywords: treatment?.keywords,
    canonicalPath: treatment ? treatmentPath(treatment.slug, locale) : undefined,
  })

  if (!treatment) return <NotFound />

  const pillar = pillarById(treatment.pillar, locale)
  const tiers = packageTiers(treatment.pricing)
  const from = priceFrom(treatment.pricing)

  // Treatments may carry their own FAQ, but none does today and the questions
  // patients ask are pillar-level rather than per-zone. Falling back to the
  // pillar's vetted FAQ keeps every detail page useful without writing 29
  // more sets of answers, each of which would be a fresh medical-claim
  // surface needing legal review.
  const faq = treatment.faq ?? pillar.faq ?? []

  const specs = [
    treatment.durationMin
      ? { label: t("duration"), value: `${treatment.durationMin} ${t("minutesSuffix")}` }
      : null,
    treatment.sessions ? { label: t("sessions"), value: treatment.sessions } : null,
    // "Auf Anfrage" (not "Preis auf Anfrage") on purpose: the pricing section
    // below already renders the exact string "Preis auf Anfrage" once, and
    // TreatmentDetail.test.tsx asserts on that single occurrence with an
    // unscoped getByText. Repeating it here would make the match ambiguous.
    {
      label: t("price"),
      value: from === null ? t("onRequestShort") : `${t("fromPricePrefix")} ${formatEuro(from)}`,
    },
  ].filter(Boolean) as { label: string; value: string }[]

  return (
    <>
      <Section className="pt-8">
        <Container className="flex flex-col gap-8">
          <Breadcrumbs
            trail={[
              { label: t("breadcrumbHome"), to: homePath(locale) },
              { label: pillar.label, to: pillarPath(pillar.id, locale) },
              { label: treatment.title },
            ]}
          />

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col gap-6">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-700">
                {pillar.title}
              </p>
              <h1 className="text-4xl leading-tight sm:text-5xl lg:text-6xl">
                {treatment.headline.lead}{" "}
                <em className="font-display italic text-action-ink">{treatment.headline.accent}</em>
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
        <Container>
          <div className="grid gap-10 lg:grid-cols-[16rem_1fr]">
            <div className="order-2 lg:order-1">
              <TreatmentSidebar pillar={pillar} currentSlug={treatment.slug} />
            </div>

            <div className="order-1 flex flex-col gap-12 lg:order-2">
              <div className="flex flex-col gap-8">
                <Reveal className="flex max-w-prose flex-col gap-5">
                  <SectionHeader
                    eyebrow={t("howItWorksEyebrow")}
                    title={t("yourTreatmentTitle")}
                    accent={t("inDetailAccent")}
                  />
                  {treatment.body.map((p, i) => (
                    <p key={i} className="text-lg leading-relaxed text-brand-800">
                      {p}
                    </p>
                  ))}
                </Reveal>
                <Reveal delay={0.1} className="flex flex-col gap-6 rounded-card bg-brand-50 p-8">
                  <h2 className="font-display text-2xl font-extrabold">
                    {t("yourBenefits")}
                  </h2>
                  <FeatureList items={treatment.benefits} />
                </Reveal>
              </div>

              <div className="flex flex-col gap-8">
                <SectionHeader eyebrow={t("prices")} title={t("whatItCostsTitle")} accent={t("costsAccent")} />
                {treatment.pricing.kind === "onRequest" ? (
                  <div
                    data-testid="pricing-block"
                    className="flex flex-col items-start gap-4 rounded-card border border-brand-100 bg-white p-8"
                  >
                    <p className="font-display text-2xl font-extrabold text-brand-700">
                      {t("priceOnRequest")}
                    </p>
                    <p className="max-w-xl leading-relaxed text-brand-700">
                      {t("priceDependsOnAssessment")}
                    </p>
                    <BookingButton>{t("bookConsultation")}</BookingButton>
                  </div>
                ) : (
                  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    <div className="flex flex-col gap-1 rounded-card border border-brand-100 bg-white p-6">
                      <p className="text-xs font-bold uppercase tracking-widest text-brand-700">
                        {t("singleSession")}
                      </p>
                      <p className="font-display text-3xl font-extrabold text-brand-700">
                        {formatEuro(treatment.pricing.single)}
                      </p>
                    </div>
                    {tiers.map((tier) => (
                      <div
                        key={tier.sessions}
                        className="flex flex-col gap-1 rounded-card border border-brand-100 bg-white p-6"
                      >
                        <p className="text-xs font-bold uppercase tracking-widest text-brand-700">
                          {tier.sessions}
                          {t("packageTierSuffix")} <span className="text-action-ink">−{tier.discountPct} %</span>
                        </p>
                        <p className="font-display text-3xl font-extrabold text-brand-700">
                          {formatEuro(tier.perSession)}
                          <span className="text-sm font-semibold text-brand-700">{t("perSession")}</span>
                        </p>
                        <p className="text-sm text-brand-700">
                          {t("totalLabel")} {formatEuro(tier.total)}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
                <p className="text-sm text-brand-700">{t("pricesIncludeVatNote")}</p>
              </div>

              {faq.length ? (
                <div className="flex max-w-3xl flex-col gap-8">
                  <SectionHeader eyebrow={t("faqEyebrow")} title={t("goodToKnowTitle")} accent={t("goodToKnowAccent")} />
                  <FaqAccordion items={faq} />
                </div>
              ) : null}
            </div>
          </div>
        </Container>
      </Section>

      <CtaBanner />
    </>
  )
}
