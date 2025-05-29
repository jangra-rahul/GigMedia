import Image from 'next/image'
import React from 'react'

const GigMediaDownload = () => {
    return (
        <div className='bg-[#FFE0E1] py-14 md:py-[60px]'>
            <div className="max-w-[1310px] mx-auto px-4">
                <div className="flex flex-col lg:flex-row justify-between items-center">
                    <div className='max-w-[444px]'>
                        <p className='text-[#FF0004] font-semibold text-center lg:text-start text-xl md:text-2xl lg:text-[28px] leading-[164%]'>"Create Without Limits, Grow Without Boundaries"</p>
                    </div>
                    <div className='max-w-[488px] pt-4'>
                        <h3 className='font-bold text-2xl text-center md:text-3xl lg:text-[40px] leading-[147%] text-black'>Download Gig Media App</h3>
                        <p className='text-black text-base md:text-lg lg:text-xl lg:text-[21px] text-center pt-3 pb-7 md:pb-9'>One Platform. Infinite Creative Possibilities</p>
                        <div className="flex gap-2.5 justify-center">
                            <Image src={"/images/svg/google-play.svg"} height={40} width={126} className='max-w-[126px]' alt='google-play' />
                            <Image src={"/images/svg/app-store.svg"} height={40} width={126} className='max-w-[126px]' alt='app-play' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GigMediaDownload