export interface Partner {
  name: string;
  logo: string;
  href: string;
  /** aria-label of the tile link */
  label: string;
  /** alt text of the logo in the "Brands we represent" section */
  alt: string;
  /** alt text of the logo chip in the footer */
  chipAlt: string;
}

export interface PartnerGroup {
  title: string;
  text: string;
  icon: string;
  delay: "" | "d1";
  partners: Partner[];
}

const hitachi: Partner = { name: "Hitachi", logo: "/images/partners/hitachi.png", href: "https://www.hitachi.com", label: "Hitachi website", alt: "Hitachi logo", chipAlt: "Hitachi" };
const smec: Partner = { name: "Shanghai Mitsubishi Elevator", logo: "/images/partners/smec.png", href: "https://www.smec-cn.com/en/", label: "Shanghai Mitsubishi Elevator website", alt: "Shanghai Mitsubishi Elevator logo", chipAlt: "Shanghai Mitsubishi Elevator" };
const hidral: Partner = { name: "Hidral", logo: "/images/partners/hidral.png", href: "https://hidral.com/en/", label: "Hidral website", alt: "Hidral logo", chipAlt: "Hidral" };
const manntech: Partner = { name: "Manntech", logo: "/images/partners/manntech.png", href: "https://www.manntech.com", label: "Manntech website", alt: "Manntech logo", chipAlt: "Manntech" };
const coxgomyl: Partner = { name: "CoxGomyl", logo: "/images/partners/coxgomyl.png", href: "https://www.coxgomyl.com", label: "CoxGomyl website", alt: "CoxGomyl logo", chipAlt: "CoxGomyl" };
const atechbcn: Partner = { name: "Atechbcn", logo: "/images/partners/atechbcn.png", href: "https://atechbcn.com", label: "Atechbcn website", alt: "Atechbcn logo", chipAlt: "Atechbcn" };
const noracon: Partner = { name: "NorAcon", logo: "/images/partners/noracon.png", href: "https://www.noracon.com", label: "NorAcon website", alt: "NorAcon logo", chipAlt: "NorAcon" };
const powerclimber: Partner = { name: "PowerClimber", logo: "/images/partners/powerclimber.png", href: "https://www.powerclimber.com", label: "PowerClimber website", alt: "Power Climber logo", chipAlt: "Power Climber" };

export const partnerGroups: PartnerGroup[] = [
  {
    title: "Elevator & escalator partners",
    text: "Passenger and freight lifting equipment.",
    icon: "i-lift",
    delay: "",
    partners: [hitachi, smec, hidral],
  },
  {
    title: "Façade maintenance partners",
    text: "Building maintenance units and access systems.",
    icon: "i-build",
    delay: "d1",
    partners: [manntech, coxgomyl, atechbcn, noracon, powerclimber],
  },
];

/** All partners in footer-chip order. */
export const allPartners: Partner[] = partnerGroups.flatMap((g) => g.partners);
