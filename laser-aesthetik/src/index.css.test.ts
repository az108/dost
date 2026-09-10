import { readFileSync } from "node:fs"
import { execSync } from "node:child_process"
import { resolve } from "node:path"
import { describe, expect, it } from "vitest"

const css = readFileSync(resolve(__dirname, "./index.css"), "utf8")

describe("design tokens", () => {
  it("declares the palette colours with their exact spec values", () => {
    expect(css).toContain("--color-brand: #0E8F8A")
    expect(css).toContain("--color-action: #E8137C")
    expect(css).toContain("--color-action-ink: #D41071")
    expect(css).toContain("--color-success: #306934")
    expect(css).toContain("--color-laser: #4285F4")
    expect(css).toContain("--color-glow: #FFE3D0")
  })

  it("retires the tokens the blue palette needed", () => {
    // brand-ink is now brand-700 (the ramp is turquoise, so the ramp serves
    // the role directly and one value stops being spelled two ways).
    // accent painted headings, which are now brand-900. fresh was the hero
    // wash's second hue. blush existed only for the deleted Flank.
    for (const token of ["--color-brand-ink", "--color-accent", "--color-fresh", "--color-blush"]) {
      expect(css, `${token} should be gone`).not.toContain(token)
    }
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

  it("keeps the declared brand colours out of the body-text roles", () => {
    // The two-shade rule. brand (#0E8F8A, 3.95:1) and action (#E8137C,
    // 4.36:1) are display colours: they may paint an icon or a large
    // heading, never body text and never a white button label. Their
    // darker siblings do that. This test is the reason the site does not
    // ship an illegible CTA.
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

    // Body-size text, and white-label button backgrounds. Same number
    // either way: contrast is (L_lighter + 0.05) / (L_darker + 0.05).
    for (const token of ["action-ink", "brand-700", "brand-800", "brand-900", "brand-950", "success"]) {
      expect(onWhite(hexOf(token)), `--color-${token} fails AA on white`).toBeGreaterThanOrEqual(4.5)
    }

    // Display colours: below AA for body text, but they must still clear
    // the 3:1 that large text and UI components require. If someone
    // brightens one further, this fails rather than the site quietly
    // becoming unreadable.
    for (const token of ["brand", "action", "laser"]) {
      expect(onWhite(hexOf(token)), `--color-${token} fails the 3:1 floor`).toBeGreaterThanOrEqual(3)
    }

    // The dark CTA band's anchor.
    expect(onWhite(hexOf("brand-900")), "white on the dark band fails AA").toBeGreaterThanOrEqual(4.5)
  })

  it("keeps glow decoration-only", () => {
    // 1.22:1 on white — nowhere near enough to carry a glyph or a border.
    // Backgrounds and gradient stops only, so it never acquires a contrast
    // obligation it cannot meet. Same contract blush used to have.
    const srcRoot = resolve(__dirname)
    const hits = execSync(
      `grep -rEl --include='*.tsx' '(text|border|ring|outline|fill|stroke|divide)-glow' ${JSON.stringify(srcRoot)} || true`,
      { encoding: "utf8" },
    ).trim()
    expect(hits).toBe("")
  })

  it("paints headings in the ramp's dark teal, not a brand colour", () => {
    // Magenta headings are the single line most responsible for the
    // client's "statt weiße Grundfarbe noch mal Farben gewählt".
    const headingRule = css.match(/h1,\s*h2,\s*h3,\s*h4\s*\{[^}]*\}/)?.[0]
    expect(headingRule, "heading rule missing").toBeTruthy()
    expect(headingRule).toContain("text-brand-900")
    expect(headingRule).not.toContain("text-accent")
  })

  it("defines the hero wash with a valid colour-mix gradient", () => {
    // The previous version used `var(--color-accent)/0.18`, which is invalid
    // CSS — slash-alpha only works inside a colour function — so the browser
    // silently dropped the declaration and the hero rendered flat.
    expect(css).toContain(".hero-wash")
    expect(css).toContain("color-mix(in oklab, var(--color-brand)")
    // Two distinct hues. The wash previously mixed accent with action, which
    // are both magenta, so it read as one colour — hence `glow` here.
    expect(css).toContain("color-mix(in oklab, var(--color-glow)")
    // The invalid shorthand must never come back.
    expect(css).not.toMatch(/var\(--color-[a-z-]+\)\s*\/\s*[\d.]+/)
  })

  it("declares a sheet radius distinct from the card radius", () => {
    // Bands and cards round at different scales: a full-bleed band needs a
    // bigger radius than a 20rem card to read as the same curvature.
    expect(css).toContain("--radius-sheet:")
    const sheet = css.match(/--radius-sheet:\s*([\d.]+)rem/)?.[1]
    const card = css.match(/--radius-card:\s*([\d.]+)rem/)?.[1]
    expect(sheet, "--radius-sheet missing or not in rem").toBeTruthy()
    expect(Number(sheet)).toBeGreaterThan(Number(card))
  })

  it("casts the seam shadow upward, so a sheet reads as in front of the band above", () => {
    // A positive y-offset would read as the band ABOVE floating over the
    // sheet — backwards from the stacking the layout actually builds, and the
    // single detail that makes the overlap legible rather than just rounded.
    const rule = css.match(/\.sheet\s*\{[^}]*\}/)?.[0]
    expect(rule, ".sheet rule missing").toBeTruthy()
    expect(rule).toMatch(/box-shadow:\s*0\s+-/)
  })
})
