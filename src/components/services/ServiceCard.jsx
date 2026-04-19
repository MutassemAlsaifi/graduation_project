import { Link } from "react-router-dom";
import { Star } from "lucide-react";

export default function ServiceCard({ service }) {
  const serviceImage = service.images?.[0]?.path || "";

  return (
    <Link
      to={`/services/${service.id}`}
      className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
    >
      {serviceImage ? (
        <img
          src={serviceImage}
          alt={service.title}
          className="h-64 w-full object-cover"
        />
      ) : (
        <div className="flex h-64 w-full items-center justify-center bg-slate-100 text-sm text-slate-400">
          No image uploaded
        </div>
      )}

      <div className="p-6">
        <p className="text-sm text-slate-500">
          By {service.user?.name || "Unknown provider"}
        </p>

        <div className="mt-4 flex items-start justify-between gap-4">
          <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
            {service.title}
          </h3>

          <span className="text-xl font-semibold text-slate-800">
            {service.price ? `$${service.price}` : "N/A"}
            {service.price_type ? `/${service.price_type}` : ""}
          </span>
        </div>

        <p className="mt-4 text-slate-500">
          {service.category?.name || "Uncategorized"}
        </p>

        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Star className="h-4 w-4 fill-orange-400 text-orange-400" />
            <span>
              {service.rating || 0} ({service.reviews_count || 0})
            </span>
          </div>

          <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
            {service.category?.name || "Service"}
          </span>
        </div>
      </div>
    </Link>
  );
}