import React from "react"
import { cleaningBenefits } from "../../data/cleaningData"

// Simple check-badge icon reused for each benefit card.
const CheckBadge = () => (
  <svg
    className="w-10 h-10 mx-auto mb-4 text-forest-green"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    ></path>
  </svg>
)

const DeepCleaningBenefits: React.FC = () => {
  return (
    <section className="bg-warm-taupe py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal-gray mb-4 font-sans">
          Why a Professional Deep Clean?
        </h2>
        <p className="text-lg font-serif text-charcoal-gray max-w-3xl mx-auto mb-12">
          A deep clean does more than make your floors look great — it protects
          them, your home, and your family.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cleaningBenefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-off-white p-6 rounded-lg shadow-md text-center"
            >
              <CheckBadge />
              <h3 className="text-xl font-bold mb-2 font-sans text-charcoal-gray">
                {benefit.title}
              </h3>
              <p className="text-charcoal-gray font-serif">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DeepCleaningBenefits
