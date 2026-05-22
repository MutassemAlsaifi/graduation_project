import { Link } from "react-router-dom";
import SectionHeader from "./SectionHeader";
import ServiceCard from "./ServiceCard";

export default function LatestServicesSection({ services = [], loading = false }) {
  return (
    <section id="services" className="px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          title="Latest Services"
          action={<Link to="/services">See more</Link>}
        />

        {loading ? (
          <div className="rounded-[24px] border border-slate-200 bg-white p-10 text-center text-slate-500 shadow-sm">
            Loading latest services...
          </div>
        ) : services.length === 0 ? (
          <div className="rounded-[24px] border border-slate-200 bg-white p-10 text-center text-slate-500 shadow-sm">
            No services available right now.
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}