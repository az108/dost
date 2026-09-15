import { writeFileSync } from "node:fs"
import { treatments } from "../src/content/treatments"
import { packageTiers } from "../src/content/pricing"
import { center, openLocation } from "../src/content/center"

export interface SkuEntry {
  /** Ganzzahlige Cent. Stripe lehnt Floats ab. */
  amount: number
  currency: "eur"
  /** Wird auf der Stripe-Checkout-Seite angezeigt. */
  name: string
  /** 1, 3, 5 oder 10 — für den Beleg und die Bestätigung. */
  sessions: number
}

export type SkuTable = Record<string, SkuEntry>
/** Englische Wochentage (schema.org-Vokabular), wie in center.ts. */
export type Hours = Record<string, [string, string] | null>

const WEEKDAYS = [
  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
] as const

/**
 * Die Tabelle, aus der checkout.php abrechnet.
 *
 * Sie existiert, weil der Browser nie einen Betrag schicken darf. Über die
 * Leitung geht nur die SKU; der Preis wird hier zur Build-Zeit aus derselben
 * pricing.ts gezogen, aus der auch die Preisseite rendert. Eine von Hand
 * gepflegte PHP-Kopie liefe innerhalb eines Releases auseinander, und die
 * Abweichung wäre erst sichtbar, wenn jemand falsch belastet wurde.
 */
export function buildSkuTable(): SkuTable {
  const table: SkuTable = {}

  for (const treatment of treatments("de")) {
    // onRequest hat keinen Preis. Physio, Kosmetik und Ästhetik bleiben
    // Anfrage.
    if (treatment.pricing.kind !== "fixed") continue

    table[`${treatment.slug}-single`] = {
      amount: Math.round(treatment.pricing.single * 100),
      currency: "eur",
      name: `${treatment.title} — Einzelsitzung`,
      sessions: 1,
    }

    for (const tier of packageTiers(treatment.pricing)) {
      table[`${treatment.slug}-${tier.sessions}er`] = {
        amount: Math.round(tier.total * 100),
        currency: "eur",
        name: `${treatment.title} — ${tier.sessions}er-Paket`,
        sessions: tier.sessions,
      }
    }
  }

  return table
}

/**
 * Öffnungszeiten für die serverseitige Datumsprüfung.
 *
 * center.ts führt sie maschinenlesbar in schema.org-Vokabular; PHP kann das
 * nicht lesen, also wird es hier mitgeneriert. Jeder der sieben Tage kommt
 * vor — ein fehlender Tag würde in checkout.php als `null` gelesen und jeden
 * Termin daran stillschweigend abweisen.
 */
export function buildHours(): Hours {
  const hours: Hours = {}
  for (const day of WEEKDAYS) hours[day] = null

  for (const h of openLocation(center).hours ?? []) {
    if (!h.schema) continue
    for (const day of h.schema.dayOfWeek) {
      hours[day] = [h.schema.opens, h.schema.closes]
    }
  }

  return hours
}

/** PHP-Strings in einfachen Anführungszeichen maskieren nur \ und '. */
function phpString(value: string): string {
  return `'${value.replace(/\\/g, "\\\\").replace(/'/g, "\\'")}'`
}

export function renderPhp(skus: SkuTable, hours: Hours): string {
  const skuRows = Object.entries(skus)
    .map(
      ([sku, e]) =>
        `        ${phpString(sku)} => ['amount' => ${e.amount}, ` +
        `'currency' => ${phpString(e.currency)}, 'name' => ${phpString(e.name)}, ` +
        `'sessions' => ${e.sessions}],`,
    )
    .join("\n")

  const hourRows = Object.entries(hours)
    .map(([day, span]) =>
      span === null
        ? `        ${phpString(day)} => null,`
        : `        ${phpString(day)} => [${phpString(span[0])}, ${phpString(span[1])}],`,
    )
    .join("\n")

  return [
    "<?php",
    "",
    "// GENERIERT von scripts/generate-booking-php.ts — nicht von Hand ändern.",
    "// Neu erzeugen mit `npm run booking`. generate-booking-php.test.ts",
    "// scheitert, wenn diese Datei und pricing.ts/center.ts auseinanderlaufen,",
    "// eine Preisänderung ohne Generatorlauf kann also nicht ausgeliefert werden.",
    "//",
    "// Das ist die EINZIGE Quelle für Beträge in checkout.php. Nichts, was der",
    "// Browser schickt, darf beeinflussen, was belastet wird.",
    "",
    "return [",
    "    'skus' => [",
    skuRows,
    "    ],",
    "    'hours' => [",
    hourRows,
    "    ],",
    "];",
    "",
  ].join("\n")
}

// Nur schreiben, wenn als Skript aufgerufen — nicht beim Import durch den Test.
if (process.argv[1]?.endsWith("generate-booking-php.ts")) {
  const php = renderPhp(buildSkuTable(), buildHours())
  writeFileSync("public/booking.generated.php", php)
  console.log(`booking.generated.php: ${Object.keys(buildSkuTable()).length} SKUs`)
}
