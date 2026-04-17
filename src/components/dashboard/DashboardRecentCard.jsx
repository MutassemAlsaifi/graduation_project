export default function DashboardRecentCard({ service }) {
  return (
    <div className="flex items-center gap-4 rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm">
      <img
        src={service.image}
        alt={service.title}
        className="h-16 w-16 rounded-2xl object-cover"
      />

      <div className="min-w-0 flex-1">
        <h4 className="truncate text-sm font-semibold text-slate-900">
          {service.title}
        </h4>
        <p className="mt-1 text-sm text-slate-500">{service.price}</p>
      </div>

      <span
        className={`rounded-full px-3 py-1 text-xs font-medium ${
          service.status === "Active"
            ? "bg-emerald-50 text-emerald-600"
            : "bg-orange-50 text-orange-500"
        }`}
      >
        {service.status}
      </span>
    </div>
  );
}