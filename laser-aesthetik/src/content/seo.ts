export const SITE_URL = "https://laserhaarentfernung-landshut.de"

const DEFAULT_KEYWORDS = [
  "Laser Haarentfernung",
  "Physiotherapie",
  "Ästhetische Medizin",
  "Kröning",
  "Landshut",
  "Privatpraxis",
  "Dr. Dost",
]

export function buildKeywords(extra: string[] = []): string {
  return [...new Set([...DEFAULT_KEYWORDS, ...extra])].join(", ")
}
