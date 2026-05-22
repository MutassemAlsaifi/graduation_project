import DashboardStatCard from "./DashboardStatCard";

export default function DashboardStats({ stats = [] }) {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <DashboardStatCard
          key={item.id}
          title={item.title}
          value={item.value}
          subtitle={item.subtitle}
        />
      ))}
    </section>
  );
}