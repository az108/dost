export const SITE_URL = "https://laserhaarentfernung-landshut.de"

const DEFAULT_KEYWORDS = [
  "Laser Haarentfernung",
  "Kosmetik",
  "Ästhetische Medizin",
  "Physiotherapie",
  "Landshut",
  "München",
  "Stuttgart",
]

export function buildKeywords(extra: string[] = []): string {
  return [...new Set([...DEFAULT_KEYWORDS, ...extra])].join(", ")
}
