// chat-worker/src/request.ts
export interface ParsedChat {
  lang: "de" | "en"
  messages: { role: "user" | "assistant"; content: string }[]
  context: { title: string; url: string; text: string }[]
}

const MAX_MESSAGES = 6
const MAX_CONTENT = 2000
const MAX_CONTEXT = 6
const MAX_CONTEXT_TEXT = 6000

export function parseChatRequest(
  raw: unknown,
): { ok: true; value: ParsedChat } | { ok: false; error: string } {
  if (typeof raw !== "object" || raw === null) return { ok: false, error: "bad_request" }
  const o = raw as Record<string, unknown>

  const lang: "de" | "en" = o.lang === "en" ? "en" : "de"

  if (!Array.isArray(o.messages) || o.messages.length === 0) return { ok: false, error: "bad_request" }
  const messages: ParsedChat["messages"] = []
  for (const m of o.messages.slice(-MAX_MESSAGES)) {
    if (typeof m !== "object" || m === null) return { ok: false, error: "bad_request" }
    const mm = m as Record<string, unknown>
    if (typeof mm.content !== "string" || mm.content.trim() === "") return { ok: false, error: "bad_request" }
    messages.push({
      role: mm.role === "assistant" ? "assistant" : "user",
      content: mm.content.slice(0, MAX_CONTENT),
    })
  }
  // Gemini requires the conversation (contents) to start with a user turn.
  while (messages.length && messages[0].role === "assistant") messages.shift()
  if (messages.length === 0) return { ok: false, error: "bad_request" }

  const context: ParsedChat["context"] = []
  if (Array.isArray(o.context)) {
    for (const c of o.context.slice(0, MAX_CONTEXT)) {
      if (typeof c !== "object" || c === null) continue
      const cc = c as Record<string, unknown>
      context.push({
        title: typeof cc.title === "string" ? cc.title.slice(0, 200) : "",
        url: typeof cc.url === "string" ? cc.url.slice(0, 300) : "",
        text: typeof cc.text === "string" ? cc.text.slice(0, MAX_CONTEXT_TEXT) : "",
      })
    }
  }

  return { ok: true, value: { lang, messages, context } }
}
