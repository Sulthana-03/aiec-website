export interface Product {
  num: string;
  title: string;
  text: string;
  image: string;
  alt: string;
  delay: "" | "d1" | "d2" | "d3";
}

export const products: Product[] = [
  {
    num: "01",
    title: "Elevators",
    text: "Passenger, panoramic and service elevators for high-rise, commercial, healthcare and residential buildings.",
    image: "/images/product-elevators.jpg",
    alt: "Row of polished steel elevator doors in a dark-panelled lobby",
    delay: "",
  },
  {
    num: "02",
    title: "Escalators",
    text: "High-capacity escalators designed for malls, airports, metro links and public buildings with heavy daily traffic.",
    image: "/images/product-escalators.jpg",
    alt: "Glass-balustrade escalators seen from above",
    delay: "d1",
  },
  {
    num: "03",
    title: "Moving Walks",
    text: "Smooth horizontal and inclined walkways that carry people and trolleys effortlessly across large spaces.",
    image: "/images/product-movingwalks.jpg",
    alt: "Traveller walking along a glass-sided moving walkway in an airport terminal",
    delay: "d2",
  },
  {
    num: "04",
    title: "Façade Access & Cleaning",
    text: "Building maintenance units and cradles that keep glass towers clean, safe and beautifully maintained.",
    image: "/images/product-facade.jpg",
    alt: "Maintenance cradle working on the façade of a high-rise tower",
    delay: "d3",
  },
];
