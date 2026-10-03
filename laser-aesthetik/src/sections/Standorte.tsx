import { MapPin } from "lucide-react"
import { Container } from "@/components/layout/Container"
import { Section, type SectionTone } from "@/components/layout/Section"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { Card } from "@/components/ui/card"
import { Reveal } from "@/components/motion/Reveal"
import { center, formatAddress } from "@/content/center"
import { useT, type UiKey } from "@/content/ui"
import landshutImg from "@/assets/center/standort-landshut.webp"
import muenchenImg from "@/assets/center/standort-muenchen.webp"
import stuttgartImg from "@/assets/center/standort-stuttgart.webp"

/**
 * One photograph per city, keyed by the city name in center.ts.
 *
 * A lookup rather than a field on `Location`, because it is not a fact
 * about the location: these are stock photographs of three German cities
 * (see CREDITS.md), and the center has no premises to photograph in any of
 * them. A city added to center.ts without a picture here simply renders
 * without one, which is the honest failure mode — the alternative, a
 * required field, would push whoever adds the fourth city into reaching for
 * any image at all.
 */
const CITY_PHOTO: Record<string, { src: string; alt: UiKey }> = {
  Landshut: { src: landshutImg, alt: "standortLandshutImageAlt" },
  München: { src: muenchenImg, alt: "standortMuenchenImageAlt" },
  Stuttgart: { src: stuttgartImg, alt: "standortStuttgartImageAlt" },
}

/**
 * The three cities. Landshut carries an address; München and Stuttgart
 * carry a city and the word "in Planung" and nothing else.
 *
 * That asymmetry is the whole point and it is enforced by the data model,
 * not by this component: a `planned` Location has no street and no booking
 * URL to render. Publishing an address for a site nobody can visit is an
 * SEO liability and, for a medical service, a misleading-advertising risk —
 * see structuredData.ts, which emits an entity for the open location alone.
 */
export function Standorte({
  tone = "light",
}: { tone?: SectionTone } = {}) {
  const t = useT()

  return (
    <Section id="standorte" tone={tone}>
      <Container className="flex flex-col gap-10">
        <SectionHeader
          eyebrow={t("standorteEyebrow")}
          title={t("standorteTitle")}
          accent={t("standorteAccent")}
          lead={t("standorteLead")}
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {center.locations.map((location, i) => {
            const photo = CITY_PHOTO[location.city]
            return (
              <Reveal key={location.city} delay={i * 0.08}>
                {/* overflow-hidden and no padding on the Card itself: the
                    photograph runs to the rounded edge, as on PillarCard,
                    and the text keeps its own padded block below. */}
                <Card className="flex h-full flex-col overflow-hidden">
                  {photo ? (
                    <img
                      src={photo.src}
                      alt={t(photo.alt)}
                      width={1200}
                      height={800}
                      loading="lazy"
                      className="aspect-[3/2] w-full object-cover"
                    />
                  ) : null}

                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <p className="flex items-center gap-2 font-display text-xl font-extrabold text-brand-900">
                      <MapPin className="size-5 shrink-0 text-action-ink" aria-hidden="true" />
                      {location.city}
                    </p>

                    {location.status === "planned" ? (
                      <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">
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
                      </>
                    )}
                  </div>
                </Card>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
