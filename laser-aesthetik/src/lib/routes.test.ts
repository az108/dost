import { describe, expect, it } from "vitest"
import {
  homePath,
  legalPath,
  pagePath,
  pillarPath,
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
