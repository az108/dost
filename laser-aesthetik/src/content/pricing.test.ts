import { describe, expect, it } from "vitest"
import { formatEuro, packageTiers, priceFrom, PACKAGE_DISCOUNTS } from "./pricing"

describe("package discount tiers", () => {
  it("uses the agreed 3er/5er/10er discounts", () => {
    expect(PACKAGE_DISCOUNTS).toEqual([
      { sessions: 3, discountPct: 20 },
      { sessions: 5, discountPct: 40 },
      { sessions: 10, discountPct: 45 },
    ])
  })
})

describe("packageTiers derivation", () => {
  // [single, 3er perSession, 5er perSession, 10er perSession]
  // Every laser zone from the source price list.
  const zones: [string, number, number, number, number][] = [
    ["Oberlippe", 39, 31, 23, 21],
    ["Wangen", 39, 31, 23, 21],
    ["Kinn", 49, 39, 29, 27],
    ["Achseln", 69, 55, 41, 38],
    ["Bikinizone", 89, 71, 53, 49],
    ["Gesicht & Kopf", 109, 87, 65, 60],
    ["Intim komplett", 139, 111, 83, 76],
    ["Oberschenkel", 169, 135, 101, 93],
    ["Arme komplett", 209, 167, 125, 115],
    ["Rücken komplett", 259, 207, 155, 142],
    ["Beine komplett", 309, 247, 185, 170],
  ]

  it.each(zones)(
    "%s: derives 3er/5er/10er per-session prices matching the price list",
    (_name, single, three, five, ten) => {
      const tiers = packageTiers({ kind: "fixed", single })
      expect(tiers.map((t) => t.perSession)).toEqual([three, five, ten])
    },
  )

  it("computes totals as perSession x sessions", () => {
    const tiers = packageTiers({ kind: "fixed", single: 69 })
    expect(tiers).toEqual([
      { sessions: 3, discountPct: 20, perSession: 55, total: 165 },
      { sessions: 5, discountPct: 40, perSession: 41, total: 205 },
      { sessions: 10, discountPct: 45, perSession: 38, total: 380 },
    ])
  })

  it("lets overrides win, for Kombipakete whose discounts are shallower", () => {
    const tiers = packageTiers({
      kind: "fixed",
      single: 139,
      overrides: [
        { sessions: 3, perSession: 129 },
        { sessions: 5, perSession: 119 },
        { sessions: 10, perSession: 109 },
      ],
    })
    expect(tiers.map((t) => t.perSession)).toEqual([129, 119, 109])
    expect(tiers.map((t) => t.total)).toEqual([387, 595, 1090])
  })

  it("applies a partial override and derives the rest", () => {
    const tiers = packageTiers({
      kind: "fixed",
      single: 69,
      overrides: [{ sessions: 10, perSession: 35 }],
    })
    expect(tiers.map((t) => t.perSession)).toEqual([55, 41, 35])
  })

  it("returns no tiers for on-request pricing", () => {
    expect(packageTiers({ kind: "onRequest" })).toEqual([])
  })
})

describe("priceFrom", () => {
  it("returns the cheapest per-session price, which is the 10er tier", () => {
    expect(priceFrom({ kind: "fixed", single: 69 })).toBe(38)
  })

  it("returns null for on-request pricing", () => {
    expect(priceFrom({ kind: "onRequest" })).toBeNull()
  })
})

describe("formatEuro", () => {
  it("formats whole euros with a German thousands separator", () => {
    expect(formatEuro(39)).toBe("39 €")
    expect(formatEuro(1090)).toBe("1.090 €")
    expect(formatEuro(5090)).toBe("5.090 €")
  })
})
