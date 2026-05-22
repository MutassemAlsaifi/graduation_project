import { ChevronRight, Star, BadgeCheck } from "lucide-react";

export default function ServiceProviderCard({ provider, rating, reviewsCount }) {
  return (
    <section className="mt-9">
      <h3 className="mb-4 text-lg font-semibold tracking-tight text-slate-800">
        Service provider
      </h3>

      <div className="flex items-center justify-between rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md">
        <div className="flex items-center gap-4">
          <img
            src={provider.avatar}
            alt={provider.name}
            className="h-14 w-14 rounded-full object-cover"
          />

          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-semibold text-slate-900">{provider.name}</h4>
              {provider.verified && (
                <BadgeCheck className="h-4 w-4 text-emerald-500" />
              )}
            </div>

            <p className="mt-1 text-sm text-slate-500">
              Verified owner • {provider.years_on_platform} years on DirectServe
            </p>

            <div className="mt-2 flex items-center gap-2 text-sm">
              <div className="flex items-center gap-1 text-amber-500">
                <Star className="h-4 w-4 fill-current" />
                <span className="font-medium text-slate-700">{rating}</span>
              </div>
              <span className="text-slate-400">• {reviewsCount} reviews</span>
            </div>
          </div>
        </div>

        <ChevronRight className="h-5 w-5 text-slate-400" />
      </div>
    </section>
  );
}