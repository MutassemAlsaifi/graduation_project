import { Star } from "lucide-react";

export default function FeaturedServiceCard() {
  return (
    <div className="overflow-hidden rounded-[28px] border-0 bg-white shadow-[0_20px_60px_-25px_rgba(15,23,42,0.18)]">
      <div className="p-4 sm:p-5">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-500">
          Featured Service
        </p>

        <div className="overflow-hidden rounded-3xl">
          <img
            src="https://images.unsplash.com/photo-1505798577917-a65157d3320a?auto=format&fit=crop&w=1200&q=80"
            alt="Kitchen plumbing"
            className="h-56 w-full object-cover"
          />
        </div>

        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Professional Kitchen Plumbing
            </h3>
            <p className="mt-2 text-sm text-slate-500">Jane Doe</p>
          </div>

          <div className="flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1.5 text-sm font-medium text-amber-600">
            <Star className="h-4 w-4 fill-current" />
            4.9
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-base font-semibold text-slate-800">$75/hr</span>

          <button className="rounded-full border border-emerald-200 px-4 py-2 text-emerald-600 hover:bg-emerald-50">
            View details
          </button>
        </div>
      </div>
    </div>
  );
}