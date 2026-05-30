import { Link } from "react-router-dom";
import ServiceCard from "../services/ServiceCard";

export default function LatestServicesSection({
  services = [],
  loading = false,
}) {
  const latestServices = Array.isArray(services) ? services.slice(0, 5) : [];

  return (
    <section className="bg-[#f8faf8] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-500">
              Latest Services
            </p>

            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
              Recently Added Services
            </h2>

            <p className="mt-3 text-slate-500">
              Browse the newest services added by providers.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center justify-center rounded-full border border-emerald-200 px-5 py-2.5 text-sm font-medium text-emerald-600 transition hover:bg-emerald-50"
          >
            See More
          </Link>
        </div>

        {loading ? (
          <div className="rounded-2xl bg-white p-8 text-center text-slate-500 shadow-sm">
            Loading services...
          </div>
        ) : latestServices.length === 0 ? (
          <div className="rounded-2xl bg-white p-8 text-center text-slate-500 shadow-sm">
            No services available.
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {latestServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}