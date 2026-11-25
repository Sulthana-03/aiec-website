import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Contact from "@/components/Contact";

describe("Contact", () => {
  it("has the phone and email links", () => {
    render(<Contact />);
    expect(screen.getByRole("link", { name: "+965 222-66-222" })).toHaveAttribute("href", "tel:+96522266222");
    expect(screen.getByRole("link", { name: "actc@ahmadiah.com" })).toHaveAttribute(
      "href",
      "mailto:actc@ahmadiah.com",
    );
  });

  it("shows the working hours", () => {
    render(<Contact />);
    expect(screen.getByText(/Sat – Thu, 8:00 AM – 5:00 PM/)).toBeInTheDocument();
    expect(screen.getByText("Friday closed")).toBeInTheDocument();
  });

  it("shows the office address, three contact cards and the enquiry form", () => {
    const { container } = render(<Contact />);
    expect(screen.getByText(/Shuwaikh Industrial Area, St. 26 – Plot 66, Kuwait/)).toBeInTheDocument();
    expect(container.querySelectorAll(".ccard")).toHaveLength(3);
    expect(container.querySelector("form#enq")).toBeInTheDocument();
  });
});
