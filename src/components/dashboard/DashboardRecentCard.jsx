import { Link } from "react-router-dom";

const fallbackImage =
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=400&q=80";

export default function DashboardRecentCard({ service }) {
  const status =
    service?.status ||
    (service?.is_active ? "Active" : "Pending");

  return (
    <Link
      to={`/services/${service.id}`}
      className="flex items-center gap-4 rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md"
    >
      <img
        src={service.image || fallbackImage}
        alt={service.title || "Service"}
        className="h-16 w-16 rounded-2xl object-cover"
      />

      <div className="min-w-0 flex-1">
        <h4 className="truncate text-sm font-semibold text-slate-900">
          {service.title || "Untitled service"}
        </h4>

        <p className="mt-1 text-sm text-slate-500">
          {service.price ? `$${service.price}` : "No price"}
        </p>
      </div>

      <span
        className={`rounded-full px-3 py-1 text-xs font-medium ${
          status === "Active"
            ? "bg-emerald-50 text-emerald-600"
            : "bg-orange-50 text-orange-500"
        }`}
      >
        {status}
      </span>
    </Link>
  );
}