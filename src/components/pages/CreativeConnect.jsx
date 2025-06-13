"use client"
import { CREATIVE_CELEBRITIES_DATA_LIST, CREATIVE_CELEBRITIES_SLIDER_DATA, CREATIVE_CONNECT_DATA, CREATIVE_VIDEO_LIST } from "@/utlis/helper";
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
        <div className="overflow-clip">
            <Hero
                title={"Creative Connect: Powering India’s Creative Supply Chain"}
                description={"Agency network, project collaboration, smart hiring tools, talent discovery, campaign pitching, production workflow, vendor ecosystem, casting integration, cross-agency synergy"}
            />
            <PartnersCards mapdata={CREATIVE_CONNECT_DATA} text />
            <ResponsiveGrid
                description={"Meet our talented artists — photographers, editors, performers, and creators — getting real gigs through the GigMedia platform every day."}
                title={"Agencies"} mapdataAll={CREATIVE_CELEBRITIES_DATA_LIST} />
            <ArtistMobile
                title={"Creative Connect Videos section"}
                mapdata={CREATIVE_CELEBRITIES_SLIDER_DATA}
                description={<>
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
                    <span className="flex gap-2">
                        <span className="w-1 h-1 p-1 mt-2 rounded-full bg-black/70 block"></span>
                        Tips to complete your profile effectively to get more response
                    </span>
                    <span className="flex gap-2">
                        <span className="w-1 h-1 p-1 mt-2 rounded-full bg-black/70 block"></span>
                        How to post new opening
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
                        How to add Celebrity
                    </span>
                    <span className="flex gap-2">
                        <span className="w-1 h-1 p-1 mt-2 rounded-full bg-black/70 block"></span>
                        How to add influencer
                    </span>
                    <span className="flex gap-2">
                        <span className="w-1 h-1 p-1 mt-2 rounded-full bg-black/70 block"></span>
                        Find your marked favorite artist in one place
                    </span>
                    <span className="flex gap-2">
                        <span className="w-1 h-1 p-1 mt-2 rounded-full bg-black/70 block"></span>
                        How to hire artist directly from GMA
                    </span>
                    <span className="flex gap-2">
                        <span className="w-1 h-1 p-1 mt-2 rounded-full bg-black/70 block"></span>
                        Manage your Influencers
                    </span>
                </>}

            />
            <GigMediaDownload />
            <Faq videomapdata={CREATIVE_VIDEO_LIST} />
            <Footer />
        </div>
    );
};

export default CreativeConnect