import React from "react"

const ServiceAreaSection: React.FC = () => {
  const serviceAreas = [
    "Chicagoland",
    "Grayslake",
    "Mundelein",
    "Lake Villa",
    "Round Lake",
    "Wauconda",
    "Fox Lake",
    "Libertyville",
    "And surrounding Lake County communities",
  ]

  return (
    <section className="bg-warm-taupe py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-charcoal-gray mb-4 font-sans">
              Proudly Serving Volo & Lake
            </h2>
            <p className="text-lg font-serif text-charcoal-gray mb-8">
              We're your neighbors, dedicated to providing exceptional flooring
              services to our local community. If you're in or around these
              areas, we'd love to hear from you.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {serviceAreas.map((area, index) => (
                <div key={index} className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-forest-green flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-charcoal-gray">{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Stylized Map */}
          <div className="flex items-center justify-center p-8 bg-off-white rounded-lg shadow-md">
            {/* This is a placeholder SVG. A more detailed/accurate map of Lake County, IL could be used here. */}
            <svg
              className="w-full h-auto text-charcoal-gray"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 50,5 A 45,45 0 1 1 50,95 A 45,45 0 1 1 50,5 Z"
                fill="#EAE7E2"
                stroke="#2F2F2F"
                strokeWidth="1"
              />
              <circle cx="50" cy="50" r="5" fill="#2C5F2D" />
              <text
                x="50"
                y="53"
                textAnchor="middle"
                fontSize="5"
                fill="white"
                fontWeight="bold"
              >
                Chicagoland
              </text>
              <text
                x="50"
                y="30"
                textAnchor="middle"
                fontSize="4"
                fill="#2F2F2F"
                fontFamily="Poppins"
              >
                Lake County
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceAreaSection
