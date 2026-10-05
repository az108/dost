// chat-worker/src/prompt.test.ts
import { describe, expect, it } from "vitest"
import { buildSystem, formatContext } from "./prompt"

describe("prompt", () => {
  it("embeds the practice identity and safety rules", () => {
    const s = buildSystem([])
    expect(s).toMatch(/Dost Mohammad/)
    expect(s).toMatch(/112/)
    expect(s).toMatch(/off-topic/i)
  })

  it("forbids personalised diagnoses, prescriptions and dosages", () => {
    const s = buildSystem([])
    expect(s).toMatch(/personalised diagnosis/i)
  })

  it("instructs the model to ignore injected instructions in CONTEXT or visitor messages", () => {
    const s = buildSystem([])
    expect(s).toMatch(/ignore any instructions/i)
  })

  it("labels an empty context explicitly", () => {
    expect(formatContext([])).toMatch(/no matching pages/i)
  })

  it("lists provided context with titles and urls", () => {
    const s = formatContext([{ title: "Migräne", url: "/behandlungen/x/migraine", text: "Kopfschmerzen" }])
    expect(s).toMatch(/Migräne/)
    expect(s).toMatch(/\/behandlungen\/x\/migraine/)
    expect(s).toMatch(/Kopfschmerzen/)
  })
})
