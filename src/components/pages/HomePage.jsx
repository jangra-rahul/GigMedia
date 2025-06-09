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

const HomePage = () => {
    useEffect(() => {
        Aos.init({
            duration: 800, // animation duration
            once: true,     // only animate once
        });
    }, []);
    return (
        <div>
            <Hero />
            <AboutUs />
            <MediaDetails />
            <ImageMedia />
            <OurSolutions />
            <CommonPhone url="/artist-avenue" title="Artist Avenue: Revolutionizing Talent Discovery" image={"/images/webp/artist-phone.webp"} desc="Real-time gigs, verified profiles, audition alerts, skill-based hiring, rating system, direct access, multi-association sync, portfolio showcase, job hunter mode" />
            <CommonPhone url="/creative-connect" title={"Creative Connect: Powering India’s Creative Supply Chain"} image={"/images/webp/creative-phone.webp"} desc="Agency network, project collaboration, smart hiring tools, talent discovery, campaign pitching, production workflow, vendor ecosystem, casting integration, cross-agency synergy" red />
            <CommonPhone url="/media-hub" title={"Media Hub: Your Gateway to the Orange Economy"} image={"/images/webp/media-dashboard.webp"} desc="Corporate dashboard, agency finder, celebrity booking, campaign builder, creative services, media planning, budget filters, real-time execution, PR solutions, production outsourcing" three />
            <PoweringDream />
            <PartnerSlider />
            <Faq />
            <GigMediaDownload />
            <Footer />
        </div>
    );
}

export default HomePage