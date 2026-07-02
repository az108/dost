import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import Legal from "./Legal"
import { legal } from "@/content/legal"

it("renders the impressum placeholder paragraphs from content", () => {
  render(
    <MemoryRouter>
      <Legal title="Impressum" paragraphs={legal.impressum} />
    </MemoryRouter>
  )
  expect(screen.getByRole("heading", { name: "Impressum" })).toBeInTheDocument()
  expect(screen.getByText(/Inhalt folgt/)).toBeInTheDocument()
})
