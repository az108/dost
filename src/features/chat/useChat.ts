// src/features/chat/useChat.ts
import { useCallback, useRef, useState } from "react"
import { useLang } from "@/lib/i18n"
import { retrieve } from "./retrieval"
import { CHAT_ENDPOINT } from "./config"
import type { ChatMessage, ChatStatus } from "./types"

const MAX_HISTORY = 4

export function useChat() {
  const { lang } = useLang()
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [status, setStatus] = useState<ChatStatus>("idle")
  const [error, setError] = useState<string | null>(null)
  const busy = useRef(false)

  const send = useCallback(
    async (text: string) => {
      const q = text.trim()
      if (!q || busy.current) return
      busy.current = true
      setError(null)

      const history: ChatMessage[] = [...messages, { role: "user", content: q }]
      setMessages([...history, { role: "assistant", content: "" }])
      setStatus("thinking")

      try {
        const context = retrieve(q, lang)
        const res = await fetch(CHAT_ENDPOINT, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ lang, messages: history.slice(-MAX_HISTORY), context }),
        })
        if (res.status === 429) throw new Error("rate_limited")
        if (!res.ok || !res.body) throw new Error("upstream")

        setStatus("streaming")
        const reader = res.body.getReader()
        const decoder = new TextDecoder()
        let acc = ""
        for (;;) {
          const { value, done } = await reader.read()
          if (done) break
          acc += decoder.decode(value, { stream: true })
          setMessages((m) => {
            const copy = m.slice()
            copy[copy.length - 1] = { role: "assistant", content: acc }
            return copy
          })
        }
        setStatus("idle")
      } catch (e) {
        setError((e as Error).message === "rate_limited" ? "rate_limited" : "error")
        setStatus("error")
        setMessages((m) => m.slice(0, -1)) // drop the empty assistant bubble
      } finally {
        busy.current = false
      }
    },
    [lang, messages],
  )

  const reset = useCallback(() => {
    setMessages([])
    setStatus("idle")
    setError(null)
  }, [])

  return { messages, status, error, send, reset }
}
