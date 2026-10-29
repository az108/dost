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
// Gemini Flash-Lite — the cheapest tier, ample for grounded FAQ answers.
// Change this one line to use a different model; verify it exists for your
// key with ListModels (GET /v1beta/models) — a retired model 404s naming
// its replacement. Keep to a model whose supportedGenerationMethods include
// `generateContent` (all current flash models do).
const MODEL = "gemini-2.5-flash-lite"
const MAX_TOKENS = 1024
// Non-streaming: the generativelanguage API no longer exposes
// `streamGenerateContent` for these models (ListModels omits it, and calling
// it just hangs until a gateway timeout). `generateContent` returns the whole
// reply as one JSON response, which we forward as plain text.
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`

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
          generationConfig: { maxOutputTokens: MAX_TOKENS },
        }),
      })
    } catch (err) {
      // Network-level failure reaching Gemini. Log for `wrangler tail`; the
      // client only ever sees the generic error, never upstream detail.
      console.error("gemini fetch threw", err)
      return json({ error: "upstream_error" }, 502, base)
    }
    if (!upstream.ok) {
      // Gemini returned a non-2xx status (e.g. a retired model, a bad key, a
      // rejected field). Log the status + body for `wrangler tail`; never
      // surface upstream detail to the browser.
      const detail = await upstream.text().catch(() => "")
      console.error("gemini upstream error", upstream.status, detail.slice(0, 800))
      return json({ error: "upstream_error" }, 502, base)
    }

    let data: unknown
    try {
      data = await upstream.json()
    } catch (err) {
      console.error("gemini bad json", err)
      return json({ error: "upstream_error" }, 502, base)
    }
    const text = extractText(data)
    if (!text) {
      // No usable text — e.g. the reply was blocked or empty. Log the raw
      // response (finishReason/safety live here) for `wrangler tail`.
      console.error("gemini empty response", JSON.stringify(data).slice(0, 800))
      return json({ error: "upstream_error" }, 502, base)
    }

    return new Response(text, {
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

/** Concatenate the visible text parts of a generateContent response. */
function extractText(data: unknown): string {
  const parts = (data as { candidates?: { content?: { parts?: unknown[] } }[] })?.candidates?.[0]
    ?.content?.parts
  if (!Array.isArray(parts)) return ""
  let out = ""
  for (const p of parts as { text?: unknown; thought?: unknown }[]) {
    // Skip thought parts (p.thought === true) — only the visible answer.
    if (p?.thought !== true && typeof p?.text === "string") out += p.text
  }
  return out
}
