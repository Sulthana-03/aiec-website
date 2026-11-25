"use client";

import { useEffect, useRef, useState, type ElementType, type HTMLAttributes, type ReactNode } from "react";

type RevealProps = HTMLAttributes<HTMLElement> & {
  as?: string;
  /** Delay modifier class: "", "d1", "d2" or "d3" */
  delay?: string;
  /** Force the revealed state (used by the project filter) */
  forceIn?: boolean;
  /** Any extra attribute (href, data-*) is passed straight through */
  [attr: string]: unknown;
  children?: ReactNode;
};

/**
 * Scroll-reveal wrapper: renders the element with the `rv` class and adds `in`
 * once it scrolls into view (same observer options as the original script).
 */
export default function Reveal({ as = "div", className, delay, forceIn, children, ...rest }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      const t = window.setTimeout(() => setSeen(true), 0);
      return () => window.clearTimeout(t);
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setSeen(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const classes = [className, "rv", delay, seen || forceIn ? "in" : ""].filter(Boolean).join(" ");
  const Tag = as as ElementType;
  return (
    <Tag {...rest} ref={ref} className={classes}>
      {children}
    </Tag>
  );
}
