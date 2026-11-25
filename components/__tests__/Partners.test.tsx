import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Partners from "@/components/Partners";

describe("Partners", () => {
  it("renders the heading and both groups", () => {
    const { container } = render(<Partners />);
    expect(screen.getByRole("heading", { name: "Brands we represent" })).toBeInTheDocument();
    expect(container.querySelectorAll(".pgroup")).toHaveLength(2);
    expect(screen.getByRole("heading", { name: "Elevator & escalator partners" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Façade maintenance partners" })).toBeInTheDocument();
    expect(container.querySelectorAll(".pgroup")[0].querySelectorAll(".brand-tile")).toHaveLength(3);
    expect(container.querySelectorAll(".pgroup")[1].querySelectorAll(".brand-tile")).toHaveLength(5);
  });

  it("renders exactly 8 logos with alt text and src under /images/partners/", () => {
    const { container } = render(<Partners />);
    const logos = container.querySelectorAll<HTMLImageElement>(".brand-tile img");
    expect(logos).toHaveLength(8);
    logos.forEach((img) => {
      expect(img.getAttribute("alt")?.trim()).toBeTruthy();
      expect(img.getAttribute("src")).toMatch(/^\/images\/partners\/[a-z]+\.png$/);
    });
  });

  it("opens every partner link in a new tab with rel=noopener", () => {
    const { container } = render(<Partners />);
    const links = container.querySelectorAll<HTMLAnchorElement>(".brand-tile");
    expect(links).toHaveLength(8);
    links.forEach((a) => {
      expect(a).toHaveAttribute("target", "_blank");
      expect(a.getAttribute("rel")).toContain("noopener");
      expect(a.getAttribute("href")).toMatch(/^https:\/\//);
    });
  });
});
