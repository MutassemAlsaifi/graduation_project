import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

export default function ServicesSearchFilters({
  query,
  setQuery,
  activeCategoryId,
  setActiveCategoryId,
  categories,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  location,
  setLocation,
}) {
  const [showFilters, setShowFilters] = useState(false);

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
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for cleaning, tutoring, gardening..."
              className="h-14 w-full rounded-2xl border border-slate-200 bg-white pl-11 pr-4 text-sm shadow-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
            />
          </div>

          <button
            type="button"
            onClick={() => setShowFilters((prev) => !prev)}
            className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-5 text-sm font-medium text-white transition hover:bg-emerald-600"
          >
            <SlidersHorizontal className="h-4 w-4" />
            {showFilters ? "Hide Filters" : "Filters"}
          </button>
        </div>

        {showFilters && (
          <div className="mt-4 grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-3">
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              placeholder="Min price"
              className="h-12 rounded-2xl border border-slate-200 px-4 text-sm text-slate-700 outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
            />

            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              placeholder="Max price"
              className="h-12 rounded-2xl border border-slate-200 px-4 text-sm text-slate-700 outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
            />

            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
              className="h-12 rounded-2xl border border-slate-200 px-4 text-sm text-slate-700 outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
            />
          </div>
        )}

        <div className="mt-4 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setActiveCategoryId("")}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              activeCategoryId === ""
                ? "border-emerald-200 bg-emerald-100 text-emerald-700"
                : "border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:text-slate-700"
            }`}
          >
            All
          </button>

          {categories.map((category) => {
            const isActive = Number(activeCategoryId) === category.id;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() =>
                  setActiveCategoryId(isActive ? "" : String(category.id))
                }
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  isActive
                    ? "border-emerald-200 bg-emerald-100 text-emerald-700"
                    : "border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:text-slate-700"
                }`}
              >
                {category.name}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}