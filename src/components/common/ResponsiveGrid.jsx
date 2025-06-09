'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFlip } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-flip';

const ResponsiveGrid = ({ title, description, mapdataAll }) => {
    return (
        <div className='bg-white py-14 md:py-16 lg:py-20 xl:pb-[94px]'>
            <div className="max-w-[1310px] mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between pb-12 gap-3 md:gap-10 md:pb-14 lg:pb-16 xl:pb-[68px]">
                    <p data-aos="fade-right" className='text-black max-sm:order-2 text-base max-w-[560px] md:text-lg leading-[140%] ff_n'>
                        {description}
                    </p>
                    <h3 data-aos="fade-left" className='max-w-[280px] max-md:order-1 text-nowrap text-2xl md:text-3xl lg:text-[37px] font-bold capitalize'>
                        {title}
                    </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[300px] lg:auto-rows-[250px]">
                    {mapdataAll.map((person, index) => (
                        <div
                            key={index}
                            className={`relative overflow-hidden duration-300 group rounded-xl ${person.className || ''}`}
                        >
                            <Swiper
                                modules={[Autoplay, EffectFlip]}
                                effect="flip"
                                loop={true}
                                grabCursor={true}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                                className="absolute top-0 left-0 w-full h-full z-0"
                            >
                                {person.image.map((obj, i) => (
                                    <SwiperSlide key={i}>
                                        <Image
                                            src={obj.img}
                                            alt={`${person.name || 'Person'} - ${i + 1}`}
                                            fill
                                            className="object-cover w-full h-full object-top"
                                        />
                                        <span className='grdiant_color absolute top-0 w-full h-full scale-0 duration-300 z-10 group-hover:scale-100'></span>
                                        <div className="absolute z-30 scale-0 group-hover:scale-100 duration-300 bottom-0 w-full p-3 text-white">
                                            <p className="text-lg md:text-xl ff_n lg:text-2xl font-extrabold leading-[140%]">{obj.name}</p>
                                            <p className="text-base text-white leading-[190%] ff_i">{obj.role}</p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ResponsiveGrid;
