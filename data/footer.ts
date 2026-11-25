import type { EnquiryType } from "@/components/EnquiryContext";

export interface FooterLink {
  label: string;
  href: string;
  type?: EnquiryType;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export const footerColumns: FooterColumn[] = [
  {
    title: "Products",
    links: [
      { label: "Elevators", href: "#products" },
      { label: "Escalators", href: "#products" },
      { label: "Moving Walks", href: "#products" },
      { label: "Façade Access & Cleaning", href: "#products" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About AIEC", href: "#about" },
      { label: "Our History", href: "#history" },
      { label: "Projects", href: "#projects" },
      { label: "Our Partners", href: "#partners" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Supply & Installation", href: "#services" },
      { label: "After-Sales Service", href: "#services" },
      { label: "Request a Quote", href: "#contact", type: "quote" },
      { label: "Request Service", href: "#contact", type: "service" },
    ],
  },
];
