import React from "react"

const GallerySection: React.FC = () => {
  const images = [
    "https://free-images.com/lg/9cc8/house_decor_circular_room.jpg",
    "https://free-images.com/lg/7bd3/living_room_room_interior_0.jpg",
    "https://free-images.com/lg/d485/living_room_interior_atmosphere_4.jpg",
    "https://free-images.com/lg/4f1b/interior_room_luxury_sofa.jpg",
    "https://free-images.com/lg/c681/living_room_interior_atmosphere_6.jpg",
    "https://free-images.com/lg/9f10/low_angle_view_from.jpg",
  ]

  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold mb-12 text-charcoal-gray text-center">
        A Glimpse of Our Craft
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default GallerySection
