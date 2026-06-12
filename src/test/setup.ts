import "@testing-library/jest-dom/vitest"
import { vi } from "vitest"

// jsdom does not implement scrolling APIs used by ScrollManager
window.scrollTo = vi.fn()
Element.prototype.scrollIntoView = vi.fn()

// jsdom does not implement IntersectionObserver (used by motion's whileInView)
class IntersectionObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() { return [] }
}
window.IntersectionObserver = IntersectionObserverStub as unknown as typeof IntersectionObserver
