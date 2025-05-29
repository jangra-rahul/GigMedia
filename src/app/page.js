import NavBar from "@/components/common/NavBar";
import AboutUs from "@/components/home/AboutUs";
import ImageMedia from "@/components/home/ImageMedia";
import MediaDetails from "@/components/home/MediaDetails";

export default function Home() {
  return (
    <div>
      <NavBar />
      <AboutUs />
      <MediaDetails />
      <ImageMedia />
    </div>
  );
}
