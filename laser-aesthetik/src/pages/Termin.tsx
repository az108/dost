import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { treatmentsByPillar } from "@/content/treatments"
import { packageTiers, formatEuro, priceFrom } from "@/content/pricing"
import type { Treatment } from "@/content/types"
import { useT } from "@/content/ui"
import { startCheckout } from "@/lib/checkout"
import { legalPath } from "@/lib/routes"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { Card } from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Hero } from "@/sections/Hero"
import { useSeo } from "@/lib/useSeo"

const TAGESZEITEN = ["vormittags", "nachmittags", "abends"] as const
type Tageszeit = (typeof TAGESZEITEN)[number]

/** Muss zu MAX_MONTHS_AHEAD in public/checkout.php passen. */
const MAX_MONTHS_AHEAD = 6

function isoDate(d: Date): string {
  return d.toISOString().slice(0, 10)
}

/**
 * Fehlercodes des Endpunkts in Sätze übersetzen. "Fehler 422" sagt einem
 * Besucher nichts; "An diesem Tag haben wir geschlossen" sagt ihm, was er
 * ändern muss.
 */
const ERROR_TEXT: Record<string, string> = {
  closed_that_day: "An diesem Tag haben wir geschlossen. Bitte wählen Sie einen anderen Termin.",
  date_in_past: "Das Datum liegt in der Vergangenheit.",
  date_too_far: `Bitte wählen Sie einen Termin innerhalb der nächsten ${MAX_MONTHS_AHEAD} Monate.`,
  invalid_date: "Bitte prüfen Sie das Datum.",
  invalid_tageszeit: "Bitte wählen Sie eine Tageszeit.",
  unknown_sku: "Diese Behandlung ist gerade nicht buchbar.",
  stripe_not_configured: "Die Zahlung ist noch nicht eingerichtet. Bitte kontaktieren Sie uns direkt.",
  network_error: "Verbindung fehlgeschlagen. Bitte versuchen Sie es erneut.",
}

export default function Termin() {
  const t = useT()
  useSeo({ title: t("booking"), description: t("bookingMetaDescription"), canonicalPath: "/termin" })

  const [treatment, setTreatment] = useState<Treatment | null>(null)
  const [sessions, setSessions] = useState<number | null>(null)
  const [datum, setDatum] = useState("")
  const [tageszeit, setTageszeit] = useState<Tageszeit | null>(null)
  const [pending, setPending] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Nur Festpreis: die 17 onRequest-Behandlungen haben keinen Preis, und eine
  // Kaufstrecke anzubieten, die nicht abschließbar ist, ist schlechter als
  // sie wegzulassen.
  const bookable = useMemo(
    () => treatmentsByPillar("laser", "de").filter((x) => x.pricing.kind === "fixed"),
    [],
  )

  const groups = useMemo(() => {
    const map = new Map<string, Treatment[]>()
    for (const x of bookable) {
      const key = x.group ?? "Weitere"
      map.set(key, [...(map.get(key) ?? []), x])
    }
    return [...map.entries()]
  }, [bookable])

  const tiers = treatment && treatment.pricing.kind === "fixed" ? packageTiers(treatment.pricing) : []
  const single = treatment && treatment.pricing.kind === "fixed" ? treatment.pricing.single : 0
  const total = sessions === 1 ? single : (tiers.find((x) => x.sessions === sessions)?.total ?? 0)
  const sku = treatment && sessions ? `${treatment.slug}-${sessions === 1 ? "single" : `${sessions}er`}` : null

  const today = new Date()
  const maxDate = new Date(today)
  maxDate.setMonth(maxDate.getMonth() + MAX_MONTHS_AHEAD)

  async function buy() {
    if (!sku || !tageszeit) return
    setError(null)
    setPending(true)
    // Nur die SKU geht über die Leitung. Den Betrag schlägt checkout.php
    // nach — siehe public/checkout.php. Hier nie einen Preis mitschicken.
    const result = await startCheckout(sku, datum, tageszeit)
    if (result.ok) {
      window.location.href = result.url
      return
    }
    setPending(false)
    setError(ERROR_TEXT[result.error] ?? ERROR_TEXT.network_error)
  }

  return (
    <>
      <Hero
        eyebrow={t("booking")}
        lead={t("bookingHeroLead")}
        accent={t("bookingHeroAccent")}
        description={t("bookingHeroDescription")}
      />

      <Section>
        <Container className="flex max-w-3xl flex-col gap-10">
          {/* Schritt 1 */}
          <div className="flex flex-col gap-6">
            <SectionHeader
              eyebrow={t("bookingStep1Eyebrow")}
              title={t("bookingStep1Title")}
              accent={t("bookingStep1Accent")}
            />
            {groups.map(([group, items]) => (
              <div key={group} className="flex flex-col gap-3">
                <p className="text-sm font-bold uppercase tracking-wider text-brand-700">{group}</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {items.map((x) => (
                    <button
                      key={x.slug}
                      type="button"
                      onClick={() => {
                        setTreatment(x)
                        setSessions(null)
                      }}
                      className={cn(
                        "rounded-card border p-4 text-left transition-colors",
                        treatment?.slug === x.slug
                          ? "border-brand-700 bg-brand-50"
                          : "border-brand-200 hover:bg-brand-50",
                      )}
                    >
                      <span className="block font-semibold text-brand-900">{x.title}</span>
                      <span className="block text-sm text-brand-700">
                        ab {formatEuro(priceFrom(x.pricing) ?? 0)} · {x.durationMin} Min.
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Schritt 2 */}
          {treatment ? (
            <div className="flex flex-col gap-4">
              <SectionHeader
                eyebrow={t("bookingStep2Eyebrow")}
                title={t("bookingStep2Title")}
                accent={t("bookingStep2Accent")}
              />
              <div className="grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setSessions(1)}
                  className={cn(
                    "rounded-card border p-4 text-left transition-colors",
                    sessions === 1 ? "border-brand-700 bg-brand-50" : "border-brand-200 hover:bg-brand-50",
                  )}
                >
                  <span className="block font-semibold text-brand-900">Einzelsitzung</span>
                  <span className="block text-sm text-brand-700">{formatEuro(single)}</span>
                </button>
                {tiers.map((tier) => (
                  <button
                    key={tier.sessions}
                    type="button"
                    onClick={() => setSessions(tier.sessions)}
                    className={cn(
                      "rounded-card border p-4 text-left transition-colors",
                      sessions === tier.sessions
                        ? "border-brand-700 bg-brand-50"
                        : "border-brand-200 hover:bg-brand-50",
                    )}
                  >
                    <span className="block font-semibold text-brand-900">
                      {tier.sessions}er-Paket
                    </span>
                    <span className="block text-sm text-brand-700">
                      {formatEuro(tier.total)} · {tier.discountPct}% günstiger
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ) : null}

          {/* Schritt 3 */}
          {treatment && sessions ? (
            <div className="flex flex-col gap-4">
              <SectionHeader
                eyebrow={t("bookingStep3Eyebrow")}
                title={t("bookingStep3Title")}
                accent={t("bookingStep3Accent")}
              />
              <label className="flex flex-col gap-2">
                <span className="font-semibold text-brand-900">Wunschtermin</span>
                <input
                  type="date"
                  value={datum}
                  min={isoDate(today)}
                  max={isoDate(maxDate)}
                  onChange={(e) => setDatum(e.target.value)}
                  className="rounded-card border border-brand-200 px-4 py-3 text-brand-900"
                />
              </label>
              <div className="flex flex-wrap gap-3">
                {TAGESZEITEN.map((z) => (
                  <button
                    key={z}
                    type="button"
                    onClick={() => setTageszeit(z)}
                    className={cn(
                      "rounded-pill border px-4 py-2 text-sm font-semibold transition-colors",
                      tageszeit === z
                        ? "border-brand-700 bg-brand-50 text-brand-900"
                        : "border-brand-200 text-brand-700 hover:bg-brand-50",
                    )}
                  >
                    {z}
                  </button>
                ))}
              </div>
              {sessions > 1 ? (
                <p className="text-sm text-brand-700">
                  Der Wunschtermin gilt für die <strong>erste</strong> Sitzung. Die weiteren
                  stimmen wir gemeinsam mit Ihnen ab.
                </p>
              ) : null}
            </div>
          ) : null}

          {/* Schritt 4 */}
          {treatment && sessions && datum && tageszeit ? (
            <Card className="flex flex-col gap-4 p-6">
              <SectionHeader
                eyebrow={t("bookingStep4Eyebrow")}
                title={t("bookingStep4Title")}
                accent={t("bookingStep4Accent")}
              />
              <dl className="flex flex-col gap-2 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-brand-700">Behandlung</dt>
                  <dd className="font-semibold text-brand-900">{treatment.title}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-brand-700">Umfang</dt>
                  <dd className="font-semibold text-brand-900">
                    {sessions === 1 ? "Einzelsitzung" : `${sessions}er-Paket`}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-brand-700">Wunschtermin</dt>
                  <dd className="font-semibold text-brand-900">{datum}, {tageszeit}</dd>
                </div>
                <div className="flex justify-between gap-4 border-t border-brand-200 pt-2">
                  <dt className="text-brand-700">Gesamt</dt>
                  <dd className="text-lg font-bold text-brand-900">{formatEuro(total)}</dd>
                </div>
              </dl>

              {/* Die einzige der drei Stellen, die der Kunde sieht, BEVOR das
                  Geld weg ist. Steht deshalb über dem Button, nicht darunter. */}
              <p className="rounded-card bg-brand-50 p-4 text-sm leading-relaxed text-brand-800">
                Sie zahlen jetzt die Behandlung. Der Wunschtermin ist{" "}
                <strong>noch kein bestätigter Termin</strong> — wir melden uns nach Ihrer
                Zahlung, um ihn mit Ihnen zu bestätigen.
              </p>

              {error ? (
                <p role="alert" className="rounded-card bg-red-50 p-4 text-sm text-red-700">
                  {error}
                </p>
              ) : null}

              <button
                type="button"
                onClick={buy}
                disabled={pending}
                className={cn(buttonVariants({ variant: "action", size: "lg" }))}
              >
                {pending ? "Einen Moment…" : "Kostenpflichtig buchen"}
              </button>

              <p className="text-xs text-brand-700">
                Mit der Buchung akzeptieren Sie unsere{" "}
                <Link to={legalPath("agb")} className="font-semibold underline">AGB</Link> und die{" "}
                <Link to={legalPath("widerruf")} className="font-semibold underline">
                  Widerrufsbelehrung
                </Link>.
              </p>
            </Card>
          ) : null}
        </Container>
      </Section>
    </>
  )
}
