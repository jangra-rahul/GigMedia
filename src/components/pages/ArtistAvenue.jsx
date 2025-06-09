
"use client"
import { ARTIST_CELEBRITIES_DATA_LIST, ARTIST_CELEBRITIES_SLIDER_DATA, ARTIST_CONNECT_DATA } from "@/utlis/helper";
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
                title={"Artists Videos section"}
                description={<>
                    <span className="flex gap-2">
                        <span className="w-1 h-1 p-1 mt-2 rounded-full bg-black/70 block"></span>
                        Tips to Complete your profile effectively to get more response
                    </span>
                    <span className="flex gap-2">
                        <span className="w-1 h-1 p-1 mt-2 rounded-full bg-black/70 block"></span>
                        How to apply for jobs
                    </span>
                    <span className="flex gap-2">
                        <span className="w-1 h-1 p-1 mt-2 rounded-full bg-black/70 block"></span>
                        How to see your applied openings
                    </span>
                    <span className="flex gap-2">
                        <span className="w-1 h-1 p-1 mt-2 rounded-full bg-black/70 block"></span>
                        How to add yourself in your artist association
                    </span>
                    <span className="flex gap-2 mb-3">
                        <span className="w-1 h-1 p-1 mt-2 rounded-full bg-black/70 block"></span>
                        How to add yourself in your influencer management agency
                    </span>
                    <span className="flex gap-2 text-2xl md:text-3xl lg:text-[37px] text-black font-bold -ms-3">
                        Association
                    </span>
                    <span className="flex gap-2 mt-2">
                        <span className="w-1 h-1 p-1 mt-2 rounded-full bg-black/70 block"></span>
                        Tips to Complete your profile effectively to get more response
                    </span>
                    <span className="flex gap-2">
                        <span className="w-1 h-1 p-1 mt-2 rounded-full bg-black/70 block"></span>
                        How to add artist
                    </span>
                    <span className="flex gap-2">
                        <span className="w-1 h-1 p-1 mt-2 rounded-full bg-black/70 block"></span>
                        How to approach Creative agencies
                    </span>
                </>}
                mapdata={ARTIST_CELEBRITIES_SLIDER_DATA} />
            <GigMediaDownload />
            <Faq />
            <Footer />
        </div>
    );
};


export default ArtistAvenue