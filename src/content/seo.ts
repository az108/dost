// Central SEO configuration. Edit `siteKeywords` to manage the site-wide
// keyword set; add page-specific terms via a TopicEntry's `keywords` field.
// These are merged by buildKeywords() and emitted as the <meta name="keywords">.
// Note: search engines weight on-page content, titles and descriptions far
// more than the keywords meta — keep the verbatim copy keyword-rich too.

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
