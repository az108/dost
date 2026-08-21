import { readFileSync } from "node:fs"
import { resolve } from "node:path"
import { describe, expect, it } from "vitest"

const css = readFileSync(resolve(__dirname, "./index.css"), "utf8")

describe("design tokens", () => {
  it("declares the four palette colours with their exact spec values", () => {
    expect(css).toContain("--color-brand: #053AA3")
    expect(css).toContain("--color-action: #E8137C")
    expect(css).toContain("--color-accent: #DD1188")
    expect(css).toContain("--color-success: #306934")
  })

  it("declares the reserved premium token", () => {
    expect(css).toContain("--color-premium: #D7A01C")
  })

  it("does not use the premium token anywhere in v1", () => {
    // The declaration is the only permitted mention. Any usage — bg-premium,
    // var(--color-premium) — means the reserved token leaked into the UI.
    const mentions = css.match(/premium/g) ?? []
    expect(mentions.length).toBe(1)
  })

  it("declares a brand-derived neutral ramp rather than a separate grey hue", () => {
    for (const step of [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]) {
      expect(css).toContain(`--color-brand-${step}:`)
    }
  })

  it("declares both font families", () => {
    expect(css).toContain("--font-display:")
    expect(css).toContain("--font-sans:")
    expect(css).toContain("Plus Jakarta Sans Variable")
    expect(css).toContain("Inter Variable")
  })

  it("respects prefers-reduced-motion", () => {
    expect(css).toContain("prefers-reduced-motion: reduce")
  })
})
