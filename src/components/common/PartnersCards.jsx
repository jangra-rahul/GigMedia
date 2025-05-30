import { CREATIVE_CONNECT_DATA } from '@/utlis/helper'
import Image from 'next/image'
import React from 'react'

const PartnersCards = () => {
    return (
        <div className='bg-[#FFE0E1] relative'>
            <span className='block bg-white h-[55px] w-full absolute bottom-0'></span>
            <div className='max-w-[1310px] mx-auto px-4 relative z-30'>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-16 md:pt-20 lg:pt-24 xl:pt-[100px]">
                    {CREATIVE_CONNECT_DATA.map((obj, i) => {
                        return (
                            <div key={i} className='bg-white rounded-xl overflow-clip'>
                                <Image src={obj.image} alt='sony' width={310} height={338} />
                                <div className='bg-[#FF0004] py-3 px-2.5'>
                                    <p className='text-white ff_n font-extrabold text-base md:text-lg lg:text-xl xl:text-[21px] leading-[150%] '>{obj.title}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default PartnersCards