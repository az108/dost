import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { MemoryRouter } from "react-router-dom"
import { AppRoutes } from "./App"

describe("App", () => {
  it("renders the home hero at the root route", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <AppRoutes />
      </MemoryRouter>,
    )
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("sichtbar wirkt")
  })
})
