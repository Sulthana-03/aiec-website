import type { EnquiryType } from "@/components/EnquiryContext";

export interface NavSubItem {
  label: string;
  href: string;
  type?: EnquiryType;
}

export interface NavItem {
  label: string;
  href: string;
  /** Short name used in the submenu toggle aria-label, e.g. "About" */
  toggleName?: string;
  sub?: NavSubItem[];
}

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  {
    label: "About AIEC",
    href: "#about",
    toggleName: "About",
    sub: [
      { label: "Company Profile", href: "#about" },
      { label: "Our History", href: "#history" },
    ],
  },
  {
    label: "Products",
    href: "#products",
    toggleName: "Products",
    sub: [
      { label: "Elevators", href: "#products" },
      { label: "Escalators", href: "#products" },
      { label: "Moving Walks", href: "#products" },
      { label: "Façade Access & Cleaning Systems", href: "#products" },
    ],
  },
  {
    label: "Services",
    href: "#services",
    toggleName: "Services",
    sub: [
      { label: "Supply & Installation", href: "#services" },
      { label: "After-Sales Service", href: "#services" },
    ],
  },
  {
    label: "Projects",
    href: "#projects",
    toggleName: "Projects",
    sub: [
      { label: "Featured Projects", href: "#projects" },
      { label: "All Projects", href: "#projects" },
    ],
  },
  {
    label: "Contact Us",
    href: "#contact",
    toggleName: "Contact",
    sub: [
      { label: "General Enquiries", href: "#contact" },
      { label: "Request a Quote", href: "#contact", type: "quote" },
      { label: "Request Service", href: "#contact", type: "service" },
    ],
  },
];

/** Sections tracked for the active nav link (same list as the original script). */
export const trackedSections: string[] = ["home", "about", "products", "services", "projects", "contact"];
