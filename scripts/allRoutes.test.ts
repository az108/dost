import { describe, expect, it } from "vitest"
import { allRoutes } from "./allRoutes"

describe("allRoutes", () => {
  it("lists home, the sections and the many condition pages, with no duplicates", () => {
    const routes = allRoutes()
    expect(routes).toContain("/")
    expect(routes).toContain("/behandlungen")
    expect(routes).toContain("/aesthetik")
    expect(routes).toContain("/impressum")
    expect(routes).toContain("/datenschutz")
    // The ~286 condition pages dominate the list — the main SEO asset.
    expect(routes.length).toBeGreaterThan(280)
    expect(new Set(routes).size).toBe(routes.length)
    expect(routes.every((r) => r.startsWith("/"))).toBe(true)
  })
})
