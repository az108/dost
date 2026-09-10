import type { ReactNode } from "react"
import { Link, useLocation } from "react-router-dom"
import { CalendarCheck } from "lucide-react"
import { hasBookingUrl, openLocation } from "@/content/center"
import { useT } from "@/content/ui"
import { useLocale } from "@/lib/locale"
import { pagePath } from "@/lib/routes"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Locale } from "@/content/types"

/**
 * True exactly when BookingButton renders nothing at `pathname`: the center
 * has no booking profile of its own yet, and this is the contact page the
 * button would otherwise fall back to (a link to the page already being
 * read). The one other caller of this — anything that wraps BookingButton in
 * its own chrome, such as StickyMobileCta's fixed bar or Hero's button row —
 * needs the same answer BookingButton gives itself, so it is computed once
 * here rather than re-derived, which is exactly how the two drifted apart
 * before: StickyMobileCta wrapped the button in visible chrome with no
 * emptiness check of its own.
 */
export function bookingButtonHidden(pathname: string, locale: Locale): boolean {
  return !hasBookingUrl(openLocation()) && pathname === pagePath("contact", locale)
}

/**
 * The single entry point to booking. Every CTA on the site renders through
 * this component, so the destination is one edit in center.ts.
 *
 * It has two destinations, not one. The center has no booking profile of
 * its own yet — the URL that used to live here was Privatpraxis Dr. Dost's
 * Doctolib page, which this site is being separated from — so the button
 * falls back to our own contact form. Filling in
 * center.locations[0].bookingUrl restores the external link everywhere.
 *
 * On the contact page that fallback is a link to the page the visitor is
 * already reading, immediately above the form it would send them to, so the
 * button renders nothing there. This is a property of the fallback, not of
 * the component: once bookingUrl is real the destination is outbound again
 * and the button appears on every page including this one.
 */
export function BookingButton({
  variant = "action",
  size = "lg",
  className,
  children,
  showIcon = true,
}: {
  variant?: "action" | "outline" | "ghost"
  size?: "sm" | "default" | "lg"
  className?: string
  children?: ReactNode
  showIcon?: boolean
}) {
  const t = useT()
  const locale = useLocale()
  const location = openLocation()
  const { pathname } = useLocation()

  const classes = cn(buttonVariants({ variant, size }), "gap-2 font-semibold", className)
  const label = (
    <>
      {showIcon ? <CalendarCheck className="size-5 shrink-0" aria-hidden="true" /> : null}
      {children ?? t("bookAppointment")}
    </>
  )

  if (hasBookingUrl(location)) {
    return (
      <a
        href={location.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {label}
      </a>
    )
  }

  if (bookingButtonHidden(pathname, locale)) return null

  return (
    <Link to={pagePath("contact", locale)} className={classes}>
      {label}
    </Link>
  )
}
