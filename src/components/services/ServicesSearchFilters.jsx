import { Search, SlidersHorizontal } from "lucide-react";

export default function ServicesSearchFilters({
  query,
  setQuery,
  activeTag,
  setActiveTag,
  categories,
}) {
  return (
    <section className="px-4 pt-6 sm:px-6 lg:px-8 lg:pt-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Find a Service
        </h1>

        <p className="mt-2 text-sm text-slate-500 sm:text-base">
          Browse trusted services from real owners around you.
        </p>

        <div className="mt-6 flex flex-col gap-3 lg:flex-row">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for cleaning, tutoring, gardening..."
              className="h-14 w-full rounded-2xl border border-slate-200 bg-white pl-11 pr-4 text-sm shadow-sm outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
            />
          </div>

          <button className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-5 text-sm font-medium text-white transition hover:bg-emerald-600">
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </button>
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          {categories.map((item) => {
            const isActive = activeTag === item;

            return (
              <button
                key={item}
                onClick={() => setActiveTag(isActive ? "All" : item)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  isActive
                    ? "border-emerald-200 bg-emerald-100 text-emerald-700"
                    : "border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:text-slate-700"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}