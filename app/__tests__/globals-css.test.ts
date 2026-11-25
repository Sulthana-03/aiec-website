import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const css = fs.readFileSync(path.join(process.cwd(), "app", "globals.css"), "utf8");

const BREAKPOINTS = [1500, 1420, 1340, 1240, 1180, 1120, 900, 640, 560, 480, 420, 380];

describe("globals.css responsiveness safety", () => {
  it.each(BREAKPOINTS)("still has a @media (max-width:%ipx) rule", (bp) => {
    const re = new RegExp(`@media\\s*\\(\\s*max-width\\s*:\\s*${bp}px\\s*\\)`);
    expect(css).toMatch(re);
  });

  it("keeps the mobile menu, stacked timeline and floating action bar rules", () => {
    expect(css).toMatch(/\.burger\{display:flex\}/);
    expect(css).toMatch(/\.nav\.open\{transform:none;visibility:visible\}/);
    expect(css).toMatch(/\.timeline\{grid-template-columns:1fr;gap:0;padding-left:8px\}/);
    expect(css).toMatch(/\.fab\{display:flex;position:fixed/);
    expect(css).toMatch(/\.ft-grid\{grid-template-columns:1fr 1fr\}/);
  });

  it("keeps clamp() values", () => {
    expect(css).toContain("clamp(560px,82vh,780px)");
    expect(css).toContain("clamp(2.2rem,5.4vw,4.1rem)");
    expect(css).toContain("clamp(64px,9vw,112px)");
  });
});
