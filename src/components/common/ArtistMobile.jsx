'use client'
import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'



const ArtistMobile = ({ mapdata, description, title }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef(null)

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(activeIndex)
    }
  }, [activeIndex])

  return (
    <div className="bg-white">
      <div className="max-w-[1310px] relative mx-auto px-4 py-14 md:py-16 lg:py-20 xl:py-[94px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-24 items-center">
          {/* Text Content */}
          <div className="relative z-30 order-2 md:order-1 lg:max-w-[572px]">
            <h3 data-aos="fade-up-right" className="text-black font-bold text-2xl md:text-3xl lg:text-[37px] leading-[122%] pb-2">
              {title}
            </h3>
            <p data-aos="fade-up-right" data-aos-duration={1200} className="text-black/60 ms-3 ff_n text-base md:text-lg leading-[150%] pb-[30px]">
              {description}
            </p>
          </div>

          {/* Swiper Slider */}
          <div className="order-1 md:order-2 flex flex-col items-center">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={4}
              slidesPerView={3}
              loop={true}
              speed={600}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="w-full max-w-[700px]"
            >
              {mapdata.map((src, index) => {
                const totalSlides = mapdata.length
                const getRealIndex = (offset) => (activeIndex + offset + totalSlides) % totalSlides

                let scale = 'scale-60'
                let translate = 'translate-x-0'

                if (index === getRealIndex(0)) {
                  scale = 'scale-100'
                } else if (index === getRealIndex(1)) {
                  scale = 'scale-85'
                  translate = 'translate-x-4'
                } else if (index === getRealIndex(2)) {
                  scale = 'scale-70'
                }

                return (
                  <SwiperSlide key={index}>
                    <div className={`transition-all duration-300 transform ${scale} ${translate} flex justify-center`}>
                      <Image
                        src={src}
                        alt={`Phone ${index + 1}`}
                        width={300}
                        height={600}
                        className="rounded-xl object-contain"
                      />
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
            {/* Pagination Dots (Fixed 4 visible dots) */}
            <div className="flex gap-2 mt-4">
              {[0, 1, 2, 3].map((dotIndex) => {
                // Map total slides to 4-dot logic
                const totalGroups = 4
                const currentGroup = activeIndex % totalGroups

                return (
                  <button
                    key={dotIndex}
                    onClick={() => {
                      if (swiperRef.current) {
                        // Jump to the start of that group (every n-th slide)
                        const targetIndex = Math.floor((mapdata.length / totalGroups) * dotIndex)
                        swiperRef.current.slideToLoop(targetIndex)
                      }
                    }}
                    className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${dotIndex === currentGroup ? 'bg-[#FF0004]' : 'bg-[#FFE0E1]'
                      }`}
                  ></button>
                )
              })}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ArtistMobile
