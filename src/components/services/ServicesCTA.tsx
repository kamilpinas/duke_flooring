import React from "react"
import { Link } from "react-router-dom"

const ServicesCTA: React.FC = () => {
  return (
    <section className="bg-warm-taupe py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-charcoal-gray mb-4 font-sans">
          Have a Service in Mind?
        </h2>
        <p className="text-xl font-serif text-charcoal-gray max-w-3xl mx-auto mb-8">
          Whether you've chosen the perfect material or need expert guidance,
          our team is ready to help. Let's find the ideal solution for your
          home.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-forest-green text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors duration-300"
        >
          GET A FREE CONSULTATION
        </Link>
      </div>
    </section>
  )
}

export default ServicesCTA
