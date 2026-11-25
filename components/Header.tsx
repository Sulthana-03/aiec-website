"use client";

import { useEffect, useRef, useState } from "react";
import CtaLink from "./CtaLink";
import Icon from "./Icon";
import { navItems, trackedSections } from "@/data/nav";

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [navTop, setNavTop] = useState<number | undefined>(undefined);
  const [openSub, setOpenSub] = useState<number | null>(null);
  const [active, setActive] = useState("#home");

  const closeMenu = () => setMenuOpen(false);

  const toggleMenu = () => {
    if (!menuOpen && headerRef.current) {
      setNavTop(Math.max(0, Math.round(headerRef.current.getBoundingClientRect().bottom)));
    }
    setMenuOpen(!menuOpen);
  };

  // header shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Escape closes the menu; widening past the burger breakpoint closes it too
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > 1120) setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // highlight the nav item of the section in view
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const so = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive("#" + e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    trackedSections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) so.observe(el);
    });
    return () => so.disconnect();
  }, []);

  return (
    <header className={"header" + (scrolled ? " scrolled" : "")} id="top" ref={headerRef}>
      <div className="wrap">
        <a href="#home" className="brand" aria-label="AIEC – Ahmadiah International Elevator Co. – home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <span className="logo-box">
            <img src="/images/aiec-logo.png" alt="AIEC logo" width={293} height={232} />
          </span>
          <span className="aiec">
            <b>AIEC</b>
            <small>Ahmadiah International Elevator Co.</small>
          </span>
        </a>

        <nav
          className={"nav" + (menuOpen ? " open" : "")}
          id="nav"
          aria-label="Main"
          style={navTop !== undefined ? { top: navTop + "px" } : undefined}
        >
          <ul>
            {navItems.map((item, i) => {
              const cls = [item.sub ? "has-sub" : "", openSub === i ? "open" : "", active === item.href ? "active" : ""]
                .filter(Boolean)
                .join(" ");
              return (
                <li key={item.label} className={cls || undefined}>
                  <a href={item.href} onClick={closeMenu}>
                    {item.label}
                  </a>
                  {item.sub && (
                    <>
                      <button
                        className="subtoggle"
                        aria-label={`Show ${item.toggleName} submenu`}
                        aria-expanded={openSub === i}
                        onClick={() => setOpenSub(openSub === i ? null : i)}
                      ></button>
                      <ul className="sub">
                        {item.sub.map((s) => (
                          <li key={s.label}>
                            <CtaLink href={s.href} type={s.type} onClick={closeMenu}>
                              {s.label}
                            </CtaLink>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </li>
              );
            })}
          </ul>
          <CtaLink href="#contact" className="btn btn-red mobile-cta" type="quote" onClick={closeMenu}>
            Request a Quote
          </CtaLink>
        </nav>

        <div className="header-cta">
          <CtaLink href="#contact" className="btn btn-red btn-sm" type="quote">
            Request a Quote <Icon id="i-arrow" />
          </CtaLink>
          <button
            className="burger"
            id="burger"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="nav"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
