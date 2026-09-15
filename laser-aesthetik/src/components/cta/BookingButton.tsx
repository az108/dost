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
 * True exactly when BookingButton renders nothing at `pathname`. Every
 * surface that wraps the button in its own chrome — StickyMobileCta's fixed
 * bar, Hero's button row, the Navbar's top-right slot — has to get the same
 * answer the button gives itself, so it is decided once here rather than
 * re-derived per call site. Re-deriving is exactly how these drifted apart
 * twice: first StickyMobileCta wrapped the button in visible chrome with no
 * emptiness check of its own, then /termin suppressed the button through a
 * local Hero prop while the Navbar and the sticky bar kept rendering it.
 *
 * Two reasons, and they are not the same kind of thing:
 *
 * 1. /termin and its two return pages ARE the booking path. A button reading
 *    "Termin buchen" that leads to the contact form is both the one verb
 *    this flow avoids and a way out of a checkout the visitor came to
 *    complete — on /termin/erfolg, directly under the sentence saying the
 *    appointment is not confirmed yet, it reads as an instruction to book
 *    again, which costs a duplicate contact request or a second payment.
 * 2. On the contact page the fallback destination is the page already being
 *    read, immediately above the form it would send them to.
 */
export function bookingButtonHidden(pathname: string, locale: Locale): boolean {
  // /termin* IS the booking path. Not gated on hasBookingUrl: once a booking
  // profile exists the button becomes an external target="_blank" link, which
  // is a worse exit from a paid checkout, not a better one.
  if (pathname === "/termin" || pathname.startsWith("/termin/")) return true
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
 * and the button appears on that page too. On /termin* it does not — see
 * bookingButtonHidden above for why that case does not depend on bookingUrl.
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

  // Before the hasBookingUrl branch, not after it: on /termin* the button is
  // suppressed whatever the destination would have been. An external booking
  // profile is the worse exit from a checkout, not the better one.
  if (bookingButtonHidden(pathname, locale)) return null

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

  return (
    <Link to={pagePath("contact", locale)} className={classes}>
      {label}
    </Link>
  )
}
