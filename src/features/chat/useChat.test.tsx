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
})
