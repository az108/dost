// chat-worker/src/index.test.ts
import { describe, expect, it, vi, beforeEach } from "vitest"
import worker, { type Env } from "./index"

function sseStream(texts: string[]): ReadableStream<Uint8Array> {
  const enc = new TextEncoder()
  const chunks = texts.map(
    (t) =>
      `data: ${JSON.stringify({ candidates: [{ content: { role: "model", parts: [{ text: t }] } }] })}\n\n`,
  )
  return new ReadableStream({
    start(c) {
      for (const ch of chunks) c.enqueue(enc.encode(ch))
      c.close()
    },
  })
}

function rawStream(rawChunks: string[]): ReadableStream<Uint8Array> {
  const enc = new TextEncoder()
  return new ReadableStream({
    start(c) {
      for (const chunk of rawChunks) c.enqueue(enc.encode(chunk))
      c.close()
    },
  })
}

function makeEnv(over: Partial<Env> = {}): Env {
  return {
    GEMINI_API_KEY: "test-key",
    RATE_LIMITER: { limit: async () => ({ success: true }) },
    ...over,
  }
}

function post(body: unknown): Request {
  return new Request("https://w/", {
    method: "POST",
    headers: { origin: "https://az108.github.io", "content-type": "application/json" },
    body: JSON.stringify(body),
  })
}

const valid = { lang: "de", messages: [{ role: "user", content: "Was ist Migräne?" }], context: [] }

describe("chat worker", () => {
  beforeEach(() => vi.restoreAllMocks())

  it("answers CORS preflight", async () => {
    const res = await worker.fetch(
      new Request("https://w/", { method: "OPTIONS", headers: { origin: "https://az108.github.io" } }),
      makeEnv(),
    )
    expect(res.status).toBe(204)
    expect(res.headers.get("Access-Control-Allow-Origin")).toBe("https://az108.github.io")
  })

  it("rejects non-POST", async () => {
    const res = await worker.fetch(new Request("https://w/", { method: "GET" }), makeEnv())
    expect(res.status).toBe(405)
  })

  it("rate-limits", async () => {
    const res = await worker.fetch(post(valid), makeEnv({ RATE_LIMITER: { limit: async () => ({ success: false }) } }))
    expect(res.status).toBe(429)
  })

  it("fails clean with CORS headers when the rate limiter binding throws", async () => {
    const res = await worker.fetch(
      post(valid),
      makeEnv({
        RATE_LIMITER: {
          limit: async () => {
            throw new Error("binding unavailable")
          },
        },
      }),
    )
    expect(res.status).toBe(503)
    expect(res.headers.get("Access-Control-Allow-Origin")).toBe("https://az108.github.io")
    expect(await res.json()).toEqual({ error: "rate_limiter_unavailable" })
  })

  it("rejects a malformed body", async () => {
    const req = new Request("https://w/", {
      method: "POST",
      headers: { origin: "https://az108.github.io", "content-type": "application/json" },
      body: "{",
    })
    const res = await worker.fetch(req, makeEnv())
    expect(res.status).toBe(400)
  })

  it("streams the model text extracted from Gemini's SSE", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => new Response(sseStream(["Migräne ", "ist …"]), { status: 200 })),
    )
    const res = await worker.fetch(post(valid), makeEnv())
    expect(res.status).toBe(200)
    expect(res.headers.get("content-type")).toContain("text/plain")
    expect(await res.text()).toBe("Migräne ist …")
  })

  it("buffers an SSE event split across chunks and flushes a trailing line with no terminator", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(
        async () =>
          new Response(
            rawStream([
              'data: {"candidates":[{"content":{"role":"model","parts":[{"text":"Hal',
              'lo"}]}}]}\n\n',
              'data: {"candidates":[{"content":{"role":"model","parts":[{"text":" Welt"}]}}]}',
            ]),
            { status: 200 },
          ),
      ),
    )
    const res = await worker.fetch(post(valid), makeEnv())
    expect(res.status).toBe(200)
    expect(await res.text()).toBe("Hallo Welt")
  })
})
