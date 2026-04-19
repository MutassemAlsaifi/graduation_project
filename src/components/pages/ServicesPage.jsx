import { useEffect, useState } from "react";
import ServicesHeader from "../services/ServicesHeader";
import ServicesSearchFilters from "../services/ServicesSearchFilters";
import ServicesStatsBar from "../services/ServicesStatsBar";
import ServiceCard from "../services/ServiceCard";
import { getServices } from "../../services/servicesService";
import { getCategories } from "../../services/categoriesService";

export default function ServicesPage() {
  const [query, setQuery] = useState("");
  const [activeCategoryId, setActiveCategoryId] = useState("");
  const [services, setServices] = useState([]);
  const [categories, setCategories] = useState([]);

  // 🔥 فلترات إضافية
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [location, setLocation] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  // 📌 تحميل الكاتيغوري
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Failed to load categories:", error);
        setCategories([]);
      }
    };

    loadCategories();
  }, []);

  // 📌 تحميل الخدمات حسب الفلتر
  useEffect(() => {
    const loadServices = async () => {
      try {
        setIsLoading(true);

        const data = await getServices({
          search: query || undefined,
          category_id: activeCategoryId || undefined,
          min_price: minPrice || undefined,
          max_price: maxPrice || undefined,
          location: location || undefined,
        });

        setServices(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Failed to load services:", error);
        setServices([]);
      } finally {
        setIsLoading(false);
      }
    };

    const timeout = setTimeout(() => {
      loadServices();
    }, 300);

    return () => clearTimeout(timeout);
  }, [query, activeCategoryId, minPrice, maxPrice, location]);

  return (
    <main className="min-h-screen bg-[#f7faf8] text-slate-900">
      <ServicesHeader />

      <ServicesSearchFilters
        query={query}
        setQuery={setQuery}
        activeCategoryId={activeCategoryId}
        setActiveCategoryId={setActiveCategoryId}
        categories={categories}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        location={location}
        setLocation={setLocation}
      />

      <ServicesStatsBar filteredCount={services.length} />

      <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Available Services
            </h2>

            <p className="text-sm text-slate-500">
              Showing {services.length} results
            </p>
          </div>

          {isLoading ? (
            <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-slate-500 shadow-sm">
              Loading services...
            </div>
          ) : services.length === 0 ? (
            <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-slate-500 shadow-sm">
              No services found.
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}