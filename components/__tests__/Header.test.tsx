import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Header from "@/components/Header";

describe("Header", () => {
  it("shows the logo with alt text", () => {
    render(<Header />);
    const logo = screen.getByAltText("Ahmadiah logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "/images/logo.png");
  });

  it("renders every nav link with the right href", () => {
    render(<Header />);
    const nav = screen.getByRole("navigation", { name: "Main" });
    const expected: Record<string, string> = {
      Home: "#home",
      "About AIEC": "#about",
      Products: "#products",
      Services: "#services",
      Projects: "#projects",
      "Contact Us": "#contact",
    };
    for (const [label, href] of Object.entries(expected)) {
      expect(within(nav).getByRole("link", { name: label })).toHaveAttribute("href", href);
    }
    expect(within(nav).getByRole("link", { name: "Our History" })).toHaveAttribute("href", "#history");
    expect(within(nav).getByRole("link", { name: "Supply & Installation" })).toHaveAttribute("href", "#services");
    expect(within(nav).getByRole("link", { name: "Façade Access & Cleaning Systems" })).toHaveAttribute(
      "href",
      "#products",
    );
    expect(within(nav).getByRole("link", { name: "Request Service" })).toHaveAttribute("href", "#contact");
  });

  it("marks Home as the active item initially", () => {
    render(<Header />);
    const home = screen.getByRole("link", { name: "Home" });
    expect(home.closest("li")).toHaveClass("active");
  });

  it("burger toggles aria-expanded and the open class on the nav", async () => {
    const user = userEvent.setup();
    render(<Header />);
    const nav = screen.getByRole("navigation", { name: "Main" });
    const burger = screen.getByRole("button", { name: "Open menu" });

    expect(burger).toHaveAttribute("aria-expanded", "false");
    expect(nav).not.toHaveClass("open");

    await user.click(burger);
    expect(burger).toHaveAttribute("aria-expanded", "true");
    expect(burger).toHaveAccessibleName("Close menu");
    expect(nav).toHaveClass("open");
    expect(document.body.style.overflow).toBe("hidden");

    await user.click(burger);
    expect(burger).toHaveAttribute("aria-expanded", "false");
    expect(nav).not.toHaveClass("open");
    expect(document.body.style.overflow).toBe("");
  });

  it("closes the mobile menu on Escape and when a nav link is clicked", async () => {
    const user = userEvent.setup();
    render(<Header />);
    const nav = screen.getByRole("navigation", { name: "Main" });
    const burger = screen.getByRole("button", { name: "Open menu" });

    await user.click(burger);
    expect(nav).toHaveClass("open");
    await user.keyboard("{Escape}");
    expect(nav).not.toHaveClass("open");

    await user.click(burger);
    await user.click(within(nav).getByRole("link", { name: "Products" }));
    expect(nav).not.toHaveClass("open");
  });

  it("dropdown toggles open and closed, one at a time", async () => {
    const user = userEvent.setup();
    render(<Header />);
    const aboutToggle = screen.getByRole("button", { name: "Show About submenu" });
    const productsToggle = screen.getByRole("button", { name: "Show Products submenu" });
    const aboutItem = aboutToggle.closest("li")!;
    const productsItem = productsToggle.closest("li")!;

    expect(aboutToggle).toHaveAttribute("aria-expanded", "false");
    expect(aboutItem).not.toHaveClass("open");

    await user.click(aboutToggle);
    expect(aboutToggle).toHaveAttribute("aria-expanded", "true");
    expect(aboutItem).toHaveClass("open");

    await user.click(productsToggle);
    expect(productsItem).toHaveClass("open");
    expect(aboutItem).not.toHaveClass("open");
    expect(aboutToggle).toHaveAttribute("aria-expanded", "false");

    await user.click(productsToggle);
    expect(productsItem).not.toHaveClass("open");
    expect(productsToggle).toHaveAttribute("aria-expanded", "false");
  });

  it("adds the scrolled class after scrolling more than 10px", async () => {
    const { container } = render(<Header />);
    const header = container.querySelector("header")!;
    expect(header).not.toHaveClass("scrolled");
    Object.defineProperty(window, "scrollY", { value: 50, configurable: true });
    window.dispatchEvent(new Event("scroll"));
    await waitFor(() => expect(header).toHaveClass("scrolled"));
    Object.defineProperty(window, "scrollY", { value: 0, configurable: true });
  });
});
