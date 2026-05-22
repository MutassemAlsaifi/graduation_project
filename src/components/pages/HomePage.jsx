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
import { getHomeData } from "../../services/homeService";

const USE_MOCK = import.meta.env.VITE_USE_MOCK === "true";

export default function HomePage() {
  const [categories, setCategories] = useState([]);
  const [featuredService, setFeaturedService] = useState(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadHomeData = async () => {
      if (USE_MOCK) {
        setCategories(categoriesMock);
        setFeaturedService(featuredServiceMock);
        setServices(latestServicesMock);
        setLoading(false);
        return;
      }

      try {
        const data = await getHomeData();

        setCategories(Array.isArray(data?.categories) ? data.categories : []);
        setFeaturedService(data?.featured_service || null);
        setServices(Array.isArray(data?.latest_services) ? data.latest_services : []);
      } catch (error) {
        console.error("Failed to load home API, fallback to mock:", error);
        setCategories(categoriesMock);
        setFeaturedService(featuredServiceMock);
        setServices(latestServicesMock);
      } finally {
        setLoading(false);
      }
    };

    loadHomeData();
  }, []);

  return (
    <main className="min-h-screen bg-[#f8faf8] text-slate-900">
      <HomeNavbar />

      <HeroSection featuredService={featuredService} />

      <CategoriesSection categories={categories} />

      <LatestServicesSection services={services} loading={loading} />

      <HomeFooter />
    </main>
  );
}