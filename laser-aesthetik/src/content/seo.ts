export const SITE_URL = "https://www.example-domain.de"

const DEFAULT_KEYWORDS = [
  "Laser Haarentfernung",
  "Physiotherapie",
  "Ästhetische Medizin",
  "Köning",
  "Landshut",
  "Privatpraxis",
  "Dr. Dost",
]

export function buildKeywords(extra: string[] = []): string {
  return [...new Set([...DEFAULT_KEYWORDS, ...extra])].join(", ")
}
