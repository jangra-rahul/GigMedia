import { OUR_SOLUTION_DATA } from '@/utlis/helper'
import Image from 'next/image'
import React from 'react'

const OurSolutions = () => {
    return (
        <div className='bg-[#FFE0E1] py-14 md:py-16 lg:py-20 xl:py-[94px]'>
            <div className="max-w-[1310px] mx-auto px-4">
                <h2 className="ff_s font-bold text-4xl text-center md:text-5xl lg:text-[56px] text-[#FF0004]">
                    Our Solutions
                </h2>
                <p className='text-base md:text-lg text-center leading-[130%] lg:text-xl xl:text-[21px] text-black py-7 md:py-8 lg:py-9'>
                    Powered by in-house talent trained across AVGC-XR disciplines, we don’t just deliver content—we deliver creatiTailored Solutions for Every Player in the Media Ecosystemve power at scale.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 xl:gap-[60px] items-center">
                    <div className='flex flex-col gap-6 order-2 lg:order-1'>
                        {OUR_SOLUTION_DATA.map((obj, i) => {
                            return (
                                <div key={i} className="bg-[#FFE4E5]  c_shadow duration-300 group hover:bg-[#FF0004] rounded-xl py-3 px-4 flex gap-3">
                                    <div className='relative'>
                                        <Image className='' width={52} height={52} src={"/images/webp/dark-tick.webp"} alt='dark-tick' />
                                        <Image className='absolute top-0 duration-300 left-0 z-40 scale-0 group-hover:scale-100' width={52} height={52} src={"/images/webp/green-tick.webp"} alt='dark-tick' />
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
                            )
                        })}
                    </div>
                    <div className='order-1 lg:order-2'>
                        <Image src={"/images/webp/solution-girl.webp"} width={609} height={458} alt='solution' className='w-full rounded-xl' />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default OurSolutions