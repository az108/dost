import { render } from "@testing-library/react"
import { beforeEach, describe, expect, it } from "vitest"
import { useSeo } from "./useSeo"
import { medicalClinicJsonLd } from "./structuredData"

function Page({ title, description }: { title?: string; description?: string }) {
  useSeo({ title, description, canonicalPath: "/laser" })
  return null
}

describe("useSeo", () => {
  beforeEach(() => {
    document.head.innerHTML = ""
    document.title = ""
  })

  it("suffixes the brand onto the page title", () => {
    render(<Page title="Laser-Behandlungen" />)
    expect(document.title).toBe("Laser-Behandlungen | Dr. Dost — Laser, Physio & Ästhetik")
  })

  it("uses the brand alone when no title is given", () => {
    render(<Page />)
    expect(document.title).toBe("Dr. Dost — Laser, Physio & Ästhetik")
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
})

describe("medicalClinicJsonLd", () => {
  it("describes the clinic with its address", () => {
    const data = JSON.parse(medicalClinicJsonLd())
    expect(data["@type"]).toBe("MedicalClinic")
    expect(data.address.streetAddress).toBe("Weiher 3")
    expect(data.address.postalCode).toBe("84166")
    expect(data.address.addressLocality).toBe("Köning")
    expect(data.address.addressCountry).toBe("DE")
  })

  it("lists the social profiles under sameAs", () => {
    const data = JSON.parse(medicalClinicJsonLd())
    expect(data.sameAs).toContain("https://www.facebook.com/drdostmohammad")
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
