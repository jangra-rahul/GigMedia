"use client"
import Footer from "@/components/common/Footer";
import AboutUs from "@/components/home/AboutUs";
import CommonPhone from "@/components/home/CommonPhone";
import Faq from "@/components/home/Faq";
import GigMediaDownload from "@/components/home/GigMediaDownload";
import Hero from "@/components/home/Hero";
import ImageMedia from "@/components/home/ImageMedia";
import MediaDetails from "@/components/home/MediaDetails";
import OurSolutions from "@/components/home/OurSolutions";
import PartnerSlider from "@/components/home/PartnerSlider";
import PoweringDream from "@/components/home/PoweringDream";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
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
      <CommonPhone url="/artist-avenue" title="Artist Avenue: Revolutionizing Talent Discovery" image={"/images/webp/artist-phone.webp"} />
      <CommonPhone url="/creative-connect" title={"Creative Connect: Revolutionizing Talent Discovery"} image={"/images/webp/creative-phone.webp"} red />
      <CommonPhone url="/media-hub" title={"Media Hub: Revolutionizing Talent Discovery"} image={"/images/webp/media-dashboard.webp"} three />
      <PoweringDream />
      <PartnerSlider />
      <Faq />
      <GigMediaDownload />
      <Footer />
    </div>
  );
}
