import { Star } from "lucide-react";

export default function ServiceCard({ service }) {
  return (
    <article className="overflow-hidden rounded-[28px] border border-slate-200/70 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>

      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="line-clamp-2 text-lg font-semibold tracking-tight text-slate-900">
            {service.title}
          </h3>
          <span className="whitespace-nowrap text-sm font-semibold text-slate-700">
            {service.price}
          </span>
        </div>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-500">
          {service.description}
        </p>

        <div className="mt-4 flex items-center justify-between gap-3 text-sm">
          <div className="flex items-center gap-1 text-amber-500">
            <Star className="h-4 w-4 fill-current" />
            <span className="font-medium text-slate-700">{service.rating}</span>
            <span className="text-slate-400">({service.reviews})</span>
          </div>

          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
            {service.tag}
          </span>
        </div>
      </div>
    </article>
  );
}