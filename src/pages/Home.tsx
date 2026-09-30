import { Hero } from "@/sections/Hero"
import { AboutDost } from "@/sections/AboutDost"
import { WhyChooseUs } from "@/sections/WhyChooseUs"
import { TreatmentsTeaser } from "@/sections/TreatmentsTeaser"
import { Arzt } from "@/sections/Arzt"
import { Kontakt } from "@/sections/Kontakt"
import { useUi } from "@/content/ui"
import { useSeo } from "@/lib/useSeo"

export default function Home() {
  const ui = useUi()
  useSeo({
    description:
      "Dr. med. univ. Dost Mohammad – Ihr Privatarzt in Magersdorf. Schulmedizin und Naturheilverfahren Hand in Hand: Allgemeinmedizin, Notfallmedizin, Akupunktur, TCM und ästhetische Medizin.",
  })
  return (
    <main>
      <h1 className="sr-only">{ui.hero.eyebrow}</h1>
      <Hero />
      <AboutDost />
      <WhyChooseUs />
      <TreatmentsTeaser />
      <Arzt />
      <Kontakt />
    </main>
  )
}
