
import ArtistMobile from "@/components/common/ArtistMobile";
import Faq from "@/components/common/faq";
import Footer from "@/components/common/Footer";
import PartnersCards from "@/components/common/PartnersCards";
import ResponsiveGrid from "@/components/common/ResponsiveGrid";
import Hero from "@/components/creativeconnect/Hero";
import GigMediaDownload from "@/components/home/GigMediaDownload";
import { CREATIVE_CELEBRITIES_DATA_LIST, CREATIVE_CONNECT_DATA } from "@/utlis/helper";
import React from "react";

const page = () => {
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

export default page;
