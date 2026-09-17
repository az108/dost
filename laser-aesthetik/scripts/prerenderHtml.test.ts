import { readFileSync } from "node:fs"
import { resolve } from "node:path"
import { describe, expect, it } from "vitest"
import { injectHead, injectRoot, PREVIEW_ROBOTS_TXT, robotsMetaContent } from "./prerenderHtml"
import { seoForRoute } from "../src/lib/seoForRoute"

const template = () => readFileSync(resolve(__dirname, "../index.html"), "utf8")

describe("robotsMetaContent", () => {
  it("is null for an ordinary route in the normal build", () => {
    expect(robotsMetaContent(seoForRoute("/preise"), false)).toBeNull()
  })

  it("is 'noindex' for a checkout return page in the normal build", () => {
    expect(robotsMetaContent(seoForRoute("/termin/erfolg"), false)).toBe("noindex")
  })

  it("is 'noindex, nofollow' for an ordinary route once forceNoindex is set", () => {
    expect(robotsMetaContent(seoForRoute("/preise"), true)).toBe("noindex, nofollow")
  })

  it("stays a single 'noindex, nofollow' rather than combining both reasons", () => {
    // /termin/erfolg is already seo.noindex in every build; the preview
    // build's forceNoindex must not add a second, contradictory tag.
    expect(robotsMetaContent(seoForRoute("/termin/erfolg"), true)).toBe("noindex, nofollow")
  })
})

describe("PREVIEW_ROBOTS_TXT", () => {
  it("disallows the entire preview site", () => {
    expect(PREVIEW_ROBOTS_TXT).toContain("User-agent: *")
    expect(PREVIEW_ROBOTS_TXT).toContain("Disallow: /")
  })
})

describe("injectHead", () => {
  it("emits no <meta name=\"robots\"> for an ordinary route in the normal build", () => {
    const html = injectHead(template(), seoForRoute("/preise"), false)
    expect(html).not.toContain('<meta name="robots"')
  })

  it("emits exactly one noindex,nofollow robots tag when forceNoindex is set", () => {
    const html = injectHead(template(), seoForRoute("/preise"), true)
    const matches = html.match(/<meta name="robots"[^>]*>/g) ?? []
    expect(matches).toHaveLength(1)
    expect(matches[0]).toContain('content="noindex, nofollow"')
  })

  it("keeps the production checkout-return noindex wording when forceNoindex is unset", () => {
    const html = injectHead(template(), seoForRoute("/termin/erfolg"), false)
    const matches = html.match(/<meta name="robots"[^>]*>/g) ?? []
    expect(matches).toHaveLength(1)
    expect(matches[0]).toContain('content="noindex"')
    expect(matches[0]).not.toContain("nofollow")
  })

  it("still fills in the title and canonical link as before", () => {
    const html = injectHead(template(), seoForRoute("/preise"), false)
    expect(html).toContain("<title>")
    expect(html).toContain('<link rel="canonical"')
  })
})

describe("injectRoot", () => {
  it("places the rendered markup inside the empty root div", () => {
    const html = injectRoot('<div id="root"></div>', "<p>hallo</p>")
    expect(html).toContain('<div id="root"><p>hallo</p></div>')
  })
})
