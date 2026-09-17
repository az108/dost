import { writeFileSync } from "node:fs"
import { treatments } from "../src/content/treatments"
import { packageTiers, skuFor } from "../src/content/pricing"

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

  // treatments("de"), während src/pages/Termin.tsx über
  // treatmentsByPillar("laser", "de") geht. Die beiden Listen stimmen heute
  // überein, weil alle 16 Festpreis-Behandlungen zufällig LASER sind — nicht,
  // weil es so sein müsste. Bekäme eine Ästhetik-Behandlung einen Festpreis,
  // stünde sie in dieser Tabelle und nicht im Flow: die Seite böte sie nicht
  // an, der Endpunkt verkaufte sie aber. Die Gegenrichtung wäre schlimmer und
  // ist der Grund für den Bindungstest in generate-booking-php.test.ts: ein
  // Flow-Eintrag ohne Tabellenzeile ist unknown_sku am Bezahlknopf.
  for (const treatment of treatments("de")) {
    // onRequest hat keinen Preis. Physio, Kosmetik und Ästhetik bleiben
    // Anfrage.
    if (treatment.pricing.kind !== "fixed") continue

    // skuFor(), nicht von Hand zusammengesetzt: dieselbe Funktion baut die
    // SKU, die der Browser postet. Siehe src/content/pricing.ts.
    table[skuFor(treatment.slug, 1)] = {
      amount: Math.round(treatment.pricing.single * 100),
      currency: "eur",
      name: `${treatment.title} — Einzelsitzung`,
      sessions: 1,
    }

    for (const tier of packageTiers(treatment.pricing)) {
      table[skuFor(treatment.slug, tier.sessions)] = {
        amount: Math.round(tier.total * 100),
        currency: "eur",
        name: `${treatment.title} — ${tier.sessions}er-Paket`,
        sessions: tier.sessions,
      }
    }
  }

  return table
}

/** PHP-Strings in einfachen Anführungszeichen maskieren nur \ und '. */
function phpString(value: string): string {
  return `'${value.replace(/\\/g, "\\\\").replace(/'/g, "\\'")}'`
}

export function renderPhp(skus: SkuTable): string {
  const skuRows = Object.entries(skus)
    .map(
      ([sku, e]) =>
        `        ${phpString(sku)} => ['amount' => ${e.amount}, ` +
        `'currency' => ${phpString(e.currency)}, 'name' => ${phpString(e.name)}, ` +
        `'sessions' => ${e.sessions}],`,
    )
    .join("\n")

  return [
    "<?php",
    "",
    "// GENERIERT von scripts/generate-booking-php.ts — nicht von Hand ändern.",
    "// Neu erzeugen mit `npm run booking`. generate-booking-php.test.ts",
    "// scheitert, wenn diese Datei und pricing.ts auseinanderlaufen,",
    "// eine Preisänderung ohne Generatorlauf kann also nicht ausgeliefert werden.",
    "//",
    "// Das ist die EINZIGE Quelle für Beträge in checkout.php. Nichts, was der",
    "// Browser schickt, darf beeinflussen, was belastet wird.",
    "",
    "return [",
    "    'skus' => [",
    skuRows,
    "    ],",
    "];",
    "",
  ].join("\n")
}

// Nur schreiben, wenn als Skript aufgerufen — nicht beim Import durch den Test.
if (process.argv[1]?.endsWith("generate-booking-php.ts")) {
  const php = renderPhp(buildSkuTable())
  writeFileSync("public/booking.generated.php", php)
  console.log(`booking.generated.php: ${Object.keys(buildSkuTable()).length} SKUs`)
}
