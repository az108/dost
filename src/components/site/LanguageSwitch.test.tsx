import { describe, it, expect } from "vitest"
import { render, screen, fireEvent, within } from "@testing-library/react"
import { LanguageProvider } from "@/lib/i18n"
import { LanguageSwitch } from "./LanguageSwitch"

/** Open the dropdown and return the options listbox. */
function openList() {
  render(
    <LanguageProvider>
      <LanguageSwitch />
    </LanguageProvider>,
  )
  // The trigger button is labelled with the (German default) language label.
  fireEvent.click(screen.getByLabelText("Sprache"))
  return within(screen.getByRole("listbox"))
}

describe("LanguageSwitch", () => {
  it("lists the reviewed languages and the long-tail languages", () => {
    const list = openList()
    // Reviewed
    expect(list.getByText("Deutsch")).toBeTruthy()
    expect(list.getByText("Italiano")).toBeTruthy()
    // Long-tail (on-device translated)
    expect(list.getByText("हिन्दी")).toBeTruthy()
    expect(list.getByText("中文")).toBeTruthy()
  })

  it("filters the list by the search box", () => {
    const list = openList()
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "hindi" } })
    expect(list.getByText("हिन्दी")).toBeTruthy()
    expect(list.queryByText("Deutsch")).toBeNull()
    expect(list.queryByText("中文")).toBeNull()
  })
})
