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
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(true);

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
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <ServicesHeader />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-600">
              Explore Services
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Find trusted services for your daily needs
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Browse professional services, compare prices, and choose the
              right provider
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-[#f7faf8]">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
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
        </div>
      </section>

      <section className="bg-[#f7faf8]">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <ServicesStatsBar filteredCount={services.length} />
        </div>
      </section>

      <section className="bg-[#f7faf8] px-4 pb-16 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
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
            <div className="grid items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          )}
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">DirectServe</h3>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              A modern platform to discover trusted services, compare offers,
              and connect with professionals easily.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-900">
              Services
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>Home Cleaning</li>
              <li>Plumbing</li>
              <li>Web Development</li>
              <li>Design</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-900">
              Company
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>About Us</li>
              <li>How It Works</li>
              <li>Contact</li>
              <li>Support</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-900">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>Email: support@directserve.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Location: New York, NY</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-sm text-slate-500 sm:px-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <p>© 2026 DirectServe. All rights reserved.</p>
            <p>Designed for a modern service marketplace experience.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}