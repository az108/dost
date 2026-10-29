// chat-worker/src/index.ts
import { parseChatRequest } from "./request"
import { buildSystem } from "./prompt"

export interface Env {
  GEMINI_API_KEY: string
  RATE_LIMITER: { limit(opts: { key: string }): Promise<{ success: boolean }> }
}

const ALLOWED_ORIGINS = new Set([
  "https://az108.github.io",
  "http://localhost:5173",
  "http://localhost:4173",
])
// Gemini Flash — cheapest capable model. Change this one line to use a
// different Gemini model; verify the name exists for your key in Google AI
// Studio (a retired model returns a 404 naming its replacement).
const MODEL = "gemini-3.8-flash"
// Gemini 3 models always think, and maxOutputTokens is the budget for
// thinking + visible answer combined. THINKING_LEVEL "low" keeps the hidden
// reasoning (and its cost) minimal; the cap must still leave ample room for
// the answer so a short reply is never starved by thinking tokens.
const THINKING_LEVEL = "low"
const MAX_TOKENS = 2048
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:streamGenerateContent?alt=sse`

function cors(origin: string | null): Record<string, string> {
  const allow = origin && ALLOWED_ORIGINS.has(origin) ? origin : "https://az108.github.io"
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "content-type",
    Vary: "Origin",
  }
}

function json(body: unknown, status: number, headers: Record<string, string>): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...headers, "content-type": "application/json" },
  })
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = request.headers.get("Origin")
    const base = cors(origin)

    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: base })
    if (request.method !== "POST") return json({ error: "method_not_allowed" }, 405, base)

    const ip = request.headers.get("cf-connecting-ip") ?? "anonymous"
    let success: boolean
    try {
      ;({ success } = await env.RATE_LIMITER.limit({ key: ip }))
    } catch {
      // The rate-limiter binding itself failed (e.g. misconfigured or
      // unavailable) — fail clean with CORS headers rather than letting it
      // throw into an opaque, CORS-less 500.
      return json({ error: "rate_limiter_unavailable" }, 503, base)
    }
    if (!success) return json({ error: "rate_limited" }, 429, base)

    let raw: unknown
    try {
      raw = await request.json()
    } catch {
      return json({ error: "bad_request" }, 400, base)
    }
    const parsed = parseChatRequest(raw)
    if (!parsed.ok) return json({ error: parsed.error }, 400, base)

    let upstream: Response
    try {
      upstream = await fetch(GEMINI_URL, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          // Key travels in a header, never in the URL/query string.
          "x-goog-api-key": env.GEMINI_API_KEY,
        },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: buildSystem(parsed.value.context) }] },
          contents: toGeminiContents(parsed.value.messages),
          generationConfig: {
            maxOutputTokens: MAX_TOKENS,
            thinkingConfig: { thinkingLevel: THINKING_LEVEL },
          },
        }),
      })
    } catch (err) {
      // Network-level failure reaching Gemini. Log for `wrangler tail`; the
      // client only ever sees the generic error, never upstream detail.
      console.error("gemini fetch threw", err)
      return json({ error: "upstream_error" }, 502, base)
    }
    if (!upstream.ok || !upstream.body) {
      // Gemini returned a non-2xx status (e.g. a retired model, a bad key, a
      // rejected field). Log the status + body for `wrangler tail`; never
      // surface upstream detail to the browser.
      const detail = await upstream.text().catch(() => "")
      console.error("gemini upstream error", upstream.status, detail.slice(0, 800))
      return json({ error: "upstream_error" }, 502, base)
    }

    return new Response(toTextStream(upstream.body), {
      status: 200,
      headers: { ...base, "content-type": "text/plain; charset=utf-8" },
    })
  },
}

/** Map our chat messages to Gemini's `contents` shape (assistant → "model"). */
function toGeminiContents(
  messages: { role: "user" | "assistant"; content: string }[],
): { role: "user" | "model"; parts: { text: string }[] }[] {
  return messages.map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }],
  }))
}

/** Parse a single SSE line and, if it carries model text, enqueue it. Returns whether it enqueued anything. */
function processLine(
  line: string,
  controller: ReadableStreamDefaultController<Uint8Array>,
  encoder: TextEncoder,
): boolean {
  const trimmed = line.trim()
  if (!trimmed.startsWith("data:")) return false
  const payload = trimmed.slice(5).trim()
  if (!payload) return false
  try {
    const evt = JSON.parse(payload)
    // Gemini streams a GenerateContentResponse per SSE line; the incremental
    // text lives in candidates[0].content.parts[].text.
    const parts = evt?.candidates?.[0]?.content?.parts
    if (Array.isArray(parts)) {
      let produced = false
      for (const p of parts) {
        // Skip thought parts (p.thought === true) — only the visible answer.
        if (p?.thought !== true && typeof p?.text === "string" && p.text.length > 0) {
          controller.enqueue(encoder.encode(p.text))
          produced = true
        }
      }
      return produced
    }
  } catch {
    /* ignore keep-alive pings / non-JSON lines */
  }
  return false
}

/** Parse Gemini's SSE and emit only the model's text as a plain byte stream. */
function toTextStream(src: ReadableStream<Uint8Array>): ReadableStream<Uint8Array> {
  const reader = src.getReader()
  const decoder = new TextDecoder()
  const encoder = new TextEncoder()
  let buffer = ""
  return new ReadableStream<Uint8Array>({
    async pull(controller) {
      // A single upstream read may land mid-line (an SSE event split across chunks), in
      // which case processing it enqueues nothing. Nothing else will prompt the stream
      // to call pull() again in that case, so keep reading here until we either emit
      // something or the upstream is done — otherwise the response would stall forever.
      for (;;) {
        const { value, done } = await reader.read()
        if (done) {
          if (buffer.trim()) processLine(buffer, controller, encoder)
          controller.close()
          return
        }
        buffer += decoder.decode(value, { stream: true })
        const lines = buffer.split("\n")
        buffer = lines.pop() ?? ""
        let produced = false
        for (const line of lines) {
          if (processLine(line, controller, encoder)) produced = true
        }
        if (produced) return
      }
    },
    cancel() {
      void reader.cancel()
    },
  })
}
