import React from "react"

const AboutHero: React.FC = () => {
  return (
    <section className="bg-charcoal-gray py-20 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-off-white text-center">
          Built on a Foundation of Trust
        </h1>
        <p className="text-lg sm:text-xl mt-4 max-w-3xl mx-auto text-center font-serif text-off-white">
          We're more than a flooring company. We're a local, family-owned
          business dedicated to bringing quality, integrity, and timeless
          craftsmanship into every Volo home.
        </p>
      </div>
    </section>
  )
}

export default AboutHero
