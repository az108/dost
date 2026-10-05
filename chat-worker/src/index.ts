// chat-worker/src/index.ts
import { parseChatRequest } from "./request"
import { buildSystem } from "./prompt"

export interface Env {
  ANTHROPIC_API_KEY: string
  RATE_LIMITER: { limit(opts: { key: string }): Promise<{ success: boolean }> }
}

const ALLOWED_ORIGINS = new Set([
  "https://az108.github.io",
  "http://localhost:5173",
  "http://localhost:4173",
])
const MODEL = "claude-haiku-4-5-20251001"
const MAX_TOKENS = 700

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
      upstream = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-api-key": env.ANTHROPIC_API_KEY,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: MODEL,
          max_tokens: MAX_TOKENS,
          system: buildSystem(parsed.value.context),
          stream: true,
          messages: parsed.value.messages,
        }),
      })
    } catch {
      return json({ error: "upstream_error" }, 502, base)
    }
    if (!upstream.ok || !upstream.body) return json({ error: "upstream_error" }, 502, base)

    return new Response(toTextStream(upstream.body), {
      status: 200,
      headers: { ...base, "content-type": "text/plain; charset=utf-8" },
    })
  },
}

/** Parse a single SSE line and, if it carries a text delta, enqueue it. Returns whether it enqueued anything. */
function processLine(
  line: string,
  controller: ReadableStreamDefaultController<Uint8Array>,
  encoder: TextEncoder,
): boolean {
  const trimmed = line.trim()
  if (!trimmed.startsWith("data:")) return false
  const payload = trimmed.slice(5).trim()
  if (!payload || payload === "[DONE]") return false
  try {
    const evt = JSON.parse(payload)
    if (evt.type === "content_block_delta" && evt.delta?.type === "text_delta") {
      controller.enqueue(encoder.encode(evt.delta.text))
      return true
    }
  } catch {
    /* ignore keep-alive pings / non-JSON lines */
  }
  return false
}

/** Parse Anthropic's SSE and emit only the assistant's text as a plain byte stream. */
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
