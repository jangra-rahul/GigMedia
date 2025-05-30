import { OUR_SOLUTION_DATA } from '@/utlis/helper'
import Image from 'next/image'
import React, { useState } from 'react'

const solutionImages = [
  "/images/webp/solution-girl.webp",
  "/images/webp/about-us-girl.webp",
  "/images/webp/believe.webp",
  "/images/webp/hero-img.webp",
];

const OurSolutions = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className='bg-[#FFE0E1] py-14 md:py-16 lg:py-20 xl:py-[94px]'>
      <div className="max-w-[1310px] mx-auto px-4">
        <h2 data-aos="zoom-in" className="ff_s font-bold text-4xl text-center md:text-5xl lg:text-[56px] text-[#FF0004]">
          Our Solutions
        </h2>
        <p data-aos="zoom-in" data-aos-duration='1200' className='text-base md:text-lg text-center leading-[130%] lg:text-xl xl:text-[21px] text-black py-7 md:py-8 lg:py-9'>
          Powered by in-house talent trained across AVGC-XR disciplines, we don’t just deliver content—we deliver creatiTailored Solutions for Every Player in the Media Ecosystemve power at scale.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 xl:gap-[60px] items-center">
          <div className='flex flex-col gap-6 order-2 lg:order-1'>
            {OUR_SOLUTION_DATA.map((obj, i) => (
              <div
                data-aos="fade-up-right"
                data-aos-duration={800 + i * 200}
                key={i}
                className="bg-[#FFE4E5] c_shadow duration-300 group hover:bg-[#FF0004] rounded-xl py-3 px-4 flex gap-3"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className='relative'>
                  <Image
                    className='transition-opacity duration-300 group-hover:opacity-0'
                    width={52}
                    height={52}
                    src={"/images/webp/dark-tick.webp"}
                    alt='dark-tick'
                  />
                  <Image
                    className='absolute top-0 left-0 z-40 scale-0 group-hover:scale-100 transition-transform duration-300'
                    width={52}
                    height={52}
                    src={"/images/webp/green-tick.webp"}
                    alt='green-tick'
                  />
                </div>
                <div>
                  <h4 className='text-black/65 group-hover:text-white/100 duration-300 text-lg md:text-xl lg:text-2xl leading-[170%] font-bold'>
                    {obj.title}
                  </h4>
                  <p className='leading-[170%] ff_n group-hover:text-white/100 duration-300 text-base md:text-lg text-black/65'>
                    {obj.discrpition}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image container with all images stacked, show one at a time with opacity */}
          <div className='order-1 lg:order-2 relative w-full h-[458px] rounded-xl overflow-hidden' data-aos="fade-up-left">
            {solutionImages.map((src, idx) => (
              <Image
                key={idx}
                src={src}
                alt={`solution image ${idx}`}
                fill
                className={`absolute top-0 left-0 w-full h-full object-cover rounded-xl transition-opacity duration-500 ease-in-out
                  ${hoveredIndex === idx ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}
                priority={true} // preload images for smooth experience
              />
            ))}
            {/* Default image if none hovered */}
            {hoveredIndex === null && (
              <Image
                src="/images/webp/solution-girl.webp"
                alt="default solution image"
                fill
                className="absolute top-0 left-0 w-full h-full object-cover rounded-xl opacity-100 z-30"
                priority={true}
              />
            )}
          </div>

        </div>
      </div>
    </div>
  )
}

export default OurSolutions;
