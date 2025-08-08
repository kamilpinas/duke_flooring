import React from "react"

const GallerySection: React.FC = () => {
  const images = [
    "gallery1.webp",
    "gallery12.webp",
    "gallery3.webp",
    "gallery7.webp",
    "gallery5.webp",
    "gallery11.webp",
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
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default GallerySection
