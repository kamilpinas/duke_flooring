import React from "react"
import { Link } from "react-router-dom"

const DeepCleaningCTA: React.FC = () => {
  return (
    <section className="bg-warm-taupe py-20">
      <div className="container mx-auto px-4 text-center">
        <span className="inline-block bg-forest-green text-white font-semibold px-5 py-2 rounded-full mb-6 font-sans uppercase tracking-wide text-sm">
          20% Off Your First Deep Cleaning
        </span>
        <h2 className="text-4xl font-bold text-charcoal-gray mb-4 font-sans">
          Ready to See How Clean Your Floors Can Be?
        </h2>
        <p className="text-xl font-serif text-charcoal-gray max-w-3xl mx-auto mb-8">
          Don't wait for dirt and grime to wear down your floors. Book your
          first deep cleaning today and let us show you the difference a
          professional Bona clean makes — for 20% off. Free estimates, flexible
          scheduling, local &amp; family owned.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-forest-green text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors duration-300"
        >
          SCHEDULE MY DEEP CLEAN
        </Link>
      </div>
    </section>
  )
}

export default DeepCleaningCTA
