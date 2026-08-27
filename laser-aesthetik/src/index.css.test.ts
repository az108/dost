import { readFileSync } from "node:fs"
import { execSync } from "node:child_process"
import { resolve } from "node:path"
import { describe, expect, it } from "vitest"

const css = readFileSync(resolve(__dirname, "./index.css"), "utf8")

describe("design tokens", () => {
  it("declares the palette colours with their exact spec values", () => {
    // brand is the brand icon's blue, matched exactly on request.
    expect(css).toContain("--color-brand: #4285F4")
    expect(css).toContain("--color-action: #E8137C")
    expect(css).toContain("--color-accent: #DD1188")
    expect(css).toContain("--color-success: #306934")
    expect(css).toContain("--color-fresh: #34A853")
    expect(css).toContain("--color-brand-ink: #1A73E8")
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

  it("never uses the reserved premium token in a component", () => {
    // The count check above only reads index.css. A `bg-premium` class would
    // live in a .tsx file it never opens — so the guard it describes needs
    // to actually scan the source. Matched on the utility pattern, not the
    // bare word, because "Premiumzone" appears legitimately in German
    // marketing copy and is unrelated to the CSS token.
    // Scoped to .tsx: that is where Tailwind classes actually appear in this
    // codebase, and it keeps this test's own comment above (which names the
    // pattern it is looking for) from matching itself.
    const srcRoot = resolve(__dirname)
    const hits = execSync(
      `grep -rEl --include='*.tsx' '(bg|text|border|from|via|to|ring|outline|fill|stroke)-premium' ${JSON.stringify(srcRoot)} || true`,
      { encoding: "utf8" },
    ).trim()
    expect(hits).toBe("")
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

  it("keeps every text-bearing token above WCAG AA on white", () => {
    // Computed, not asserted from memory: the spec originally claimed action
    // passed and accent failed. Both claims were inverted — action is 4.36:1
    // (fails body text) and accent is 4.66:1 (passes). That is why
    // --color-action-ink exists.
    const relLum = (hex: string) => {
      const c = hex.replace("#", "")
      const [r, g, b] = [0, 2, 4].map((i) => parseInt(c.slice(i, i + 2), 16) / 255)
      const f = (v: number) => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4)
      return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b)
    }
    const onWhite = (hex: string) => 1.05 / (relLum(hex) + 0.05)
    const hexOf = (token: string) => {
      const hex = css.match(new RegExp(`--color-${token}:\\s*(#[0-9a-fA-F]{6})`))?.[1]
      expect(hex, `--color-${token} missing`).toBeTruthy()
      return hex!
    }

    // Body-size text. `brand` is deliberately NOT in this list any more, but
    // `brand-ink` — the blue that actually paints eyebrows and links — is,
    // and so is `accent`, which now carries every heading.
    for (const token of ["action-ink", "brand-ink", "accent", "success", "brand-700", "brand-800"]) {
      expect(onWhite(hexOf(token)), `--color-${token} fails AA on white`).toBeGreaterThanOrEqual(4.5)
    }

    // `brand` is now the display blue from the brand icon. It is allowed to
    // sit below 4.5:1, but it still has to clear the 3:1 that large text and
    // UI components require — so if someone "brightens" it further, this
    // fails rather than the site quietly becoming unreadable.
    expect(onWhite(hexOf("brand")), "--color-brand fails the 3:1 large-text floor")
      .toBeGreaterThanOrEqual(3)

    // The dark band's own anchor: white on it must clear AA at body size,
    // which is the whole reason the `brand` section tone uses brand-900.
    const onBrand900 = 1.05 / (relLum(hexOf("brand-900")) + 0.05)
    expect(onBrand900, "white on the dark band fails AA").toBeGreaterThanOrEqual(4.5)
  })

  it("defines the hero wash with a valid colour-mix gradient", () => {
    // The previous version used `var(--color-accent)/0.18`, which is invalid
    // CSS — slash-alpha only works inside a colour function — so the browser
    // silently dropped the declaration and the hero rendered flat.
    expect(css).toContain(".hero-wash")
    expect(css).toContain("color-mix(in oklab, var(--color-accent)")
    // Two distinct hues. The wash previously mixed accent with action, which
    // are both magenta, so it read as one colour — hence `fresh` here.
    expect(css).toContain("color-mix(in oklab, var(--color-fresh)")
    // The invalid shorthand must never come back.
    expect(css).not.toMatch(/var\(--color-[a-z-]+\)\s*\/\s*[\d.]+/)
  })
})
