// src/features/chat/ChatPanel.tsx
import { useEffect, useRef, useState, type FormEvent } from "react"
import { Send } from "lucide-react"
import { useUi } from "@/content/ui"
import { useChat } from "./useChat"

export function ChatPanel({ onClose }: { onClose: () => void }) {
  const ui = useUi()
  const { messages, status, error, send } = useChat()
  const [input, setInput] = useState("")
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    listRef.current?.scrollTo(0, listRef.current.scrollHeight)
  }, [messages])

  function submit(e: FormEvent) {
    e.preventDefault()
    const text = input
    setInput("")
    void send(text)
  }

  const sending = status === "thinking" || status === "streaming"

  return (
    <div
      role="dialog"
      aria-label={ui.chat.title}
      className="fixed inset-x-0 bottom-0 z-50 flex h-[85vh] flex-col border border-neutral-200 bg-white shadow-2xl rounded-t-2xl md:inset-x-auto md:bottom-24 md:right-5 md:h-[70vh] md:w-[380px] md:rounded-2xl"
    >
      <header className="flex items-start justify-between gap-3 border-b border-neutral-100 px-4 py-3">
        <div>
          <p className="font-semibold text-ink">{ui.chat.title}</p>
          <p className="text-xs text-neutral-500">{ui.chat.disclaimer}</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="rounded-full p-1 text-neutral-500 hover:bg-neutral-100"
        >
          ✕
        </button>
      </header>

      <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
        {messages.length === 0 && <p className="text-sm text-neutral-500">{ui.chat.greeting}</p>}
        {messages.map((m, i) => (
          <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
            <span
              className={
                m.role === "user"
                  ? "inline-block rounded-2xl bg-brand px-3 py-2 text-sm text-white"
                  : "inline-block whitespace-pre-wrap rounded-2xl bg-neutral-100 px-3 py-2 text-sm text-ink"
              }
            >
              {m.content || (status === "thinking" ? "…" : "")}
            </span>
          </div>
        ))}
        {error && (
          <p className="text-sm text-red-600">
            {error === "rate_limited" ? ui.chat.rateLimited : ui.chat.error}
          </p>
        )}
      </div>

      <form onSubmit={submit} className="flex items-center gap-2 border-t border-neutral-100 p-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={ui.chat.placeholder}
          aria-label={ui.chat.placeholder}
          className="flex-1 rounded-full border border-neutral-200 px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        />
        <button
          type="submit"
          aria-label={ui.chat.send}
          disabled={sending}
          className="flex size-9 items-center justify-center rounded-full bg-brand text-white disabled:opacity-50"
        >
          <Send className="size-4" />
        </button>
      </form>
    </div>
  )
}
