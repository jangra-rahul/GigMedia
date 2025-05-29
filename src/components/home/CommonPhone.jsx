import Image from 'next/image'
import React from 'react'

const CommonPhone = ({ red,  title, image, three }) => {
    return (
        <div className={`${red ? "bg-[#FFE0E1]" : "bg-white"} `}>
            <div className="max-w-[1310px] relative mx-auto px-4 py-14 md:py-16 lg:py-20 xl:py-[94px]">
                <Image className={`absolute max-w-[472px] w-full ${three ? "top-[87px]" : "top-9"} ${red ? "right-0" : "left-0"}`} src={`${red ? "/images/webp/common-two.webp" : three ? "/images/webp/common-third.webp" : "/images/webp/common-one.webp"}`} alt='common' height={472} width={472} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-24 relative z-30 items-center">
                    <div className={`relative z-30  ${red ? "order-2 lg:max-w-[602px]" : "order-2 lg:max-w-[572px]"}`}>
                        <h3 className={`text-black font-bold text-2xl md:text-3xl lg:text-[37px] leading-[122%] pb-2 ${red ? "text-end max-w-[600px]" : "text-left"}`}>
                            {title}
                        </h3>
                        <p className={`text-black ff_n text-base md:text-lg leading-[150%] pb-[30px] ${red ? "text-end max-w-[500px] ms-auto" : "text-left"}`}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s

                        </p>
                        <div className={`flex ${red ? "justify-end" : "justify-start"} items-center gap-4`}>
                            <button className={`border border-[#FF0004] hover:text-white duration-300 hover:bg-[#FF0004] text-[#FF0004] cursor-pointer bg-white rounded-[10px] p-2.5 text-base md:text-lg leading-[150%]
                             `}>
                            Learn More
                        </button>
                        </div>
                    </div>
                    <div className={`${red ? "order-1" : "order-2"} flex justify-center`}>
                        <Image className='w-full h-full max-w-[565px]' src={image} alt='common' height={472} width={472} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommonPhone