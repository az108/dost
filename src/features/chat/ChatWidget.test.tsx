// src/features/chat/ChatWidget.test.tsx
import { describe, expect, it, vi, beforeEach } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"

// CHAT_ENDPOINT is read from import.meta.env at module-evaluation time, so a
// test that needs it set must stub the env var, reset the module registry,
// and re-import ChatWidget (which re-imports ./config) inside the test.
// LanguageProvider must be re-imported too: resetModules() clears the whole
// registry, so a stale, statically-imported LanguageProvider would wrap the
// fresh ChatWidget tree with a different (and therefore unmatched) React
// context identity.
vi.stubEnv("VITE_CHAT_ENDPOINT", "https://worker.test")

async function setup() {
  vi.resetModules()
  const { ChatWidget } = await import("./ChatWidget")
  const { LanguageProvider } = await import("@/lib/i18n")
  return render(
    <LanguageProvider>
      <ChatWidget />
    </LanguageProvider>,
  )
}

describe("ChatWidget", () => {
  beforeEach(() => {
    vi.stubEnv("VITE_CHAT_ENDPOINT", "https://worker.test")
  })

  it("starts closed, then opens the panel on click", async () => {
    await setup()
    expect(screen.queryByRole("dialog")).toBeNull()
    fireEvent.click(screen.getByRole("button", { name: /chat öffnen|open chat/i }))
    expect(screen.getByRole("dialog")).toBeInTheDocument()
  })

  it("closes the panel again", async () => {
    await setup()
    fireEvent.click(screen.getByRole("button", { name: /chat öffnen|open chat/i }))
    fireEvent.click(screen.getByRole("button", { name: /chat schließen|close chat/i }))
    expect(screen.queryByRole("dialog")).toBeNull()
  })

  it("renders nothing when the endpoint isn't configured", async () => {
    vi.stubEnv("VITE_CHAT_ENDPOINT", "")
    const { container } = await setup()
    expect(screen.queryByRole("button")).toBeNull()
    expect(screen.queryByRole("dialog")).toBeNull()
    expect(container).toBeEmptyDOMElement()
  })
})
