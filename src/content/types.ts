export interface TopicEntry {
  slug: string
  title: string
  /** Short teaser shown on the landing-page card */
  excerpt: string
  /** Verbatim German paragraphs from the source page */
  body: string[]
  /** Optional image under src/assets/topics/<slug>.jpg; gradient fallback if absent */
  image?: string
  imageAlt?: string
  /** Page-specific SEO keywords. Merged with the site-wide defaults in seo.ts. */
  keywords?: string[]
}
