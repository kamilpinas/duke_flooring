import React from "react"
import { cleanableFloors } from "../../data/cleaningData"

const BonaSection: React.FC = () => {
  return (
    <section className="bg-off-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal-gray font-sans">
            We Clean with Bona
          </h2>
          <p className="mt-4 text-lg font-serif text-charcoal-gray">
            We don't cut corners on the products we use. Our deep cleaning is
            powered by the trusted, industry-leading{" "}
            <span className="font-semibold">Bona</span> system — specifically
            the <span className="font-semibold">Bona Deep Clean Solution</span>{" "}
            applied with the{" "}
            <span className="font-semibold">Bona Power Scrubber</span> for a
            deeper, more thorough result than any mop can achieve.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-warm-taupe rounded-lg shadow-md overflow-hidden">
            <picture>
              <source
                srcSet={`/images/optimized/bona_power_scrubber-400w.webp 400w, /images/optimized/bona_power_scrubber-800w.webp 800w, /images/optimized/bona_power_scrubber-1200w.webp 1200w, /images/optimized/bona_power_scrubber-1600w.webp 1600w`}
                type="image/webp"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <img
                src="/images/optimized/bona_power_scrubber-800w.webp"
                alt="The Bona Power Scrubber deep cleaning a hardwood floor"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            </picture>
            <div className="p-6">
              <h3 className="text-xl font-bold font-sans mb-2 text-charcoal-gray">
                Bona Power Scrubber
              </h3>
              <p className="font-serif text-charcoal-gray">
                Professional equipment that agitates and lifts ground-in dirt
                from the pores of your floor and deep within grout lines — the
                buildup a standard mop simply leaves behind.
              </p>
            </div>
          </div>
          <div className="bg-warm-taupe rounded-lg shadow-md overflow-hidden">
            <picture>
              <source
                srcSet={`/images/optimized/bona_deep_clean-400w.webp 400w, /images/optimized/bona_deep_clean-800w.webp 800w, /images/optimized/bona_deep_clean-1200w.webp 1200w, /images/optimized/bona_deep_clean-1600w.webp 1600w`}
                type="image/webp"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <img
                src="/images/optimized/bona_deep_clean-800w.webp"
                alt="Bona Deep Clean Solution for wooden floors"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            </picture>
            <div className="p-6">
              <h3 className="text-xl font-bold font-sans mb-2 text-charcoal-gray">
                Bona Deep Clean Solution
              </h3>
              <p className="font-serif text-charcoal-gray">
                A powerful, floor-safe cleaning solution formulated to break
                down grime and residue without harming your finish or leaving a
                dulling film.
              </p>
            </div>
          </div>
        </div>

        {/* GREENGUARD Gold — safety highlight */}
        <div className="mt-8 max-w-4xl mx-auto bg-warm-taupe rounded-lg p-6 md:p-8 shadow-md border-l-4 border-forest-green flex flex-col sm:flex-row items-center gap-6">
          <img
            src="/images/raw/greenguard.png"
            alt="GREENGUARD Gold certification — product certified for low chemical emissions"
            className="w-28 h-auto flex-shrink-0"
            loading="lazy"
          />
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold font-sans mb-1 text-charcoal-gray">
              GREENGUARD Gold Certified &amp; Family Safe
            </h3>
            <p className="font-serif text-charcoal-gray">
              The Bona Deep Clean Solution is{" "}
              <span className="font-semibold">GREENGUARD Gold certified</span>,
              meeting strict standards for low chemical emissions and indoor air
              quality. That means a powerful clean that's genuinely safe for the
              people and pets in your home — no harsh, unsafe chemicals left
              behind.
            </p>
          </div>
        </div>

        {/* Floor types + residential/commercial */}
        <div className="mt-12 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold font-sans mb-6 text-charcoal-gray">
            Safe for a Wide Range of Hard Floors
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {cleanableFloors.map((floor) => (
              <span
                key={floor}
                className="inline-flex items-center gap-2 bg-warm-taupe text-charcoal-gray font-semibold px-5 py-2.5 rounded-full font-sans"
              >
                <svg
                  className="w-5 h-5 text-forest-green"
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
                {floor}
              </span>
            ))}
          </div>
          <p className="mt-6 font-serif text-charcoal-gray">
            Proudly serving both{" "}
            <span className="font-semibold">residential</span> and{" "}
            <span className="font-semibold">commercial</span> customers across
            Lake County and the surrounding areas.
          </p>
        </div>
      </div>
    </section>
  )
}

export default BonaSection
