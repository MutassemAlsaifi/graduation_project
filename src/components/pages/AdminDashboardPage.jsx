import { useEffect, useState } from "react";
import { getAdminDashboard } from "../../services/adminService";

export default function AdminDashboardPage() {
  const [stats, setStats] = useState(null);
  const [latestUsers, setLatestUsers] = useState([]);
  const [latestServices, setLatestServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const data = await getAdminDashboard();

        setStats(data?.stats || null);
        setLatestUsers(Array.isArray(data?.latest_users) ? data.latest_users : []);
        setLatestServices(
          Array.isArray(data?.latest_services) ? data.latest_services : []
        );
      } catch (error) {
        console.error("Failed to load admin dashboard:", error);
        setStats(null);
        setLatestUsers([]);
        setLatestServices([]);
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#f7faf8] p-10 text-slate-900">
        <div className="mx-auto max-w-6xl text-center text-slate-500">
          Loading admin dashboard...
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7faf8] px-4 py-8 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
            Admin Dashboard
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Monitor the platform, users, and services from one place.
          </p>
        </div>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <StatCard title="Total Users" value={stats?.total_users ?? 0} />
          <StatCard title="Total Services" value={stats?.total_services ?? 0} />
          <StatCard title="Total Categories" value={stats?.total_categories ?? 0} />
          <StatCard title="Admins" value={stats?.admins_count ?? 0} />
          <StatCard title="Providers" value={stats?.providers_count ?? 0} />
          <StatCard title="Customers" value={stats?.customers_count ?? 0} />
        </section>

        <section className="grid gap-6 xl:grid-cols-2">
          <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Latest Users</h2>

            {latestUsers.length === 0 ? (
              <p className="mt-4 text-sm text-slate-500">No users found.</p>
            ) : (
              <div className="mt-4 space-y-4">
                {latestUsers.map((user) => (
                  <div
                    key={user.id}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-slate-100 p-4"
                  >
                    <div>
                      <h3 className="font-medium text-slate-900">{user.name}</h3>
                      <p className="text-sm text-slate-500">{user.email}</p>
                    </div>

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium capitalize text-slate-700">
                      {user.role}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Latest Services</h2>

            {latestServices.length === 0 ? (
              <p className="mt-4 text-sm text-slate-500">No services found.</p>
            ) : (
              <div className="mt-4 space-y-4">
                {latestServices.map((service) => {
                  const image = service?.images?.[0]?.path || "";

                  return (
                    <div
                      key={service.id}
                      className="flex items-center gap-4 rounded-2xl border border-slate-100 p-4"
                    >
                      {image ? (
                        <img
                          src={image}
                          alt={service.title}
                          className="h-16 w-16 rounded-2xl object-cover"
                        />
                      ) : (
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-xs text-slate-400">
                          No image
                        </div>
                      )}

                      <div className="min-w-0 flex-1">
                        <h3 className="truncate font-medium text-slate-900">
                          {service.title}
                        </h3>
                        <p className="mt-1 text-sm text-slate-500">
                          {service.user?.name || "Unknown provider"}
                        </p>
                        <p className="mt-1 text-sm text-slate-500">
                          {service.category?.name || "Uncategorized"}
                        </p>
                      </div>

                      <span className="text-sm font-semibold text-slate-800">
                        {service.price ? `$${service.price}` : "N/A"}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-slate-500">{title}</p>
      <h3 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
        {value}
      </h3>
    </div>
  );
}