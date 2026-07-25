export interface CleaningBenefit {
  title: string
  description: string
}

export interface CleaningStep {
  step: number
  title: string
  description: string
}

// Types of hard floors our deep cleaning service is safe for.
export const cleanableFloors: string[] = [
  "Hardwood",
  "Vinyl (LVP)",
  "Laminate",
  "Ceramic Tile & Grout",
]

// The core reasons a professional deep clean is worth booking.
export const cleaningBenefits: CleaningBenefit[] = [
  {
    title: "Removes Deep-Down Dirt",
    description:
      "Everyday mopping only reaches the surface. Our process lifts the ground-in grime, dust, and residue that settle into the pores of your floor and the lines of your grout.",
  },
  {
    title: "Extends Your Floor's Lifespan",
    description:
      "Trapped grit acts like sandpaper underfoot, slowly scratching and dulling your finish. Removing it protects the surface and helps your floors last years longer.",
  },
  {
    title: "Restores Natural Beauty",
    description:
      "See the true color and shine return as built-up haze and film are washed away, leaving your hardwood, vinyl, laminate, and tile looking like new.",
  },
  {
    title: "A Healthier Home",
    description:
      "Dirt, allergens, and bacteria hide in floor texture and grout. A deep clean creates a fresher, healthier surface for your family, kids, and pets.",
  },
]

// The step-by-step service, mirroring the flyer's process.
export const cleaningProcess: CleaningStep[] = [
  {
    step: 1,
    title: "Deep Vacuum",
    description:
      "We start by removing all loose dirt, dust, and debris so nothing gets ground back into your floor during cleaning.",
  },
  {
    step: 2,
    title: "Power Scrub with Bona",
    description:
      "Using the Bona Power Scrubber and Bona Deep Clean Solution, we break down grime trapped in the pores of your floor and along grout lines.",
  },
  {
    step: 3,
    title: "Extract & Rinse",
    description:
      "The loosened dirt and residue are lifted and extracted, so you're left with a genuinely clean surface — not just pushed-around water.",
  },
  {
    step: 4,
    title: "Protect & Shine",
    description:
      "We finish by leaving your floors clean, refreshed, and protected — bright, healthy, and ready to enjoy.",
  },
]
