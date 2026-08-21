import { useEffect } from "react"
import { buildKeywords, SITE_URL } from "@/content/seo"
import { practice } from "@/content/practice"

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

export function useSeo(
  opts: {
    title?: string
    description?: string
    keywords?: string[]
    canonicalPath?: string
  } = {},
) {
  const { title, description, keywords, canonicalPath } = opts

  useEffect(() => {
    const fullTitle = title ? `${title} | ${practice.brand}` : practice.brand
    document.title = fullTitle

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
    setOg("og:site_name", practice.brand)
    setOg("og:locale", "de_DE")

    if (canonicalPath) {
      const href = `${SITE_URL}${canonicalPath}`
      upsert(
        'link[rel="canonical"]',
        () => {
          const el = document.createElement("link")
          el.setAttribute("rel", "canonical")
          return el
        },
        "href",
        href,
      )
      setOg("og:url", href)
    } else {
      document.head.querySelector('link[rel="canonical"]')?.remove()
      document.head.querySelector('meta[property="og:url"]')?.remove()
    }
  }, [title, description, keywords, canonicalPath])
}
