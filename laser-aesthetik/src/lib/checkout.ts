/**
 * Every failure the caller can be handed. Nine come from public/checkout.php
 * — keep this list in step with the respond() calls there — and the last
 * three are synthesised below when the response never became a usable
 * answer.
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
  | "invalid_tageszeit"
  | "stripe_unreachable"
  | "stripe_error"
  | "http_error"
  | "network_error"
  | "parse_error"

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

  // Zwei getrennte try-Blöcke, und das ist der ganze Punkt. Lagen fetch und
  // response.json() in einem, landete JEDE nicht-JSON-Antwort im selben catch
  // und kam als network_error zurück — "Verbindung fehlgeschlagen. Bitte
  // versuchen Sie es erneut." für einen PHP-Fatal, eine Warning bei
  // aktiviertem display_errors oder die 500-Seite des Hosters. Das ist
  // derselbe Fehler, gegen den stripe_error eine eigene Meldung bekommen hat:
  // dem Besucher seine eigene Leitung unterschieben und ihn etwas wiederholen
  // lassen, das nicht gelingen kann. Auf Shared Hosting ist eine nicht-JSON-
  // Antwort der WAHRSCHEINLICHSTE erste Fehler im Echtbetrieb.
  let response: Response
  try {
    response = await fetch("/checkout.php", { method: "POST", body })
  } catch {
    // Nur hier ist es wirklich die Leitung: das fetch selbst kam nicht
    // zustande. Ohne diesen Zweig wird das await des Aufrufers nie fertig und
    // der Button dreht sich, bis der Besucher aufgibt.
    return { ok: false, error: "network_error" }
  }

  try {
    const data = (await response.json()) as CheckoutResult | null
    // `null` ist gültiges JSON und kein Objekt: `"ok" in null` wirft einen
    // TypeError. Der fiel vorher in denselben catch und wurde ebenfalls zur
    // Netzwerkmeldung. Ein Body, der zwar geparst hat, aber keine Antwort
    // ist, ist derselbe Fehler wie einer, der gar nicht geparst hat.
    if (data === null || typeof data !== "object") {
      return { ok: false, error: "parse_error" }
    }
    if (!response.ok || !data.ok) {
      return { ok: false, error: "ok" in data && !data.ok ? data.error : "http_error" }
    }
    return data
  } catch {
    return { ok: false, error: "parse_error" }
  }
}
