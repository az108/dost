import { useEffect } from "react"
import { buildKeywords } from "@/content/seo"

const SUFFIX = "Dr. Dost – Hausarzt in Landshut"

function setMeta(name: string, content: string) {
  let tag = document.querySelector(`meta[name="${name}"]`)
  if (!tag) {
    tag = document.createElement("meta")
    tag.setAttribute("name", name)
    document.head.appendChild(tag)
  }
  tag.setAttribute("content", content)
}

export function useSeo(opts: {
  title?: string
  description?: string
  keywords?: string[]
} = {}) {
  const { title, description, keywords } = opts
  useEffect(() => {
    document.title = title ? `${title} | ${SUFFIX}` : SUFFIX
    if (description) setMeta("description", description)
    setMeta("keywords", buildKeywords(keywords))
  }, [title, description, keywords])
}
