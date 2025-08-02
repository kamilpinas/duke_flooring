import React from "react"

const FAQHero: React.FC = () => {
  return (
    <section className="bg-charcoal-gray py-20 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-off-white text-center">
          Frequently Asked Questions
        </h1>
        <p className="text-lg sm:text-xl mt-4 max-w-3xl mx-auto text-center font-serif text-off-white">
          Your questions, answered. We believe in being transparent and helpful
          throughout your entire flooring journey.
        </p>
      </div>
    </section>
  )
}

export default FAQHero
