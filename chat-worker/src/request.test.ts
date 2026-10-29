// chat-worker/src/request.test.ts
import { describe, expect, it } from "vitest"
import { parseChatRequest } from "./request"

const good = {
  lang: "de",
  messages: [{ role: "user", content: "Was ist Migräne?" }],
  context: [{ title: "Migräne", url: "/behandlungen/x/migraine", text: "…" }],
}

describe("parseChatRequest", () => {
  it("accepts a well-formed body", () => {
    const r = parseChatRequest(good)
    expect(r.ok).toBe(true)
    if (r.ok) {
      expect(r.value.lang).toBe("de")
      expect(r.value.messages).toHaveLength(1)
      expect(r.value.context).toHaveLength(1)
    }
  })

  it("defaults unknown lang to de", () => {
    const r = parseChatRequest({ ...good, lang: "fr" })
    expect(r.ok && r.value.lang).toBe("de")
  })

  it("rejects a non-object", () => {
    expect(parseChatRequest("nope").ok).toBe(false)
  })

  it("rejects empty messages", () => {
    expect(parseChatRequest({ ...good, messages: [] }).ok).toBe(false)
  })

  it("rejects a message with empty content", () => {
    expect(parseChatRequest({ ...good, messages: [{ role: "user", content: "  " }] }).ok).toBe(false)
  })

  it("strips leading assistant turns so the conversation starts with user", () => {
    const r = parseChatRequest({
      ...good,
      messages: [
        { role: "assistant", content: "Hallo" },
        { role: "user", content: "Frage?" },
      ],
    })
    expect(r.ok && r.value.messages[0].role).toBe("user")
  })

  it("rejects a conversation that is entirely assistant turns", () => {
    expect(parseChatRequest({ ...good, messages: [{ role: "assistant", content: "hi" }] }).ok).toBe(false)
  })

  it("tolerates a missing context array", () => {
    const r = parseChatRequest({ lang: "en", messages: [{ role: "user", content: "hi" }] })
    expect(r.ok && r.value.context).toEqual([])
  })
})
