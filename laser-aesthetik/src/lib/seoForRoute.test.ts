import { describe, expect, it } from "vitest"
import { seoForRoute } from "./seoForRoute"
import { SITE_URL } from "@/content/seo"

describe("seoForRoute", () => {
  it("resolves title, canonical and hreflang alternates for a German page", () => {
    const seo = seoForRoute("/laser")
    expect(seo.locale).toBe("de")
    expect(seo.title).toBe("Laser-Behandlungen | Dr. Dost — Laser, Physio & Ästhetik")
    expect(seo.canonical).toBe(`${SITE_URL}/laser`)
    expect(seo.alternates).toEqual([
      { hreflang: "de", href: `${SITE_URL}/laser` },
      { hreflang: "en", href: `${SITE_URL}/en/laser` },
      { hreflang: "x-default", href: `${SITE_URL}/laser` },
    ])
  })

  it("resolves title, canonical and hreflang alternates for an English page", () => {
    const seo = seoForRoute("/en/laser")
    expect(seo.locale).toBe("en")
    expect(seo.title).toBe("Laser Treatments | Dr. Dost — Laser, Physio & Ästhetik")
    expect(seo.canonical).toBe(`${SITE_URL}/en/laser`)
    expect(seo.alternates).toEqual([
      { hreflang: "de", href: `${SITE_URL}/laser` },
      { hreflang: "en", href: `${SITE_URL}/en/laser` },
      { hreflang: "x-default", href: `${SITE_URL}/laser` },
    ])
  })

  it("emits no hreflang alternates for a German-only legal page", () => {
    const seo = seoForRoute("/impressum")
    expect(seo.locale).toBe("de")
    expect(seo.title).toBe("Impressum | Dr. Dost — Laser, Physio & Ästhetik")
    expect(seo.canonical).toBe(`${SITE_URL}/impressum`)
    expect(seo.alternates).toEqual([])
  })
})
