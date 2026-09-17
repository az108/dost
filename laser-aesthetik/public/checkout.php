<?php
/**
 * Stripe-Checkout-Endpunkt für die Terminbuchung.
 *
 * Vite kopiert alles aus public/ unverändert nach dist/, diese Datei liegt
 * also neben index.html und ist in Produktion unter /checkout.php
 * erreichbar. Der Buchungs-Flow POSTet SKU, Wunschdatum und Tageszeit
 * hierher und leitet den Browser auf die zurückgegebene Stripe-URL.
 *
 * DER BROWSER SCHICKT NIE EINEN BETRAG. Er schickt eine SKU; der Preis
 * kommt aus booking.generated.php, das zur Build-Zeit aus derselben
 * pricing.ts erzeugt wird, aus der die Preisseite rendert. Jeder Betrag im
 * Request-Body wird ignoriert.
 *
 * DAS WUNSCHDATUM IST KEIN BESTÄTIGTER TERMIN. Es reist in den
 * Stripe-Metadaten und ist im Dashboard neben der Zahlung sichtbar; das
 * Center bestätigt danach. Die Seite sagt das an drei Stellen — hier steht
 * es, damit niemand die Prüfungen unten für eine Verfügbarkeitsprüfung
 * hält. Sie prüfen Plausibilität, nicht Verfügbarkeit.
 *
 * Der Secret Key steht NICHT in dieser Datei und darf es nie. public/ wird
 * ins Web-Root geladen, alles hier ist also weltweit lesbar. Der Key liegt
 * in ../stripe-config.php — eine Ebene OBERHALB des Web-Roots, von Hand auf
 * dem Server angelegt. Siehe DEPLOY.md.
 *
 * Kein Composer: ALL-INKL gibt uns PHP und cURL und sonst nichts, also
 * spricht das hier direkt mit Stripes REST-API statt über das SDK.
 */

declare(strict_types=1);

// Die Live-Domain, wortgleich mit SITE_URL in src/content/seo.ts. Dieselbe
// Domain steht in der Sitemap, in robots.txt, in der og:image-URL und in der
// Kanonisierung in .htaccess — hier einen Platzhalter stehen zu lassen,
// hielte die Frage nicht offen, es brächte diese Datei nur mit den anderen
// vier in Widerspruch. Stripe akzeptiert jede syntaktisch gültige URL, ein
// Platzhalter setzt den Kunden also NACH der Belastung auf einem Host ab,
// den es nicht gibt.
//
// src/deploy.test.ts prüft beide Zeilen gegen SITE_URL, ein Domainwechsel
// scheitert also an einer Stelle laut statt hier still zu bleiben.
define("SUCCESS_URL", "https://laserhaarentfernung-landshut.de/termin/erfolg?session_id={CHECKOUT_SESSION_ID}");
define("CANCEL_URL", "https://laserhaarentfernung-landshut.de/termin/abbruch");

/** Wie weit im Voraus ein Wunschtermin liegen darf. */
define("MAX_MONTHS_AHEAD", 6);

define("TAGESZEITEN", ["vormittags", "nachmittags", "abends"]);

header("Content-Type: application/json; charset=utf-8");

function respond(int $status, array $body): void
{
    http_response_code($status);
    echo json_encode($body);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    respond(405, ["ok" => false, "error" => "method_not_allowed"]);
}

$configPath = __DIR__ . '/../stripe-config.php';
if (!is_readable($configPath)) {
    // Laut, nicht still: ein fehlender Key heißt, dass jeder Kaufversuch
    // scheitert, und der Betreiber muss das erfahren statt eines generischen
    // Fehlers, den der Besucher für ein Kartenproblem hält.
    respond(500, ["ok" => false, "error" => "stripe_not_configured"]);
}
$config = require $configPath;
$secretKey = $config["secret_key"] ?? "";
if ($secretKey === "") {
    respond(500, ["ok" => false, "error" => "stripe_not_configured"]);
}

$booking = require __DIR__ . '/booking.generated.php';
$prices = $booking["skus"];

// ── SKU ──────────────────────────────────────────────────────────────────
// Kein (string)-Cast auf $_POST-Werte: ein Aufrufer, der sku[]=x schickt,
// macht daraus ein Array, und (string) $array wirft eine PHP-Warning, die
// bei aktiviertem display_errors vor die JSON-Antwort gedruckt würde.
$rawSku = $_POST["sku"] ?? "";
$sku = is_string($rawSku) ? trim($rawSku) : "";
if ($sku === "" || !isset($prices[$sku])) {
    respond(422, ["ok" => false, "error" => "unknown_sku"]);
}
$entry = $prices[$sku];

// ── Wunschdatum ──────────────────────────────────────────────────────────
// Der Client prüft das auch, aber das zählt nicht: ohne diese Prüfung
// postet jemand den 3. Januar 1999 oder einen Termin in vier Jahren, und es
// landet ungeprüft in den Stripe-Metadaten.
//
// Keine Wochentagsprüfung hier: die Öffnungszeiten, die dieser Endpunkt
// früher dagegen prüfte, waren unbestätigte Daten aus einer Vorgängerseite.
// Ohne bestätigte Zeiten ist Vergangenheit/zu weit in der Zukunft alles, was
// sich noch plausibel prüfen lässt — ein Sonntag ist damit bewusst buchbar.
$rawDatum = $_POST["datum"] ?? "";
$datum = is_string($rawDatum) ? trim($rawDatum) : "";
$date = DateTimeImmutable::createFromFormat("!Y-m-d", $datum, new DateTimeZone("Europe/Berlin"));

// createFromFormat akzeptiert den 31. Februar und rollt ihn auf den 3. März
// weiter. Der Rückvergleich fängt das ab.
if ($date === false || $date->format("Y-m-d") !== $datum) {
    respond(422, ["ok" => false, "error" => "invalid_date"]);
}

$today = new DateTimeImmutable("today", new DateTimeZone("Europe/Berlin"));
if ($date < $today) {
    respond(422, ["ok" => false, "error" => "date_in_past"]);
}
if ($date > $today->modify("+" . MAX_MONTHS_AHEAD . " months")) {
    respond(422, ["ok" => false, "error" => "date_too_far"]);
}

// ── Tageszeit ────────────────────────────────────────────────────────────
// Bewusst ein Zeitfenster, keine Uhrzeit: eine genaue Uhrzeit anzubieten,
// die niemand gegen einen Kalender prüft, suggeriert eine Zusage, die es
// nicht gibt.
$rawTageszeit = $_POST["tageszeit"] ?? "";
$tageszeit = is_string($rawTageszeit) ? trim($rawTageszeit) : "";
if (!in_array($tageszeit, TAGESZEITEN, true)) {
    respond(422, ["ok" => false, "error" => "invalid_tageszeit"]);
}

// ── Stripe ───────────────────────────────────────────────────────────────
$payload = http_build_query([
    "mode" => "payment",
    "success_url" => SUCCESS_URL,
    "cancel_url" => CANCEL_URL,
    // Stripe erhebt im payment-Modus ohnehin eine E-Mail-Adresse. Bestätigt
    // wird ein Termin in einem Center aber per Telefon, und die Bestätigung
    // ist der einzige Weg, auf dem aus dieser Zahlung ein Termin wird — ohne
    // Nummer bleibt nur eine Mail an jemanden, der gerade Geld überwiesen hat
    // und auf einen Rückruf wartet. "true" als String, weil http_build_query
    // aus true sonst "1" macht; Stripe erwartet das Wort.
    "phone_number_collection" => ["enabled" => "true"],
    "line_items" => [
        [
            "quantity" => 1,
            "price_data" => [
                "currency" => $entry["currency"],
                "unit_amount" => $entry["amount"],
                "product_data" => [
                    "name" => $entry["name"],
                    // Steht auf dem Stripe-Beleg. Eine der drei Stellen, an
                    // denen widersprochen wird, dass ein Termin bestätigt sei.
                    "description" => "Wunschtermin " . $datum . " (" . $tageszeit
                        . "). Der Termin wird vom Center gesondert bestätigt.",
                ],
            ],
        ],
    ],
    // Damit der Betreiber den Wunschtermin im Dashboard neben der Zahlung
    // sieht, ohne dass es eine zweite Datenquelle gibt, die auseinanderlaufen
    // kann.
    "metadata" => [
        "sku" => $sku,
        "wunschdatum" => $datum,
        "tageszeit" => $tageszeit,
        "sitzungen" => (string) $entry["sessions"],
    ],
]);

// ── Idempotenz ───────────────────────────────────────────────────────────
// Kein Schutz gegen Doppelbelastung — bezahlt wird auf Stripes eigener Seite,
// und dieser Aufruf legt nur eine Session an. Es geht um das Dashboard: das
// ist die EINZIGE Stelle, an der der Betreiber eine Buchung samt Wunschtermin
// sieht, und jeder abgebrochene Versuch, jedes zweite Klicken und jeder
// Wiederholungsversuch nach einem Fehler legt dort sonst eine weitere
// verwaiste Session an.
//
// Der Schlüssel MUSS pro Besucher verschieden sein. Wäre er nur aus SKU,
// Datum und Tageszeit gebildet, bekäme der zweite Besucher mit derselben
// Auswahl die Session des ersten zurück — und wenn der schon bezahlt hat,
// eine abgeschlossene Session, die ihn unbelastet auf /termin/erfolg
// weiterleitet. IP und User-Agent trennen die beiden.
//
// Das Zeitfenster (900 Sekunden) begrenzt, wie lange ein Schlüssel eine
// spätere, echte zweite Buchung derselben Auswahl verdecken kann; Stripe hält
// Idempotenz-Schlüssel sonst 24 Stunden. Zusammengefasst: ein Stolperdraht
// gegen Wiederholungen innerhalb von Minuten, keine Zusicherung.
$idempotencyKey = hash("sha256", implode("|", [
    $sku,
    $datum,
    $tageszeit,
    $_SERVER["REMOTE_ADDR"] ?? "",
    $_SERVER["HTTP_USER_AGENT"] ?? "",
    (string) intdiv(time(), 900),
]));

$ch = curl_init("https://api.stripe.com/v1/checkout/sessions");
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => $payload,
    CURLOPT_HTTPHEADER => [
        "Authorization: Bearer " . $secretKey,
        "Content-Type: application/x-www-form-urlencoded",
        // Pinnt die API-Form, gegen die diese Datei geschrieben wurde, damit
        // ein Stripe-Release die Antwort nicht unter uns ändert.
        "Stripe-Version: 2024-06-20",
        "Idempotency-Key: " . $idempotencyKey,
    ],
    CURLOPT_TIMEOUT => 20,
]);

$response = curl_exec($ch);
$status = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError = curl_error($ch);
curl_close($ch);

if ($response === false) {
    // Symmetrisch zum Stripe-Fehler unten: eine libcurl-Meldung wie "Could
    // not resolve proxy" oder "SSL certificate problem" kann auf Shared
    // Hosting Interna nennen (den ausgehenden Proxy, Zertifikatspfade), das
    // geht also NICHT an den anonymen Aufrufer, sondern nur ins Log.
    error_log("checkout.php: cURL: {$curlError}");
    respond(502, ["ok" => false, "error" => "stripe_unreachable"]);
}

$decoded = json_decode((string) $response, true);
if (!is_array($decoded) || $status >= 400 || empty($decoded["url"])) {
    // Stripes eigene Fehlermeldung geht bewusst NICHT an den Browser: sie
    // kann das Konto und das Key-Präfix nennen.
    error_log("checkout.php: Stripe antwortete {$status}: {$response}");
    respond(502, ["ok" => false, "error" => "stripe_error"]);
}

respond(200, ["ok" => true, "url" => $decoded["url"]]);
