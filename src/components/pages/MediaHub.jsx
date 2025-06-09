"use client"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Hero from "../creativeconnect/Hero";
import PartnersCards from "../common/PartnersCards";
import ResponsiveGrid from "../common/ResponsiveGrid";
import ArtistMobile from "../common/ArtistMobile";
import GigMediaDownload from "../home/GigMediaDownload";
import { MEDIA_HUB_CELEBRITIES_DATA_LIST, MEDIA_HUB_CONNECT_DATA } from "@/utlis/helper";
import Faq from "../common/faq";
import Footer from "../common/Footer";

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
            <ArtistMobile />
            <GigMediaDownload />
            <Faq />
            <Footer
            />
        </div>
    );
};


export default MediaHub