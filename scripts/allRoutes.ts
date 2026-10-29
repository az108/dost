import { treatmentAreas, allDiseases, areaPath, diseasePath } from "../src/content/treatments"
import { aestheticTreatments } from "../src/content/aesthetik"
import { fachbereiche } from "../src/content/fachbereiche"

/**
 * Every route the site serves its own HTML file for, in one place. Both
 * scripts/generate-sitemap.ts and scripts/prerender.ts read from here so the
 * sitemap and the set of pre-rendered pages can never drift apart.
 *
 * The site is German-only in its URLs (the EN toggle is a client-side
 * language switch, not a separate route tree), so these are the German paths;
 * the pre-rendered HTML is the German default.
 */
export function allRoutes(): string[] {
  return [
    "/",
    "/behandlungen",
    ...treatmentAreas.map((a) => areaPath(a.slug)),
    ...allDiseases().map(({ area, disease }) => diseasePath(area.slug, disease.slug)),
    "/aesthetik",
    ...aestheticTreatments.map((t) => `/aesthetik/${t.slug}`),
    "/ueber-uns",
    "/kontakt",
    ...fachbereiche.map((f) => `/fachbereiche/${f.slug}`),
    "/impressum",
    "/datenschutz",
  ]
}
