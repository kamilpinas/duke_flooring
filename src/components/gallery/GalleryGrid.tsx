import React, { useState } from "react"

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { images, GalleryImage } from "../../data/galleryData"
import FullscreenImageViewer from "./FullscreenImageViewer"

const GalleryGrid: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl)
  }

  const handleCloseViewer = () => {
    setSelectedImage(null)
  }

  const categories = ["All", "LVP", "Hardwood", "Laminate", "Stairs"]

  const filteredImages =
    activeFilter === "All"
      ? images
      : images.filter((image) => image.category === activeFilter)

  const breakpointColumnsObj = {
    350: 1,
    750: 1,
    900: 2,
    1200: 3,
  }

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex justify-center space-x-4 mb-12 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-6 py-2 rounded-lg font-semibold transition-colors duration-300
              ${
                activeFilter === category
                  ? "bg-forest-green text-white"
                  : "bg-gray-200 text-charcoal-gray hover:bg-gray-300"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      <ResponsiveMasonry columnsCountBreakPoints={breakpointColumnsObj}>
        <Masonry gutter="30px">
          {filteredImages.map((image: GalleryImage) => (
            <div
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group transition-all duration-700 ease-in-out transform hover:scale-105 hover:shadow-xl"
              onClick={() => handleImageClick(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-bold text-center">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>

      <FullscreenImageViewer
        imageUrl={selectedImage}
        onClose={handleCloseViewer}
      />
    </section>
  )
}

export default GalleryGrid
