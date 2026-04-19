import { Link } from "react-router-dom";

export default function ProfileServicesCard({ user, services = [] }) {
  const canManageServices =
    user?.role === "provider" || user?.role === "admin";

  if (!canManageServices) {
    return null;
  }

  return (
    <section className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold text-slate-900">My Services</h3>

        <Link
          to="/services"
          className="text-sm font-medium text-emerald-500 transition hover:text-emerald-600"
        >
          View all
        </Link>
      </div>

      {services.length === 0 ? (
        <p className="text-sm text-slate-500">No services found yet.</p>
      ) : (
        <div className="space-y-4">
          {services.map((service) => {
            const status =
              service?.status ||
              (service?.is_active ? "Active" : "Pending");

            return (
              <div
                key={service.id}
                className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3"
              >
                <div>
                  <p className="text-sm font-medium text-slate-800">
                    {service.title || "Untitled service"}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    {service.price ? `$${service.price}` : "No price"}
                  </p>
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    status === "Active"
                      ? "bg-emerald-50 text-emerald-600"
                      : "bg-orange-50 text-orange-500"
                  }`}
                >
                  {status}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}