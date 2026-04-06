import { ArrowLeft, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServiceDetailsHeader() {
  return (
    <header className="px-5 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-4xl items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>

        <button className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 transition hover:text-slate-700">
          <Share2 className="h-4 w-4" />
          Share
        </button>
      </div>
    </header>
  );
}