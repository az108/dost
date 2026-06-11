import { describe, expect, it } from "vitest"
import { behandlungen } from "./behandlungen"
import { fachbereiche } from "./fachbereiche"
import { arzt } from "./arzt"
import { praxis } from "./praxis"

const all = [...behandlungen, ...fachbereiche]

describe("content integrity", () => {
  it("has at least one entry per section", () => {
    expect(behandlungen.length).toBeGreaterThan(0)
    expect(fachbereiche.length).toBeGreaterThan(0)
  })

  it("every entry has slug, title, excerpt and non-empty body", () => {
    for (const e of all) {
      expect(e.slug).toMatch(/^[a-z0-9-]+$/)
      expect(e.title.length).toBeGreaterThan(2)
      expect(e.excerpt.length).toBeGreaterThan(10)
      expect(e.body.length).toBeGreaterThan(0)
      expect(e.body.every((p) => p.trim().length > 0)).toBe(true)
    }
  })

  it("slugs are unique within each section", () => {
    const slugs = (xs: { slug: string }[]) => xs.map((x) => x.slug)
    expect(new Set(slugs(behandlungen)).size).toBe(behandlungen.length)
    expect(new Set(slugs(fachbereiche)).size).toBe(fachbereiche.length)
  })

  it("no Silvamed branding leaks into content", () => {
    const text = JSON.stringify({ all, arzt, praxis }).toLowerCase()
    expect(text.includes("silvamed gmbh")).toBe(false)
    expect(text.includes("mvz vilsbiburg")).toBe(false)
  })

  it("praxis has the agreed contact data", () => {
    expect(praxis.email).toBe("dr.dost@silvamed.de")
    expect(praxis.address).toContain("Landshut")
  })
})
