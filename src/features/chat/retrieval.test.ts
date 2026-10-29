// src/features/chat/retrieval.test.ts
import { describe, expect, it } from "vitest"
import { retrieve } from "./retrieval"

describe("retrieve", () => {
  it("finds the migraine page from a German query", () => {
    const hits = retrieve("Migräne Kopfschmerzen", "de")
    expect(hits.some((h) => h.url.endsWith("/migraine"))).toBe(true)
    expect(hits[0].title.length).toBeGreaterThan(0)
    const migraine = hits.find((h) => h.url.endsWith("/migraine"))
    expect(migraine?.title).toBe("Migräne")
  })

  it("finds the migraine page from an English query", () => {
    const hits = retrieve("migraine headache", "en")
    expect(hits.some((h) => h.url.endsWith("/migraine"))).toBe(true)
    const migraine = hits.find((h) => h.url.endsWith("/migraine"))
    expect(migraine?.title).toBe("Migraine")
  })

  it("finds a diabetes page", () => {
    const hits = retrieve("Diabetes", "de")
    expect(hits.some((h) => /diabetes/.test(h.url))).toBe(true)
  })

  it("returns nothing for a nonsense query", () => {
    expect(retrieve("zzzzzz qqqqqq wwwwww", "de")).toEqual([])
  })

  it("caps results to k and truncates excerpts", () => {
    const hits = retrieve("Schmerzen", "de", 3)
    expect(hits.length).toBeLessThanOrEqual(3)
    for (const h of hits) expect(h.text.length).toBeLessThanOrEqual(4800)
  })
})
