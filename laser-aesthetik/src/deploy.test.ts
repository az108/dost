import { readFileSync } from "node:fs"
import { resolve } from "node:path"
import { describe, expect, it } from "vitest"
import { treatments } from "@/content/treatments"
import { pillars } from "@/content/pillars"
import { SITE_URL } from "@/content/seo"
import { agb, datenschutz, impressum, widerruf } from "@/content/legal"

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
    // "/termin" is here; its two return pages are not. They are noindex and
    // generate-sitemap.ts leaves them out — see scripts/routes.test.ts.
    for (const path of ["/", "/preise", "/praxis", "/kontakt", "/impressum", "/datenschutz", "/agb", "/widerruf", "/termin"]) {
      expect(sitemap, `missing ${path}`).toContain(`<loc>${SITE_URL}${path}</loc>`)
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
    // 12 static German routes: "/", the 3 pillar pages, "/preise", "/praxis",
    // "/kontakt", "/impressum", "/datenschutz", "/agb", "/widerruf",
    // "/termin". 7 static English routes: the same set minus the German-only
    // pages (there is no English legal page at all, and no English booking
    // flow either — a sitemap should only list a page's own canonical URL).
    // Each treatment appears once per language: 33 + 33.
    //
    // 12, not the 14 German routes allRoutes() returns: /termin/erfolg and
    // /termin/abbruch are prerendered but noindex, and generate-sitemap.ts
    // filters them out. 87 prerendered routes against 85 sitemap URLs is the
    // intended end state, not a drift — scripts/routes.test.ts pins it.
    const sitemap = pub("sitemap.xml")
    const locCount = (sitemap.match(/<loc>/g) ?? []).length
    expect(locCount).toBe(12 + 7 + treatments("de").length + treatments("en").length)
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
  // being emitted on all 84 pages without any error. og:site_name is here
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

describe("go-live guards", () => {
  // ── Fails until the real domain is set ──────────────────────────────
  // index.html's static og:image URL deliberately carries the same
  // example-domain.de placeholder as SITE_URL, so both must change together
  // — one guard blocks go-live until neither placeholder remains.
  it("FAILS UNTIL SITE_URL is the real domain", () => {
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
  // contract, and /termin must not be linked from the navigation while this
  // guard is red. To fix: have a lawyer complete all four documents, then
  // delete this test.
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

  it("nimmt unter keinem Schlüssel einen Betrag aus dem Request", () => {
    // Die wichtigste Eigenschaft dieses Endpunkts.
    const source = php()
    expect(source).not.toMatch(/\$_POST\s*\[\s*['"]amount['"]\s*\]/)
    expect(source).not.toMatch(/\$_POST\s*\[\s*['"]betrag['"]\s*\]/)
    expect(source).not.toMatch(/\$_POST\s*\[\s*['"]price['"]\s*\]/)
  })

  // ── Go-live guard ────────────────────────────────────────────────────
  // Die Rückkehr-URLs tragen die Live-Domain. Unausgefüllt schickt ein
  // zahlender Kunde nach erfolgreicher Belastung auf einen Platzhalter.
  // Zum Beheben: SUCCESS_URL und CANCEL_URL in public/checkout.php setzen,
  // dann diesen Test löschen.
  it("FAILS UNTIL the checkout return URLs are set", () => {
    expect(php()).not.toContain("TODO_DOMAIN")
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
