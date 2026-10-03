import { readFileSync } from "node:fs"
import { resolve } from "node:path"
import { describe, expect, it } from "vitest"
import { treatments } from "@/content/treatments"
import { pillars } from "@/content/pillars"
import { SITE_URL } from "@/content/seo"
import { agb, datenschutz, impressum, widerruf } from "@/content/legal"
import { MAX_MONTHS_AHEAD } from "@/lib/bookingDates"

const pub = (f: string) => readFileSync(resolve(__dirname, "../public", f), "utf8")
const root = (f: string) => readFileSync(resolve(__dirname, "..", f), "utf8")

describe(".htaccess", () => {
  it("rewrites unknown paths to index.html so deep links survive a refresh", () => {
    const htaccess = pub(".htaccess")
    expect(htaccess).toContain("RewriteEngine On")
    expect(htaccess).toContain("RewriteRule . /index.html [L]")
  })

  it("only rewrites paths that are not real files or directories", () => {
    const htaccess = pub(".htaccess")
    expect(htaccess).toContain("RewriteCond %{REQUEST_FILENAME} !-f")
    expect(htaccess).toContain("RewriteCond %{REQUEST_FILENAME} !-d")
  })

  it("serves pre-rendered pages internally instead of letting mod_dir redirect them", () => {
    const htaccess = pub(".htaccess")
    expect(htaccess).toContain("RewriteCond %{REQUEST_FILENAME}/index.html -f")
    expect(htaccess).toContain("DirectorySlash Off")
  })

  it("serves pre-rendered pages before falling back to the SPA shell", () => {
    const htaccess = pub(".htaccess")
    const prerenderIdx = htaccess.indexOf("RewriteCond %{REQUEST_FILENAME}/index.html -f")
    const fallbackIdx = htaccess.indexOf("RewriteRule . /index.html [L]")
    expect(prerenderIdx, "pre-render rule missing").toBeGreaterThan(-1)
    expect(fallbackIdx, "SPA fallback missing").toBeGreaterThan(-1)
    expect(prerenderIdx).toBeLessThan(fallbackIdx)
  })
})

describe("sitemap.xml", () => {
  it("lists every static route and every treatment", () => {
    const sitemap = pub("sitemap.xml")
    // None of the three /termin routes is here. The two return pages are
    // noindex; /termin itself is withheld while the legal go-live guard is
    // red — see scripts/routes.test.ts and DEPLOY.md.
    //
    // AGB and Widerruf stay: a site that sells needs them, they exist, and
    // the fact that they are scaffolds is what the red legal guard is for.
    for (const path of ["/", "/preise", "/praxis", "/kontakt", "/impressum", "/datenschutz", "/agb", "/widerruf"]) {
      expect(sitemap, `missing ${path}`).toContain(`<loc>${SITE_URL}${path}</loc>`)
    }
    for (const path of ["/termin", "/termin/erfolg", "/termin/abbruch"]) {
      expect(sitemap, `submits ${path}`).not.toContain(`<loc>${SITE_URL}${path}</loc>`)
    }
    for (const p of pillars("de")) {
      expect(sitemap, `missing ${p.path}`).toContain(`${SITE_URL}${p.path}`)
    }
    for (const t of treatments("de")) {
      expect(sitemap, `missing ${t.slug}`).toContain(`${SITE_URL}/behandlungen/${t.slug}`)
    }
  })

  it("lists every English route and every English treatment (no English legal pages)", () => {
    const sitemap = pub("sitemap.xml")
    for (const path of ["/en", "/en/prices", "/en/practice", "/en/contact"]) {
      expect(sitemap, `missing ${path}`).toContain(`${SITE_URL}${path}`)
    }
    for (const p of pillars("en")) {
      expect(sitemap, `missing ${p.path}`).toContain(`${SITE_URL}${p.path}`)
    }
    for (const t of treatments("en")) {
      expect(sitemap, `missing ${t.slug}`).toContain(`${SITE_URL}/en/treatments/${t.slug}`)
    }
    // A concrete sample, so this test fails loudly (not just via count) if
    // English treatment URLs are ever dropped from the generator.
    expect(sitemap).toContain(`${SITE_URL}/en/treatments/underarms`)
  })

  it("has no stale URLs beyond the static routes and current treatments", () => {
    // The check above is subset-only: it proves nothing expected is missing,
    // but a removed treatment would leave a stale <loc> that nothing catches.
    // 11 static German routes: "/", the 3 pillar pages, "/preise", "/praxis",
    // "/kontakt", "/impressum", "/datenschutz", "/agb", "/widerruf".
    // 7 static English routes: the same set minus the German-only pages
    // (there is no English legal page at all, and no English booking flow
    // either — a sitemap should only list a page's own canonical URL).
    // Each treatment appears once per language: 33 + 33.
    //
    // 11, not the 14 German routes allRoutes() returns. All three withheld
    // routes are /termin ones, for two different reasons: /termin/erfolg and
    // /termin/abbruch are noindex, and /termin is withheld while the legal
    // go-live guard is red. 87 prerendered routes against 84 sitemap URLs is
    // the intended end state, not a drift — scripts/routes.test.ts pins it,
    // and DEPLOY.md lists removing the /termin condition as a go-live step.
    const sitemap = pub("sitemap.xml")
    const locCount = (sitemap.match(/<loc>/g) ?? []).length
    expect(locCount).toBe(11 + 7 + treatments("de").length + treatments("en").length)
  })
})

describe("robots.txt", () => {
  it("allows crawling and points at the sitemap", () => {
    const robots = pub("robots.txt")
    expect(robots).toContain("Allow: /")
    expect(robots).toContain(`${SITE_URL}/sitemap.xml`)
  })
})

describe("index.html template", () => {
  // scripts/prerender.ts rewrites these tags in place — replaceAttr() is a
  // no-op when the tag is absent, so a tag deleted from the template stops
  // being emitted on all 87 pages without any error. og:site_name is here
  // because it was exactly that: never rewritten, so every page shipped the
  // template's static value while useSeo() only corrected it after
  // hydration.
  //
  // Exactly once, not merely present: replaceAttr() and the <title> rewrite
  // are regexes over the raw template, so a second literal occurrence —
  // including one inside an HTML comment — is matched in preference to the
  // real tag and the injected value lands in the wrong place.
  it("carries exactly one static default for every tag the prerenderer rewrites", () => {
    const html = root("index.html")
    for (const tag of [
      '<meta name="description"',
      '<meta property="og:title"',
      '<meta property="og:description"',
      '<meta property="og:site_name"',
      '<meta property="og:locale"',
      '<meta property="og:image"',
      "<title>",
    ]) {
      const count = html.split(tag).length - 1
      expect(count, `index.html carries ${count} occurrences of ${tag}, expected exactly 1`).toBe(1)
    }
  })

  it("names no person, practice or inherited brand in its fallback metadata", () => {
    // These strings ship on every page that a crawler reads before any JS
    // runs. The center is a separate business; the template must carry a
    // category of business, never an identity.
    const html = root("index.html")
    for (const banned of ["Dost", "Privatpraxis", "Kröning", "drdosthealth"]) {
      expect(html.toLowerCase(), `index.html still carries "${banned}"`).not.toContain(
        banned.toLowerCase(),
      )
    }
  })
})

describe("the real domain", () => {
  // War ein "FAILS UNTIL SITE_URL is the real domain"-Guard. Die Domain ist
  // geliefert (laserhaarentfernung-landshut.de), und ein Guard wird
  // gelöscht, sobald seine Tatsache da ist — sonst überzeichnet
  // `npm run test:golive` die offene Arbeit. Was bleibt, ist die normale
  // Zusicherung: kein Platzhalter mehr in den beiden Dateien, die die Domain
  // statisch tragen.
  it("steht in SITE_URL und im index.html-Template, nicht als Platzhalter", () => {
    expect(SITE_URL).not.toContain("example-domain")
    expect(root("index.html")).not.toContain("example-domain")
  })
})

describe("legal go-live guard", () => {
  // ── Go-live guard ────────────────────────────────────────────────────
  // The Impressum, Datenschutz, AGB and Widerrufsbelehrung are scaffolds.
  // Paragraphs marked PRÜFEN name facts only the center — or a lawyer — can
  // supply: the responsible medical chamber, the hosting provider, how the
  // 14-day withdrawal right applies to a prepaid package, whether § 4 Nr. 14
  // UStG exempts the booked service. §5 TMG and DSGVO Art. 13 make the first
  // two legally consequential; AGB and Widerrufsbelehrung specifically block
  // the payment feature — selling treatments online makes this a distance
  // contract, and while this guard is red /termin must be neither linked
  // from the navigation nor submitted in the sitemap (see
  // withheldFromSitemap in src/lib/seoForRoute.ts).
  //
  // One of the four is not finished by writing a paragraph. § 356 Abs. 4 BGB
  // lets the withdrawal right survive a fully performed service unless the
  // trader obtained both the consumer's express request to begin early and
  // her acknowledgement that full performance ends the right — the flow
  // takes full prepayment and allows a date as early as today, so without
  // that, someone can be treated and then withdraw for a full refund.
  // Capturing it will almost certainly need a second checkbox in step 4 of
  // src/pages/Termin.tsx whose state is posted and recorded in the Stripe
  // metadata beside `wunschdatum`. The wording is the lawyer's; the UI and
  // the metadata field are ours, and they are not built. See the comment
  // above `widerruf` in src/content/legal.ts and DEPLOY.md.
  //
  // To fix: have a lawyer complete all four documents, build whatever the
  // Widerrufsbelehrung requires, then delete this test.
  it("FAILS UNTIL the legal scaffolds have been reviewed", () => {
    const text = JSON.stringify([impressum, datenschutz, agb, widerruf])
    expect(text).not.toContain("PRÜFEN")
  })
})

describe("payment go-live guard", () => {
  const php = () => readFileSync(resolve(__dirname, "../public/checkout.php"), "utf8")

  it("trägt niemals einen Stripe-Secret-Key im Repository", () => {
    // public/ wird unverändert nach dist/ kopiert und ins Web-Root geladen.
    // Ein Key in dieser Datei ist ein veröffentlichter Key.
    expect(php()).not.toMatch(/sk_(test|live)_/)
  })

  it("liest den Key von außerhalb des Web-Roots", () => {
    expect(php()).toContain("__DIR__ . '/../stripe-config.php'")
  })

  it("erhebt eine Telefonnummer und schickt die Session idempotent", () => {
    // Beides Eigenschaften, die still verschwinden können. Ohne Nummer gibt
    // es zu einer Zahlung nur eine E-Mail-Adresse, während der Termin per
    // Telefon bestätigt wird — und ohne Idempotenz-Schlüssel füllt jeder
    // abgebrochene Versuch das Dashboard, das die einzige Aufzeichnung einer
    // Buchung ist.
    const source = php()
    expect(source).toContain('"phone_number_collection" => ["enabled" => "true"]')
    expect(source).toContain('"Idempotency-Key: " . $idempotencyKey')
  })

  it("nimmt unter keinem der bekannten Schlüssel einen Betrag aus dem Request", () => {
    // STOLPERDRAHT, KEIN BEWEIS. Diese drei Namen sind die, die jemand
    // wahrscheinlich wählt; $_POST['preis'], $_POST['unit_amount'] oder
    // $_POST['summe'] liefen glatt durch. Wer diesen Test als Nachweis
    // liest, dass der Endpunkt keinen Betrag annehmen KANN, liest ihn
    // falsch — der Nachweis steht im Test darunter.
    const source = php()
    expect(source).not.toMatch(/\$_POST\s*\[\s*['"]amount['"]\s*\]/)
    expect(source).not.toMatch(/\$_POST\s*\[\s*['"]betrag['"]\s*\]/)
    expect(source).not.toMatch(/\$_POST\s*\[\s*['"]price['"]\s*\]/)
  })

  it("belastet ausschließlich den Betrag aus der generierten Tabelle", () => {
    // DAS ist die eigentliche Garantie, und sie ist strukturell statt
    // aufzählend: es gibt genau ein unit_amount im Payload an Stripe, und
    // sein Wert ist $entry["amount"] — also der Eintrag, den $prices[$sku]
    // aus booking.generated.php geliefert hat. Solange das so ist, kann
    // kein Feld im Request-Body den belasteten Betrag erreichen, egal wie
    // es heißt.
    const unitAmounts = [...php().matchAll(/"unit_amount"\s*=>\s*([^,\n]+)/g)].map((m) =>
      m[1].trim(),
    )
    expect(unitAmounts).toEqual(['$entry["amount"]'])
  })

  it("schickt den Kunden auf dieselbe Domain zurück, die src/content/seo.ts führt", () => {
    // PHP kann seo.ts nicht lesen, die Domain steht in checkout.php also
    // ein zweites Mal — und damit an fünf Stellen insgesamt (Sitemap,
    // robots.txt, og:image, .htaccess-Kanonisierung, hier). Diese Zusicherung
    // ist die eine Stelle, an der ein Domainwechsel laut scheitert, statt
    // zahlende Kunden auf den alten Host zu schicken.
    const source = php()
    expect(source).toContain(
      `define("SUCCESS_URL", "${SITE_URL}/termin/erfolg?session_id={CHECKOUT_SESSION_ID}")`,
    )
    expect(source).toContain(`define("CANCEL_URL", "${SITE_URL}/termin/abbruch")`)
    // Und kein Platzhalter mehr: https://TODO_DOMAIN/… ist eine syntaktisch
    // gültige URL, die Stripe annimmt, der Fehler fiele also erst dem
    // belasteten Kunden auf.
    expect(source).not.toContain("TODO_")
  })

  it("hält MAX_MONTHS_AHEAD mit src/lib/bookingDates.ts im Gleichklang", () => {
    // Das Datumsfenster steht in beiden Hälften: bookingDates.ts setzt das
    // max-Attribut des Datumsfelds, checkout.php weist alles dahinter mit
    // date_too_far ab. Laufen sie auseinander, bietet die Seite ein Datum
    // an, das der Endpunkt ablehnt — und der Besucher erfährt es erst am
    // Bezahlknopf.
    expect(php()).toContain(`define("MAX_MONTHS_AHEAD", ${MAX_MONTHS_AHEAD})`)
  })

  // ── Go-live guard ────────────────────────────────────────────────────
  // DIE SEITE BEHAUPTET BEREITS "Alle Preise inkl. MwSt." — auf /preise
  // (ui.packagePricesLead) und auf jeder der 33 Behandlungsseiten
  // (ui.pricesIncludeVatNote, gerendert in TreatmentDetail.tsx:184), für
  // genau die Preise, die /termin abbucht. Mit den englischen Gegenstücken
  // sind das 68 Seiten; seit die Buchungsübersicht dieselbe Zeile trägt, 69.
  //
  // Dieser Guard hing vorher an der Buchungsübersicht allein, mit der
  // Begründung, dort eine Zeile zu erfinden wäre schlimmer als keine. Das
  // war die falsche Frage: eine Seite ohne Angabe neben 34 Seiten mit
  // gegenteiliger Angabe ist kein vorsichtiger Zustand, sondern ein
  // widersprüchlicher. Entweder die Behauptung stimmt, dann gehört sie auch
  // unter die Summe — oder sie stimmt nicht, dann ist sie auf 68 Seiten
  // falsch und nicht nur auf einer.
  //
  // Offen ist deshalb die Behauptung selbst: ob diese Leistungen nach
  // § 4 Nr. 14 UStG steuerfrei sind, hängt daran, ob die ästhetischen
  // Behandlungen ärztlich erbracht werden. Dieselbe Frage steht im
  // AGB-Gerüst unter "Preise und Umsatzsteuer" als PRÜFEN. Sind sie
  // steuerfrei, ist "inkl. MwSt." eine falsche Angabe — auf jeder dieser
  // Seiten und auf jedem Stripe-Beleg.
  //
  // Zum Beheben: den Umsatzsteuerstatus steuerlich klären, die beiden
  // Zeichenketten in src/content/ui.ts bestätigen oder korrigieren, den
  // TODO_UMSATZSTEUER-Marker dort entfernen, dann diesen Test löschen.
  it("FAILS UNTIL the VAT treatment of these services is confirmed", () => {
    const uiSource = readFileSync(resolve(__dirname, "content/ui.ts"), "utf8")
    expect(uiSource).not.toContain("TODO_UMSATZSTEUER")
  })
})

describe("contact form go-live guard", () => {
  // ── Go-live guard ────────────────────────────────────────────────────
  // contact.php has no recipient and no real sender domain until the
  // center supplies them. Shipping RECIPIENT unset means every message a
  // patient sends is silently lost. Shipping SENDER_DOMAIN unset means the
  // From header carries a placeholder domain, which fails SPF/DKIM and gets
  // the mail spam-filtered even though RECIPIENT is correct.
  // To fix: set RECIPIENT and SENDER_DOMAIN in public/contact.php, then
  // delete this test.
  it("FAILS UNTIL the contact form recipient and sender domain are set", () => {
    const php = readFileSync(resolve(__dirname, "../public/contact.php"), "utf8")
    expect(php).not.toContain("TODO_EMPFAENGER_ADRESSE")
    expect(php).not.toContain("TODO_DOMAIN")
  })
})
