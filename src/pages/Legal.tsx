export default function Legal({ title }: { title: string }) {
  return (
    <main className="mx-auto max-w-3xl px-6 py-28">
      <h1 className="font-display text-5xl">{title}</h1>
      <p className="mt-8 text-neutral-600">
        Inhalt folgt. Dies ist ein Platzhalter – die finalen Rechtstexte werden vom
        Praxisinhaber bereitgestellt.
      </p>
    </main>
  )
}
