import React from "react"

const FounderStorySection: React.FC = () => {
  return (
    <section className="bg-off-white px-8 py-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div>
          <img
            src="about.webp" // Placeholder for founder's portrait
            alt="Eryk W., Founder of Duke Flooring"
            className="rounded-lg shadow-md w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-charcoal-gray">Our Story</h2>
          <p className="mt-6 text-lg leading-relaxed font-serif text-charcoal-gray">
            From my first job in the trades, I learned a simple truth: the
            quality of a home is felt in its details. I saw an opportunity to
            build a different kind of flooring company in our community—one that
            wasn't about quick sales, but about lasting relationships and
            uncompromising quality.
          </p>
          <p className="mt-4 text-lg leading-relaxed font-serif text-charcoal-gray">
            That's why I started Duke Flooring. It’s built on my family's name
            and my personal commitment to every single client. We believe a new
            floor is an investment in your home's future and your family's
            happiness. Our job is to honor that investment with meticulous work,
            honest communication, and a final result that you will love for
            decades.
          </p>
          <div className="mt-8">
            <p className="font-serif italic text-2xl text-charcoal-gray">
              Erik W.
            </p>
            <p className="text-charcoal-gray mt-1">
              Founder & Lead Craftsman, Duke Flooring
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FounderStorySection
