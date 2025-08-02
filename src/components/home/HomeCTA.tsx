import React from "react"
import { Link } from "react-router-dom"

const HomeCTA: React.FC = () => {
  return (
    <section className="bg-warm-taupe py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-charcoal-gray mb-4 font-sans">
          Ready to See the Difference?
        </h2>
        <p className="text-xl font-serif text-charcoal-gray max-w-3xl mx-auto mb-8">
          Your beautiful new floor is just one step away. Contact us for a free,
          no-pressure consultation and estimate. Let's discuss your project and
          bring your vision to life.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-forest-green text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors duration-300"
        >
          REQUEST MY FREE ESTIMATE NOW
        </Link>
      </div>
    </section>
  )
}

export default HomeCTA
