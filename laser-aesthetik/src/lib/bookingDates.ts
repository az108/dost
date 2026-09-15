/**
 * Das Datumsfenster der Terminbuchung.
 *
 * Eigene Datei, weil jede dieser Funktionen eine Grenze berechnet, die
 * public/checkout.php danach noch einmal prüft: was die Seite anbietet, muss
 * der Server annehmen. Ein Datum, das das Datumsfeld zulässt und der
 * Endpunkt ablehnt, bekommt der Besucher erst am Bezahlknopf zu sehen.
 */

/** Muss zu MAX_MONTHS_AHEAD in public/checkout.php passen. */
export const MAX_MONTHS_AHEAD = 6

/**
 * Europe/Berlin — die Zone, in der checkout.php "heute" bestimmt.
 *
 * "en-CA" liefert das ISO-Format YYYY-MM-DD, das ein <input type="date">
 * erwartet.
 */
const BERLIN_DAY = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Europe/Berlin",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
})

function pad(value: number): string {
  return String(value).padStart(2, "0")
}

/**
 * Der Kalendertag in Europe/Berlin, als "2026-12-01".
 *
 * Hier stand toISOString(), das UTC liefert: zwischen 00:00 und 02:00
 * deutscher Zeit ist das der Vortag. Das min-Attribut des Datumsfelds ließe
 * dann einen Tag zu, den der Server mit date_in_past ablehnt — auf einem
 * Datum, das die Seite dem Besucher selbst angeboten hat.
 */
export function berlinDay(now: Date): string {
  return BERLIN_DAY.format(now)
}

/**
 * Das späteste buchbare Datum: `iso` plus MAX_MONTHS_AHEAD Monate, am
 * Monatsende abgeschnitten.
 *
 * Date.setMonth() rollt einen überzähligen Tag in den Folgemonat weiter
 * (31.08. + 6 Monate = 03.03.), und PHPs modify("+6 months") tut dasselbe —
 * heute laufen die beiden Grenzen also gleich. Sich darauf zu verlassen
 * hieße, die Kaufstrecke an einen Quirk zweier Sprachen zu binden, den
 * keine von beiden zusichert. Abgeschnitten liegt das Fenster nie hinter dem
 * des Servers, und ein angebotenes Datum kann nicht mit date_too_far
 * zurückkommen.
 */
export function bookingWindowEnd(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number)
  const shifted = month + MAX_MONTHS_AHEAD
  const targetYear = year + Math.floor((shifted - 1) / 12)
  const targetMonth = ((shifted - 1) % 12) + 1
  // Tag 0 des Folgemonats ist der letzte Tag des Zielmonats; UTC, damit die
  // Zeitzone des Besuchers hier nichts verschiebt.
  const lastDay = new Date(Date.UTC(targetYear, targetMonth, 0)).getUTCDate()
  return `${targetYear}-${pad(targetMonth)}-${pad(Math.min(day, lastDay))}`
}

/**
 * "2026-12-01" → "01.12.2026", die letzte Zeile, die ein deutscher Kunde vor
 * der Zahlung liest.
 *
 * Ohne Date-Objekt: der ISO-String ist bereits ein Kalendertag, und
 * new Date("2026-12-01") wäre UTC-Mitternacht und damit westlich von
 * Greenwich der Vortag. /termin ist deutsch-only, deshalb fest das deutsche
 * Format.
 */
export function formatGermanDate(iso: string): string {
  const [year, month, day] = iso.split("-")
  return `${day}.${month}.${year}`
}
