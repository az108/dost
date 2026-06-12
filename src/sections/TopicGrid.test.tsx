import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { describe, expect, it } from "vitest"
import { TopicGrid } from "./TopicGrid"
import { behandlungen } from "@/content/behandlungen"

describe("TopicGrid", () => {
  it("renders one linked card per entry", () => {
    render(
      <MemoryRouter>
        <TopicGrid
          id="behandlungen"
          title="Behandlungen"
          intro="Unsere Leistungen"
          entries={behandlungen}
          basePath="/behandlungen"
        />
      </MemoryRouter>,
    )
    for (const e of behandlungen) {
      const link = screen.getByRole("link", { name: new RegExp(e.title, "i") })
      expect(link).toHaveAttribute("href", `/behandlungen/${e.slug}`)
    }
  })
})
