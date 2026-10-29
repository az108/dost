import { describe, expect, it } from "vitest"
import { injectHead, injectRoot } from "./prerenderHtml"

const TEMPLATE = `<!doctype html><html lang="de"><head>
<title>Default</title>
<meta name="description" content="default desc" />
<meta property="og:title" content="Default" />
<meta property="og:description" content="default desc" />
</head><body><div id="root"></div></body></html>`

describe("prerenderHtml", () => {
  it("injects the per-page title, description, canonical and og:url", () => {
    const out = injectHead(TEMPLATE, {
      title: "Migräne | Dr. Dost",
      description: "Alles zur Migräne-Behandlung.",
      canonical: "https://example.com/behandlungen/kopf/migraene",
    })
    expect(out).toContain("<title>Migräne | Dr. Dost</title>")
    expect(out).toContain('content="Alles zur Migräne-Behandlung."')
    expect(out).toContain('rel="canonical" href="https://example.com/behandlungen/kopf/migraene"')
    expect(out).toContain('property="og:url" content="https://example.com/behandlungen/kopf/migraene"')
    expect(out).toMatch(/og:title" content="Migräne \| Dr\. Dost"/)
  })

  it("escapes HTML special characters in injected values", () => {
    const out = injectHead(TEMPLATE, { title: "A & B <x>", canonical: "https://e.com/" })
    expect(out).toContain("<title>A &amp; B &lt;x&gt;</title>")
  })

  it("leaves the template description untouched when a page sets none", () => {
    const out = injectHead(TEMPLATE, { title: "T", canonical: "https://e.com/" })
    expect(out).toContain('content="default desc"')
  })

  it("injects markup into #root", () => {
    expect(injectRoot('<div id="root"></div>', "<main>hi</main>")).toBe(
      '<div id="root"><main>hi</main></div>',
    )
  })
})
