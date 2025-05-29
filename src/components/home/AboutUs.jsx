import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
    return (
        <section className="bg-[#FFD9D9] py-14 md:py-16 lg:py-20 xl:py-[94px]">
            <div className="max-w-[1440px] px-4 xl:pe-0 mx-auto flex flex-col lg:flex-row items-center lg:gap-6 xl:gap-[60px]">

                {/* Left Vertical Heading */}
                <div className="relative flex justify-center lg:justify-start lg:w-1/12 w-full">
                    <h2 className="ff_s pb-6 md:pb-8 lg:pb-0 font-bold text-4xl md:text-5xl lg:text-[56px] text-[#FF0004] lg:rotate-[-90deg] lg:-translate-x-20 xl:-translate-x-10 origin-center whitespace-nowrap">
                        About Us
                    </h2>
                </div>

                {/* Content Box */}
                <div className="bg-white shadow p-6 md:p-8 lg:p-6 xl:p-9 lg:w-11/12 flex flex-col lg:flex-row items-center gap-6 xl:gap-[60px] w-full">
                    <p className="text-base order-2 lg:order-1 md:text-lg text-justify text-black/65 ff_n leading-[166%]">
                        Organizing Creativity. Empowering Growth.<br />
                        "GIG Media is India's first full-spectrum media aggregation platform, combining
                        skill-based hiring, media business generation, EdTech 2.0 upskilling, celebrity
                        bookings, and regional event management under one ecosystem. We empower artists,
                        agencies, corporates, and creative entrepreneurs to unlock their true potential.
                        Organizing Creativity. Empowering Growth."
                        <br />
                        "GIG Media is India's first full-spectrum media aggregation platform, combining
                        skill-based hiring, media business generation, EdTech 2.0 upskilling, celebrity
                        bookings, and regional event management under one ecosystem. We empower artists,
                        agencies, corporates, and creative entrepreneurs to unlock their true potential."
                    </p>
                    <Image
                        src={'/images/webp/about-us-girl.webp'}
                        alt="About us image"
                        width={230}
                        height={277}
                        className="rounded-xl order-1 lg:order-2 object-cover max-w-[230px] w-full"
                    />
                </div>
            </div>
        </section>
    )
}

export default AboutUs
