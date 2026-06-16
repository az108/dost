// All gallery images are auto-imported from src/assets/galerie via Vite's glob.
// Drop a new *.jpg in that folder (following the naming scheme) and it appears
// in the gallery automatically — no code change needed.
const modules = import.meta.glob("../assets/galerie/*.jpg", {
  eager: true,
  import: "default",
}) as Record<string, string>

export interface GalleryImage {
  src: string
  alt: string
}

function altFor(path: string): string {
  const name = path.split("/").pop() ?? ""
  if (name.startsWith("arzt-am-schreibtisch"))
    return "Dr. med. univ. Dost Mohammad an seinem Schreibtisch"
  if (name.startsWith("behandlungsraum"))
    return "Behandlungsraum der Praxis Dr. Dost mit medizinischen Geräten"
  return "Sprechzimmer der Praxis Dr. Dost"
}

export const galerie: GalleryImage[] = Object.keys(modules)
  .sort()
  .map((path) => ({ src: modules[path], alt: altFor(path) }))
