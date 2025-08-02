export interface GalleryImage {
  id: number
  src: string
  category: "LVP" | "Hardwood" | "Laminate" | "Stairs"
  title: string
  alt: string
}

export const images: GalleryImage[] = [
  {
    id: 1,
    src: "https://free-images.com/lg/9cc8/house_decor_circular_room.jpg",
    category: "LVP",
    title: "Modern LVP in Kitchen",
    alt: "LVP flooring in a modern kitchen",
  },
  {
    id: 2,
    src: "https://free-images.com/lg/7bd3/living_room_room_interior_0.jpg",
    category: "Hardwood",
    title: "Classic Oak Hardwood",
    alt: "Classic oak hardwood flooring in a living room",
  },
  {
    id: 3,
    src: "https://free-images.com/lg/d485/living_room_interior_atmosphere_4.jpg",
    category: "Laminate",
    title: "Durable Laminate Flooring",
    alt: "Laminate flooring in a bedroom",
  },
  {
    id: 4,
    src: "https://free-images.com/lg/267e/stairs_house_decoration_paint.jpg",
    category: "Stairs",
    title: "Refinished Oak Stairs",
    alt: "Beautifully refinished oak stairs",
  },
  {
    id: 5,
    src: "https://free-images.com/lg/c681/living_room_interior_atmosphere_6.jpg",
    category: "LVP",
    title: "LVP in Bathroom",
    alt: "LVP flooring in a bathroom",
  },
  {
    id: 6,
    src: "https://free-images.com/lg/9f10/low_angle_view_from.jpg",
    category: "Hardwood",
    title: "Cherry Hardwood Dining Room",
    alt: "Cherry hardwood flooring in a dining room",
  },
  {
    id: 7,
    src: "https://free-images.com/lg/d918/kitchen_modern_illuminated_351094.jpg",
    category: "Laminate",
    title: "Laminate in Hallway",
    alt: "Laminate flooring in a hallway",
  },
  {
    id: 8,
    src: "https://free-images.com/lg/7213/homes_for_sale_stairs.jpg",
    category: "Stairs",
    title: "Modern Staircase",
    alt: "Modern staircase with new flooring",
  },
  {
    id: 9,
    src: "https://free-images.com/lg/a714/apartment_interior_dining_room.jpg",
    category: "LVP",
    title: "LVP in Living Room",
    alt: "LVP flooring in a living room",
  },
  {
    id: 10,
    src: "https://free-images.com/lg/18ab/home_interior_room_house_1.jpg",
    category: "Hardwood",
    title: "Maple Hardwood Bedroom",
    alt: "Maple hardwood flooring in a bedroom",
  },
  {
    id: 11,
    src: "https://free-images.com/lg/7683/bathroom_tiles_toilet_sink.jpg",
    category: "Laminate",
    title: "Laminate Office Space",
    alt: "Laminate flooring in an office space",
  },
  {
    id: 12,
    src: "https://free-images.com/lg/aabd/staircase_stair_wooden_architecture.jpg",
    category: "Stairs",
    title: "Carpeted Stairs with Wood Trim",
    alt: "Carpeted stairs with wood trim",
  },
]
