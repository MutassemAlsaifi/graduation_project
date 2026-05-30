import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { getImageUrl } from "../../utils/imageUrl";

export default function ServiceCard({ service }) {
  const rawImage =
    service?.images?.[0]?.image_url ||
    service?.images?.[0]?.url ||
    service?.images?.[0]?.path ||
    service?.image_url ||
    service?.image ||
    "";

  const serviceImage = getImageUrl(rawImage);

  return (
    <Link
      to={`/services/${service.id}`}
      className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg"
    >
      <div className="relative overflow-hidden">
        <img
          src={serviceImage}
          alt={service.title}
          className="h-52 w-full object-cover transition duration-300 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.src = "https://placehold.co/800x500?text=No+Image";
          }}
        />
      </div>

      <div className="p-4">
        <p className="text-xs text-slate-500">
          By {service.user?.name || "Unknown"}
        </p>

        <h3 className="mt-2 line-clamp-2 text-base font-semibold text-slate-900">
          {service.title}
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          {service.category?.name || "Uncategorized"}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs text-slate-500">
            <Star className="h-4 w-4 fill-orange-400 text-orange-400" />
            <span>
              {service.rating || 0} ({service.reviews_count || 0})
            </span>
          </div>

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