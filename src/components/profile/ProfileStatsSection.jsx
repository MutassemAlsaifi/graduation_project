import ProfileStatsCard from "./ProfileStatsCard";

export default function ProfileStatsSection({ user, services = [] }) {
  const isProvider =
    user?.role === "provider" || user?.role === "admin";

  const totalServices = services.length;

  const activeServices = services.filter(
    (s) => s?.status === "Active" || s?.is_active
  ).length;

  const stats = isProvider
    ? [
        {
          id: 1,
          title: "Total Services",
          value: totalServices,
          subtitle: "All your listed services",
        },
        {
          id: 2,
          title: "Active Services",
          value: activeServices,
          subtitle: "Currently available",
        },
        {
          id: 3,
          title: "Account Type",
          value: user?.role || "user",
          subtitle: "Your role in the platform",
        },
      ]
    : [
        {
          id: 1,
          title: "Account Type",
          value: user?.role || "user",
          subtitle: "Your role in the platform",
        },
      ];

  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {stats.map((item) => (
        <ProfileStatsCard key={item.id} item={item} />
      ))}
    </section>
  );
}