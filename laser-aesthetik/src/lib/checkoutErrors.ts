import type { T, UiKey } from "@/content/ui"
import type { CheckoutError } from "@/lib/checkout"
import { MAX_MONTHS_AHEAD } from "@/lib/bookingDates"

/**
 * Fehlercode → ui-Schlüssel.
 *
 * Exhaustiv über CheckoutError (außer date_too_far, das eine Zahl einsetzt
 * und deshalb unten zusammengesetzt wird): ein neuer Code des Endpunkts
 * fällt beim Typecheck auf, statt still in einer Sammelmeldung zu
 * verschwinden. Genau das war passiert — stripe_error, stripe_unreachable
 * und http_error hatten keinen Eintrag und landeten alle drei auf der
 * Netzwerkmeldung.
 *
 * stripe_error und stripe_unreachable sind deshalb bewusst NICHT die
 * Netzwerkmeldung: dahinter stehen ein gesperrtes Konto, ein falscher Key
 * oder eine Störung bei Stripe. Der dort vorgeschlagene zweite Versuch kann
 * nie gelingen, und dem Besucher seine eigene Leitung unterzuschieben lässt
 * ihn — mit nicht belasteter Karte — einen Knopf ohne Ausweg drücken.
 */
const ERROR_KEYS: Record<Exclude<CheckoutError, "date_too_far">, UiKey> = {
  closed_that_day: "bookingErrorClosedThatDay",
  date_in_past: "bookingErrorDateInPast",
  invalid_date: "bookingErrorInvalidDate",
  invalid_tageszeit: "bookingErrorInvalidTimeOfDay",
  unknown_sku: "bookingErrorUnknownSku",
  stripe_not_configured: "bookingErrorNotConfigured",
  network_error: "bookingErrorNetwork",
  stripe_error: "bookingErrorPaymentProvider",
  stripe_unreachable: "bookingErrorPaymentProvider",
  method_not_allowed: "bookingErrorGeneric",
  http_error: "bookingErrorGeneric",
}

/**
 * Einen Fehlercode des Endpunkts in einen Satz übersetzen. "Fehler 502" sagt
 * einem Besucher nichts; "An diesem Tag haben wir geschlossen" sagt ihm, was
 * er ändern muss.
 *
 * `code` ist als string typisiert und nicht als CheckoutError: der Endpunkt
 * liegt am anderen Ende der Leitung, die Typzusage in checkout.ts ist eine
 * Behauptung über fremdes JSON. Ein Code, den diese Version nicht kennt,
 * landet auf der allgemeinen Meldung — nie auf der Netzwerkmeldung.
 */
export function errorText(code: string, t: T): string {
  if (code === "date_too_far") {
    return `${t("bookingErrorDateTooFarPrefix")} ${MAX_MONTHS_AHEAD} ${t("bookingErrorDateTooFarSuffix")}`
  }
  const key: UiKey | undefined = ERROR_KEYS[code as Exclude<CheckoutError, "date_too_far">]
  return t(key ?? "bookingErrorGeneric")
}
