import { profileServices } from "../../data/profileData";

export default function ProfileServicesCard() {
  return (
    <section className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold text-slate-900">My Services</h3>
        <a href="/services" className="text-sm font-medium text-emerald-500 hover:text-emerald-600">
          View all
        </a>
      </div>

      <div className="space-y-4">
        {profileServices.map((service) => (
          <div
            key={service.id}
            className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3"
          >
            <div>
              <p className="text-sm font-medium text-slate-800">{service.title}</p>
              <p className="mt-1 text-xs text-slate-500">{service.price}</p>
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
        ))}
      </div>
    </section>
  );
}