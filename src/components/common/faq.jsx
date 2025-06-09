'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Icons from '../common/Icons';

const faqData = [
    {
        question: 'How Do I Register As A Professional?',
        answer: 'You can register by filling out a short form on the GIG Media app or website.',
        image: "/images/webp/creative/phone.webp",
    },
    {
        question: 'Can I Upskill While Working?',
        answer: 'Yes! GIG Media offers EdTech 2.0 programs that you can complete while working.',
        video: "/videos/faq-video.mp4"
    },
    {
        question: 'How Does GIG Media Help Agencies Grow?',
        answer:
            'The app offers a rating-based hiring system, enabling users to find and connect with top-rated talent in real time.',
        image: "/images/webp/phone-two.webp",
    },
    {
        question: 'Is There A Fee For Registration?',
        answer: 'No, registration on GIG Media is completely free for professionals.',
        image: "/images/webp/creative/phone.webp",
    },
    {
        question: 'How Long Does The Registration Process Take?',
        answer: 'It usually takes less than 5 minutes to complete your profile and get started.',
        image: "/images/webp/phone-three.webp",
    },
    {
        question: 'Is GIG Media Open For Investors?',
        answer: 'Yes, GIG Media is open for strategic investors. Reach out via our contact page.',
        image: "/images/webp/phone-one.webp",
    },
    {
        question: 'What Are The Eligibility Criteria For Registration?',
        answer: 'Anyone with skills and relevant experience in media, art, or related fields can register.',
        image: "/images/webp/creative/phone.webp",
    }
];

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const videoRef = useRef(null);

    const toggleFAQ = (index) => {
        if (activeIndex === index && videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
        }
        setActiveIndex(index);
    };

    useEffect(() => {
        if (faqData[activeIndex]?.video && videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
        }
    }, [activeIndex]);

    const activeItem = faqData[activeIndex];

    return (
        <section id='faqs' className="bg-white py-14 md:py-16 lg:py-20 xl:py-[94px]">
            <div className="max-w-[1310px] mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-[60%_38%] xl:grid-cols-2 gap-10 md:gap-6 xl:gap-[60px] items-center">

                    {/* FAQ List */}
                    <div data-aos="fade-right" className="order-2 lg:order-1">
                        {faqData.map((item, index) => (
                            <div
                                key={index}
                                className={`transition-all duration-300 ease-in-out mb-3 xl:mb-5 rounded-[10px] overflow-hidden ${activeIndex === index ? 'bg-[#FF0004] text-white' : 'bg-white text-black'
                                    }`}
                            >
                                <div
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full cursor-pointer text-base md:text-lg lg:text-[19px] text-left px-3 py-2.5 xl:py-3.5 font-semibold focus:outline-none flex justify-between items-start ff_n"
                                >
                                    <span>{item.question}</span>
                                    <span className="text-xl">
                                        {activeIndex === index ? <Icons icon={"uparrow"} /> : <Icons icon={"downarrow"} />}
                                    </span>
                                </div>
                                <div
                                    className={`text-base ff_n px-3 leading-[168%] transition-max-height duration-300 ease-in-out overflow-hidden ${activeIndex === index ? 'max-h-[300px] pb-3' : 'max-h-0 py-0'
                                        }`}
                                >
                                    <p className="text-base">{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Image or Video Display */}
                    <div data-aos="fade-left" className='flex justify-center order-1 lg:order-2'>
                        {activeItem.video ? (
                            <video
                                ref={videoRef}
                                src={activeItem.video}
                                autoPlay
                                muted
                                playsInline
                                loop={false}
                                className="w-full max-w-[320px] rounded-[12px]"
                            >
                                Your browser does not support the video tag.
                            </video>

                        ) : (
                            <Image
                                src={activeItem.image || "/images/webp/creative/phone.webp"}
                                alt="Need Help"
                                width={320}
                                height={500}
                                className="w-full max-w-[320px] transition-all duration-500 ease-in-out rounded-[12px]"
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
