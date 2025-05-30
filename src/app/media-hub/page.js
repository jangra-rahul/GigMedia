
import ArtistMobile from "@/components/common/ArtistMobile";
import Faq from "@/components/common/faq";
import Footer from "@/components/common/Footer";
import PartnersCards from "@/components/common/PartnersCards";
import ResponsiveGrid from "@/components/common/ResponsiveGrid";
import Hero from "@/components/creativeconnect/Hero";
import GigMediaDownload from "@/components/home/GigMediaDownload";
import { MEDIA_HUB_CELEBRITIES_DATA_LIST, MEDIA_HUB_CONNECT_DATA } from "@/utlis/helper";

const page = () => {
  return (
    <div>
      <Hero title={"Media Hub: Revolutionizing Talent Discovery"} />
      <PartnersCards mapdata={MEDIA_HUB_CONNECT_DATA} />
      <ResponsiveGrid title={"Hire Celebrity"} mapdataAll={MEDIA_HUB_CELEBRITIES_DATA_LIST} />
      <ArtistMobile />
      <GigMediaDownload />
      <Faq />
      <Footer />
    </div>
  );
};

export default page;
