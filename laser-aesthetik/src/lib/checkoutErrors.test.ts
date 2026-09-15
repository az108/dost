import { describe, expect, it } from "vitest"
import { errorText } from "./checkoutErrors"
import { ui } from "@/content/ui"

// t() ohne Router: /termin ist deutsch-only, und geprüft wird hier die
// Zuordnung Code → Satz, nicht die Sprachwahl.
const t = ((key: keyof typeof ui) => ui[key].de) as never

describe("errorText", () => {
  it("übersetzt jede Fehlerfamilie in einen eigenen Satz", () => {
    expect(errorText("closed_that_day", t)).toBe(ui.bookingErrorClosedThatDay.de)
    expect(errorText("date_in_past", t)).toBe(ui.bookingErrorDateInPast.de)
    expect(errorText("invalid_date", t)).toBe(ui.bookingErrorInvalidDate.de)
    expect(errorText("invalid_tageszeit", t)).toBe(ui.bookingErrorInvalidTimeOfDay.de)
    expect(errorText("unknown_sku", t)).toBe(ui.bookingErrorUnknownSku.de)
    expect(errorText("stripe_not_configured", t)).toBe(ui.bookingErrorNotConfigured.de)
    expect(errorText("network_error", t)).toBe(ui.bookingErrorNetwork.de)
    expect(errorText("stripe_error", t)).toBe(ui.bookingErrorPaymentProvider.de)
    expect(errorText("stripe_unreachable", t)).toBe(ui.bookingErrorPaymentProvider.de)
    expect(errorText("method_not_allowed", t)).toBe(ui.bookingErrorGeneric.de)
    expect(errorText("http_error", t)).toBe(ui.bookingErrorGeneric.de)
  })

  it("nennt bei einem Ausfall des Zahlungsdienstleisters nicht die Leitung des Besuchers", () => {
    // Hinter stripe_error steht ein gesperrtes Konto, ein falscher Key oder
    // eine Stripe-Störung. "Bitte versuchen Sie es erneut" kann dann nie
    // gelingen — die Meldung muss den Weg zum Center anbieten.
    for (const code of ["stripe_error", "stripe_unreachable", "http_error", "method_not_allowed"]) {
      expect(errorText(code, t), code).not.toBe(ui.bookingErrorNetwork.de)
      expect(errorText(code, t), code).toMatch(/kontaktieren Sie uns direkt/)
    }
  })

  it("setzt das Buchungsfenster in den date_too_far-Satz ein", () => {
    expect(errorText("date_too_far", t)).toBe(
      `${ui.bookingErrorDateTooFarPrefix.de} 6 ${ui.bookingErrorDateTooFarSuffix.de}`,
    )
  })

  it("fällt bei einem unbekannten Code nie auf die Netzwerkmeldung", () => {
    // Der Endpunkt liegt am anderen Ende der Leitung; die Typzusage in
    // checkout.ts ist eine Behauptung über fremdes JSON. Ein Code, den diese
    // Version nicht kennt, darf dem Besucher nicht seine eigene Verbindung
    // als Ursache unterschieben.
    expect(errorText("irgendwas_neues", t)).toBe(ui.bookingErrorGeneric.de)
    expect(errorText("irgendwas_neues", t)).not.toBe(ui.bookingErrorNetwork.de)
  })
})
