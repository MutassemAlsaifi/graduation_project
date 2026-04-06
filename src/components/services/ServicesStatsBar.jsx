import { Search, MapPin, BadgeDollarSign } from "lucide-react";

export default function ServicesStatsBar({ filteredCount }) {
  return (
    <div className="mx-auto mt-6 grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
      <div className="rounded-3xl border border-slate-200/70 bg-white p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-emerald-100 p-3 text-emerald-600">
            <Search className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm text-slate-500">Results found</p>
            <p className="text-xl font-semibold text-slate-900">{filteredCount}</p>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200/70 bg-white p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-emerald-100 p-3 text-emerald-600">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm text-slate-500">Nearby support</p>
            <p className="text-xl font-semibold text-slate-900">Available</p>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200/70 bg-white p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-emerald-100 p-3 text-emerald-600">
            <BadgeDollarSign className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm text-slate-500">Budget range</p>
            <p className="text-xl font-semibold text-slate-900">Flexible</p>
          </div>
        </div>
      </div>
    </div>
  );
}