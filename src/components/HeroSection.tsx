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
      title: "Transform Your Home with Flawless Floors",
      description:
        "Artisan craftsmanship for your home in Volo, IL. We specialize in LVP, hardwood, laminate, and ceramic tile flooring, along with expert subfloor preparation, combining timeless beauty with modern durability.",
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
                src={`/images/optimized/${slide.baseSrc}-800w.jpeg`} // A reasonable default
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
              <a
                href="#contact"
                className="mt-8 inline-block bg-forest-green text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#244c25] transition-colors duration-300"
              >
                GET MY FREE NO-OBLIGATION ESTIMATE
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default HeroSection
