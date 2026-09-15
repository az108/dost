import { describe, expect, it } from "vitest"
import { seoForRoute } from "./seoForRoute"
import { SITE_URL } from "@/content/seo"
import { center } from "@/content/center"
import { ui } from "@/content/ui"

describe("seoForRoute", () => {
  it("resolves title, canonical and hreflang alternates for a German page", () => {
    const seo = seoForRoute("/laser")
    expect(seo.locale).toBe("de")
    expect(seo.title).toBe(`Laserbehandlungen | ${center.brand}`)
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
    expect(seo.title).toBe(`Laser Treatments | ${center.brand}`)
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
    expect(seo.title).toBe(`Impressum | ${center.brand}`)
    expect(seo.canonical).toBe(`${SITE_URL}/impressum`)
    expect(seo.alternates).toEqual([])
  })

  it("resolves the AGB scaffold, German-only", () => {
    const seo = seoForRoute("/agb")
    expect(seo.locale).toBe("de")
    expect(seo.title).toBe(`Allgemeine Geschäftsbedingungen | ${center.brand}`)
    expect(seo.canonical).toBe(`${SITE_URL}/agb`)
    expect(seo.alternates).toEqual([])
  })

  it("resolves the Widerrufsbelehrung scaffold, German-only", () => {
    const seo = seoForRoute("/widerruf")
    expect(seo.locale).toBe("de")
    expect(seo.title).toBe(`Widerrufsbelehrung | ${center.brand}`)
    expect(seo.canonical).toBe(`${SITE_URL}/widerruf`)
    expect(seo.alternates).toEqual([])
  })

  it("resolves the booking flow, German-only and indexable", () => {
    // Without a branch of its own /termin falls through to the not-found
    // fallback at the bottom of seoForRoute — which would prerender the
    // booking page as "Seite nicht gefunden" with an empty description while
    // rendering perfectly well for a human, because the prerenderer reads
    // this function and not the component.
    const seo = seoForRoute("/termin")
    expect(seo.locale).toBe("de")
    expect(seo.title).toBe(`${ui.booking.de} | ${center.brand}`)
    expect(seo.description).toBe(ui.bookingMetaDescription.de)
    expect(seo.canonical).toBe(`${SITE_URL}/termin`)
    expect(seo.alternates).toEqual([])
    expect(seo.noindex).toBeFalsy()
  })

  it("marks both checkout return pages noindex", () => {
    // They say nothing without the Stripe redirect that produced them, and
    // generate-sitemap.ts reads exactly this field to keep them out of the
    // sitemap.
    const erfolg = seoForRoute("/termin/erfolg")
    expect(erfolg.title).toBe(`${ui.bookingSuccess.de} | ${center.brand}`)
    expect(erfolg.description).toBe(ui.bookingSuccessMetaDescription.de)
    expect(erfolg.locale).toBe("de")
    expect(erfolg.alternates).toEqual([])
    expect(erfolg.noindex).toBe(true)

    const abbruch = seoForRoute("/termin/abbruch")
    expect(abbruch.title).toBe(`${ui.bookingCancelled.de} | ${center.brand}`)
    expect(abbruch.description).toBe(ui.bookingCancelledMetaDescription.de)
    expect(abbruch.locale).toBe("de")
    expect(abbruch.alternates).toEqual([])
    expect(abbruch.noindex).toBe(true)
  })

  it("leaves every other route indexable", () => {
    for (const path of ["/", "/laser", "/preise", "/impressum", "/en/prices"]) {
      expect(seoForRoute(path).noindex, `${path} is unexpectedly noindex`).toBeFalsy()
    }
  })
})
