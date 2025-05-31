
"use client"
import { ARTIST_CELEBRITIES_DATA_LIST, ARTIST_CONNECT_DATA } from "@/utlis/helper";
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


export default ArtistAvenue