// src/features/chat/ChatWidget.tsx
import { useState } from "react"
import { MessageCircle } from "lucide-react"
import { useUi } from "@/content/ui"
import { ChatPanel } from "./ChatPanel"

export function ChatWidget() {
  const [open, setOpen] = useState(false)
  const ui = useUi()
  return open ? (
    <ChatPanel onClose={() => setOpen(false)} />
  ) : (
    <button
      type="button"
      aria-label={ui.chat.open}
      onClick={() => setOpen(true)}
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-brand text-white shadow-lg shadow-brand/30 transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
    >
      <MessageCircle className="size-6" />
    </button>
  )
}
