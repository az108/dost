import { useMemo, useState } from "react"
import { treatmentsByPillar } from "@/content/treatments"
import { packageTiers, formatEuro, priceFrom, skuFor } from "@/content/pricing"
import type { Treatment } from "@/content/types"
import { useT, type UiKey } from "@/content/ui"
import { startCheckout } from "@/lib/checkout"
import { errorText } from "@/lib/checkoutErrors"
import { berlinDay, bookingWindowEnd, formatGermanDate } from "@/lib/bookingDates"
import { legalPath, terminPath } from "@/lib/routes"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { Card } from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Hero } from "@/sections/Hero"
import { useSeo } from "@/lib/useSeo"

/**
 * The wire format public/checkout.php validates against, not copy. These
 * literals are what gets posted; ui.timeOfDay* supplies what is read.
 */
const TAGESZEITEN = ["vormittags", "nachmittags", "abends"] as const
type Tageszeit = (typeof TAGESZEITEN)[number]

const TAGESZEIT_KEYS: Record<Tageszeit, UiKey> = {
  vormittags: "timeOfDayMorning",
  nachmittags: "timeOfDayAfternoon",
  abends: "timeOfDayEvening",
}

function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1)
}

const optionClass = (selected: boolean) =>
  cn(
    "rounded-card border p-4 text-left transition-colors",
    selected ? "border-brand-700 bg-brand-50" : "border-brand-200 hover:bg-brand-50",
  )

export default function Termin() {
  const t = useT()
  useSeo({
    title: t("booking"),
    description: t("bookingMetaDescription"),
    canonicalPath: terminPath("index"),
  })

  const [treatment, setTreatment] = useState<Treatment | null>(null)
  const [sessions, setSessions] = useState<number | null>(null)
  const [datum, setDatum] = useState("")
  const [tageszeit, setTageszeit] = useState<Tageszeit | null>(null)
  const [pending, setPending] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Nur Festpreis: die onRequest-Behandlungen haben keinen Preis, und eine
  // Kaufstrecke anzubieten, die nicht abschließbar ist, ist schlechter als
  // sie wegzulassen.
  //
  // treatmentsByPillar("laser", …), während scripts/generate-booking-php.ts
  // über treatments("de") geht. Die beiden Listen sind heute identisch, weil
  // alle 16 Festpreis-Behandlungen LASER sind — das ist eine Tatsache über
  // den Bestand, keine Zusicherung. Bekäme eine Ästhetik-Behandlung einen
  // Festpreis, böte diese Seite sie nicht an, obwohl der Endpunkt sie
  // verkaufen könnte. Der Bindungstest in generate-booking-php.test.ts hält
  // die gefährlichere Richtung fest: keine SKU im Flow ohne Zeile in der
  // Tabelle.
  const bookable = useMemo(
    () => treatmentsByPillar("laser", "de").filter((x) => x.pricing.kind === "fixed"),
    [],
  )

  const groups = useMemo(() => {
    const map = new Map<string, Treatment[]>()
    for (const x of bookable) {
      const key = x.group ?? t("otherTreatments")
      map.set(key, [...(map.get(key) ?? []), x])
    }
    return [...map.entries()]
  }, [bookable, t])

  const tiers = treatment && treatment.pricing.kind === "fixed" ? packageTiers(treatment.pricing) : []
  const single = treatment && treatment.pricing.kind === "fixed" ? treatment.pricing.single : 0
  const total = sessions === 1 ? single : (tiers.find((x) => x.sessions === sessions)?.total ?? 0)
  // skuFor(), nicht hier zusammengesetzt: dieselbe Funktion legt die
  // Schlüssel der Tabelle an, aus der public/checkout.php abrechnet. Von Hand
  // gebaut war das ein Drahtformat in zwei Hälften, die nichts aneinander
  // band. Siehe src/content/pricing.ts.
  const sku = treatment && sessions ? skuFor(treatment.slug, sessions) : null

  const today = berlinDay(new Date())
  const maxDate = bookingWindowEnd(today)

  /**
   * Eine sichtbare Fehlermeldung verfällt, sobald der Besucher an dem dreht,
   * was sie ihm vorwirft.
   *
   * setError(null) lief nur beim Start von buy(). Nach closed_that_day stand
   * "An diesem Tag haben wir geschlossen" also unverändert unter der
   * Übersicht, während der Besucher schon einen anderen Tag gewählt hatte —
   * eine Meldung über eine Auswahl, die es nicht mehr gibt.
   */
  function pickDatum(value: string) {
    setDatum(value)
    setError(null)
  }

  function pickTageszeit(value: Tageszeit) {
    setTageszeit(value)
    setError(null)
  }

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
    setError(errorText(result.error, t))
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
                      // Die Auswahl ist sonst nur ein Rahmen in einer anderen
                      // Farbe — auf der Seite, auf der genau diese Auswahl der
                      // belastete Betrag ist.
                      aria-pressed={treatment?.slug === x.slug}
                      onClick={() => {
                        setTreatment(x)
                        setSessions(null)
                      }}
                      className={optionClass(treatment?.slug === x.slug)}
                    >
                      <span className="block font-semibold text-brand-900">{x.title}</span>
                      <span className="block text-sm text-brand-700">
                        {t("fromPricePrefix")} {formatEuro(priceFrom(x.pricing) ?? 0)} ·{" "}
                        {x.durationMin} {t("minutesSuffix")}
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
                  aria-pressed={sessions === 1}
                  onClick={() => setSessions(1)}
                  className={optionClass(sessions === 1)}
                >
                  <span className="block font-semibold text-brand-900">{t("singleSession")}</span>
                  <span className="block text-sm text-brand-700">{formatEuro(single)}</span>
                </button>
                {tiers.map((tier) => (
                  <button
                    key={tier.sessions}
                    type="button"
                    aria-pressed={sessions === tier.sessions}
                    onClick={() => setSessions(tier.sessions)}
                    className={optionClass(sessions === tier.sessions)}
                  >
                    <span className="block font-semibold text-brand-900">
                      {tier.sessions}
                      {t("packageTierSuffix")}
                    </span>
                    <span className="block text-sm text-brand-700">
                      {formatEuro(tier.total)} · {tier.discountPct}% {t("bookingCheaperSuffix")}
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
                <span className="font-semibold text-brand-900">{t("preferredDate")}</span>
                <input
                  type="date"
                  value={datum}
                  min={today}
                  max={maxDate}
                  onChange={(e) => pickDatum(e.target.value)}
                  className="rounded-card border border-brand-200 px-4 py-3 text-brand-900"
                />
              </label>
              {/* Genau eine der drei Tageszeiten gilt, also radiogroup und
                  nicht drei unabhängige Umschalter. */}
              <div role="radiogroup" aria-label={t("timeOfDay")} className="flex flex-wrap gap-3">
                {TAGESZEITEN.map((z) => (
                  <button
                    key={z}
                    type="button"
                    role="radio"
                    aria-checked={tageszeit === z}
                    onClick={() => pickTageszeit(z)}
                    className={cn(
                      "rounded-pill border px-4 py-2 text-sm font-semibold transition-colors",
                      tageszeit === z
                        ? "border-brand-700 bg-brand-50 text-brand-900"
                        : "border-brand-200 text-brand-700 hover:bg-brand-50",
                    )}
                  >
                    {t(TAGESZEIT_KEYS[z])}
                  </button>
                ))}
              </div>
              {sessions > 1 ? (
                <p className="text-sm text-brand-700">
                  {t("bookingFirstSessionNotePrefix")}{" "}
                  <strong>{t("bookingFirstSessionNoteEmphasis")}</strong>{" "}
                  {t("bookingFirstSessionNoteSuffix")}
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
                  <dt className="text-brand-700">{t("bookingSummaryTreatment")}</dt>
                  <dd className="font-semibold text-brand-900">{treatment.title}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-brand-700">{t("bookingSummaryScope")}</dt>
                  <dd className="font-semibold text-brand-900">
                    {sessions === 1 ? t("singleSession") : `${sessions}${t("packageTierSuffix")}`}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-brand-700">{t("preferredDate")}</dt>
                  {/* Kein roher ISO-String: "2026-12-01, vormittags" ist das
                      Letzte, was ein deutscher Kunde vor der Zahlung liest. */}
                  <dd className="font-semibold text-brand-900">
                    {formatGermanDate(datum)}, {capitalize(t(TAGESZEIT_KEYS[tageszeit]))}
                  </dd>
                </div>
                <div className="flex justify-between gap-4 border-t border-brand-200 pt-2">
                  <dt className="text-brand-700">{t("bookingSummaryTotal")}</dt>
                  <dd className="text-lg font-bold text-brand-900">{formatEuro(total)}</dd>
                </div>
              </dl>
              {/*
               * § 1 PAngV verlangt vor einem Verbrauchergeschäft die Angabe,
               * ob und in welcher Höhe Umsatzsteuer enthalten ist.
               *
               * Genau dieselbe Zeichenkette wie auf den 33 Behandlungsseiten,
               * und dieselbe Aussage wie ui.packagePricesLead auf /preise —
               * für dieselben Preise. Hier stand vorher nichts, mit der
               * Begründung, der Steuerstatus sei offen; damit war die Seite,
               * auf der tatsächlich gezahlt wird, die einzige ohne Angabe,
               * während 34 andere Seiten "inkl. MwSt." behaupteten. Beides
               * ging nicht.
               *
               * Ob die Behauptung stimmt, ist weiter offen und weiter ein
               * roter Guard — aber SEITENWEIT, nicht für diese Seite allein:
               * siehe den Umsatzsteuer-Guard in src/deploy.test.ts und den
               * Marker in src/content/ui.ts.
               */}
              <p className="text-xs text-brand-700">{t("pricesIncludeVatNote")}</p>

              {/* Die einzige der drei Stellen, die der Kunde sieht, BEVOR das
                  Geld weg ist. Steht deshalb über dem Button, nicht darunter. */}
              <p className="rounded-card bg-brand-50 p-4 text-sm leading-relaxed text-brand-800">
                {t("bookingNoticePrefix")} <strong>{t("bookingNoticeEmphasis")}</strong>{" "}
                {t("bookingNoticeSuffix")}
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
                {pending ? t("bookingSubmitPending") : t("bookingSubmit")}
              </button>

              {/*
               * Ein neuer Tab, kein <Link>. Der gesamte Zustand dieser
               * Kaufstrecke — Behandlung, Umfang, Datum, Tageszeit — liegt in
               * useState auf dieser Komponente, und eine Navigation hängt sie
               * aus: wer tut, was dieser Satz ihm sagt, und die Bedingungen
               * liest, die er gleich akzeptiert, kam bei Schritt 1 ohne
               * Auswahl und ohne Erklärung wieder heraus. Beide Ziele sind
               * echte, prerenderte URLs, also target="_blank" — im deutschen
               * Handel die übliche Form für genau diese zwei Links.
               *
               * rel="noopener noreferrer" gehört dazu, auch bei eigenen
               * Zielen: ohne noopener behält das geöffnete Dokument
               * window.opener auf diese Seite.
               */}
              <p className="text-xs text-brand-700">
                {t("bookingTermsPrefix")}{" "}
                <a
                  href={legalPath("agb")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline"
                >
                  {t("legalTerms")}
                </a>{" "}
                {t("bookingTermsConjunction")}{" "}
                <a
                  href={legalPath("widerruf")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline"
                >
                  {t("legalWithdrawalNotice")}
                </a>
                .
              </p>
            </Card>
          ) : null}
        </Container>
      </Section>
    </>
  )
}
