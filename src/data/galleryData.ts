export interface GalleryImage {
  id: number
  src: string
  category: "LVP" | "Hardwood" | "Laminate" | "Stairs" | "Tile"
  title: string
  alt: string
}

export const images: GalleryImage[] = [
  {
    id: 1,
    src: "gallery1",
    category: "Laminate",
    title: "Basement Transformation — Weathered Gray Laminate Flooring",
    alt: "Basement Transformation — Weathered Gray Laminate Flooring",
  },
  {
    id: 2,
    src: "gallery2",
    category: "Laminate",
    title: "Living Room Refresh — Warm Oak Laminate Flooring",
    alt: "Living Room Refresh — Warm Oak Laminate Flooring",
  },
  {
    id: 3,
    src: "gallery3",
    category: "LVP",
    title: "Sunlit Living Room — Blonde Wood-Style LVP Flooring",
    alt: "Sunlit Living Room — Blonde Wood-Style LVP Flooring",
  },
  {
    id: 4,
    src: "gallery4",
    category: "Laminate",
    title: "Living Area Upgrade — Rustic Walnut-Look Laminate Flooring",
    alt: "Living Area Upgrade — Rustic Walnut-Look Laminate Flooring",
  },
  {
    id: 5,
    src: "gallery5",
    category: "Laminate",
    title: "Hallway Refresh — Natural Oak Laminate Flooring",
    alt: "Hallway Refresh — Natural Oak Laminate Flooring",
  },
  {
    id: 6,
    src: "gallery6",
    category: "Laminate",
    title: "Hallway & Landing Upgrade — Mocha Oak Laminate Flooring",
    alt: "Hallway & Landing Upgrade — Mocha Oak Laminate Flooring",
  },
  {
    id: 7,
    src: "gallery7",
    category: "Stairs",
    title: "Staircase Upgrade — Warm Oak LVP with Cap-A-Tread",
    alt: "Staircase Upgrade — Warm Oak LVP with Cap-A-Tread",
  },
  {
    id: 8,
    src: "gallery8",
    category: "LVP",
    title: "Hallway Refresh — Greige Oak LVP Flooring",
    alt: "Hallway Refresh — Greige Oak LVP Flooring",
  },
  {
    id: 9,
    src: "gallery9",
    category: "Stairs",
    title: "Staircase Refresh — Greige Oak LVP Treads with White Risers",
    alt: "Staircase Refresh — Greige Oak LVP Treads with White Risers",
  },
  {
    id: 10,
    src: "gallery10",
    category: "Stairs",
    title: "Staircase Makeover — Espresso Oak Laminate Steps",
    alt: "Staircase Makeover — Espresso Oak Laminate Steps",
  },
  {
    id: 11,
    src: "gallery11",
    category: "LVP",
    title: "Living Room Upgrade — Warm Natural Oak LVP Flooring",
    alt: "Living Room Upgrade — Warm Natural Oak LVP Flooring",
  },
  {
    id: 12,
    src: "gallery12",
    category: "Stairs",
    title: "Staircase Upgrade — Dark Walnut Laminate Treads with White Risers",
    alt: "Staircase Upgrade — Dark Walnut Laminate Treads with White Risers",
  },
  {
    id: 13,
    src: "gallery13",
    category: "Stairs",
    title: "Open Staircase Upgrade — Honey Oak LVP Treads & Landings",
    alt: "Open Staircase Upgrade — Honey Oak LVP Treads & Landings",
  },
  {
    id: 14,
    src: "gallery14",
    category: "LVP",
    title: "Modern Entryway — Weathered Gray Oak LVP Flooring",
    alt: "Modern Entryway — Weathered Gray Oak LVP Flooring",
  },
]
