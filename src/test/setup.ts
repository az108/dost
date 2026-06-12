import "@testing-library/jest-dom/vitest"
import { vi } from "vitest"

// jsdom does not implement scrolling APIs used by ScrollManager
window.scrollTo = vi.fn()
Element.prototype.scrollIntoView = vi.fn()
