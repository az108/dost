// src/features/chat/ChatWidget.test.tsx
import { describe, expect, it } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import { LanguageProvider } from "@/lib/i18n"
import { ChatWidget } from "./ChatWidget"

function setup() {
  return render(
    <LanguageProvider>
      <ChatWidget />
    </LanguageProvider>,
  )
}

describe("ChatWidget", () => {
  it("starts closed, then opens the panel on click", () => {
    setup()
    expect(screen.queryByRole("dialog")).toBeNull()
    fireEvent.click(screen.getByRole("button", { name: /chat öffnen|open chat/i }))
    expect(screen.getByRole("dialog")).toBeInTheDocument()
  })

  it("closes the panel again", () => {
    setup()
    fireEvent.click(screen.getByRole("button", { name: /chat öffnen|open chat/i }))
    fireEvent.click(screen.getByRole("button", { name: /chat schließen|close chat/i }))
    expect(screen.queryByRole("dialog")).toBeNull()
  })
})
