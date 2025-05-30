import Footer from "@/components/common/Footer";
import NavBar from "@/components/common/NavBar";
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

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <MediaDetails />
      <ImageMedia />
      <OurSolutions />
      <CommonPhone title="Artist Avenue: Revolutionizing Talent Discovery" image={"/images/webp/artist-phone.webp"} />
      <CommonPhone title={"Creative Connect: Revolutionizing Talent Discovery"} image={"/images/webp/creative-phone.webp"} red />
      <CommonPhone title={"Media Hub: Revolutionizing Talent Discovery"} image={"/images/webp/media-dashboard.webp"} three />
      <PoweringDream />
      <PartnerSlider />
      <Faq />
      <GigMediaDownload />
      <Footer />
    </div>
  );
}
