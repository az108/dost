import { useSeo } from "@/lib/useSeo"

export default function Legal({
  title,
  paragraphs,
}: {
  title: string
  paragraphs: string[]
}) {
  useSeo({ title })
  return (
    <main className="mx-auto max-w-3xl px-6 py-28">
      <h1 className="font-display text-5xl">{title}</h1>
      {paragraphs.map((p) => (
        <p key={p} className="mt-8 text-neutral-600">
          {p}
        </p>
      ))}
    </main>
  )
}
