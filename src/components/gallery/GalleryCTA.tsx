import React from "react"
import { Link } from "react-router-dom"

const GalleryCTA: React.FC = () => {
  return (
    <section className="bg-warm-taupe py-20 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-charcoal-gray">
          Inspired by What You See?
        </h2>
        <p className="text-xl font-serif max-w-2xl mx-auto mb-8 text-charcoal-gray">
          Your home could be our next masterpiece. Let's talk about the
          possibilities for your space.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-forest-green text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors duration-300"
        >
          REQUEST YOUR FREE CONSULATION
        </Link>
      </div>
    </section>
  )
}

export default GalleryCTA
