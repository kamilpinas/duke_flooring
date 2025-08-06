import React from "react"

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-off-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-charcoal-gray mb-12 font-sans">
          Our Premier Flooring Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <svg
              className="w-12 h-12 mx-auto mb-4 text-forest-green"
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
            <h3 className="text-xl font-bold mb-2 font-sans">
              Luxury Vinyl Plank (LVP)
            </h3>
            <p className="text-charcoal-gray font-serif">
              The perfect blend of stunning realism and waterproof durability.
              Ideal for any room, including kitchens and basements.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <svg
              className="w-12 h-12 mx-auto mb-4 text-forest-green"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <h3 className="text-xl font-bold mb-2 font-sans">
              Pre-finished Hardwood
            </h3>
            <p className="text-charcoal-gray font-serif">
              Timeless elegance and warmth. Our pre-finished options offer a
              faster, cleaner installation without compromising on classic
              beauty.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <svg
              className="w-12 h-12 mx-auto mb-4 text-forest-green"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10h18M3 14h18m-9-4v8"
              ></path>
            </svg>
            <h3 className="text-xl font-bold mb-2 font-sans">
              Laminate Flooring
            </h3>
            <p className="text-charcoal-gray font-serif">
              Achieve the look of premium wood or stone at a great value. Highly
              resistant to scratches and fading, perfect for busy households.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <svg
              className="w-12 h-12 mx-auto mb-4 text-forest-green"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              ></path>
            </svg>
            <h3 className="text-xl font-bold mb-2 font-sans">
              Stair Installation & Upgrades
            </h3>
            <p className="text-charcoal-gray font-serif">
              Create a seamless transition between floors. We expertly install
              and upgrade stairs to match your new flooring perfectly.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <svg
              className="w-12 h-12 mx-auto mb-4 text-forest-green"
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
            <h3 className="text-xl font-bold mb-2 font-sans">
              Subfloor Preparation
            </h3>
            <p className="text-charcoal-gray font-serif">
              A perfect floor requires a perfect foundation. We provide expert
              subfloor leveling and preparation to ensure a flawless, durable,
              and long-lasting installation for any type of flooring.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <svg
              className="w-12 h-12 mx-auto mb-4 text-forest-green"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4v16h16V4H4zm8 4h4v4h-4V8zm0 6h4v4h-4v-4zM8 8h4v4H8V8zm0 6h4v4H8v-4z"
              ></path>
            </svg>
            <h3 className="text-xl font-bold mb-2 font-sans">
              Ceramic Tile Installation
            </h3>
            <p className="text-charcoal-gray font-serif">
              From classic kitchens to modern bathrooms, we provide precise and
              beautiful ceramic tile installation. Our meticulous approach
              ensures perfect grout lines and a durable, water-resistant finish
              that enhances any space.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
