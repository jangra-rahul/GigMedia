import NavBar from "@/components/common/NavBar";
import AboutUs from "@/components/home/AboutUs";
import CommonPhone from "@/components/home/CommonPhone";
import ImageMedia from "@/components/home/ImageMedia";
import MediaDetails from "@/components/home/MediaDetails";
import OurSolutions from "@/components/home/OurSolutions";

export default function Home() {
  return (
    <div>
      <NavBar />
      <AboutUs />
      <MediaDetails />
      <ImageMedia />
      <OurSolutions />
      <CommonPhone title="Artist Avenue: Revolutionizing Talent Discovery" image={"/images/webp/artist-phone.webp"} />
      <CommonPhone title={"Creative Connect: Revolutionizing Talent Discovery"} image={"/images/webp/creative-phone.webp"} red />
      <CommonPhone title={"Media Hub: Revolutionizing Talent Discovery"} image={"/images/webp/media-dashboard.webp"} three />
    </div>
  );
}
