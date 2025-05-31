'use client'
import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

const phoneImages = [
  '/images/webp/phone-one.webp',
  '/images/webp/phone-two.webp',
  '/images/webp/phone-three.webp',
  '/images/webp/phone-one.webp',
]

const ArtistMobile = () => {
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
              Artist Avenue: Revolutionizing Talent Discovery
            </h3>
            <p data-aos="fade-up-right" data-aos-duration={1200} className="text-black ff_n text-base md:text-lg leading-[150%] pb-[30px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
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
                delay: 1500,
                disableOnInteraction: false,
              }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="w-full max-w-[700px]"
            >
              {phoneImages.map((src, index) => {
                const totalSlides = phoneImages.length
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

            {/* Pagination Dots */}
            <div className="flex gap-2 mt-4">
              {phoneImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (swiperRef.current) {
                      swiperRef.current.slideToLoop(idx)
                    }
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === activeIndex ? 'bg-[#FF0004]' : 'bg-[#FFE0E1]'
                    }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArtistMobile
