import Image from 'next/image'
import React from 'react'

const ArtistMobile = () => {
    return (
        <div className="bg-white">
            <div className="max-w-[1310px] relative mx-auto px-4 py-14 md:py-16 lg:py-20 xl:py-[94px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-24 relative z-30 items-center">
                    <div className="relative z-30 lg:max-w-[572px]">
                        <h3 className="text-black font-bold text-2xl md:text-3xl lg:text-[37px] leading-[122%] pb-2">
                            Artist Avenue: Revolutionizing Talent Discovery
                        </h3>
                        <p className="text-black ff_n text-base md:text-lg leading-[150%] pb-[30px]">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s

                        </p>

                    </div>
                    <div className="flex justify-center">
                        <Image className='w-full h-full max-w-[565px]' src={"/images/webp/media-dashboard.webp"} alt='common' height={472} width={472} />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ArtistMobile