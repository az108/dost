// src/features/chat/useChat.test.tsx
import type { ReactNode } from "react"
import { describe, expect, it, vi, beforeEach } from "vitest"
import { renderHook, act, waitFor } from "@testing-library/react"
import { LanguageProvider } from "@/lib/i18n"
import { useChat } from "./useChat"

function streamOf(chunks: string[]): ReadableStream<Uint8Array> {
  const enc = new TextEncoder()
  return new ReadableStream({
    start(c) {
      for (const ch of chunks) c.enqueue(enc.encode(ch))
      c.close()
    },
  })
}

/**
 * Yields one chunk on the first read, then errors the stream on the next
 * pull — i.e. *after* the first chunk has actually been read, not merely
 * enqueued. (Erroring synchronously inside `start()` right after `enqueue()`
 * would transition the stream to "errored" before any `read()` call ever
 * happens, making the queued chunk unreachable — `read()` on an errored
 * stream rejects immediately regardless of what's still queued.)
 */
function streamThatErrors(chunk: string): ReadableStream<Uint8Array> {
  const enc = new TextEncoder()
  let pulled = false
  return new ReadableStream({
    pull(c) {
      if (!pulled) {
        pulled = true
        c.enqueue(enc.encode(chunk))
        return
      }
      c.error(new Error("boom"))
    },
  })
}

const wrapper = ({ children }: { children: ReactNode }) => <LanguageProvider>{children}</LanguageProvider>

describe("useChat", () => {
  beforeEach(() => vi.restoreAllMocks())

  it("streams an assistant reply", async () => {
    vi.stubGlobal("fetch", vi.fn(async () => new Response(streamOf(["Hallo", ", Welt"]), { status: 200 })))
    const { result } = renderHook(() => useChat(), { wrapper })
    await act(async () => {
      await result.current.send("Behandeln Sie Migräne?")
    })
    await waitFor(() => expect(result.current.status).toBe("idle"))
    const last = result.current.messages.at(-1)!
    expect(last.role).toBe("assistant")
    expect(last.content).toBe("Hallo, Welt")
  })

  it("surfaces a rate-limit error and drops the empty bubble", async () => {
    vi.stubGlobal("fetch", vi.fn(async () => new Response("", { status: 429 })))
    const { result } = renderHook(() => useChat(), { wrapper })
    await act(async () => {
      await result.current.send("Hallo")
    })
    await waitFor(() => expect(result.current.status).toBe("error"))
    expect(result.current.error).toBe("rate_limited")
    expect(result.current.messages.at(-1)!.role).toBe("user")
  })

  it("keeps partial text and shows a soft error when the stream fails mid-way", async () => {
    vi.stubGlobal("fetch", vi.fn(async () => new Response(streamThatErrors("Hallo"), { status: 200 })))
    const { result } = renderHook(() => useChat(), { wrapper })
    await act(async () => {
      await result.current.send("Behandeln Sie Migräne?")
    })
    await waitFor(() => expect(result.current.status).toBe("error"))
    expect(result.current.error).toBe("error")
    const last = result.current.messages.at(-1)!
    expect(last.role).toBe("assistant")
    expect(last.content).toBe("Hallo")
  })
})
