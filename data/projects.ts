export type ProjectSector = "malls" | "hotels" | "hospitals" | "banks" | "government" | "residential";
export type ProjectFilter = "all" | ProjectSector;

export interface Project {
  sector: ProjectSector;
  tag: string;
  title: string;
  text: string;
  image: string;
  alt: string;
  delay: "" | "d1" | "d2";
  location?: string;
  scope?: string;
  service?: string;
}

export interface FilterChip {
  id: ProjectFilter;
  label: string;
}

export const filterChips: FilterChip[] = [
  { id: "all", label: "All" },
  { id: "malls", label: "Malls" },
  { id: "hotels", label: "Hotels" },
  { id: "hospitals", label: "Hospitals" },
  { id: "banks", label: "Banks" },
  { id: "government", label: "Government" },
  { id: "residential", label: "Residential & Commercial" },
];

export const projects: Project[] = [
  {
    sector: "malls",
    tag: "Malls",
    title: "Malls & Retail Complexes",
    location: "Kuwait",
    scope: "Dar Al Awadi · Bustan · Fanar · Al Shaya Plaza",
    service: "Supply & Installation",
    text: "At Dar Al Awadi alone: 10 Hitachi elevators and 8 escalators across the towers and mall.",
    image: "/images/feat-mall.jpg",
    alt: "Busy shopping mall atrium in Kuwait",
    delay: "",
  },
  {
    sector: "hotels",
    tag: "Hotels",
    title: "Hotels & Resorts",
    location: "Kuwait",
    scope: "JW Marriott · Sheraton · Hilton Resort",
    service: "Supply & Installation",
    text: "Elevators, escalators and façade cleaning systems for leading hotels and resorts.",
    image: "/images/feat-hotel.jpg",
    alt: "Resort hotel with swimming pools and palm trees beside the sea",
    delay: "d1",
  },
  {
    sector: "hospitals",
    tag: "Hospitals",
    title: "Hospitals & Healthcare",
    location: "Kuwait",
    scope: "NBK Children’s Hospital · ENT Hospital",
    service: "Supply & Installation",
    text: "Dependable vertical transport for patients, staff and essential movements.",
    image: "/images/feat-hospital.jpg",
    alt: "Modern hospital building lit up at dusk",
    delay: "d2",
  },
  {
    sector: "banks",
    tag: "Banks",
    title: "Bank Head Offices",
    location: "Kuwait City",
    scope: "KFH · Al Ahli · Gulf Bank · Commercial Bank",
    service: "Supply & Installation",
    text: "Elevators, escalators and façade systems for headquarters of leading banks.",
    image: "/images/feat-bank.jpg",
    alt: "Glass-fronted bank headquarters under a clear blue sky",
    delay: "",
  },
  {
    sector: "government",
    tag: "Government",
    title: "Public & Institutional",
    location: "Kuwait",
    scope: "Kuwait University · KFAS",
    service: "Supply & Installation",
    text: "Supply and installation for universities and public-sector facilities.",
    image: "/images/feat-univ.jpg",
    alt: "Formal government palace entrance lined with flags and palms",
    delay: "d1",
  },
  {
    sector: "residential",
    tag: "Commercial",
    title: "Al Hamra Tower",
    location: "Sharq, Kuwait City",
    scope: "53 high-speed lifts · 16 escalators",
    service: "Supply & Maintenance",
    text: "Kuwait’s 412 m landmark, with Hitachi and Ahmadiah as main elevator supplier and service partner.",
    image: "/images/feat-hamra.jpg",
    alt: "Kuwait City skyline with Al Hamra Tower rising in the centre",
    delay: "d2",
  },
];
