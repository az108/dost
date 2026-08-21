import { readFileSync } from "node:fs"
import { resolve } from "node:path"
import { describe, expect, it } from "vitest"
import { treatments } from "@/content/treatments"
import { pillars } from "@/content/pillars"
import { SITE_URL } from "@/content/seo"

const pub = (f: string) => readFileSync(resolve(__dirname, "../public", f), "utf8")

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
    for (const p of pillars) {
      expect(sitemap, `missing ${p.path}`).toContain(`${SITE_URL}${p.path}`)
    }
    for (const t of treatments) {
      expect(sitemap, `missing ${t.slug}`).toContain(`${SITE_URL}/behandlungen/${t.slug}`)
    }
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
  it("FAILS UNTIL SITE_URL is the real domain", () => {
    expect(SITE_URL).not.toContain("example-domain")
  })
})
