import { dashboardStats } from "../../data/dashboardData";
import DashboardStatCard from "./DashboardStatCard";

export default function DashboardStats() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {dashboardStats.map((item) => (
        <DashboardStatCard key={item.id} item={item} />
      ))}
    </section>
  );
}