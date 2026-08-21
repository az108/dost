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

  it("keeps the neutral ramp monotonically darkening", () => {
    // A ramp that gets lighter at one step silently inverts visual hierarchy:
    // a component reaching for brand-800 to be "darker than brand-900" would
    // get the opposite. Computed, not eyeballed.
    const relLum = (hex: string) => {
      const c = hex.replace("#", "")
      const [r, g, b] = [0, 2, 4].map((i) => parseInt(c.slice(i, i + 2), 16) / 255)
      const f = (v: number) => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4)
      return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b)
    }
    const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
    const lums = steps.map((step) => {
      const hex = css.match(new RegExp(`--color-brand-${step}:\\s*(#[0-9a-fA-F]{6})`))?.[1]
      expect(hex, `--color-brand-${step} missing or malformed`).toBeTruthy()
      return { step, lum: relLum(hex!) }
    })
    for (let i = 1; i < lums.length; i++) {
      expect(
        lums[i].lum,
        `brand-${lums[i].step} is lighter than brand-${lums[i - 1].step}`,
      ).toBeLessThan(lums[i - 1].lum)
    }
  })

  it("defines the hero wash with a valid colour-mix gradient", () => {
    // The previous version used `var(--color-accent)/0.18`, which is invalid
    // CSS — slash-alpha only works inside a colour function — so the browser
    // silently dropped the declaration and the hero rendered flat.
    expect(css).toContain(".hero-wash")
    expect(css).toContain("color-mix(in oklab, var(--color-accent)")
    expect(css).toContain("color-mix(in oklab, var(--color-action)")
    // The invalid shorthand must never come back.
    expect(css).not.toMatch(/var\(--color-[a-z-]+\)\s*\/\s*[\d.]+/)
  })
})
