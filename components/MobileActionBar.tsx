"use client";

import { useEffect, useState } from "react";
import CtaLink from "./CtaLink";

export default function MobileActionBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={"fab" + (show ? " show" : "")} aria-label="Quick actions">
      <CtaLink href="#contact" className="btn btn-red btn-sm" type="quote">
        Request a Quote
      </CtaLink>
      <CtaLink href="#contact" className="btn btn-dark btn-sm" type="service">
        Request Service
      </CtaLink>
    </div>
  );
}
