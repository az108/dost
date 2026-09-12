import { existsSync, readFileSync } from "node:fs"
import { execSync } from "node:child_process"
import { resolve } from "node:path"
import { describe, expect, it } from "vitest"

const css = readFileSync(resolve(__dirname, "./index.css"), "utf8")

const srcRoot = resolve(__dirname)
const projectRoot = resolve(__dirname, "..")
const repoRoot = resolve(projectRoot, "..")
const thisFile = resolve(__dirname, "index.css.test.ts")

/*
 * The blue palette's tokens and its one hard-coded hex. Every one of these
 * was deleted in task 1; naming them here is what keeps them deleted. This
 * file is the only place in the repository allowed to say them.
 */
const RETIRED_TOKENS = [
  "--color-brand-ink",
  "--color-accent",
  "--color-fresh",
  "--color-blush",
  "#1A73E8",
]

/*
 * One line per source line, with comment text removed.
 *
 * The guards below all ask "does this string appear in live code?", and the
 * honest answer has to ignore comments — otherwise the code most committed
 * to explaining itself is the code that trips them. The previous version of
 * this filter keyed on a line STARTING with `//`, `*` or `/*`, which misses
 * the continuation lines of a braced JSX comment block: one whose second
 * line happens to say "overlap" registered as a live hit. That false
 * positive has been worked around three times instead of fixed, and each
 * workaround pressures the next person into deleting the explanation rather
 * than keeping the property. This tracks the comment span instead.
 *
 * Quoted runs are copied verbatim on purpose: the `//` in a URL is not a
 * comment, and truncating there would hide a real hit — a false NEGATIVE,
 * the direction a guard must never fail in. An unbalanced apostrophe in JSX
 * text costs at most the rest of one line, and costs it in the safe
 * direction.
 */
const codeText = (source: string): string[] => {
  const out: string[] = []
  let inBlock = false

  for (const line of source.split("\n")) {
    let code = ""
    let i = 0
    while (i < line.length) {
      if (inBlock) {
        const end = line.indexOf("*/", i)
        if (end === -1) break // the comment runs on into the next line
        i = end + 2
        inBlock = false
        continue
      }
      const pair = line.slice(i, i + 2)
      if (pair === "/*") {
        inBlock = true
        i += 2
        continue
      }
      if (pair === "//") break // the rest of the line is a comment
      const ch = line[i]
      if (ch === '"' || ch === "'" || ch === "`") {
        code += ch
        i += 1
        while (i < line.length) {
          if (line[i] === "\\") {
            code += line.slice(i, i + 2)
            i += 2
            continue
          }
          code += line[i]
          const closing = line[i] === ch
          i += 1
          if (closing) break
        }
        continue
      }
      code += ch
      i += 1
    }
    out.push(code)
  }
  return out
}

/**
 * Lines under `src/` whose LIVE code matches `pattern` — an ERE for grep and
 * a RegExp for the comment-aware second pass, so both halves see the same
 * thing. Returns grep's own `file:line:text` strings, comment and all, so a
 * failure message shows the line as it really reads.
 */
const liveHits = (pattern: string) => {
  const re = new RegExp(pattern)
  const cache = new Map<string, string[]>()

  return execSync(
    `grep -rEn --include='*.tsx' ${JSON.stringify(pattern)} ${JSON.stringify(srcRoot)} || true`,
    { encoding: "utf8" },
  )
    .trim()
    .split("\n")
    .filter(Boolean)
    .filter((hit) => {
      const match = /^([^:]+):(\d+):/.exec(hit)
      if (!match) return true
      const [, file, lineNo] = match
      if (!cache.has(file)) cache.set(file, codeText(readFileSync(file, "utf8")))
      return re.test(cache.get(file)![Number(lineNo) - 1] ?? "")
    })
}

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
    for (const token of RETIRED_TOKENS) {
      if (token.startsWith("--")) expect(css, `${token} should be gone`).not.toContain(token)
    }
  })

  it("leaves no retired token anywhere in the repository", () => {
    /*
     * The check above only reads index.css, and that is how #1A73E8 — the
     * blue palette's brand-ink, retired in task 1 — survived two reviews
     * inside CREDITS.md, where it described the favicon's fill. A retired
     * token in a document is not cosmetic: it is the next person's
     * instructions.
     *
     * So this scans everything a reader or a build can reach — src/,
     * public/, index.html, every markdown file, and the deploy workflow at
     * the repository root — rather than the stylesheet alone. Excluded:
     * node_modules, dist, dist-ssr, .superpowers and .git. The one permitted
     * mention is this file, which has to name the tokens to forbid them.
     */
    const markdown = execSync(
      `find ${JSON.stringify(projectRoot)} ` +
        `\\( -name node_modules -o -name dist -o -name dist-ssr -o -name .superpowers -o -name .git \\) ` +
        `-prune -o -name '*.md' -print`,
      { encoding: "utf8" },
    )
      .trim()
      .split("\n")
      .filter(Boolean)

    expect(markdown.length, "no markdown found — the find expression is wrong").toBeGreaterThan(0)

    const workflow = resolve(repoRoot, ".github/workflows/deploy-laser-aesthetik.yml")
    expect(
      existsSync(workflow),
      "the deploy workflow moved; this guard is no longer reading it",
    ).toBe(true)

    const targets = [
      srcRoot,
      resolve(projectRoot, "public"),
      resolve(projectRoot, "index.html"),
      workflow,
      ...markdown,
    ]

    const hits = execSync(
      `grep -rnF ` +
        `--exclude-dir=node_modules --exclude-dir=dist --exclude-dir=dist-ssr ` +
        `--exclude-dir=.superpowers --exclude-dir=.git ` +
        RETIRED_TOKENS.map((t) => `-e ${JSON.stringify(t)}`).join(" ") +
        ` ${targets.map((t) => JSON.stringify(t)).join(" ")} || true`,
      { encoding: "utf8" },
    )
      .trim()
      .split("\n")
      .filter(Boolean)
      .filter((hit) => !hit.startsWith(`${thisFile}:`))

    expect(hits, "a retired token is still documented or used somewhere").toEqual([])
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

  it("never sets text colour to the display brand shade", () => {
    // The two-shade rule again, this time at the call site rather than the
    // token: brand and brand-600 are the same #0E8F8A (3.95:1) — a display
    // colour, legal for large text, icons and other UI components, but
    // below the 4.5:1 body text needs. brand-700 (5.54:1) is the text-safe
    // sibling. Matched on "text-brand" so bg-/border-/ring-/outline-/fill-/
    // stroke-/divide-brand — the non-text uses that only need 3:1 — are
    // untouched, and on "(-600)?" so brand-700/800/900/950 (already AA) are
    // never mistaken for a hit. Comment-aware, via liveHits, so a line that
    // only explains the rule (as several call sites now do) cannot trip it.
    expect(liveHits("\\btext-brand(-600)?([^A-Za-z0-9_-]|$)")).toEqual([])
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

})

describe("white base", () => {
  it("paints the body white", () => {
    // The client asked for one thing in so many words: "die Grundfarbe soll
    // weiß sein". Every other guard in this block checks that the tinted
    // machinery is GONE, which four different palettes could satisfy — the
    // reviewer mutation-tested it and `body { @apply bg-brand-50 }` left them
    // all green. This one checks the thing that was actually asked for.
    expect(css).toMatch(/body\s*\{[^}]*bg-white/)
  })

  it("uses no tinted or washed section tone anywhere", () => {
    // The client's "die Grundfarbe soll weiß sein". This makes it a
    // property of the codebase rather than of one commit — the alternating
    // bands were added once and could be added again.
    expect(liveHits('tone="(tint|wash)"')).toEqual([])
  })

  it("uses no sheet overlap and no coloured flank anywhere", () => {
    expect(liveHits('\\boverlap\\b|\\bflank(Tone)?\\b')).toEqual([])
  })

  it("removes the sheet machinery from the stylesheet", () => {
    for (const gone of ["--radius-sheet", ".sheet"]) {
      expect(css, `${gone} should be gone`).not.toContain(gone)
    }
  })
})

describe("the comment filter those guards run on", () => {
  /*
   * The guards above are only as good as the filter underneath them, and the
   * filter has been wrong three times in the same way. These four cases are
   * the contract: a word inside a comment is invisible, a word in code is
   * not, and neither answer changes because of where on the line it sits.
   */
  const matches = (source: string, pattern: RegExp) =>
    codeText(source).filter((line) => pattern.test(line))

  it("does not see a word that only appears inside a multi-line JSX comment", () => {
    // The exact shape that broke it: the word is on a CONTINUATION line, so
    // the old "does the line start with // or *" test let it through.
    const jsx = [
      "<div>",
      "  {/*",
      "    There used to be a sheet overlap here, and a coloured Flank.",
      "  */}",
      "  <Section>x</Section>",
      "</div>",
    ].join("\n")
    expect(matches(jsx, /\boverlap\b|\bflank\b/i)).toEqual([])
  })

  it("still sees a real prop on a real element", () => {
    expect(matches("<Section overlap>x</Section>", /\boverlap\b/)).toEqual([
      "<Section overlap>x</Section>",
    ])
  })

  it("sees a real prop on a line that also carries a trailing comment", () => {
    expect(matches("<Section overlap> {/* deliberate */}", /\boverlap\b/)).toEqual([
      "<Section overlap> {}",
    ])
  })

  it("does not truncate a line at the double slash inside a URL", () => {
    // Truncating there would be a false NEGATIVE — a guard silently passing —
    // which is the one failure direction that must not happen.
    const line = 'const href = "https://example.test/overlap" // and a comment'
    expect(matches(line, /\boverlap\b/)).toEqual([
      'const href = "https://example.test/overlap" ',
    ])
  })
})
