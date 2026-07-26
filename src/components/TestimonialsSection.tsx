import React, { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import type { Swiper as SwiperClass } from "swiper/types"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

interface Testimonial {
  quote: string
  // Full name as it appears on Google; displayed as "First L." for consistency.
  name: string
}

// Real 5-star Google reviews for Duke Flooring Inc.
const testimonials: Testimonial[] = [
  {
    quote:
      "I could not be happier with the quality of work and we are very impressed and I would highly recommend Eryk! Not only very impressive he came to give me a quote but through the whole process from start to finish was top notch!",
    name: "Brandon Kinkelaar",
  },
  {
    quote:
      "Eryk was very professional and the work he did was great. He gave competitive pricing and explained the entire process thoroughly. Excellent communication throughout the process and was very responsive whenever I had questions. Would highly recommend Duke Flooring.",
    name: "Zachary Hoijer",
  },
  {
    quote:
      "If you're looking to install new flooring, I highly recommend Duke Flooring. Eryk and his team were professional, responsive, and a pleasure to work with from start to finish. Their pricing was competitive compared to other quotes I received, and the quality of their work exceeded my expectations. They leveled my basement floors and installed LVP flooring, and I couldn't be happier with the results. The crew was punctual, efficient, and left the space spotless when the job was done.",
    name: "Andre Birkus",
  },
  {
    quote:
      "Eryk and his team at Duke Flooring did an outstanding job installing the LVP in my home. They expanded the existing LVP we had in our kitchen to include our dining room, back hallway, and first floor powder room and laundry area. We also added LVP in the front foyer. They were even able to fix and level out a cement divot issue in the dining room slab foundation. The transition to the living room carpet is perfect! It was a great experience from first contact through install and cleanup. I highly recommend Duke Flooring and will be contacting them again to install flooring on our 2nd floor soon.",
    name: "Heidi M",
  },
  {
    quote:
      "Couldn't be happier with the end result. My old flooring in my dining room was sitting 1 inch lower than the rest of the house, but Duke Flooring was up to the challenge. Now everything is level, with no transition pieces between rooms, like it should be for an area less than 1000 sq ft. They also installed my baseboards and quarter rounds. They could easily be charging more for the quality work they do. Installation took place 3 years ago and I have absolutely no issues with the flooring.",
    name: "Zoomboxer",
  },
  {
    quote:
      "I couldn't be happier with the work! Eryk did an amazing job installing our new floors. He is professional, detail-oriented, and clearly takes pride in his craft. He showed up on time, communicated every step of the process, purchased and carried the materials for me and left everything spotless when the job was done. He recommended the material that fits our budget and needs and the new flooring looks beautiful and completely transformed our space. Highly recommend to anyone looking for quality work at a fair price!",
    name: "Cooper Li",
  },
  {
    quote:
      "We had our flooring upgraded from Carpet to Hardwood. Eryk and Pablo did an amazing job with competitive pricing. More than pricing, they are friendly, understandable, responsible and on time for the work. They work based on our available schedule.",
    name: "Madhu Yathapu",
  },
  {
    quote:
      "I couldn't be happier with the flooring installation! From start to finish, their team was professional, communicative, and truly skilled. They helped me choose the perfect flooring for our home, offered expert guidance, and made the process smooth!",
    name: "Jessica Sobecki",
  },
]

// Format author as "First L." (or just the single name for one-word handles).
const formatAuthor = (name: string): string => {
  const parts = name.trim().split(/\s+/)
  const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)
  if (parts.length === 1) return cap(parts[0])
  return `${cap(parts[0])} ${parts[parts.length - 1].charAt(0).toUpperCase()}.`
}

const StarRow = () => (
  <div className="flex items-center mb-4">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className="w-5 h-5 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    ))}
  </div>
)

// Circular nav button placed in the side gutter, outside the cards.
const NavButton = React.forwardRef<
  HTMLButtonElement,
  { side: "left" | "right"; label: string }
>(({ side, label }, ref) => (
  <button
    ref={ref}
    aria-label={label}
    type="button"
    className={`hidden md:flex absolute top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-forest-green text-white items-center justify-center shadow-lg hover:bg-[#244c25] hover:scale-105 transition-all duration-200 ${
      side === "left" ? "left-0" : "right-0"
    }`}
  >
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={side === "left" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
      />
    </svg>
  </button>
))
NavButton.displayName = "NavButton"

const TestimonialsSection = () => {
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)

  return (
    <section id="testimonials" className="py-20 bg-off-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-charcoal-gray mb-3 font-sans">
          What Our Neighbors Are Saying
        </h2>
        <p className="text-center text-lg font-serif text-charcoal-gray mb-12">
          Rated <span className="font-semibold">5.0</span> across{" "}
          <span className="font-semibold">22 Google reviews</span>
        </p>
        {/* Relative wrapper with side gutters (md+) so arrows sit beside the cards */}
        <div className="relative md:px-16">
          <NavButton ref={prevRef} side="left" label="Previous review" />
          <NavButton ref={nextRef} side="right" label="Next review" />
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={32}
            loop={true}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onBeforeInit={(swiper: SwiperClass) => {
              // Wire up the external nav buttons before Swiper initializes.
              const nav = swiper.params.navigation
              if (nav && typeof nav !== "boolean") {
                nav.prevEl = prevRef.current
                nav.nextEl = nextRef.current
              }
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="testimonials-swiper !pb-16"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.name} className="h-auto">
                <div className="bg-white p-8 rounded-lg shadow-md flex flex-col h-full">
                  <StarRow />
                  <p className="text-charcoal-gray font-serif italic mb-4 flex-grow">
                    "{t.quote}"
                  </p>
                  <p className="text-charcoal-gray font-semibold">
                    — {formatAuthor(t.name)}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/maps?cid=13355536746093198723"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-forest-green text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#244c25] transition-colors duration-300"
          >
            <svg
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            Read All Our Reviews on Google
          </a>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
