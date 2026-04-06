import { useEffect, useState } from "react";
import HomeNavbar from "../Home/HomeNavbar";
import HeroSection from "../Home/HeroSection";
import CategoriesSection from "../Home/CategoriesSection";
import LatestServicesSection from "../Home/LatestServicesSection";
import HomeFooter from "../Home/HomeFooter";
import {
  categoriesMock,
  featuredServiceMock,
  latestServicesMock,
} from "../../data/homeMockData";

export default function HomePage() {
  const [categories, setCategories] = useState([]);
  const [featuredService, setFeaturedService] = useState(featuredServiceMock);
  const [services, setServices] = useState([]);

  useEffect(() => {
    setCategories(categoriesMock);
    setFeaturedService(featuredServiceMock);
    setServices(latestServicesMock);
  }, []);

  return (
    <main className="min-h-screen bg-[#f8faf8] text-slate-900">
      <HomeNavbar />
      <HeroSection featuredService={featuredService} />
      <CategoriesSection categories={categories} />
      <LatestServicesSection services={services} />
      <HomeFooter />
    </main>
  );
}