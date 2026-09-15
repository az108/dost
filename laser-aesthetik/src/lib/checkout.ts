export type CheckoutResult =
  | { ok: true; url: string }
  | { ok: false; error: string }

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
