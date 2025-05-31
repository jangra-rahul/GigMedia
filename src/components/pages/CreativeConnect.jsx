"use client"
import { CREATIVE_CELEBRITIES_DATA_LIST, CREATIVE_CONNECT_DATA } from "@/utlis/helper";
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

const CreativeConnect = () => {
    useEffect(() => {
        Aos.init({
            duration: 800, // animation duration
            once: true,     // only animate once
        });
    }, []);
    return (
        <div>
            <Hero title={"Creative Connect: Revolutionizing Talent Discovery"} />
            <PartnersCards mapdata={CREATIVE_CONNECT_DATA} text />
            <ResponsiveGrid title={"Featured celebrity"} mapdataAll={CREATIVE_CELEBRITIES_DATA_LIST} />
            <ArtistMobile />
            <GigMediaDownload />
            <Faq />
            <Footer />
        </div>
    );
};

export default CreativeConnect