
import ArtistMobile from "@/components/common/ArtistMobile";
import Faq from "@/components/common/faq";
import Footer from "@/components/common/Footer";
import PartnersCards from "@/components/common/PartnersCards";
import ResponsiveGrid from "@/components/common/ResponsiveGrid";
import Hero from "@/components/creativeconnect/Hero";
import GigMediaDownload from "@/components/home/GigMediaDownload";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <PartnersCards />
      <ResponsiveGrid />
      <ArtistMobile />
      <GigMediaDownload />
      <Faq />
      <Footer />
    </div>
  );
};

export default page;
