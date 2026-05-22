import { ChevronRight, Star, BadgeCheck } from "lucide-react";

const fallbackAvatar =
  "https://ui-avatars.com/api/?name=Provider&background=E2E8F0&color=334155";

export default function ServiceProviderCard({ provider, rating, reviewsCount }) {
  if (!provider) {
    return (
      <section className="mt-9">
        <h3 className="mb-4 text-lg font-semibold tracking-tight text-slate-800">
          Service provider
        </h3>

        <div className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-sm text-slate-500">Provider information is not available.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="mt-9">
      <h3 className="mb-4 text-lg font-semibold tracking-tight text-slate-800">
        Service provider
      </h3>

      <div className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <img
              src={provider.avatar || fallbackAvatar}
              alt={provider.name || "Provider"}
              className="h-14 w-14 rounded-full object-cover"
            />

            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-semibold text-slate-900">
                  {provider.name || "Unknown provider"}
                </h4>

                <BadgeCheck className="h-4 w-4 text-emerald-500" />
              </div>

              <p className="mt-1 text-sm text-slate-500">
                {provider.location || "Location not available"}
              </p>

              <div className="mt-2 flex items-center gap-2 text-sm">
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="font-medium text-slate-700">{rating || 0}</span>
                </div>
                <span className="text-slate-400">• {reviewsCount || 0} reviews</span>
              </div>
            </div>
          </div>

          <ChevronRight className="h-5 w-5 text-slate-400" />
        </div>

        <div className="mt-4 space-y-2 border-t border-slate-100 pt-4">
          <p className="text-sm text-slate-700">
            <span className="font-medium">Email:</span>{" "}
            {provider.email || "Not available"}
          </p>

          <p className="text-sm text-slate-700">
            <span className="font-medium">Phone:</span>{" "}
            {provider.phone || "Not available"}
          </p>

          <p className="text-sm text-slate-700">
            <span className="font-medium">Bio:</span>{" "}
            {provider.bio || "No bio available"}
          </p>
        </div>
      </div>
    </section>
  );
}