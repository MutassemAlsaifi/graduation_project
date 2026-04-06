import CategoriesSection from "../Home/CategoriesSection";
import HeroSection from "../Home/HeroSection";
import HomeFooter from "../Home/HomeFooter";
import HomeNavbar from "../Home/HomeNavbar";
import LatestServicesSection from "../Home/LatestServicesSection";

export default function HomePage() {
  return (
    <>
     <HomeNavbar />
      <HeroSection />
      <CategoriesSection />
      <LatestServicesSection />
      <HomeFooter />
    </>
  );
}