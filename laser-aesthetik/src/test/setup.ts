import "@testing-library/jest-dom/vitest"
import { vi } from "vitest"

// jsdom does not implement scrolling APIs
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

// jsdom does not implement matchMedia (used by reduced-motion checks)
window.matchMedia = vi.fn().mockImplementation((query: string) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: vi.fn(),
  removeListener: vi.fn(),
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
}))
