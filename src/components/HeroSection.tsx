import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules"

import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"
import "swiper/css/navigation"

const HeroSection = () => {
  const slides = [
    {
      baseSrc: "hero-slide-1",
      title: "Flooring Installation & Hard Floor Deep Cleaning in Lake County",
      description:
        "Expert flooring installation and professional Bona deep cleaning for hardwood, LVP, laminate, and tile. Serving Lake County and the surrounding areas with craftsmanship you can trust.",
    },
    {
      baseSrc: "hero-slide-2",
      title: "Experience Unmatched Quality and Service",
      description:
        "From consultation to installation, our family-owned business ensures a seamless and satisfying flooring experience.",
    },
    {
      baseSrc: "hero-slide-3",
      title: "Your Vision, Our Expertise – Perfect Floors",
      description:
        "Bringing your dream floors to life with precision, passion, and a commitment to lasting beauty.",
    },
  ]

  return (
    <section className="relative h-screen bg-cover flex items-center justify-center overflow-hidden">
      <Swiper
        spaceBetween={30}
        loop={true}
        effect={"fade"}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        className="mySwiper w-full h-full absolute inset-0"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <picture>
              <source
                srcSet={`/images/optimized/${slide.baseSrc}-400w.webp 400w,
                           /images/optimized/${slide.baseSrc}-800w.webp 800w,
                           /images/optimized/${slide.baseSrc}-1200w.webp 1200w,
                           /images/optimized/${slide.baseSrc}-1600w.webp 1600w`}
                type="image/webp"
                sizes="(max-width: 640px) 400px, (max-width: 1024px) 800px, (max-width: 1280px) 1200px, 1600px"
              />
              <img
                src={`/images/optimized/${slide.baseSrc}-800w.webp`} // A reasonable default
                alt={slide.title}
                className="w-full h-full object-cover absolute inset-0"
                loading={index === 0 ? "eager" : "lazy"}
                sizes="(max-width: 640px) 400px, (max-width: 1024px) 800px, (max-width: 1280px) 1200px, 1600px"
              />
            </picture>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-center text-white px-6 py-16 sm:px-8 sm:py-20 flex flex-col justify-center items-center h-full">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white text-center max-w-4xl mx-auto font-sans ">
                {slide.title}
              </h1>
              <p className="text-lg sm:text-xl mt-4 max-w-2xl px-4 mx-auto text-center font-serif">
                {slide.description}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#contact"
                  className="inline-block bg-forest-green text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#244c25] transition-colors duration-300"
                >
                  GET MY FREE NO-OBLIGATION ESTIMATE
                </a>
                <a
                  href="tel:+12242837930"
                  className="inline-flex items-center justify-center gap-2 bg-off-white text-forest-green px-8 py-4 rounded-lg text-lg font-semibold hover:bg-warm-taupe transition-colors duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call (224) 283-7930
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default HeroSection
