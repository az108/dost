<?php
/**
 * Same-origin contact form endpoint for the practice website.
 *
 * Vite copies everything in public/ into dist/ verbatim, so this file ships
 * beside index.html and is reachable at /contact.php in production. The
 * form in src/components/content/ContactForm.tsx POSTs FormData here.
 *
 * BEFORE GO-LIVE: the practice must set RECIPIENT below to a real mailbox,
 * and SENDER_DOMAIN to the live domain. Both placeholders are deliberate —
 * src/deploy.test.ts fails until they are changed, so an unset recipient or
 * sender domain physically cannot ship.
 *
 * Hosting notes (see DEPLOY.md):
 *   - ALL-INKL.COM: mail() works out of the box, no extra configuration.
 *   - Namecheap (cPanel / shared hosting): mail() sometimes needs SMTP
 *     credentials instead of the built-in mail() transport. Test a real
 *     submission on the live host after upload either way — mail() behaves
 *     differently per host and this cannot be verified locally.
 */

declare(strict_types=1);

// The practice must replace this with their real inbox before go-live.
define("RECIPIENT", "TODO_EMPFAENGER_ADRESSE");

// Sender domain for the From header. Deliberately a constant and NOT derived
// from $_SERVER["HTTP_HOST"], which a client controls: a spoofed Host would
// put a foreign domain in From and get the mail spam-filtered. Must match the
// domain the site is actually served from, or SPF/DKIM will fail.
define("SENDER_DOMAIN", "TODO_DOMAIN");

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

// Honeypot: field "website" is hidden from sighted users and from screen
// readers (see ContactForm.tsx). A human never fills it in; a bot that does
// must not learn it was caught, so we report success and send nothing.
$honeypot = trim((string) ($_POST["website"] ?? ""));
if ($honeypot !== "") {
    respond(200, ["ok" => true]);
}

/**
 * Strips characters that could be used to smuggle extra headers into a
 * mail() call (classic "header injection" / mail-relay abuse). Applied to
 * every value that ends up in a header — user input must never reach a
 * header unescaped. Never applied to $message or $name: those are only
 * ever placed in the mail body, never in a header.
 */
function stripHeaderInjection(string $value): string
{
    return trim(str_replace(["\r", "\n"], "", $value));
}

$name = trim((string) ($_POST["name"] ?? ""));
$email = trim((string) ($_POST["email"] ?? ""));
$phone = trim((string) ($_POST["phone"] ?? ""));
$topic = trim((string) ($_POST["topic"] ?? ""));
$message = trim((string) ($_POST["message"] ?? ""));
$consent = trim((string) ($_POST["consent"] ?? ""));

if ($name === "" || $email === "" || $message === "" || $consent === "") {
    respond(422, ["ok" => false, "error" => "missing_required_field"]);
}

$validatedEmail = filter_var($email, FILTER_VALIDATE_EMAIL);
if ($validatedEmail === false) {
    respond(422, ["ok" => false, "error" => "invalid_email"]);
}
$email = $validatedEmail;

$limits = ["name" => 100, "email" => 200, "phone" => 50, "topic" => 60, "message" => 3000];
$values = ["name" => $name, "email" => $email, "phone" => $phone, "topic" => $topic, "message" => $message];
foreach ($limits as $field => $max) {
    if (mb_strlen($values[$field]) > $max) {
        respond(422, ["ok" => false, "error" => "field_too_long", "field" => $field]);
    }
}

// The email address is already validated above (FILTER_VALIDATE_EMAIL
// rejects control characters on its own), but it is stripped again here as
// defence in depth before it goes into the Reply-To header.
$replyToEmail = stripHeaderInjection($email);
$topicForSubject = stripHeaderInjection($topic);

// From must be an address at the site's own domain: putting the visitor's
// address in From gets the mail rejected by the recipient's SPF/DKIM checks
// (it did not originate from that domain). Reply-To carries the visitor's
// address instead, so replying still reaches them.
$fromEmail = "webseite@" . SENDER_DOMAIN;

function mimeEncodeHeader(string $value): string
{
    return function_exists("mb_encode_mimeheader")
        ? mb_encode_mimeheader($value, "UTF-8", "B", "\r\n")
        : $value;
}

$subject = "Neue Kontaktanfrage von der Webseite";
if ($topicForSubject !== "") {
    $subject .= " — " . $topicForSubject;
}
$subject = mimeEncodeHeader($subject);

// Name and message are free text from a visitor — they belong in the body,
// never in a header, so there is nothing to escape here.
$bodyLines = [
    "Neue Nachricht über das Kontaktformular:",
    "",
    "Name: " . $name,
    "E-Mail: " . $email,
];
if ($phone !== "") {
    $bodyLines[] = "Telefon: " . $phone;
}
if ($topic !== "") {
    $bodyLines[] = "Anliegen: " . $topic;
}
$bodyLines[] = "";
$bodyLines[] = "Nachricht:";
$bodyLines[] = $message;

$body = implode("\n", $bodyLines);

$headers = implode("\r\n", [
    "From: Webseite <" . $fromEmail . ">",
    "Reply-To: " . $replyToEmail,
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=utf-8",
]);

$sent = mail(RECIPIENT, $subject, $body, $headers);

if (!$sent) {
    // Fail loudly: silently dropping a patient's message is the worst
    // outcome here. The client shows an error and a mailto fallback.
    respond(500, ["ok" => false, "error" => "mail_failed"]);
}

respond(200, ["ok" => true]);
