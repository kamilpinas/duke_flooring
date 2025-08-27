import React from "react"

const GalleryHero: React.FC = () => {
  return (
    <section className="bg-charcoal-gray py-20 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-off-white text-center">
          Our Craft in Pictures
        </h1>
        <p className="text-lg sm:text-xl mt-4 max-w-3xl mx-auto text-center font-serif text-off-white">
          They say a picture is worth a thousand words. Explore our portfolio of
          completed projects in Chicagoland and beyond, and see the Duke
          Flooring difference for yourself.
        </p>
      </div>
    </section>
  )
}

export default GalleryHero
