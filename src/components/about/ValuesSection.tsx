import React from "react"

const ValuesSection: React.FC = () => {
  return (
    <section className="bg-warm-taupe py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12 text-charcoal-gray">
          What We Stand For
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Value 1 */}
          <div className="p-6 bg-off-white rounded-lg shadow-md">
            <div className="flex justify-center items-center mb-4">
              <svg
                className="w-12 h-12 text-forest-green"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                ></path>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-charcoal-gray mb-4">
              Uncompromising Craftsmanship
            </h3>
            <p className="text-lg font-serif text-charcoal-gray">
              Every cut is precise, every plank is perfectly placed. We treat
              your home as if it were our own, ensuring a flawless finish that
              stands the test of time.
            </p>
          </div>
          {/* Value 2 */}
          <div className="p-6 bg-off-white rounded-lg shadow-md">
            <div className="flex justify-center items-center mb-4">
              <svg
                className="w-12 h-12 text-forest-green"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                ></path>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-charcoal-gray mb-4">
              Radical Transparency
            </h3>
            <p className="text-lg font-serif text-charcoal-gray">
              No hidden fees, no surprise charges. We provide detailed, honest
              estimates and keep you informed at every step. Your trust is our
              most valuable asset.
            </p>
          </div>
          {/* Value 3 */}
          <div className="p-6 bg-off-white rounded-lg shadow-md">
            <div className="flex justify-center items-center mb-4">
              <svg
                className="w-12 h-12 text-forest-green"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                ></path>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-charcoal-gray mb-4">
              Community Focus
            </h3>
            <p className="text-lg font-serif text-charcoal-gray">
              We're proud to live and work in the Chicagoland area. Our
              reputation is built on the satisfaction of our neighbors, and
              we're committed to enhancing our local community.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ValuesSection
