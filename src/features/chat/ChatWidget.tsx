// src/features/chat/ChatWidget.tsx
import { useRef, useState } from "react"
import { MessageCircle } from "lucide-react"
import { useUi } from "@/content/ui"
import { ChatPanel } from "./ChatPanel"
import { CHAT_ENDPOINT } from "./config"

export function ChatWidget() {
  const [open, setOpen] = useState(false)
  const ui = useUi()
  const launcherRef = useRef<HTMLButtonElement>(null)

  // The worker endpoint is only wired in by the deploy step. Render nothing
  // rather than a chat button that leads to a broken, unconfigured panel.
  if (!CHAT_ENDPOINT) return null

  function close() {
    setOpen(false)
    // The launcher button unmounts while the panel is open and remounts on
    // close; wait a tick so it exists before trying to refocus it.
    requestAnimationFrame(() => launcherRef.current?.focus())
  }

  return open ? (
    <ChatPanel onClose={close} />
  ) : (
    <button
      ref={launcherRef}
      type="button"
      aria-label={ui.chat.open}
      onClick={() => setOpen(true)}
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-brand text-white shadow-lg shadow-brand/30 transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
    >
      <MessageCircle className="size-6" />
    </button>
  )
}
