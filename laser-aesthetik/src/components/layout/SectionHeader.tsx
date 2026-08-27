import { cn } from "@/lib/utils"

export function SectionHeader({
  eyebrow,
  title,
  accent,
  lead,
  align = "left",
  className,
}: {
  eyebrow?: string
  title: string
  accent?: string
  lead?: string
  align?: "left" | "center"
  className?: string
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          data-eyebrow
          className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-ink"
        >
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl leading-tight sm:text-4xl lg:text-5xl">
        {title}
        {accent ? (
          <>
            {" "}
            <em className="font-display italic text-accent">{accent}</em>
          </>
        ) : null}
      </h2>
      {lead ? (
        <p className="max-w-2xl text-lg leading-relaxed text-brand-700">{lead}</p>
      ) : null}
    </div>
  )
}
