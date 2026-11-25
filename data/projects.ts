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
    title: "Shopping Malls",
    text: "Escalators, moving walks and passenger elevators for high-footfall retail destinations.",
    image: "/images/project-mall.jpg",
    alt: "Busy shopping mall atrium with escalators across several floors",
    delay: "",
  },
  {
    sector: "hotels",
    tag: "Hotels",
    title: "Hotels & Hospitality",
    text: "Quiet, smooth elevators for guest comfort and back-of-house service.",
    image: "/images/project-hotel.jpg",
    alt: "Stepped hotel building with balconies under a blue sky",
    delay: "d1",
  },
  {
    sector: "hospitals",
    tag: "Hospitals",
    title: "Hospitals & Healthcare",
    text: "Dependable vertical transport for patients, staff and essential movements.",
    image: "/images/project-hospital.jpg",
    alt: "Large institutional building with lit windows at dusk",
    delay: "d2",
  },
  {
    sector: "banks",
    tag: "Banks",
    title: "Banks & Corporate Towers",
    text: "High-performance elevators for headquarters and financial towers.",
    image: "/images/project-bank.jpg",
    alt: "Glass corporate tower reflecting a blue sky",
    delay: "",
  },
  {
    sector: "government",
    tag: "Government",
    title: "Governmental Buildings",
    text: "Supply, installation and service for public-sector facilities.",
    image: "/images/project-government.jpg",
    alt: "Classical government building with columns and domes",
    delay: "d1",
  },
  {
    sector: "residential",
    tag: "Residential",
    title: "Residential & Commercial",
    text: "Towers, apartments and office buildings across Kuwait.",
    image: "/images/project-residential.jpg",
    alt: "White residential apartment towers with balconies",
    delay: "d2",
  },
];
