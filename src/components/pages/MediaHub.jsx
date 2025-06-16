"use client"
import { MEDIA_CELEBRITIES_SLIDER_DATA, MEDIA_HUB_CELEBRITIES_DATA_LIST, MEDIA_HUB_CONNECT_DATA, MEDIA_VIDEO_LIST } from "@/utlis/helper";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ArtistMobile from "../common/ArtistMobile";
import Faq from "../common/faq";
import Footer from "../common/Footer";
import PartnersCards from "../common/PartnersCards";
import ResponsiveGrid from "../common/ResponsiveGrid";
import Hero from "../creativeconnect/Hero";
import GigMediaDownload from "../home/GigMediaDownload";

const MediaHub = () => {
    useEffect(() => {
        Aos.init({
            duration: 800, // animation duration
            once: true,     // only animate once
        });
    }, []);
    return (
        <div className="overflow-clip">
            <Hero
                title={"Media Hub: Your Gateway to the Orange Economy"}
                description={"Corporate dashboard, agency finder, celebrity booking, campaign builder, creative services, media planning, budget filters, real-time execution, PR solutions, production outsourcing"}
            />
            <PartnersCards mapdata={MEDIA_HUB_CONNECT_DATA} />
            <ResponsiveGrid
                description={"“From fans to founders — anyone can use GigMedia to book stars, plan events, and hire creative pros instantly.”"}
                title={"Featured Celebrities"} mapdataAll={MEDIA_HUB_CELEBRITIES_DATA_LIST} />
            <ArtistMobile
                heading={'Media Hub'}
                description={<>
                    <span className="flex gap-2">
                        <span className="w-1 h-1 p-1 mt-2 rounded-full bg-black/70 block"></span>
                        Tips to complete your profile effectively to get more response
                    </span>
                    <span className="flex gap-2">
                        <span className="w-1 h-1 p-1 mt-2 rounded-full bg-black/70 block"></span>
                        How to post requirement
                    </span>
                    <span className="flex gap-2">
                        <span className="w-1 h-1 p-1 mt-2 rounded-full bg-black/70 block"></span>
                        How to Hire celebrity
                    </span>
                    <span className="flex gap-2">
                        <span className="w-1 h-1 p-1 mt-2 rounded-full bg-black/70 block"></span>
                        How to hire influencer
                    </span>
                    <span className="flex gap-2">
                        <span className="w-1 h-1 p-1 mt-2 rounded-full bg-black/70 block"></span>
                        How to hire artist directly from artist associations
                    </span>
                    <span className="flex gap-2">
                        <span className="w-1 h-1 p-1 mt-2 rounded-full bg-black/70 block"></span>
                        How to hire media agencies
                    </span>
                </>}

                mapdata={MEDIA_CELEBRITIES_SLIDER_DATA} />
            <GigMediaDownload />
            <Faq videomapdata={MEDIA_VIDEO_LIST} />
            <Footer
            />
        </div>
    );
};


export default MediaHub