import { recentServices } from "../../data/dashboardData";
import DashboardRecentCard from "./DashboardRecentCard";

export default function DashboardRecentServices() {
  return (
    <section className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold text-slate-900">Recent Services</h3>
        <a href="/services" className="text-sm font-medium text-emerald-500 hover:text-emerald-600">
          View all
        </a>
      </div>

      <div className="space-y-4">
        {recentServices.map((service) => (
          <DashboardRecentCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}