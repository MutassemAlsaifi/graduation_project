import { Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function FeaturedServiceCard({ service }) {
  if (!service) return null;

  const image = service?.images?.[0]?.path || "";
  const title = service?.title || "Untitled service";
  const provider = service?.user?.name || "Unknown provider";
  const rating = service?.rating || 0;
  const priceText = service?.price
    ? `$${service.price}${service?.price_type ? `/${service.price_type}` : ""}`
    : "Price not specified";

  return (
    <div className="overflow-hidden rounded-[28px] bg-white shadow-[0_20px_60px_-25px_rgba(15,23,42,0.18)]">
      <div className="p-4 sm:p-5">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-500">
          Featured Service
        </p>

        <div className="overflow-hidden rounded-3xl">
          {image ? (
            <img
              src={image}
              alt={title}
              className="h-56 w-full object-cover"
            />
          ) : (
            <div className="flex h-56 w-full items-center justify-center bg-slate-100 text-sm text-slate-400">
              No image uploaded
            </div>
          )}
        </div>

        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            <p className="mt-2 text-sm text-slate-500">{provider}</p>
          </div>

          <div className="flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1.5 text-sm font-medium text-amber-600">
            <Star className="h-4 w-4 fill-current" />
            {rating}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between gap-3">
          <span className="text-base font-semibold text-slate-800">
            {priceText}
          </span>

          <Link
            to={`/services/${service.id}`}
            className="rounded-full border border-emerald-200 px-4 py-2 text-sm font-medium text-emerald-600 transition hover:bg-emerald-50"
          >
            View details
          </Link>
        </div>
      </div>
    </div>
  );
}