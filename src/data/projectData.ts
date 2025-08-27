export interface Project {
  id: number
  title: string
  location: string
  beforeImage?: string
  afterImage?: string
  challenge: string
  approach: string
  transformation: string
  keyInfo: {
    label: string
    value: string
  }[]
  testimonial?: {
    quote: string
    author: string
  }
  staticImage?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Modern Laminate Upgrade for a Busy Family",
    location: "Chicagoland, IL",
    beforeImage: "aft2",
    afterImage: "aft1",
    challenge:
      "A family with young children and pets needed a flooring solution that was 100% waterproof, scratch-resistant, and stylish for their main living area and kitchen.",
    approach:
      "We installed a premium laminate flooring with a thick wear layer and an attached underlayment for sound dampening. The chosen style mimicked natural white oak.",
    transformation:
      "The new laminate flooring provided a bright, airy feel to the home while giving the family peace of mind with its durability and easy maintenance.",
    keyInfo: [
      { label: "Service", value: "Laminate Installation" },
      { label: "Area", value: "1,200 sq. ft." },
      { label: "Duration", value: "2 Days" },
    ],
    testimonial: {
      quote:
        "We can finally relax and not worry about spills or scratches. The new floors look amazing and are so easy to clean. The team was fantastic!",
      author: "The Peterson Family, Chicagoland, IL",
    },
  },
  {
    id: 2,
    title: "Prefinished Hardwood Installation in Lake Villa",
    location: "Lake Villa, IL",
    staticImage: "gallery15",
    challenge:
      "The homeowners needed to replace their worn, 50-year-old flooring. They wanted a fast and clean installation that still reflected the character of their historic home.",
    approach:
      "We installed high-quality prefinished hardwood flooring, chosen to match the home's original aesthetic. The factory-finished planks allowed for a quick, dust-free process with no need for on-site sanding or staining.",
    transformation:
      "The new flooring brought warmth and timeless style back to the home, while the durable finish ensures low maintenance and long-term protection.",
    keyInfo: [
      { label: "Service", value: "Prefinished Hardwood Installation" },
      { label: "Area", value: "800 sq. ft." },
      { label: "Duration", value: "2 Days" },
    ],
    testimonial: {
      quote:
        "It’s amazing how the new floors blend perfectly with our home’s vintage charm. Duke Flooring made the process seamless from start to finish.",
      author: "The Johnson Family, Lake Villa, IL",
    },
  },

  {
    id: 3,
    title: "Basement Transformation with Laminate",
    location: "Grayslake, IL",
    staticImage: "gallery1",
    challenge:
      "A damp, unfinished basement needed to be converted into a functional family room. The flooring had to be moisture-resistant, durable, and comfortable underfoot.",
    approach:
      "After proper subfloor preparation to ensure a level surface, we installed a high-quality laminate flooring with a built-in vapor barrier. This provided a warm, wood-like appearance while protecting against moisture from the concrete subfloor.",
    transformation:
      "The new laminate flooring turned a cold, unwelcoming basement into a cozy and inviting living space, effectively adding a new level of usable square footage to the home.",
    keyInfo: [
      { label: "Service", value: "Laminate Installation" },
      { label: "Area", value: "1400 sq. ft." },
      { label: "Duration", value: "1 Days" },
    ],
  },
  {
    id: 4,
    title: "Elegant Staircase Upgrade",
    location: "Mundelein, IL",
    staticImage: "gallery10",
    challenge:
      "The main staircase had worn, outdated carpeting that didn't match the home's hardwood floors. The goal was to create a seamless and elegant transition between the first and second floors.",
    approach:
      "We removed the old carpet, repaired the underlying structure, and installed brand new solid oak treads and risers. The wood was stained and finished to perfectly match the existing hardwood flooring.",
    transformation:
      "The new staircase became a stunning architectural feature, elevating the home's entryway and creating a cohesive, high-end look throughout.",
    keyInfo: [
      { label: "Service", value: "Stair Installation" },
      { label: "Area", value: "15 Stairs" },
      { label: "Duration", value: "3 Days" },
    ],
    testimonial: {
      quote:
        "The staircase is now the centerpiece of our home. The attention to detail was incredible. It looks like it was always meant to be this way.",
      author: "The Garcia Family, Mundelein, IL",
    },
  },
  {
    id: 5,
    title: "LVP Refresh for Living Room and Foyer",
    location: "Kendall County, IL",
    beforeImage: "aft4",
    afterImage: "pre4",
    challenge:
      "The homeowners wanted to update their living room and foyer with a flooring solution that was both stylish and durable enough to handle daily traffic and occasional spills.",
    approach:
      "We helped the homeowners select a beautiful LVP product that complemented their décor and installed it seamlessly in both the living room and foyer areas.",
    transformation:
      "The new LVP flooring brought a fresh, modern look to the entry and main living space. The homeowners now enjoy a cohesive, easy-to-maintain surface that stands up to everyday life.",
    keyInfo: [
      { label: "Service", value: "LVP Installation" },
      { label: "Area", value: "500 sq. ft." },
      { label: "Duration", value: "1 Day" },
    ],
  },
]
