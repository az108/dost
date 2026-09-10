import { MapPin } from "lucide-react"
import { Container } from "@/components/layout/Container"
import { Section, type SectionTone } from "@/components/layout/Section"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { Card } from "@/components/ui/card"
import { Reveal } from "@/components/motion/Reveal"
import { center, formatAddress } from "@/content/center"
import { useT } from "@/content/ui"

/**
 * The three cities. Landshut carries an address and hours; München and
 * Stuttgart carry a city and the word "in Planung" and nothing else.
 *
 * That asymmetry is the whole point and it is enforced by the data model,
 * not by this component: a `planned` Location has no street, no hours and
 * no booking URL to render. Publishing an address for a site nobody can
 * visit is an SEO liability and, for a medical service, a
 * misleading-advertising risk — see structuredData.ts, which emits an
 * entity for the open location alone.
 */
export function Standorte({
  tone = "light",
  overlap = false,
}: { tone?: SectionTone; overlap?: boolean } = {}) {
  const t = useT()

  return (
    <Section id="standorte" tone={tone} overlap={overlap}>
      <Container className="flex flex-col gap-10">
        <SectionHeader
          eyebrow={t("standorteEyebrow")}
          title={t("standorteTitle")}
          accent={t("standorteAccent")}
          lead={t("standorteLead")}
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {center.locations.map((location, i) => (
            <Reveal key={location.city} delay={i * 0.08}>
              <Card className="flex h-full flex-col gap-4 p-6">
                <p className="flex items-center gap-2 font-display text-xl font-extrabold text-brand-900">
                  <MapPin className="size-5 shrink-0 text-action-ink" aria-hidden="true" />
                  {location.city}
                </p>

                {location.status === "planned" ? (
                  <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                    {t("standortPlanned")}
                  </p>
                ) : (
                  <>
                    {/* The city name already opens the card above, so a
                        missing address is simply omitted here rather than
                        repeating it — city twice in one card reads as a
                        rendering bug, not as an honest "no address yet". */}
                    {formatAddress(location) ? (
                      <p className="text-sm leading-relaxed text-brand-800">
                        {formatAddress(location)}
                      </p>
                    ) : null}
                    <dl className="flex flex-col gap-1 text-sm">
                      {(location.hours ?? []).map((h) => (
                        <div key={h.days} className="flex justify-between gap-4">
                          <dt className="text-brand-700">{h.days}</dt>
                          <dd className="font-medium text-brand-900">{h.time}</dd>
                        </div>
                      ))}
                    </dl>
                  </>
                )}
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
