import { Hero } from "@/sections/Hero"
import { TopicGrid } from "@/sections/TopicGrid"
import { Arzt } from "@/sections/Arzt"
import { Kontakt } from "@/sections/Kontakt"
import { behandlungen } from "@/content/behandlungen"
import { fachbereiche } from "@/content/fachbereiche"
import { useSeo } from "@/lib/useSeo"

export default function Home() {
  useSeo({
    description:
      "Dr. med. univ. Dost Mohammad – Ihr Hausarzt in Magersdorf. Schulmedizin und Naturheilverfahren Hand in Hand: Allgemeinmedizin, Notfallmedizin, Akupunktur, TCM und ästhetische Medizin.",
  })
  return (
    <main>
      <h1 className="sr-only">Dr. Dost – Ihr Hausarzt in Magersdorf</h1>
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
      <Arzt />
      <Kontakt />
    </main>
  )
}
