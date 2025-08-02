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
      src: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1920&q=80",
      title: "Transform Your Home with Flawless Floors",
      description:
        "Artisan craftsmanship for your home in Volo, IL. We specialize in LVP, hardwood, and laminate flooring that combines timeless beauty with modern durability.",
    },
    {
      src: "https://images.unsplash.com/photo-1547333101-6bb18e609b2f?q=80&w=2676?auto=format&fit=crop&w=1920&q=80",
      title: "Experience Unmatched Quality and Service",
      description:
        "From consultation to installation, our family-owned business ensures a seamless and satisfying flooring experience.",
    },
    {
      src: "https://images.unsplash.com/photo-1613621792067-8e28d16b735c?q=80&w=2670?auto=format&fit=crop&w=1920&q=80",
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
            <div
              className="w-full h-full bg-cover bg-center absolute inset-0 hero-slide-image"
              style={{ backgroundImage: `url('${slide.src}')` }}
            ></div>
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
