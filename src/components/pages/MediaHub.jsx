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
        <div>
            <Hero title={"Media Hub: Revolutionizing Talent Discovery"} />
            <PartnersCards mapdata={MEDIA_HUB_CONNECT_DATA} />
            <ResponsiveGrid title={"Hire Celebrity"} mapdataAll={MEDIA_HUB_CELEBRITIES_DATA_LIST} />
            <ArtistMobile />
            <GigMediaDownload />
            <Faq />
            <Footer
            />
        </div>
    );
};


export default MediaHub