export default function ServiceContactBar({ service }) {
  return (
    <section className="mt-5">
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600">
          {service.category?.name || "Uncategorized"}
        </span>
      </div>

      <div className="rounded-[26px] border border-slate-200 bg-white p-4 shadow-sm">
        <button className="w-full rounded-2xl bg-emerald-500 px-6 py-4 text-sm font-semibold text-white transition hover:bg-emerald-600">
          Contact Owner
        </button>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <div className="flex items-end gap-1">
            <span className="text-3xl font-semibold tracking-tight text-emerald-500">
              ${service.price}
            </span>
            <span className="mb-1 text-sm text-slate-400">
              / {service.price_type || "Not specified"}
            </span>
          </div>

          <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-500">
            {service.duration || "Not specified"}
          </span>

          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-500">
            {service.service_type || "Not specified"}
          </span>
        </div>
      </div>
    </section>
  );
}