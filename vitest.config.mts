import path from "node:path";
import { defineConfig } from "vitest/config";

// Windows: vitest breaks when the working directory has a lower-case drive letter (d:\ vs D:\),
// so normalise it.
const root = path.resolve(import.meta.dirname).replace(/^[a-z]:/, (d) => d.toUpperCase());

export default defineConfig({
  root,
  // automatic JSX runtime so test files and components need no `import React`
  oxc: { jsx: { runtime: "automatic" } },
  resolve: {
    alias: { "@": root },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    include: ["**/__tests__/**/*.test.{ts,tsx}"],
    exclude: ["node_modules/**", ".next/**"],
    css: false,
  },
});
