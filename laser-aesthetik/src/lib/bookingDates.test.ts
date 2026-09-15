import { describe, expect, it } from "vitest"
import { berlinDay, bookingWindowEnd, formatGermanDate } from "./bookingDates"

/**
 * Jeder Wert hier landet im min-, max- oder value-Attribut des Datumsfelds
 * und wird danach von public/checkout.php noch einmal geprüft. Was die Seite
 * anbietet, muss der Server annehmen — sonst bekommt der Besucher den Fehler
 * erst am Bezahlknopf, auf einem Datum, das die Seite ihm selbst vorgelegt
 * hat.
 */
describe("berlinDay", () => {
  it("rechnet in Europe/Berlin, nicht in UTC", () => {
    // 00:30 deutscher Zeit ist in UTC noch der Vortag. toISOString() gäbe
    // hier den 30.11. zurück, das min-Attribut ließe also einen Tag zu, den
    // checkout.php (Europe/Berlin) mit date_in_past ablehnt.
    expect(berlinDay(new Date("2026-11-30T23:30:00Z"))).toBe("2026-12-01")
    expect(berlinDay(new Date("2026-12-01T22:30:00Z"))).toBe("2026-12-01")
  })

  it("liefert das Format, das <input type=\"date\"> erwartet", () => {
    expect(berlinDay(new Date("2026-07-05T10:00:00Z"))).toBe("2026-07-05")
  })
})

describe("bookingWindowEnd", () => {
  it("schneidet am Monatsende ab, statt in den Folgemonat zu rollen", () => {
    // Date.setMonth() macht aus dem 31.08. + 6 Monate den 03.03. — ein Datum
    // jenseits des Serverfensters, das die Seite selbst angeboten hätte.
    expect(bookingWindowEnd("2026-08-31")).toBe("2027-02-28")
    expect(bookingWindowEnd("2027-08-31")).toBe("2028-02-29")
  })

  it("lässt einen Tag, den es im Zielmonat gibt, unangetastet", () => {
    expect(bookingWindowEnd("2026-01-31")).toBe("2026-07-31")
    expect(bookingWindowEnd("2026-12-01")).toBe("2027-06-01")
    expect(bookingWindowEnd("2026-09-15")).toBe("2027-03-15")
  })
})

describe("formatGermanDate", () => {
  it("zeigt den Kalendertag deutsch, ohne Zeitzonenumweg", () => {
    expect(formatGermanDate("2026-12-01")).toBe("01.12.2026")
    expect(formatGermanDate("2027-03-09")).toBe("09.03.2027")
  })
})
