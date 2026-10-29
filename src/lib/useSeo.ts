import { useEffect } from "react"
import { buildKeywords } from "@/content/seo"

const SUFFIX = "Dr. Dost – Arzt in Landshut"

export function pageTitle(title?: string): string {
  return title ? `${title} | ${SUFFIX}` : SUFFIX
}

/**
 * During server-side pre-rendering (no `window`), useSeo records the current
 * page's title/description here instead of touching the DOM. src/entry-server
 * resets this before each render and reads it back after, so every pre-rendered
 * page ships its own <title> and <meta description>. On the client this is
 * ignored; the effect below keeps the real <head> in sync on navigation.
 */
export const ssrSeoSink: { title: string; description?: string } = { title: SUFFIX }

function setMeta(name: string, content: string) {
  let tag = document.querySelector(`meta[name="${name}"]`)
  if (!tag) {
    tag = document.createElement("meta")
    tag.setAttribute("name", name)
    document.head.appendChild(tag)
  }
  tag.setAttribute("content", content)
}

export function useSeo(
  opts: { title?: string; description?: string; keywords?: string[] } = {},
) {
  const { title, description, keywords } = opts

  if (typeof window === "undefined") {
    ssrSeoSink.title = pageTitle(title)
    ssrSeoSink.description = description
  }

  useEffect(() => {
    document.title = pageTitle(title)
    if (description) setMeta("description", description)
    setMeta("keywords", buildKeywords(keywords))
  }, [title, description, keywords])
}
