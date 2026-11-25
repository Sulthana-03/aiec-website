import fs from "node:fs";
import path from "node:path";
import { render } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { EnquiryProvider } from "@/components/EnquiryContext";
import Home from "@/app/page";

let root: HTMLElement;

beforeEach(() => {
  const { container } = render(
    <EnquiryProvider>
      <Home />
    </EnquiryProvider>,
  );
  root = container;
});

describe("Page", () => {
  it("keeps the section order of the original page", () => {
    const ids = Array.from(root.querySelectorAll("main > section[id], main > .stats")).map(
      (el) => el.id || el.className,
    );
    expect(ids).toEqual(["home", "stats", "about", "products", "history", "sectors", "projects", "services", "partners", "contact"]);
    expect(root.querySelector("main > section[aria-label='Get in touch']")).toBeInTheDocument();
    expect(root.querySelector(".topbar")).toBeInTheDocument();
    expect(root.querySelector("header.header")).toBeInTheDocument();
    expect(root.querySelector("footer.footer")).toBeInTheDocument();
    expect(root.querySelector(".fab")).toBeInTheDocument();
    expect(root.querySelector("svg symbol#i-arrow")).toBeInTheDocument();
  });

  it("has unique ids", () => {
    const ids = Array.from(root.querySelectorAll("[id]")).map((el) => el.id);
    const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
    expect(dupes).toEqual([]);
  });

  it("every in-page href=#id matches an element id", () => {
    const hrefs = Array.from(root.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')).map((a) =>
      a.getAttribute("href")!,
    );
    expect(hrefs.length).toBeGreaterThan(20);
    const missing = hrefs.filter((h) => h.length < 2 || !root.querySelector(`[id="${h.slice(1)}"]`));
    expect(missing).toEqual([]);
  });

  it("every <use href=#icon> points at a sprite symbol", () => {
    const missing = Array.from(root.querySelectorAll("use"))
      .map((u) => u.getAttribute("href")!)
      .filter((h) => !root.querySelector(`symbol[id="${h.slice(1)}"]`));
    expect(missing).toEqual([]);
  });

  it("every <img> has an alt attribute", () => {
    const imgs = Array.from(root.querySelectorAll("img"));
    expect(imgs.length).toBeGreaterThan(20);
    imgs.forEach((img) => expect(img.hasAttribute("alt")).toBe(true));
  });

  it("every image src exists as a file in /public", () => {
    const srcs = Array.from(new Set(Array.from(root.querySelectorAll("img")).map((i) => i.getAttribute("src")!)));
    expect(srcs.length).toBeGreaterThan(15);
    for (const src of srcs) {
      expect(src.startsWith("/images/"), `${src} should be root-relative`).toBe(true);
      const file = path.join(process.cwd(), "public", src);
      expect(fs.existsSync(file), `${src} is missing from /public`).toBe(true);
    }
  });

  it("every external link opens safely", () => {
    root.querySelectorAll<HTMLAnchorElement>('a[target="_blank"]').forEach((a) => {
      expect(a.getAttribute("rel")).toContain("noopener");
    });
  });
});
