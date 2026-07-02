/// <reference types="vite/client" />
import { arzt } from "../src/content/arzt"
import { behandlungen } from "../src/content/behandlungen"
import { fachbereiche } from "../src/content/fachbereiche"
import { galerie } from "../src/content/galerie"
import { legal } from "../src/content/legal"
import { praxis } from "../src/content/praxis"
import type { TopicEntry } from "../src/content/types"
import arztPortrait from "../src/assets/arzt-portrait.jpg"

/** Vite (vite-node SSR and vitest alike) turns asset imports into URL strings
 *  like "/src/assets/topics/x.jpg"; map them back to a path under src/assets. */
export function assetRelPath(url: string): string {
  const marker = "/src/assets/"
  const i = url.indexOf(marker)
  if (i === -1) throw new Error(`Unexpected asset URL: ${url}`)
  return url.slice(i + marker.length)
}

function topic(t: TopicEntry) {
  return {
    slug: t.slug,
    title: t.title,
    excerpt: t.excerpt,
    body: t.body,
    image: t.image ? assetRelPath(t.image) : null,
    imageAlt: t.imageAlt ?? null,
  }
}

export function buildContent() {
  return {
    praxis,
    arzt: { ...arzt, portrait: assetRelPath(arztPortrait) },
    legal,
    behandlungen: behandlungen.map(topic),
    fachbereiche: fachbereiche.map(topic),
    galerie: galerie.map((g) => ({ image: assetRelPath(g.src), alt: g.alt })),
  }
}

export function referencedAssets(content: ReturnType<typeof buildContent>): string[] {
  return [
    content.arzt.portrait,
    ...content.behandlungen.map((t) => t.image),
    ...content.fachbereiche.map((t) => t.image),
    ...content.galerie.map((g) => g.image),
  ].filter((p): p is string => p !== null)
}
