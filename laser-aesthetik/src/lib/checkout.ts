/**
 * Every failure the caller can be handed. Ten come from public/checkout.php
 * — keep this list in step with the respond() calls there — and the last two
 * are synthesised below when the response never became a usable answer.
 *
 * A union rather than `string` so that a code without a message is a compile
 * error in Termin.tsx's ERROR_KEYS map. As a plain string, three codes
 * (stripe_error, stripe_unreachable, http_error) silently fell through to
 * the "check your connection" text and told customers their own network had
 * failed when it was the payment provider that had.
 */
export type CheckoutError =
  | "method_not_allowed"
  | "stripe_not_configured"
  | "unknown_sku"
  | "invalid_date"
  | "date_in_past"
  | "date_too_far"
  | "closed_that_day"
  | "invalid_tageszeit"
  | "stripe_unreachable"
  | "stripe_error"
  | "http_error"
  | "network_error"

export type CheckoutResult =
  | { ok: true; url: string }
  | { ok: false; error: CheckoutError }

/**
 * Bittet den Server, eine Stripe-Checkout-Session anzulegen.
 *
 * Schickt SKU, Wunschdatum und Tageszeit — nie einen Betrag. Der Preis wird
 * serverseitig aus booking.generated.php aufgelöst. Wer hier einen Preis in
 * den Body legen will, hat die Architektur missverstanden: siehe
 * public/checkout.php.
 */
export async function startCheckout(
  sku: string,
  datum: string,
  tageszeit: string,
): Promise<CheckoutResult> {
  const body = new URLSearchParams({ sku, datum, tageszeit })

  try {
    const response = await fetch("/checkout.php", { method: "POST", body })
    const data = (await response.json()) as CheckoutResult
    if (!response.ok || !data.ok) {
      return { ok: false, error: "ok" in data && !data.ok ? data.error : "http_error" }
    }
    return data
  } catch {
    // Ein abgelehntes fetch ist ein anderer Pfad als eine ok:false-Antwort.
    // Ohne das wird das await des Aufrufers nie fertig und der Button dreht
    // sich, bis der Besucher aufgibt.
    return { ok: false, error: "network_error" }
  }
}
