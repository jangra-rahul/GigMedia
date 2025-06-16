"use client"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Hero from "../home/Hero";
import AboutUs from "../home/AboutUs";
import MediaDetails from "../home/MediaDetails";
import ImageMedia from "../home/ImageMedia";
import OurSolutions from "../home/OurSolutions";
import CommonPhone from "../home/CommonPhone";
import PoweringDream from "../home/PoweringDream";
import PartnerSlider from "../home/PartnerSlider";
import Faq from "../home/Faq";
import GigMediaDownload from "../home/GigMediaDownload";
import Footer from "../common/Footer";
import { ARTIST_PHONE_IMAGES, CREATIVE_PHONE_IMAGES, MEDIA_PHONE_IMAGES } from "@/utlis/helper";

const HomePage = () => {
    useEffect(() => {
        Aos.init({
            duration: 800, // animation duration
            once: true,     // only animate once
        });
    }, []);
    return (
        <div className="overflow-clip">
            <Hero />
            <AboutUs />
            <MediaDetails />
            <ImageMedia />
            <OurSolutions />
            <CommonPhone phoneImages={ARTIST_PHONE_IMAGES} url="/artist-avenue" title="Artist Avenue: Revolutionizing Talent Discovery" desc="Real-time gigs, verified profiles, audition alerts, skill-based hiring, rating system, direct access, multi-association sync, portfolio showcase, job hunter mode" />
            <CommonPhone phoneImages={CREATIVE_PHONE_IMAGES} url="/creative-connect" title={"Creative Connect: Powering India’s Creative Supply Chain"} desc="Agency network, project collaboration, smart hiring tools, talent discovery, campaign pitching, production workflow, vendor ecosystem, casting integration, cross-agency synergy" red />
            <CommonPhone phoneImages={MEDIA_PHONE_IMAGES} url="/media-hub" title={"Media Hub: Your Gateway to the Orange Economy"} desc="Corporate dashboard, agency finder, celebrity booking, campaign builder, creative services, media planning, budget filters, real-time execution, PR solutions, production outsourcing" three />
            <PoweringDream />
            <PartnerSlider />
            <Faq />
            <GigMediaDownload />
            <Footer />
        </div>
    );
}

export default HomePage