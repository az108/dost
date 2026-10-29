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
  const inputRef = useRef<HTMLInputElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const sendButtonRef = useRef<HTMLButtonElement>(null)

  const sending = status === "thinking" || status === "streaming"

  useEffect(() => {
    listRef.current?.scrollTo(0, listRef.current.scrollHeight)
  }, [messages])

  // Autofocus the message input as soon as the panel mounts (it only ever
  // mounts while open — ChatWidget renders the launcher otherwise).
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  // Escape-to-close plus a basic focus trap cycling Tab/Shift+Tab between
  // the close button, the input and the send button — the dialog's only
  // focusable controls. Mirrors the Escape handling in Galerie.tsx's
  // role="dialog", extended with a trap since this dialog holds interactive
  // form controls rather than just overlay buttons.
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose()
        return
      }
      if (e.key !== "Tab") return
      const focusables = [closeButtonRef.current, inputRef.current, sendButtonRef.current].filter(
        (el): el is HTMLButtonElement | HTMLInputElement => el !== null,
      )
      if (focusables.length === 0) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [onClose])

  function submit(e: FormEvent) {
    e.preventDefault()
    // A send is already in flight: don't clear the typed text just to have
    // it silently discarded by useChat's own busy guard.
    if (sending) return
    const text = input
    setInput("")
    void send(text)
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={ui.chat.title}
      className="fixed inset-x-0 bottom-0 z-50 flex h-[85vh] flex-col border border-neutral-200 bg-white shadow-2xl rounded-t-2xl md:inset-x-auto md:bottom-24 md:right-5 md:h-[70vh] md:w-[380px] md:rounded-2xl"
    >
      <header className="flex items-start justify-between gap-3 border-b border-neutral-100 px-4 py-3">
        <div>
          <p className="font-semibold text-ink">{ui.chat.title}</p>
          <p className="text-xs text-neutral-500">{ui.chat.disclaimer}</p>
          <p className="text-xs text-neutral-400">{ui.chat.privacy}</p>
        </div>
        <button
          ref={closeButtonRef}
          type="button"
          aria-label={ui.chat.close}
          onClick={onClose}
          className="rounded-full p-1 text-neutral-500 hover:bg-neutral-100"
        >
          ✕
        </button>
      </header>

      <div
        ref={listRef}
        aria-live="polite"
        aria-atomic="false"
        className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
      >
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
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={ui.chat.placeholder}
          aria-label={ui.chat.placeholder}
          disabled={sending}
          className="flex-1 rounded-full border border-neutral-200 px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand disabled:opacity-50"
        />
        <button
          ref={sendButtonRef}
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
