import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import About from "@/components/About";
import Hero from "@/components/Hero";
import History from "@/components/History";
import Products from "@/components/Products";
import Services from "@/components/Services";
import CtaBand from "@/components/CtaBand";
import TopBar from "@/components/TopBar";

describe("TopBar", () => {
  it("shows the joint-venture note and the phone link", () => {
    render(<TopBar />);
    expect(screen.getByText(/Joint venture with Hitachi Limited, Japan/)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /\+965 222-66-222/ })).toHaveAttribute("href", "tel:+96522266222");
  });
});

describe("Hero", () => {
  it("renders the heading, lead text, hero image and stats", () => {
    const { container } = render(<Hero />);
    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1).toHaveTextContent("Elevators & escalators for Kuwait’s finest buildings.");
    expect(screen.getByText("Hitachi joint venture · Kuwait")).toBeInTheDocument();
    expect(screen.getByText(/Supply, installation and after-sales service of elevators/)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Request a Quote/ })).toHaveAttribute("href", "#contact");
    expect(screen.getByRole("link", { name: "Explore Products" })).toHaveAttribute("href", "#products");
    expect(screen.getByAltText(/City skyline at night/)).toHaveAttribute("src", "/images/hero.jpg");
    expect(container.querySelectorAll(".stat")).toHaveLength(4);
    expect(screen.getByText("Exclusive Hitachi distribution begins")).toBeInTheDocument();
  });
});

describe("About", () => {
  it("renders the heading and copy", () => {
    render(<About />);
    expect(screen.getByRole("heading", { name: "A leading name in vertical transportation" })).toBeInTheDocument();
    expect(screen.getByText("Ahmadiah Contracting and Trading Company")).toBeInTheDocument();
    expect(screen.getByText("Supply & installation of new equipment")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Our History/ })).toHaveAttribute("href", "#history");
  });

  it("shows the Hitachi badge inside the photo block", () => {
    const { container } = render(<About />);
    const media = container.querySelector(".about-media")!;
    const badge = within(media as HTMLElement).getByText("Hitachi Limited, Japan").closest(".about-badge");
    expect(badge).not.toBeNull();
    expect(within(badge as HTMLElement).getByText("Joint-venture partner of AIEC")).toBeInTheDocument();
    expect(media.querySelector("img")).toHaveAttribute("src", "/images/about.jpg");
  });
});

describe("Products", () => {
  it("renders the heading and exactly 4 product cards", () => {
    const { container } = render(<Products />);
    expect(
      screen.getByRole("heading", { name: "Four product ranges, engineered to move people" }),
    ).toBeInTheDocument();
    const cards = container.querySelectorAll("article.pcard");
    expect(cards).toHaveLength(4);
    const titles = Array.from(cards).map((c) => c.querySelector("h3")!.textContent);
    expect(titles).toEqual(["Elevators", "Escalators", "Moving Walks", "Façade Access & Cleaning"]);
    cards.forEach((c) => {
      expect(within(c as HTMLElement).getByRole("link", { name: /Enquire now/ })).toHaveAttribute("href", "#contact");
    });
  });
});

describe("History", () => {
  it("renders the heading and a 3-item timeline (1976, 2013, Today)", () => {
    const { container } = render(<History />);
    expect(screen.getByRole("heading", { name: "Decades of technology and reliability" })).toBeInTheDocument();
    const items = container.querySelectorAll(".timeline .tl");
    expect(items).toHaveLength(3);
    expect(Array.from(items).map((i) => i.querySelector(".year")!.textContent)).toEqual(["1976", "2013", "Today"]);
    expect(screen.getByText("Exclusive Hitachi distributor")).toBeInTheDocument();
    expect(screen.getByText("AIEC is formed")).toBeInTheDocument();
    expect(container.querySelectorAll(".pillar")).toHaveLength(3);
  });
});

describe("Services & CTA band", () => {
  it("renders both service cards with their CTAs", () => {
    const { container } = render(<Services />);
    expect(container.querySelectorAll("article.svc")).toHaveLength(2);
    expect(screen.getByRole("link", { name: /Request a Quote/ })).toHaveAttribute("data-type", "quote");
    expect(screen.getByRole("link", { name: /Request Service/ })).toHaveAttribute("data-type", "service");
  });

  it("renders the CTA band buttons", () => {
    render(<CtaBand />);
    expect(screen.getByRole("heading", { name: /Planning a new building/ })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Request a Quote" })).toHaveAttribute("data-type", "quote");
    expect(screen.getByRole("link", { name: "Request Service" })).toHaveAttribute("data-type", "service");
  });
});
