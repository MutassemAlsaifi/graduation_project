import { Star } from "lucide-react";

export default function ServiceCard({
  title,
  provider,
  rating,
  reviews,
  price,
  image,
}) {
  return (
    <div className="overflow-hidden rounded-[26px] border-0 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="line-clamp-2 text-base font-semibold text-slate-900">
              {title}
            </h3>
            <p className="mt-2 text-sm text-slate-500">{provider}</p>
          </div>
          <span className="whitespace-nowrap text-sm font-semibold text-slate-700">
            {price}
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-1 text-sm text-amber-500">
            <Star className="h-4 w-4 fill-current" />
            <span className="font-medium text-slate-700">
              {rating.toFixed(1)}
            </span>
            <span className="text-slate-400">({reviews})</span>
          </div>

          <button className="rounded-full px-4 py-2 text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700">
            View details
          </button>
        </div>
      </div>
    </div>
  );
}