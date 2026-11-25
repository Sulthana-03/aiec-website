export const PHONE_HREF = "tel:+96522266222";
export const PHONE_TEXT = "+965 222-66-222";
export const EMAIL = "actc@ahmadiah.com";
export const ADDRESS = "Shuwaikh Industrial Area, St. 26 – Plot 66, Kuwait";

export interface Stat {
  value: string;
  /** optional red suffix, e.g. the "+" in "8+" */
  suffix?: string;
  label: string;
}

export const stats: Stat[] = [
  { value: "1976", label: "Exclusive Hitachi distribution begins" },
  { value: "2013", label: "AIEC formed as a joint venture with Hitachi" },
  { value: "8", suffix: "+", label: "Global partner brands represented" },
  { value: "4", label: "Product ranges, one trusted partner" },
];

export const aboutTicks: string[] = [
  "Supply & installation of new equipment",
  "Dedicated after-sales service for existing buildings",
  "Distributor of leading elevator & façade maintenance brands",
];

export interface TimelineItem {
  year: string;
  title: string;
  text: string;
  delay: "" | "d1" | "d2";
}

export const timeline: TimelineItem[] = [
  {
    year: "1976",
    title: "Exclusive Hitachi distributor",
    text: "The Elevator Division of Ahmadiah Contracting & Trading Co. becomes the exclusive distributor for Hitachi elevators, escalators and moving walks in Kuwait.",
    delay: "",
  },
  {
    year: "2013",
    title: "AIEC is formed",
    text: "Ahmadiah and Hitachi Limited, Japan establish Ahmadiah International Elevator Company as a joint venture.",
    delay: "d1",
  },
  {
    year: "Today",
    title: "A wider portfolio",
    text: "AIEC distributes Hitachi, Shanghai Mitsubishi and Hidral elevators, plus five leading façade maintenance brands.",
    delay: "d2",
  },
];

export interface Pillar {
  icon: string;
  title: string;
  text: string;
  delay: "" | "d1" | "d2";
}

export const pillars: Pillar[] = [
  { icon: "i-globe", title: "Global technology", text: "Equipment from world-recognised manufacturers, backed by a Japanese joint-venture partner.", delay: "" },
  { icon: "i-build", title: "Kuwait’s elite projects", text: "Trusted in high-rises, malls, hotels, banks, hospitals and government buildings.", delay: "d1" },
  { icon: "i-wrench", title: "Support that lasts", text: "From first installation to long-term maintenance, one team stays with your building.", delay: "d2" },
];

export interface Service {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  alt: string;
  bullets: string[];
  cta: string;
  type: "quote" | "service";
  delay: "" | "d1";
}

export const services: Service[] = [
  {
    eyebrow: "New buildings",
    title: "Supply & Installation",
    text: "Planning, supply and installation of elevators, escalators, moving walks and façade access systems for new projects.",
    image: "/images/service-install.jpg",
    alt: "Elevator hoistway with steel guide structure and work lights",
    bullets: ["Equipment selection and traffic planning", "Professional installation and commissioning", "Hand-over with full documentation"],
    cta: "Request a Quote",
    type: "quote",
    delay: "",
  },
  {
    eyebrow: "Existing buildings",
    title: "After-Sales Service",
    text: "Maintenance, repair and modernisation support for building owners and facility managers.",
    image: "/images/service-support.jpg",
    alt: "Technician working on an elevator control panel",
    bullets: ["Scheduled preventive maintenance", "Fast response to breakdowns", "Upgrades and modernisation"],
    cta: "Request Service",
    type: "service",
    delay: "d1",
  },
];

export interface ContactCard {
  icon: string;
  title: string;
  text: string;
  link?: { label: string; type: "quote" | "service" };
}

export const contactCards: ContactCard[] = [
  { icon: "i-mail", title: "General Enquiries", text: "Questions about AIEC, our products or partnerships." },
  { icon: "i-build", title: "Request a Quote", text: "New elevators, escalators, moving walks or façade systems — handled by our sales team.", link: { label: "Start a quote", type: "quote" } },
  { icon: "i-wrench", title: "Request Service", text: "Breakdowns, maintenance or upgrades for existing equipment — handled by our service team.", link: { label: "Request service", type: "service" } },
];

export const productOptions: string[] = ["Elevators", "Escalators", "Moving Walks", "Façade Access & Cleaning Systems", "Not sure yet"];
