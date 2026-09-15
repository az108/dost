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

// Muss die Live-Domain sein. src/deploy.test.ts scheitert, solange hier
// TODO_DOMAIN steht, ein zahlender Kunde kann also nicht auf einen
// Platzhalter geleitet werden.
define("SUCCESS_URL", "https://TODO_DOMAIN/termin/erfolg?session_id={CHECKOUT_SESSION_ID}");
define("CANCEL_URL", "https://TODO_DOMAIN/termin/abbruch");

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
$hours = $booking["hours"];

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
// postet jemand einen Sonntag, den 3. Januar 1999 oder einen Termin in vier
// Jahren, und es landet ungeprüft in den Stripe-Metadaten.
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

// Englischer Wochentag, weil center.ts die Zeiten im schema.org-Vokabular
// führt und der Generator sie unverändert übernimmt.
$weekday = $date->format("l");
if (!isset($hours[$weekday]) || $hours[$weekday] === null) {
    respond(422, ["ok" => false, "error" => "closed_that_day"]);
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
