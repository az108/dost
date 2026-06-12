import { Hero } from "@/sections/Hero"
import { TopicGrid } from "@/sections/TopicGrid"
import { behandlungen } from "@/content/behandlungen"
import { fachbereiche } from "@/content/fachbereiche"

export default function Home() {
  return (
    <main>
      <h1 className="sr-only">Dr. Dost – Ihr Hausarzt in Landshut</h1>
      <Hero />
      <TopicGrid
        id="behandlungen"
        title="Behandlungen"
        intro="Von Akupunktur bis ästhetische Medizin – unsere Behandlungen verbinden Schulmedizin und Naturheilkunde."
        entries={behandlungen}
        basePath="/behandlungen"
      />
      <TopicGrid
        id="fachbereiche"
        title="Fachbereiche"
        intro="Medizinische Versorgung auf höchstem Niveau durch vielfältige Spezialisierungen."
        entries={fachbereiche}
        basePath="/fachbereiche"
        tinted
      />
    </main>
  )
}
