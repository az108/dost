import { useCallback, useEffect, useState } from "react"
import { Reveal } from "@/components/site/Reveal"
import { GradientBackdrop } from "@/components/site/GradientBackdrop"
import { useSeo } from "@/lib/useSeo"
import { galerie } from "@/content/galerie"

export default function Galerie() {
  useSeo({
    title: "Galerie",
    description:
      "Einblicke in die Praxis von Dr. med. univ. Dost Mohammad in Magersdorf – Sprechzimmer, Behandlungsräume und moderne medizinische Ausstattung.",
    keywords: ["Praxis Galerie", "Praxisräume Magersdorf"],
  })

  const [active, setActive] = useState<number | null>(null)
  const close = useCallback(() => setActive(null), [])
  const show = useCallback(
    (dir: number) =>
      setActive((i) => (i === null ? i : (i + dir + galerie.length) % galerie.length)),
    [],
  )

  useEffect(() => {
    if (active === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      else if (e.key === "ArrowRight") show(1)
      else if (e.key === "ArrowLeft") show(-1)
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [active, close, show])

  return (
    <main className="relative overflow-hidden">
      <GradientBackdrop />
      <div className="mx-auto max-w-7xl px-6 py-28">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            Praxis
          </p>
          <h1 className="font-display mt-3 text-5xl font-semibold md:text-6xl">Galerie</h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-600">
            Ein paar Einblicke in unsere Praxis – Sprechzimmer, Behandlungsräume und
            moderne medizinische Ausstattung.
          </p>
        </Reveal>

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {galerie.map((img, i) => (
            <Reveal key={img.src} delay={(i % 3) * 0.08} className="mb-5 break-inside-avoid">
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group block w-full overflow-hidden rounded-2xl border border-neutral-200/70 bg-white shadow-sm transition-all duration-300 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Bildansicht"
          onClick={close}
        >
          <button
            type="button"
            aria-label="Schließen"
            onClick={close}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition-colors hover:bg-white/20"
          >
            ✕
          </button>
          <button
            type="button"
            aria-label="Vorheriges Bild"
            onClick={(e) => {
              e.stopPropagation()
              show(-1)
            }}
            className="absolute left-2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition-colors hover:bg-white/20 sm:left-6"
          >
            ‹
          </button>
          <img
            src={galerie[active].src}
            alt={galerie[active].alt}
            className="max-h-[88vh] max-w-[92vw] rounded-lg object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            aria-label="Nächstes Bild"
            onClick={(e) => {
              e.stopPropagation()
              show(1)
            }}
            className="absolute right-2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition-colors hover:bg-white/20 sm:right-6"
          >
            ›
          </button>
        </div>
      )}
    </main>
  )
}
