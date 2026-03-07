import React from "react"

const GallerySection: React.FC = () => {
  const images = [
    "gallery1",
    "gallery12",
    "gallery3",
    "gallery7",
    "gallery5",
    "gallery11",
  ]

  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold mb-12 text-charcoal-gray text-center">
        A Glimpse of Our Craft
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <picture>
              <source
                srcSet={`/images/optimized/${image}-400w.webp 400w, /images/optimized/${image}-800w.webp 800w, /images/optimized/${image}-1200w.webp 1200w`}
                type="image/webp"
                sizes="(max-width: 640px) 400px, (max-width: 1024px) 800px, (max-width: 1280px) 1200px, 1600px"
              />
              <img
                src={`/images/optimized/${image}-1600w.webp`}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                loading="lazy"
                sizes="(max-width: 640px) 400px, (max-width: 1024px) 800px, (max-width: 1280px) 1200px, 1600px"
              />
            </picture>
          </div>
        ))}
      </div>
    </section>
  )
}

export default GallerySection
