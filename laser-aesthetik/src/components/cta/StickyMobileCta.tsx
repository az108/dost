import { BookingButton } from "./BookingButton"

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-brand-100 bg-white/95 p-3 backdrop-blur sm:hidden">
      <BookingButton className="w-full" />
    </div>
  )
}
