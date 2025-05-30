'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const phoneImages = [
    '/images/webp/phone-one.webp',
    '/images/webp/phone-two.webp',
    '/images/webp/phone-three.webp',
    '/images/webp/phone-one.webp',
];

const CommonPhone = ({ red, title, three, url }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.slideToLoop(activeIndex); // ensures correct slide on load
        }
    }, [activeIndex]);

    return (
        <div className={`${red ? "bg-[#FFE0E1]" : "bg-white"} `}>
            <div className="max-w-[1310px] relative mx-auto px-4 py-14 md:py-16 lg:py-20 xl:py-[94px]">
                <Image className={`absolute max-w-[472px] w-full ${three ? "top-[60px]" : "top-9"} ${red ? "right-0" : "left-0"}`} src={`${red ? "/images/webp/common-two.webp" : three ? "/images/webp/common-third.webp" : "/images/webp/common-one.webp"}`} alt='common' height={472} width={472} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-24 items-center">
                    <div className={`relative z-30 ${red ? 'order-2 lg:max-w-[602px]' : 'order-2 lg:max-w-[572px]'}`}>
                        <h3 className={`text-black font-bold text-2xl md:text-3xl lg:text-[37px] leading-[122%] pb-2 ${red ? 'text-end max-w-[600px]' : 'text-left'}`}>
                            {title}
                        </h3>
                        <p className={`text-black ff_n text-base md:text-lg leading-[150%] pb-[30px] ${red ? 'text-end max-w-[500px] ms-auto' : 'text-left'}`}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                        <div className={`flex ${red ? 'justify-end' : 'justify-start'} items-center gap-4`}>
                            <Link
                                href={url}
                                className="border border-[#FF0004] hover:text-white duration-300 hover:bg-[#FF0004] text-[#FF0004] cursor-pointer bg-white rounded-[10px] p-2.5 text-base md:text-lg leading-[150%]"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>

                    {/* Swiper Section */}
                    {/* Swiper Section */}
                    <div className={`${red ? 'order-1' : 'order-2'} flex flex-col items-center`}>
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={4}
                            slidesPerView={3}
                            loop={true}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                            className="w-full max-w-[700px]"
                            dir={red ? 'rtl' : 'ltr'} // 🔁 direction control
                        >
                            {phoneImages.map((src, index) => {
                                const totalSlides = phoneImages.length;
                                const getRealIndex = (offset) =>
                                    (activeIndex + offset + totalSlides) % totalSlides;

                                let scale = 'scale-60';
                                let translate = 'translate-x-0';

                                // Conditional scaling based on 'red' prop
                                if (!red) {
                                    if (index === getRealIndex(0)) {
                                        scale = 'scale-100';
                                    } else if (index === getRealIndex(1)) {
                                        scale = 'scale-85';
                                        translate = 'translate-x-4';
                                    } else if (index === getRealIndex(2)) {
                                        scale = 'scale-70';
                                    }
                                } else {
                                    // Reverse scaling for 'red' (right to left)
                                    if (index === getRealIndex(2)) {
                                        scale = 'scale-70';
                                    } else if (index === getRealIndex(1)) {
                                        scale = 'scale-85';
                                        translate = 'translate-x-[-10px]';
                                    } else if (index === getRealIndex(0)) {
                                        scale = 'scale-100';
                                    }
                                }

                                return (
                                    <SwiperSlide key={index}>
                                        <div
                                            className={`transition-all duration-300 transform ${scale} ${translate} flex justify-center`}
                                        >
                                            <Image
                                                src={src}
                                                alt={`Phone ${index + 1}`}
                                                width={300}
                                                height={600}
                                                className="rounded-xl object-contain"
                                            />
                                        </div>
                                    </SwiperSlide>
                                );
                            })}


                        </Swiper>

                        {/* Custom Pagination */}
                        <div className="flex gap-2 mt-4">
                            {phoneImages.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        if (swiperRef.current) {
                                            swiperRef.current.slideToLoop(idx);
                                        }
                                    }}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === activeIndex ? 'bg-[#FF0004]' : 'bg-gray-300'
                                        }`}
                                ></button>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CommonPhone;
