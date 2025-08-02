import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules"

import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"
import "swiper/css/navigation"

const HeroSection = () => {
  const images = [
    "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1920&q=80", // Original image
    "https://images.unsplash.com/photo-1547333101-6bb18e609b2f?q=80&w=2676?auto=format&fit=crop&w=1920&q=80", // Example 2
    "https://images.unsplash.com/photo-1613621792067-8e28d16b735c?q=80&w=2670?auto=format&fit=crop&w=1920&q=80", // Example 3
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
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center absolute inset-0 hero-slide-image"
              style={{ backgroundImage: `url('${image}')` }}
            ></div>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-center text-white p-4 flex flex-col justify-center items-center h-full">
              <h1 className="text-5xl md:text-7xl font-bold text-white text-center max-w-4xl mx-auto font-sans ">
                Transform Your Home with Flawless Floors
              </h1>
              <p className="text-xl mt-4 max-w-2xl mx-auto text-center font-serif">
                Artisan craftsmanship for your home in Volo, IL. We specialize
                in LVP, hardwood, and laminate flooring that combines timeless
                beauty with modern durability.
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
