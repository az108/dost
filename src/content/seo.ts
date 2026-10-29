// Central SEO configuration. Edit `siteKeywords` to manage the site-wide
// keyword set; add page-specific terms via a TopicEntry's `keywords` field.
// These are merged by buildKeywords() and emitted as the <meta name="keywords">.
// Note: search engines weight on-page content, titles and descriptions far
// more than the keywords meta — keep the verbatim copy keyword-rich too.

// Production origin (no trailing slash). The single place the site's URL is
// set — sitemap, robots and (with pre-rendering) canonical/og:url all derive
// from it. Switching to the custom domain is a one-line change here.
export const SITE_URL = "https://az108.github.io/dost"

// Fallback meta description for the 404 page and any page that sets none.
export const DEFAULT_DESCRIPTION =
  "Dr. med. univ. Dost Mohammad – Ihr Arzt in Landshut. Schulmedizin und Naturheilverfahren Hand in Hand: Allgemeinmedizin, Notfallmedizin, Akupunktur und Naturheilkunde."

export const siteKeywords = [
  "Arzt Landshut",
  "Dr. Dost Mohammad",
  "praktischer Arzt Landshut",
  "Naturheilverfahren Landshut",
  "Akupunktur Landshut",
  "TCM Landshut",
  "Homöopathie Landshut",
  "Notfallmedizin Landshut",
  "ästhetische Medizin Landshut",
  "Botox Landshut",
  "Faltenbehandlung Landshut",
  "Privatpraxis Landshut",
  "Arzt Landshut Umgebung",
]

export function buildKeywords(extra: string[] = []) {
  return Array.from(new Set([...extra, ...siteKeywords])).join(", ")
}
