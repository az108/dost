// chat-worker/src/index.test.ts
import { describe, expect, it, vi, beforeEach } from "vitest"
import worker, { type Env } from "./index"

/** A generateContent JSON response whose candidate holds the given parts. */
function genResponse(parts: { text: string; thought?: boolean }[], status = 200): Response {
  return new Response(JSON.stringify({ candidates: [{ content: { role: "model", parts } }] }), {
    status,
    headers: { "content-type": "application/json" },
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

  it("returns the model text from a generateContent response as plain text", async () => {
    vi.stubGlobal("fetch", vi.fn(async () => genResponse([{ text: "Migräne " }, { text: "ist …" }])))
    const res = await worker.fetch(post(valid), makeEnv())
    expect(res.status).toBe(200)
    expect(res.headers.get("content-type")).toContain("text/plain")
    expect(await res.text()).toBe("Migräne ist …")
  })

  it("calls the non-streaming generateContent endpoint", async () => {
    const spy = vi.fn(async () => genResponse([{ text: "ok" }]))
    vi.stubGlobal("fetch", spy)
    await worker.fetch(post(valid), makeEnv())
    const url = String(spy.mock.calls[0][0])
    expect(url).toContain(":generateContent")
    expect(url).not.toContain("streamGenerateContent")
  })

  it("drops thought parts, keeping only the visible answer", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => genResponse([{ text: "geheime Gedanken", thought: true }, { text: "Antwort" }])),
    )
    const res = await worker.fetch(post(valid), makeEnv())
    expect(res.status).toBe(200)
    expect(await res.text()).toBe("Antwort")
  })

  it("502s when Gemini returns a non-2xx status", async () => {
    vi.stubGlobal("fetch", vi.fn(async () => new Response("error code: 524\n", { status: 524 })))
    const res = await worker.fetch(post(valid), makeEnv())
    expect(res.status).toBe(502)
    expect(res.headers.get("Access-Control-Allow-Origin")).toBe("https://az108.github.io")
  })

  it("502s when the response carries no usable text (e.g. blocked)", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => new Response(JSON.stringify({ candidates: [] }), { status: 200 })),
    )
    const res = await worker.fetch(post(valid), makeEnv())
    expect(res.status).toBe(502)
  })
})
