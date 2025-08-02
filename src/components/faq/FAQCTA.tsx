import React from "react"
import { Link } from "react-router-dom"

const FAQCTA: React.FC = () => {
  return (
    <section className="bg-warm-taupe py-20 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-charcoal-gray">
          Still Have a Question?
        </h2>
        <p className="text-xl font-serif max-w-2xl mx-auto mb-8 text-charcoal-gray">
          We're happy to help. Reach out to us directly, and our team will get
          back to you as soon as possible.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-forest-green text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors duration-300"
        >
          CONTACT US
        </Link>
      </div>
    </section>
  )
}

export default FAQCTA
