import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { LanguageProvider } from "@/lib/i18n"
import Legal from "./Legal"

it("renders the impressum placeholder paragraphs from content", () => {
  render(
    <LanguageProvider>
      <MemoryRouter>
        <Legal which="impressum" />
      </MemoryRouter>
    </LanguageProvider>,
  )
  expect(screen.getByRole("heading", { name: "Impressum" })).toBeInTheDocument()
  expect(screen.getByText(/Inhalt folgt/)).toBeInTheDocument()
})
