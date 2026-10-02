import { Hero } from "@/sections/Hero"
import { AboutDost } from "@/sections/AboutDost"
import { WhyChooseUs } from "@/sections/WhyChooseUs"
import { Steps } from "@/sections/Steps"
import { Testimonials } from "@/sections/Testimonials"
import { TreatmentsTeaser } from "@/sections/TreatmentsTeaser"
import { Kontakt } from "@/sections/Kontakt"
import { useUi } from "@/content/ui"
import { useSeo } from "@/lib/useSeo"

export default function Home() {
  const ui = useUi()
  useSeo({
    description:
      "Dr. med. univ. Dost Mohammad – Ihr Arzt in Landshut. Schulmedizin und Naturheilverfahren Hand in Hand: Allgemeinmedizin, Notfallmedizin, Akupunktur, TCM und ästhetische Medizin.",
  })
  return (
    <main>
      <h1 className="sr-only">{ui.hero.eyebrow}</h1>
      <Hero />
      <AboutDost />
      <WhyChooseUs />
      <Steps />
      <Testimonials />
      <TreatmentsTeaser />
      <Kontakt />
    </main>
  )
}
