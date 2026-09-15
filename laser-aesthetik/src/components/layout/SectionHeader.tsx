import { cn } from "@/lib/utils"

export function SectionHeader({
  eyebrow,
  title,
  accent,
  lead,
  align = "left",
  level = 2,
  className,
}: {
  eyebrow?: string
  title: string
  accent?: string
  lead?: string
  align?: "left" | "center"
  /**
   * 1 on a page whose only heading this is — the two checkout return pages,
   * which have no hero above them. A page that starts at h2 has no h1 at
   * all, and the first thing a screen-reader user hears after paying should
   * be the page's own title.
   */
  level?: 1 | 2
  className?: string
}) {
  const Heading = level === 1 ? "h1" : "h2"
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
          className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-700"
        >
          {eyebrow}
        </p>
      ) : null}
      {/*
        One phrase, not a lead with a styled tail. The accent used to be an
        italic <em>, but a section heading repeats four to six times a page,
        which made italic the most frequent thing on it rather than an accent.
        It now appears only in the headings there is exactly one of — the hero
        h1 and the closing CTA — so it opens and closes a page instead of
        punctuating every band.

        The <em> went with the italic rather than losing just its styling.
        Headings are magenta whole (see index.css), so italic was the only
        thing setting the accent apart; an <em> that renders identically to the
        text around it announces an emphasis to a screen reader that nobody
        else can perceive. `accent` stays in the API as the second half of the
        phrase, which is how every caller already writes it.
      */}
      <Heading className="text-3xl leading-tight sm:text-4xl lg:text-5xl">
        {accent ? `${title} ${accent}` : title}
      </Heading>
      {lead ? (
        <p className="max-w-2xl text-lg leading-relaxed text-brand-700">{lead}</p>
      ) : null}
    </div>
  )
}
