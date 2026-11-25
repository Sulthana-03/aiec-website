import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Projects from "@/components/Projects";

const visibleTags = (container: HTMLElement) =>
  Array.from(container.querySelectorAll<HTMLElement>(".proj"))
    .filter((c) => !c.classList.contains("hide"))
    .map((c) => c.querySelector(".tag")!.textContent);

describe("Projects", () => {
  it("renders 6 project cards and all filter chips, with All selected", () => {
    const { container } = render(<Projects />);
    expect(container.querySelectorAll(".proj")).toHaveLength(6);
    const tabs = screen.getAllByRole("tab");
    expect(tabs.map((t) => t.textContent)).toEqual([
      "All",
      "Malls",
      "Hotels",
      "Hospitals",
      "Banks",
      "Government",
      "Residential & Commercial",
    ]);
    expect(screen.getByRole("tab", { name: "All" })).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("tab", { name: "All" })).toHaveClass("on");
    expect(visibleTags(container)).toHaveLength(6);
  });

  it.each([
    ["Malls", "Malls"],
    ["Hotels", "Hotels"],
    ["Hospitals", "Hospitals"],
    ["Banks", "Banks"],
    ["Government", "Government"],
    [/Residential/, "Residential"],
  ] as const)("chip %s shows only the matching card", async (chipName, tag) => {
    const user = userEvent.setup();
    const { container } = render(<Projects />);
    const chip = screen.getByRole("tab", { name: chipName });
    await user.click(chip);
    expect(visibleTags(container)).toEqual([tag]);
    expect(chip).toHaveAttribute("aria-selected", "true");
    expect(chip).toHaveClass("on");
    expect(screen.getByRole("tab", { name: "All" })).toHaveAttribute("aria-selected", "false");
  });

  it("clicking All again shows every card", async () => {
    const user = userEvent.setup();
    const { container } = render(<Projects />);
    await user.click(screen.getByRole("tab", { name: "Banks" }));
    expect(visibleTags(container)).toHaveLength(1);
    await user.click(screen.getByRole("tab", { name: "All" }));
    expect(visibleTags(container)).toHaveLength(6);
  });
});
