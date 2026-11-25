import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Footer from "@/components/Footer";

describe("Footer", () => {
  it("renders the 4 link columns (brand + Products, Company, Support)", () => {
    const { container } = render(<Footer />);
    const grid = container.querySelector(".ft-grid")!;
    expect(grid.children).toHaveLength(4);
    for (const name of ["Products", "Company", "Support"]) {
      const nav = screen.getByRole("navigation", { name });
      expect(within(nav).getByRole("heading", { name })).toBeInTheDocument();
      expect(within(nav).getAllByRole("link")).toHaveLength(4);
    }
  });

  it("renders the 8 partner logo chips", () => {
    const { container } = render(<Footer />);
    const chips = container.querySelectorAll<HTMLAnchorElement>(".ft-chip");
    expect(chips).toHaveLength(8);
    chips.forEach((chip) => {
      expect(chip).toHaveAttribute("href", "#partners");
      const img = chip.querySelector("img")!;
      expect(img.getAttribute("alt")?.trim()).toBeTruthy();
      expect(img.getAttribute("src")).toMatch(/^\/images\/partners\//);
    });
  });

  it("shows the current year in the copyright", () => {
    render(<Footer />);
    const year = String(new Date().getFullYear());
    expect(screen.getByText(/All rights reserved\./)).toHaveTextContent(`© ${year} Ahmadiah International Elevator Co.`);
  });

  it("has a Back to top link to #home", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: /Back to top/ })).toHaveAttribute("href", "#home");
  });

  it("keeps the CTA banner and contact details", () => {
    render(<Footer />);
    expect(screen.getByRole("heading", { name: "Planning a project or need service?" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "actc@ahmadiah.com" })).toHaveAttribute("href", "mailto:actc@ahmadiah.com");
  });

  it("opens the photo credit link safely", () => {
    render(<Footer />);
    const pexels = screen.getByRole("link", { name: "Pexels" });
    expect(pexels).toHaveAttribute("target", "_blank");
    expect(pexels.getAttribute("rel")).toContain("noopener");
  });
});
