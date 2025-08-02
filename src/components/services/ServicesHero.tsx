import React from "react"

const ServicesHero: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center py-20 md:py-24"
      style={{
        backgroundImage:
          "url('https://via.placeholder.com/1920x800?text=Craftsman+Laying+Floor')",
      }}
    >
      <div className="absolute inset-0 bg-charcoal-gray"></div>
      <div className="relative container mx-auto px-4 z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-off-white text-center">
          Our Flooring Expertise, Detailed
        </h1>
        <p className="text-xl mt-4 max-w-3xl mx-auto text-center font-serif text-off-white">
          We believe in doing one thing and doing it perfectly. Explore our
          specialized flooring services below to find the ideal solution for
          your Volo home.
        </p>
      </div>
    </section>
  )
}

export default ServicesHero
