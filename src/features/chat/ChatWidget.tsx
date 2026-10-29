// src/features/chat/ChatWidget.tsx
import { useRef, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { MessageCircle, X } from "lucide-react"
import { useUi } from "@/content/ui"
import { ChatPanel } from "./ChatPanel"
import { CHAT_ENDPOINT } from "./config"

export function ChatWidget() {
  const [open, setOpen] = useState(false)
  const ui = useUi()
  const reduce = useReducedMotion()
  const launcherRef = useRef<HTMLButtonElement>(null)

  // The worker endpoint is only wired in by the deploy step. Render nothing
  // rather than a chat button that leads to a broken, unconfigured panel.
  if (!CHAT_ENDPOINT) return null

  function close() {
    setOpen(false)
    launcherRef.current?.focus()
  }

  return (
    <>
      {/* The panel animates open from the launcher (origin bottom-right) and
          exits back into it, so it reads as growing out of the button rather
          than appearing detached. The launcher stays mounted throughout. */}
      <AnimatePresence>{open && <ChatPanel key="chat-panel" onClose={close} />}</AnimatePresence>

      <div className="fixed bottom-5 right-5 z-50">
        {/* Attention-drawing pulse halo (paused while open / reduced-motion). */}
        {!open && !reduce && (
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-full bg-brand"
            initial={{ scale: 1, opacity: 0.45 }}
            animate={{ scale: 1.7, opacity: 0 }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
          />
        )}
        <motion.button
          ref={launcherRef}
          type="button"
          aria-label={open ? ui.chat.close : ui.chat.open}
          aria-expanded={open}
          onClick={() => (open ? close() : setOpen(true))}
          className="relative flex size-16 items-center justify-center rounded-full bg-brand text-white shadow-xl shadow-brand/40 ring-4 ring-brand/20 transition-colors hover:bg-brand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          whileHover={reduce ? undefined : { scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X className="size-7" />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <MessageCircle className="size-7" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </>
  )
}
