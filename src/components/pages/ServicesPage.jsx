import { useMemo, useState } from "react";
import ServicesHeader from "../services/ServicesHeader";
import ServicesSearchFilters from "../services/ServicesSearchFilters";
import ServicesStatsBar from "../services/ServicesStatsBar";
import ServiceCard from "../services/ServiceCard";
import { categories } from "../../services/servicesData";
import { useServices } from "../../context/ServicesContext";

export default function ServicesPage() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("All");
  const { services } = useServices();

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const matchesQuery =
        service.title.toLowerCase().includes(query.toLowerCase()) ||
        service.description.toLowerCase().includes(query.toLowerCase()) ||
        (service.tag || "").toLowerCase().includes(query.toLowerCase());

      const matchesTag =
        activeTag === "All" ? true : (service.tag || "") === activeTag;

      return matchesQuery && matchesTag;
    });
  }, [query, activeTag, services]);

  return (
    <main className="min-h-screen bg-[#f7faf8] text-slate-900">
      <ServicesHeader />

      <ServicesSearchFilters
        query={query}
        setQuery={setQuery}
        activeTag={activeTag}
        setActiveTag={setActiveTag}
        categories={categories}
      />

      <ServicesStatsBar filteredCount={filteredServices.length} />

      <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Available Services
            </h2>
            <p className="text-sm text-slate-500">
              Showing {filteredServices.length} results
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}