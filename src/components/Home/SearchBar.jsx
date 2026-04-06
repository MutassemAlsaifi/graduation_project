import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex w-full flex-col gap-3 sm:flex-row">
      <div className="relative flex-1">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Search for plumbing, tutoring, cleaning..."
          className="h-12 w-full rounded-full border border-slate-200 bg-white pl-11 pr-4 shadow-sm outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <button className="h-12 rounded-full bg-emerald-500 px-7 text-white hover:bg-emerald-600">
        Explore
      </button>
    </div>
  );
}