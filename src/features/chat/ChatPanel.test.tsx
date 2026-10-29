// src/features/chat/ChatPanel.test.tsx
import { describe, expect, it, vi, beforeEach } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import { LanguageProvider } from "@/lib/i18n"
import { ChatPanel } from "./ChatPanel"
import type { ChatMessage, ChatStatus } from "./types"

const sendMock = vi.fn()
let mockState: { messages: ChatMessage[]; status: ChatStatus; error: string | null } = {
  messages: [],
  status: "idle",
  error: null,
}

// ChatPanel's own logic (a11y wiring, the submit guard) is what's under
// test here, not useChat's streaming behaviour — that's covered by
// useChat.test.tsx. Mocking the hook lets each test drive `status` directly.
vi.mock("./useChat", () => ({
  useChat: () => ({ ...mockState, send: sendMock }),
}))

function setup() {
  const onClose = vi.fn()
  const utils = render(
    <LanguageProvider>
      <ChatPanel onClose={onClose} />
    </LanguageProvider>,
  )
  return { onClose, ...utils }
}

describe("ChatPanel", () => {
  beforeEach(() => {
    mockState = { messages: [], status: "idle", error: null }
    sendMock.mockReset()
  })

  it("is an aria-modal dialog with the data-processing privacy note near the disclaimer", () => {
    setup()
    expect(screen.getByRole("dialog")).toHaveAttribute("aria-modal", "true")
    expect(screen.getByText(/google \(gemini\)/i)).toBeInTheDocument()
  })

  it("closes on Escape", () => {
    const { onClose } = setup()
    fireEvent.keyDown(document, { key: "Escape" })
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it("wraps the message list in a polite, non-atomic live region", () => {
    setup()
    const live = document.querySelector('[aria-live="polite"]')
    expect(live).not.toBeNull()
    expect(live).toHaveAttribute("aria-atomic", "false")
  })

  it("disables the input while sending and does not discard the typed text on submit", () => {
    mockState.status = "thinking"
    setup()
    const input = screen.getByRole("textbox") as HTMLInputElement
    expect(input).toBeDisabled()

    fireEvent.change(input, { target: { value: "still here" } })
    fireEvent.submit(input.closest("form")!)

    expect(sendMock).not.toHaveBeenCalled()
    expect(input.value).toBe("still here")
  })

  it("sends and clears the input when idle", () => {
    setup()
    const input = screen.getByRole("textbox") as HTMLInputElement
    fireEvent.change(input, { target: { value: "Wie sind die Öffnungszeiten?" } })
    fireEvent.submit(input.closest("form")!)

    expect(sendMock).toHaveBeenCalledWith("Wie sind die Öffnungszeiten?")
    expect(input.value).toBe("")
  })
})
