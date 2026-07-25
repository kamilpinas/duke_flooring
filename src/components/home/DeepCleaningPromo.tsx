import React from "react"
import { Link } from "react-router-dom"
import DeepCleanBeforeAfter from "../cleaning/DeepCleanBeforeAfter"

const DeepCleaningPromo: React.FC = () => {
  return (
    <section className="py-20 bg-warm-taupe">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Before/after slider */}
          <div className="order-2 lg:order-1">
            <DeepCleanBeforeAfter />
            <p className="mt-3 text-center text-sm font-serif text-charcoal-gray/70">
              Drag to reveal the difference — the same floor, before and after.
            </p>
          </div>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <span className="inline-block bg-forest-green text-white font-semibold px-4 py-1.5 rounded-full mb-4 font-sans uppercase tracking-wide text-sm">
              New Service · 20% Off First Clean
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-gray font-sans">
              Deep Cleaning for Hard Floors
            </h2>
            <p className="mt-4 text-lg leading-relaxed font-serif text-charcoal-gray">
              Your floors deserve more than a mop. Using professional{" "}
              <span className="font-semibold">Bona</span> products and the{" "}
              <span className="font-semibold">Bona Power Scrubber</span>, we
              lift the deep-down dirt and grime a regular clean leaves behind —
              restoring the natural beauty of your hardwood, vinyl, laminate,
              and tile, and helping them last for years longer.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "GREENGUARD Gold certified — safe for family & pets",
                "Removes built-up dirt from pores & grout lines",
                "For hardwood, vinyl, laminate & ceramic tile",
                "Residential & commercial",
              ].map((point) => (
                <li key={point} className="flex items-start">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-forest-green mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="font-semibold text-charcoal-gray">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/deep-cleaning"
                className="inline-block bg-forest-green text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#244c25] transition-colors duration-300 text-center"
              >
                LEARN ABOUT DEEP CLEANING
              </Link>
              <Link
                to="/contact"
                className="inline-block bg-off-white border border-forest-green text-forest-green px-8 py-4 rounded-lg text-lg font-semibold hover:bg-warm-taupe transition-colors duration-300 text-center"
              >
                Book 20% Off First Clean
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DeepCleaningPromo
