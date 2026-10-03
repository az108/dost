import { describe, expect, it } from "vitest"
import {
  counterpartPath,
  hasCounterpart,
  homePath,
  legalPath,
  pagePath,
  pillarPath,
  terminPath,
  treatmentPath,
} from "./routes"

describe("routes — German (today's URLs, must stay byte-identical)", () => {
  it("resolves the home path", () => {
    expect(homePath("de")).toBe("/")
  })

  it("resolves pillar paths", () => {
    expect(pillarPath("laser", "de")).toBe("/laser")
    expect(pillarPath("physio", "de")).toBe("/physio")
    expect(pillarPath("aesthetik", "de")).toBe("/aesthetik")
  })

  it("resolves a treatment path from an already-resolved slug", () => {
    expect(treatmentPath("achseln", "de")).toBe("/behandlungen/achseln")
  })

  it("resolves the prices, practice and contact paths", () => {
    expect(pagePath("prices", "de")).toBe("/preise")
    expect(pagePath("practice", "de")).toBe("/praxis")
    expect(pagePath("contact", "de")).toBe("/kontakt")
  })

  it("resolves the legal paths, which take no locale", () => {
    expect(legalPath("impressum")).toBe("/impressum")
    expect(legalPath("datenschutz")).toBe("/datenschutz")
    expect(legalPath("agb")).toBe("/agb")
    expect(legalPath("widerruf")).toBe("/widerruf")
  })
})

describe("terminPath — German-only, like the legal paths", () => {
  it("resolves the booking flow's three paths", () => {
    expect(terminPath("index")).toBe("/termin")
    expect(terminPath("erfolg")).toBe("/termin/erfolg")
    expect(terminPath("abbruch")).toBe("/termin/abbruch")
  })

  it("has no counterpart in the other language, like the legal pages", () => {
    expect(hasCounterpart(terminPath("index"))).toBe(false)
    expect(hasCounterpart(terminPath("erfolg"))).toBe(false)
    expect(hasCounterpart(terminPath("abbruch"))).toBe(false)
  })
})

describe("routes — English (new keyword-bearing paths)", () => {
  it("resolves the home path", () => {
    expect(homePath("en")).toBe("/en")
  })

  it("resolves pillar paths, each with its own keyword", () => {
    expect(pillarPath("laser", "en")).toBe("/en/laser")
    expect(pillarPath("physio", "en")).toBe("/en/physio")
    expect(pillarPath("aesthetik", "en")).toBe("/en/aesthetics")
  })

  it("resolves a treatment path under /en/treatments", () => {
    expect(treatmentPath("achseln", "en")).toBe("/en/treatments/achseln")
  })

  it("resolves the prices, practice and contact paths", () => {
    expect(pagePath("prices", "en")).toBe("/en/prices")
    expect(pagePath("practice", "en")).toBe("/en/practice")
    expect(pagePath("contact", "en")).toBe("/en/contact")
  })

  it("has no English route for legal pages", () => {
    // legalPath() takes no locale argument at all — there is nothing to
    // assert here beyond the type signature, which the German suite above
    // already exercises. This test documents the omission.
    expect(legalPath("impressum")).toBe("/impressum")
  })
})

describe("counterpartPath", () => {
  it("maps the German home page to the English home page and back", () => {
    expect(counterpartPath("/", "en")).toBe("/en")
    expect(counterpartPath("/en", "de")).toBe("/")
  })

  it("maps a pillar page to its English counterpart and back", () => {
    const en = counterpartPath("/laser", "en")
    expect(en).toBe("/en/laser")
    expect(counterpartPath(en, "de")).toBe("/laser")
  })

  it("maps a treatment detail page to its English counterpart and back", () => {
    // "achseln" (de) and "underarms" (en) are the same treatment, but the
    // slugs are unrelated strings — this is the whole point of the mapping.
    const en = counterpartPath("/behandlungen/achseln", "en")
    expect(en).toBe("/en/treatments/underarms")
    expect(counterpartPath(en, "de")).toBe("/behandlungen/achseln")
  })

  it("round-trips a static page (prices) from German through English and back", () => {
    const de = pagePath("prices", "de")
    const en = counterpartPath(de, "en")
    expect(en).toBe(pagePath("prices", "en"))
    expect(counterpartPath(en, "de")).toBe(de)
  })

  it("falls back to the target language's home page for the German-only legal pages", () => {
    expect(counterpartPath(legalPath("impressum"), "en")).toBe("/en")
    expect(counterpartPath(legalPath("datenschutz"), "en")).toBe("/en")
    expect(counterpartPath(legalPath("agb"), "en")).toBe("/en")
    expect(counterpartPath(legalPath("widerruf"), "en")).toBe("/en")
  })

  it("falls back to the target language's home page for an unknown path", () => {
    expect(counterpartPath("/this-page-does-not-exist", "en")).toBe("/en")
    expect(counterpartPath("/en/this-page-does-not-exist", "de")).toBe("/")
  })
})
