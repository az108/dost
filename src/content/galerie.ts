// All gallery images are auto-imported from src/assets/galerie via Vite's glob.
// Drop a new *.jpg in that folder (following the naming scheme) and it appears
// in the gallery automatically — no code change needed.
const modules = import.meta.glob("../assets/galerie/*.jpg", {
  eager: true,
  import: "default",
}) as Record<string, string>

import type { Loc } from "@/lib/i18n"

export interface GalleryImage {
  src: string
  alt: Loc
}

function altFor(path: string): Loc {
  const name = path.split("/").pop() ?? ""
  if (name.startsWith("arzt-am-schreibtisch"))
    return {
      de: "Dr. med. univ. Dost Mohammad an seinem Schreibtisch",
      en: "Dr. med. univ. Dost Mohammad at his desk",
    }
  if (name.startsWith("behandlungsraum"))
    return {
      de: "Behandlungsraum der Praxis Dr. Dost mit medizinischen Geräten",
      en: "Treatment room at Dr. Dost's practice with medical equipment",
    }
  return {
    de: "Sprechzimmer der Praxis Dr. Dost",
    en: "Consultation room at Dr. Dost's practice",
  }
}

export const galerie: GalleryImage[] = Object.keys(modules)
  .sort()
  .map((path) => ({ src: modules[path], alt: altFor(path) }))
