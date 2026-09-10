import { useEffect } from "react"
import { buildKeywords } from "@/content/seo"
import { center } from "@/content/center"
import { seoForRoute } from "@/lib/seoForRoute"

function upsert(selector: string, create: () => HTMLElement, attr: string, value: string) {
  let tag = document.head.querySelector(selector) as HTMLElement | null
  if (!tag) {
    tag = create()
    document.head.appendChild(tag)
  }
  tag.setAttribute(attr, value)
}

function setMeta(name: string, content: string) {
  upsert(
    `meta[name="${name}"]`,
    () => {
      const el = document.createElement("meta")
      el.setAttribute("name", name)
      return el
    },
    "content",
    content,
  )
}

function setOg(property: string, content: string) {
  upsert(
    `meta[property="${property}"]`,
    () => {
      const el = document.createElement("meta")
      el.setAttribute("property", property)
      return el
    },
    "content",
    content,
  )
}

function setAlternate(hreflang: string, href: string) {
  upsert(
    `link[rel="alternate"][hreflang="${hreflang}"]`,
    () => {
      const el = document.createElement("link")
      el.setAttribute("rel", "alternate")
      el.setAttribute("hreflang", hreflang)
      return el
    },
    "href",
    href,
  )
}

function removeAlternates() {
  document.head.querySelectorAll('link[rel="alternate"]').forEach((el) => el.remove())
}

export function useSeo(
  opts: {
    title?: string
    description?: string
    keywords?: string[]
    canonicalPath?: string
  } = {},
) {
  const { title, description, keywords, canonicalPath } = opts

  // seoForRoute() is the single source for everything derived from the path
  // itself — canonical URL, hreflang alternates, og:image and locale — so
  // this hook and scripts/prerender.ts cannot silently diverge. title and
  // description stay explicit params: they vary per call site (e.g. the
  // not-found fallback on TreatmentDetail) in ways a path alone can't tell.
  const seo = canonicalPath ? seoForRoute(canonicalPath) : null
  const locale = seo ? seo.locale : "de"

  useEffect(() => {
    const fullTitle = title ? `${title} | ${center.brand}` : center.brand
    document.title = fullTitle
    document.documentElement.lang = locale

    if (description) {
      setMeta("description", description)
      setOg("og:description", description)
    } else {
      document.head.querySelector('meta[name="description"]')?.remove()
      document.head.querySelector('meta[property="og:description"]')?.remove()
    }
    setMeta("keywords", buildKeywords(keywords))

    setOg("og:title", fullTitle)
    setOg("og:type", "website")
    setOg("og:site_name", center.brand)
    setOg("og:locale", locale === "en" ? "en_GB" : "de_DE")

    if (seo) {
      upsert(
        'link[rel="canonical"]',
        () => {
          const el = document.createElement("link")
          el.setAttribute("rel", "canonical")
          return el
        },
        "href",
        seo.canonical,
      )
      setOg("og:url", seo.canonical)
      setOg("og:image", seo.ogImage)

      // Pages with no counterpart (the German-only legal pages) must emit no
      // hreflang pair at all — claiming an English alternate that does not
      // exist is worse than omitting it.
      if (seo.alternates.length > 0) {
        for (const alt of seo.alternates) setAlternate(alt.hreflang, alt.href)
      } else {
        removeAlternates()
      }
    } else {
      document.head.querySelector('link[rel="canonical"]')?.remove()
      document.head.querySelector('meta[property="og:url"]')?.remove()
      document.head.querySelector('meta[property="og:image"]')?.remove()
      removeAlternates()
    }
  }, [title, description, keywords, canonicalPath, locale, seo])
}
