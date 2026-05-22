import { Link } from "react-router-dom";
import DashboardRecentCard from "./DashboardRecentCard";

export default function DashboardRecentServices({ services = [] }) {
  const validServices = services.filter((s) => s && s.id);

  return (
    <section className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold text-slate-900">
          Recent Services
        </h3>

        <Link
          to="/services"
          className="text-sm font-medium text-emerald-500 hover:text-emerald-600"
        >
          View all
        </Link>
      </div>

      {validServices.length === 0 ? (
        <p className="text-sm text-slate-500">
          No services found yet.
        </p>
      ) : (
        <div className="space-y-4">
          {validServices.map((service) => (
            <DashboardRecentCard
              key={service.id}
              service={service}
            />
          ))}
        </div>
      )}
    </section>
  );
}