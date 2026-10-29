import { Container } from "@/components/site/Container"
import { Reveal } from "@/components/site/Reveal"
import { GradientBackdrop } from "@/components/site/GradientBackdrop"
import { AboutDost } from "@/sections/AboutDost"
import { Arzt } from "@/sections/Arzt"
import { useUi } from "@/content/ui"
import { useSeo } from "@/lib/useSeo"

export default function About() {
  const ui = useUi()
  useSeo({ title: ui.aboutPage.title, description: ui.aboutPage.intro })
  return (
    <main className="pt-24">
      <section className="relative overflow-hidden bg-wash py-16">
        <GradientBackdrop />
        <Container>
          <Reveal className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">{ui.aboutPage.eyebrow}</p>
            <h1 className="mt-3 text-5xl font-extrabold md:text-6xl">{ui.aboutPage.title}</h1>
            <p className="mt-5 text-lg text-body">{ui.aboutPage.intro}</p>
          </Reveal>
        </Container>
      </section>
      <AboutDost showMore={false} />
      <Arzt />
    </main>
  )
}
