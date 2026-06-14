// Central SEO configuration. Edit `siteKeywords` to manage the site-wide
// keyword set; add page-specific terms via a TopicEntry's `keywords` field.
// These are merged by buildKeywords() and emitted as the <meta name="keywords">.
// Note: search engines weight on-page content, titles and descriptions far
// more than the keywords meta — keep the verbatim copy keyword-rich too.

export const siteKeywords = [
  "Privatarzt Magersdorf",
  "Arzt Magersdorf",
  "Dr. Dost Mohammad",
  "Praktischer Arzt Magersdorf",
  "Naturheilverfahren Magersdorf",
  "Akupunktur Magersdorf",
  "TCM Magersdorf",
  "Homöopathie Magersdorf",
  "Notfallmedizin Magersdorf",
  "ästhetische Medizin Magersdorf",
  "Privatpraxis Magersdorf",
  "Privatarztpraxis Magersdorf",
  // Regionale Begriffe (Magersdorf liegt im Raum Landshut)
  "Privatarzt Raum Landshut",
  "Arzt Landshut Umgebung",
]

export function buildKeywords(extra: string[] = []) {
  return Array.from(new Set([...extra, ...siteKeywords])).join(", ")
}
