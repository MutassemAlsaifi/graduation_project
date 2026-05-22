import { Link } from "react-router-dom";
import { Star } from "lucide-react";

export default function ServiceCard({ service }) {
  const serviceImage = service.images?.[0]?.path || "";

  return (
    <Link
      to={`/services/${service.id}`}
      className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg"
    >
      {/* Image */}
      <div className="relative">
        {serviceImage ? (
          <img
            src={serviceImage}
            alt={service.title}
            className="h-52 w-full object-cover transition duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-52 w-full items-center justify-center bg-slate-100 text-sm text-slate-400">
            No image
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Provider */}
        <p className="text-xs text-slate-500">
          By {service.user?.name || "Unknown"}
        </p>

        {/* Title */}
        <h3 className="mt-2 line-clamp-2 text-base font-semibold text-slate-900">
          {service.title}
        </h3>

        {/* Category */}
        <p className="mt-1 text-sm text-slate-500">
          {service.category?.name || "Uncategorized"}
        </p>

        {/* Bottom */}
        <div className="mt-4 flex items-center justify-between">
          {/* Rating */}
          <div className="flex items-center gap-1 text-xs text-slate-500">
            <Star className="h-4 w-4 fill-orange-400 text-orange-400" />
            <span>
              {service.rating || 0} ({service.reviews_count || 0})
            </span>
          </div>

          {/* Price */}
          <span className="text-sm font-semibold text-slate-900">
            ${service.price || 0}
            <span className="text-xs text-slate-500">
              /{service.price_type || "project"}
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}