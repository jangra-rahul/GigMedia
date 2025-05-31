"use client"
import ArtistMobile from "@/components/common/ArtistMobile";
import Faq from "@/components/common/faq";
import Footer from "@/components/common/Footer";
import PartnersCards from "@/components/common/PartnersCards";
import ResponsiveGrid from "@/components/common/ResponsiveGrid";
import Hero from "@/components/creativeconnect/Hero";
import GigMediaDownload from "@/components/home/GigMediaDownload";
import { ARTIST_CELEBRITIES_DATA_LIST, ARTIST_CONNECT_DATA } from "@/utlis/helper";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const page = () => {
  useEffect(() => {
      Aos.init({
        duration: 800, 
        once: true, 
      });
    }, []);
  return (
    <div>
      <Hero title={"artist association: Revolutionizing Talent Discovery"} />
      <PartnersCards mapdata={ARTIST_CONNECT_DATA} />
      <ResponsiveGrid title={"Featured artist"} mapdataAll={ARTIST_CELEBRITIES_DATA_LIST} />
      <ArtistMobile />
      <GigMediaDownload />
      <Faq />
      <Footer />
    </div>
  );
};

export default page;
