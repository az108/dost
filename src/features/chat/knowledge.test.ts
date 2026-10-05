// src/features/chat/knowledge.test.ts
import { describe, expect, it } from "vitest"
import { buildKnowledgeDocs } from "./knowledge"

describe("buildKnowledgeDocs", () => {
  const docs = buildKnowledgeDocs()

  it("produces a doc per disease plus aesthetics and a practice doc", () => {
    // 287 diseases + 3 aesthetic treatments + 1 practice doc
    expect(docs.length).toBeGreaterThan(287)
    expect(docs.some((d) => d.id === "aesthetic:botox")).toBe(true)
    expect(docs.some((d) => d.id === "practice:info")).toBe(true)
  })

  it("includes the migraine disease with its URL and bilingual text", () => {
    const m = docs.find((d) => d.id === "disease:migraine")
    expect(m).toBeTruthy()
    expect(m!.url).toMatch(/^\/behandlungen\/[a-z-]+\/migraine$/)
    expect(m!.titleDe).toBe("Migräne")
    expect(m!.textDe).toMatch(/Kopfschmerz/)
    expect(m!.textEn.trim().length).toBeGreaterThan(20)
  })

  it("gives every doc non-empty bilingual text", () => {
    for (const d of docs) {
      expect(d.textDe.trim().length).toBeGreaterThan(0)
      expect(d.textEn.trim().length).toBeGreaterThan(0)
    }
  })

  it("omits unfilled 'folgt' placeholders from the practice doc", () => {
    const p = docs.find((d) => d.id === "practice:info")!
    expect(p.textDe).not.toMatch(/folgt/i)
  })
})
