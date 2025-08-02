export interface Project {
  id: number
  title: string
  location: string
  beforeImage: string
  afterImage: string
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
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Historic Hardwood Restoration in Lake Villa",
    location: "Lake Villa, IL",
    beforeImage: "pre1.webp",
    afterImage: "aft1.webp",
    challenge:
      "The homeowners' 50-year-old hardwood floors were scratched and faded. They wanted to restore their home's original character without replacing the authentic wood.",
    approach:
      "We implemented a dustless refinishing process, meticulously sanding the surface, applying a custom stain, and sealing it with a durable, modern, low-sheen polyurethane finish.",
    transformation:
      "The restoration revealed the wood's stunning natural grain, transforming the space from tired to timeless and protecting it for decades to come.",
    keyInfo: [
      { label: "Service", value: "Hardwood Refinishing" },
      { label: "Area", value: "750 sq. ft." },
      { label: "Duration", value: "4 Days" },
    ],
    testimonial: {
      quote:
        "It's like we have brand new floors, but with all the history we fell in love with. Duke Flooring's craftsmanship is second to none.",
      author: "The Johnson Family, Lake Villa, IL",
    },
  },
  {
    id: 2,
    title: "Modern LVP Upgrade for a Busy Family",
    location: "Volo, IL",
    beforeImage: "pre2.webp",
    afterImage: "aft2.webp",
    challenge:
      "A family with young children and pets needed a flooring solution that was 100% waterproof, scratch-resistant, and stylish for their main living area and kitchen.",
    approach:
      "We installed a premium Luxury Vinyl Plank (LVP) with a thick wear layer and an attached underlayment for sound dampening. The chosen style mimicked natural white oak.",
    transformation:
      "The new LVP flooring provided a bright, airy feel to the home while giving the family peace of mind with its durability and easy maintenance.",
    keyInfo: [
      { label: "Service", value: "LVP Installation" },
      { label: "Area", value: "1,200 sq. ft." },
      { label: "Duration", value: "3 Days" },
    ],
    testimonial: {
      quote:
        "We can finally relax and not worry about spills or scratches. The new floors look amazing and are so easy to clean. The team was fantastic!",
      author: "The Peterson Family, Volo, IL",
    },
  },
  {
    id: 3,
    title: "Basement Transformation with Laminate",
    location: "Grayslake, IL",
    beforeImage: "pre3.webp",
    afterImage: "aft3.webp",
    challenge:
      "A damp, unfinished basement needed to be converted into a functional family room. The flooring had to be moisture-resistant, durable, and comfortable underfoot.",
    approach:
      "We installed a high-quality laminate flooring with a built-in vapor barrier. This provided a warm, wood-like appearance while protecting against moisture from the concrete subfloor.",
    transformation:
      "The new laminate flooring turned a cold, unwelcoming basement into a cozy and inviting living space, effectively adding a new level of usable square footage to the home.",
    keyInfo: [
      { label: "Service", value: "Laminate Installation" },
      { label: "Area", value: "600 sq. ft." },
      { label: "Duration", value: "2 Days" },
    ],
  },
  {
    id: 4,
    title: "Elegant Staircase Refinishing",
    location: "Mundelein, IL",
    beforeImage: "pre5.webp",
    afterImage: "aft5.webp",
    challenge:
      "The main staircase had worn, outdated carpeting that didn't match the home's hardwood floors. The goal was to create a seamless and elegant transition between the first and second floors.",
    approach:
      "We removed the old carpet, repaired the underlying structure, and installed new solid oak treads. The wood was then stained and finished to perfectly match the existing hardwood flooring.",
    transformation:
      "The refinished staircase became a stunning architectural feature, elevating the home's entryway and creating a cohesive, high-end look throughout.",
    keyInfo: [
      { label: "Service", value: "Stair Refinishing" },
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
    title: "Full Home LVP for New Construction",
    location: "Volo, IL",
    beforeImage: "pre4.webp",
    afterImage: "aft4.webp",
    challenge:
      "A new construction home required a single, cohesive flooring solution that was both beautiful and durable enough to handle the demands of a growing family.",
    approach:
      "We worked with the homeowners to select a single LVP product that was used throughout the entire home, from the kitchen and living areas to the bedrooms and bathrooms.",
    transformation:
      "The consistent flooring created a seamless flow and a sense of spaciousness. The homeowners got a high-end look with the practical benefits of LVP, perfect for a modern family.",
    keyInfo: [
      { label: "Service", value: "LVP Installation" },
      { label: "Area", value: "2,200 sq. ft." },
      { label: "Duration", value: "5 Days" },
    ],
  },
]
