import { readFileSync } from "node:fs"
import { resolve } from "node:path"
import { describe, expect, it } from "vitest"
import { treatments } from "@/content/treatments"
import { pillars } from "@/content/pillars"
import { SITE_URL } from "@/content/seo"
import { datenschutz, impressum } from "@/content/legal"

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
})

describe("sitemap.xml", () => {
  it("lists every static route and every treatment", () => {
    const sitemap = pub("sitemap.xml")
    for (const path of ["/", "/preise", "/praxis", "/kontakt", "/impressum", "/datenschutz"]) {
      expect(sitemap, `missing ${path}`).toContain(`${SITE_URL}${path}`)
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
    // 9 static German routes: "/", the 3 pillar pages, "/preise", "/praxis",
    // "/kontakt", "/impressum", "/datenschutz". 7 static English routes: the
    // same set minus the German-only Impressum and Datenschutz (there is no
    // English legal page at all, not even one pointing back to German — a
    // sitemap should only list a page's own canonical URL). Each treatment
    // appears once per language: 29 + 29.
    const sitemap = pub("sitemap.xml")
    const locCount = (sitemap.match(/<loc>/g) ?? []).length
    expect(locCount).toBe(9 + 7 + treatments("de").length + treatments("en").length)
  })
})

describe("robots.txt", () => {
  it("allows crawling and points at the sitemap", () => {
    const robots = pub("robots.txt")
    expect(robots).toContain("Allow: /")
    expect(robots).toContain(`${SITE_URL}/sitemap.xml`)
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
  // The Impressum and Datenschutz are scaffolds. Paragraphs marked PRÜFEN
  // name facts only the practice can supply — the responsible medical
  // chamber, the hosting provider. §5 TMG and DSGVO Art. 13 make this
  // content legally consequential, so it must not ship as scaffolding.
  // To fix: have a lawyer complete both documents, then delete this test.
  it("FAILS UNTIL the legal scaffolds have been reviewed", () => {
    const text = JSON.stringify([impressum, datenschutz])
    expect(text).not.toContain("PRÜFEN")
  })
})

describe("contact form go-live guard", () => {
  // ── Go-live guard ────────────────────────────────────────────────────
  // contact.php has no recipient and no real sender domain until the
  // practice supplies them. Shipping RECIPIENT unset means every message a
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
