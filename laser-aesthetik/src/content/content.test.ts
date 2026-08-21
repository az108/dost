import { describe, expect, it } from "vitest"
import { pillars, pillarById } from "./pillars"
import { treatments, treatmentsByPillar, treatmentBySlug } from "./treatments"
import type { Pillar } from "./types"

const PILLAR_IDS: Pillar[] = ["laser", "physio", "aesthetik"]

describe("pillars", () => {
  it("defines exactly the three pillars", () => {
    expect(pillars.map((p) => p.id).sort()).toEqual([...PILLAR_IDS].sort())
  })

  it("gives every pillar a route path, label and intro", () => {
    for (const p of pillars) {
      expect(p.path).toMatch(/^\/[a-z]+$/)
      expect(p.label.length).toBeGreaterThan(2)
      expect(p.intro.length).toBeGreaterThan(0)
      expect(p.intro.every((s) => s.trim().length > 0)).toBe(true)
    }
  })

  it("looks a pillar up by id", () => {
    expect(pillarById("laser").path).toBe("/laser")
  })
})

describe("treatments", () => {
  it("has treatments for every pillar", () => {
    for (const id of PILLAR_IDS) {
      expect(treatmentsByPillar(id).length).toBeGreaterThan(0)
    }
  })

  it("gives every treatment a kebab-case slug, title, excerpt and body", () => {
    for (const t of treatments) {
      expect(t.slug).toMatch(/^[a-z0-9-]+$/)
      expect(t.title.length).toBeGreaterThan(2)
      expect(t.excerpt.length).toBeGreaterThan(10)
      expect(t.body.length).toBeGreaterThan(0)
      expect(t.body.every((p) => p.trim().length > 0)).toBe(true)
    }
  })

  it("gives every treatment a headline with a lead and an accent word", () => {
    for (const t of treatments) {
      expect(t.headline.lead.trim().length).toBeGreaterThan(0)
      expect(t.headline.accent.trim().length).toBeGreaterThan(0)
    }
  })

  it("gives every treatment at least two benefits", () => {
    for (const t of treatments) {
      expect(t.benefits.length).toBeGreaterThanOrEqual(2)
    }
  })

  it("has unique slugs", () => {
    expect(new Set(treatments.map((t) => t.slug)).size).toBe(treatments.length)
  })

  it("looks a treatment up by slug and returns undefined for unknown slugs", () => {
    expect(treatmentBySlug("achseln")?.title).toBe("Achseln")
    expect(treatmentBySlug("gibt-es-nicht")).toBeUndefined()
  })

  it("prices every fixed-price treatment above zero", () => {
    for (const t of treatments) {
      if (t.pricing.kind === "fixed") {
        expect(t.pricing.single).toBeGreaterThan(0)
      }
    }
  })

  it("gives every laser zone a price-table group", () => {
    for (const t of treatmentsByPillar("laser")) {
      if (t.pricing.kind === "fixed") expect(t.group).toBeTruthy()
    }
  })

  // ── Go-live guard ────────────────────────────────────────────────────
  // Catches leftover scaffolding copy reaching patients.
  it("ships no placeholder copy", () => {
    const text = JSON.stringify(treatments).toLowerCase()
    for (const marker of ["todo", "tbd", "lorem ipsum", "platzhalter", "folgt noch"]) {
      expect(text).not.toContain(marker)
    }
  })

  // The clinic has no consented patient photography and German
  // Heilmittelwerbegesetz restricts before/after imagery for aesthetic
  // procedures. No content may promise or depict one.
  it("makes no before/after claims", () => {
    const text = JSON.stringify(treatments).toLowerCase()
    for (const marker of ["vorher-nachher", "vorher/nachher", "before/after"]) {
      expect(text).not.toContain(marker)
    }
  })
})
