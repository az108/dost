import type { PackageTier, Pricing } from "./types"

/**
 * Standard package discounts. Verified against every zone in the source price
 * list — see pricing.test.ts, which asserts the derived numbers match.
 */
export const PACKAGE_DISCOUNTS: { sessions: 3 | 5 | 10; discountPct: number }[] = [
  { sessions: 3, discountPct: 20 },
  { sessions: 5, discountPct: 40 },
  { sessions: 10, discountPct: 45 },
]

/**
 * Derives package tiers from the single-session price. Kombipakete use
 * shallower, non-derivable discounts and supply `overrides` instead.
 */
export function packageTiers(pricing: Pricing): PackageTier[] {
  if (pricing.kind === "onRequest") return []

  return PACKAGE_DISCOUNTS.map(({ sessions, discountPct }) => {
    const override = pricing.overrides?.find((o) => o.sessions === sessions)
    const perSession =
      override?.perSession ?? Math.round(pricing.single * (1 - discountPct / 100))
    return { sessions, discountPct, perSession, total: perSession * sessions }
  })
}

/** The lowest per-session price on offer, for "ab X €" labels. */
export function priceFrom(pricing: Pricing): number | null {
  if (pricing.kind === "onRequest") return null
  const tiers = packageTiers(pricing)
  return tiers.length === 0
    ? pricing.single
    : Math.min(pricing.single, ...tiers.map((t) => t.perSession))
}

/** "1.090 €" — German thousands separator, no decimals. */
export function formatEuro(value: number): string {
  return `${value.toLocaleString("de-DE")} €`
}

/**
 * Die SKU, unter der eine Behandlung in einem bestimmten Umfang verkauft
 * wird: "achseln-single", "achseln-3er".
 *
 * Das ist ein Drahtformat, kein Anzeigetext. Es wird an ZWEI weit
 * auseinanderliegenden Stellen gebraucht: scripts/generate-booking-php.ts
 * legt die Schlüssel der Preistabelle an, aus der public/checkout.php
 * abrechnet, und src/pages/Termin.tsx baut den Wert, den der Browser postet.
 * Beide Hälften haben die Zeichenkette vorher von Hand gebaut, und nichts
 * band sie aneinander — eine geänderte Endung hätte jede Buchung mit
 * unknown_sku abgewiesen, also einen vollständigen Buchungsausfall, ohne
 * dass ein einziger Test die Ursache genannt hätte.
 *
 * Deshalb hier und nicht in einer der beiden Hälften: pricing.ts ist die
 * Datei, die beide ohnehin importieren.
 */
export function skuFor(slug: string, sessions: number): string {
  return `${slug}-${sessions === 1 ? "single" : `${sessions}er`}`
}
