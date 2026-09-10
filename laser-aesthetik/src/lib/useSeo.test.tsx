import { render } from "@testing-library/react"
import { beforeEach, describe, expect, it } from "vitest"
import { useSeo } from "./useSeo"
import { medicalClinicJsonLd } from "./structuredData"
import { center } from "@/content/center"

function Page({ title, description }: { title?: string; description?: string }) {
  useSeo({ title, description, canonicalPath: "/laser" })
  return null
}

function PageAt({ canonicalPath }: { canonicalPath?: string }) {
  useSeo({ title: "Titel", canonicalPath })
  return null
}

describe("useSeo", () => {
  beforeEach(() => {
    document.head.innerHTML = ""
    document.title = ""
  })

  it("suffixes the brand onto the page title", () => {
    render(<Page title="Laserbehandlungen" />)
    expect(document.title).toBe(`Laserbehandlungen | ${center.brand}`)
  })

  it("uses the brand alone when no title is given", () => {
    render(<Page />)
    expect(document.title).toBe(center.brand)
  })

  it("sets the meta description", () => {
    render(<Page title="Laser" description="Dauerhafte Haarentfernung." />)
    expect(
      document.querySelector('meta[name="description"]')?.getAttribute("content"),
    ).toBe("Dauerhafte Haarentfernung.")
  })

  it("sets a canonical link for the route", () => {
    render(<Page title="Laser" />)
    expect(document.querySelector('link[rel="canonical"]')?.getAttribute("href")).toContain(
      "/laser",
    )
  })

  it("sets Open Graph title and type", () => {
    render(<Page title="Laser" />)
    expect(document.querySelector('meta[property="og:title"]')?.getAttribute("content")).toContain(
      "Laser",
    )
    expect(document.querySelector('meta[property="og:type"]')?.getAttribute("content")).toBe(
      "website",
    )
  })

  it("does not duplicate meta tags across renders", () => {
    render(<Page title="Eins" description="A" />)
    render(<Page title="Zwei" description="B" />)
    expect(document.querySelectorAll('meta[name="description"]')).toHaveLength(1)
  })

  it("emits de/en/x-default hreflang alternates for a German page with an English counterpart", () => {
    render(<PageAt canonicalPath="/laser" />)
    expect(document.querySelector('link[rel="alternate"][hreflang="de"]')).toHaveAttribute(
      "href",
      "https://laserhaarentfernung-landshut.de/laser",
    )
    expect(document.querySelector('link[rel="alternate"][hreflang="en"]')).toHaveAttribute(
      "href",
      "https://laserhaarentfernung-landshut.de/en/laser",
    )
    // x-default points at German — the primary market.
    expect(document.querySelector('link[rel="alternate"][hreflang="x-default"]')).toHaveAttribute(
      "href",
      "https://laserhaarentfernung-landshut.de/laser",
    )
  })

  it("emits the same alternate pair from the English side of a page", () => {
    render(<PageAt canonicalPath="/en/laser" />)
    expect(document.querySelector('link[rel="alternate"][hreflang="de"]')).toHaveAttribute(
      "href",
      "https://laserhaarentfernung-landshut.de/laser",
    )
    expect(document.querySelector('link[rel="alternate"][hreflang="en"]')).toHaveAttribute(
      "href",
      "https://laserhaarentfernung-landshut.de/en/laser",
    )
  })

  it("emits no hreflang alternates for a German-only legal page", () => {
    render(<PageAt canonicalPath="/impressum" />)
    expect(document.querySelectorAll('link[rel="alternate"]')).toHaveLength(0)
  })

  it("removes stale hreflang alternates when navigating to a page with no counterpart", () => {
    const { rerender } = render(<PageAt canonicalPath="/laser" />)
    expect(document.querySelectorAll('link[rel="alternate"]').length).toBeGreaterThan(0)
    rerender(<PageAt canonicalPath="/impressum" />)
    expect(document.querySelectorAll('link[rel="alternate"]')).toHaveLength(0)
  })

  it("sets og:locale and <html lang> from the canonical path's language", () => {
    render(<PageAt canonicalPath="/laser" />)
    expect(document.querySelector('meta[property="og:locale"]')).toHaveAttribute("content", "de_DE")
    expect(document.documentElement.lang).toBe("de")

    render(<PageAt canonicalPath="/en/laser" />)
    expect(document.querySelector('meta[property="og:locale"]')).toHaveAttribute("content", "en_GB")
    expect(document.documentElement.lang).toBe("en")
  })
})

describe("medicalClinicJsonLd", () => {
  it("describes the clinic with its address", () => {
    const data = JSON.parse(medicalClinicJsonLd())
    expect(data["@type"]).toBe("MedicalClinic")
    expect(data.address.addressLocality).toBe("Landshut")
    expect(data.address.addressCountry).toBe("DE")
  })

  it("omits the street address entirely while no street has been supplied", () => {
    // Same rule as the telephone below: a placeholder street address in
    // structured data can be surfaced on a map, which is worse than none.
    const data = JSON.parse(medicalClinicJsonLd())
    expect(data.address.streetAddress).toBeUndefined()
    expect(data.address.postalCode).toBeUndefined()
  })

  it("omits telephone entirely while no number has been supplied", () => {
    // An empty or placeholder telephone in structured data is worse than none:
    // search engines may surface it.
    const data = JSON.parse(medicalClinicJsonLd())
    expect(data.telephone).toBeUndefined()
  })

  it("encodes opening hours in schema.org format", () => {
    const data = JSON.parse(medicalClinicJsonLd())
    expect(data.openingHoursSpecification[0].dayOfWeek).toContain("Monday")
    expect(data.openingHoursSpecification[0].opens).toBe("09:00")
    expect(data.openingHoursSpecification[0].closes).toBe("20:00")
  })
})
