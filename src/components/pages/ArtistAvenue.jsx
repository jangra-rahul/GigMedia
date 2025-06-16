
"use client"
import { ARTIST_CELEBRITIES_DATA_LIST, ARTIST_CELEBRITIES_SLIDER_DATA, ARTIST_CONNECT_DATA, ARTIST_VIDEO_LIST } from "@/utlis/helper";
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

const ArtistAvenue = () => {
    useEffect(() => {
        Aos.init({
            duration: 800,
            once: true,
        });
    }, []);
    return (
        <div className="overflow-clip">
            <Hero title={"Artist Avenue: Revolutionizing Talent Discovery"} description="Real-time gigs, verified profiles, audition alerts, skill-based hiring, rating system, direct access, multi-association sync, portfolio showcase, job hunter mode" />
            <PartnersCards mapdata={ARTIST_CONNECT_DATA} />
            <ResponsiveGrid
                description="Meet our talented artists — photographers, editors, performers, and creators — getting real gigs through the GigMedia platform every day."
                title={"Featured artist"} mapdataAll={ARTIST_CELEBRITIES_DATA_LIST} />
            <ArtistMobile
                heading={"Artist Avenue"}
                mapdata={ARTIST_CELEBRITIES_SLIDER_DATA} />
            <GigMediaDownload />
            <Faq videomapdata={ARTIST_VIDEO_LIST} />
            <Footer />
        </div>
    );
};


export default ArtistAvenue