import "@testing-library/jest-dom/vitest";

// jsdom has no IntersectionObserver; a no-op stand-in keeps the scroll-reveal / active-nav hooks quiet.
class IntersectionObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}
Object.defineProperty(globalThis, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: IntersectionObserverStub,
});

afterEach(() => {
  document.body.style.overflow = "";
});
