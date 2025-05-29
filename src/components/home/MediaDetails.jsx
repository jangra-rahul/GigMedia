import { MEDIA_DETAILS_DATA_LIST } from '@/utlis/helper'
import React from 'react'
import Icons from '../common/Icons'

const MediaDetails = () => {
    return (
        <div className='bg-white py-14 md:py-16 lg:py-20 xl:py-[94px]'>
            <div className="max-w-[1220px] mx-auto px-4  xl:px-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-6 md:p-8 xl:p-9 gap-6 lg:gap-4 xl:gap-[60px] rounded-xl md:rounded-2xl lg:rounded-3xl bg-[#FFE0E1]">
                    {MEDIA_DETAILS_DATA_LIST.map((obj, i) => {
                        return (
                            <div key={i} className='flex items-center gap-2.5'>
                                <div>
                                    <Icons icon={obj.icon} />
                                </div>
                                <div>
                                    <h3 className='text-2xl md:text-3xl lg:text-[32px] text-black font-bold leading-none'>{obj.title}</h3>
                                    <p className='ff_n text-base md:text-md font-semibold leading-[122%] text-black'>{obj.discrpition}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default MediaDetails