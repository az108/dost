export function SpecRow({ items }: { items: { label: string; value: string }[] }) {
  if (items.length === 0) return null
  return (
    <dl className="flex flex-wrap gap-x-10 gap-y-4">
      {items.map((item) => (
        <div key={item.label} className="flex flex-col gap-1">
          <dt className="text-xs font-bold uppercase tracking-widest text-brand-600">
            {item.label}
          </dt>
          <dd className="font-display text-xl font-extrabold text-brand-700">{item.value}</dd>
        </div>
      ))}
    </dl>
  )
}
