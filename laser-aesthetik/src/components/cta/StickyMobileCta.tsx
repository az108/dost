import { useLocation } from "react-router-dom"
import { useLocale } from "@/lib/locale"
import { BookingButton, bookingButtonHidden } from "./BookingButton"

export function StickyMobileCta() {
  const { pathname } = useLocation()
  const locale = useLocale()

  // BookingButton renders nothing on the contact page (see
  // bookingButtonHidden). Without this check the bar below still rendered —
  // a blank, bordered strip pinned across the bottom of the viewport, over
  // the contact form, on the site's only conversion page.
  if (bookingButtonHidden(pathname, locale)) return null

  return (
    <div
      data-testid="sticky-mobile-cta"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-brand-100 bg-white/95 p-3 backdrop-blur sm:hidden"
    >
      <BookingButton className="w-full" />
    </div>
  )
}
