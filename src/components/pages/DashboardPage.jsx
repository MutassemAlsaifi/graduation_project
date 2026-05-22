import { useEffect, useMemo, useState } from "react";
import DashboardHeader from "../dashboard/DashboardHeader";
import DashboardQuickActions from "../dashboard/DashboardQuickActions";
import DashboardRecentServices from "../dashboard/DashboardRecentServices";
import DashboardSidebar from "../dashboard/DashboardSidebar";
import DashboardStats from "../dashboard/DashboardStats";
import DashboardWelcome from "../dashboard/DashboardWelcome";
import { getMyServices } from "../../services/servicesService";

export default function DashboardPage() {
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        if (user?.role === "provider" || user?.role === "admin") {
          const data = await getMyServices();
          setServices(Array.isArray(data) ? data : []);
        } else {
          setServices([]);
        }
      } catch (error) {
        console.error("Failed to load dashboard data:", error);
        setServices([]);
      } finally {
        setLoading(false);
      }
    };

    loadDashboardData();
  }, [user?.role]);

  const stats = useMemo(() => {
    const totalServices = services.length;

    const totalValue = services.reduce(
      (sum, service) => sum + Number(service?.price || 0),
      0
    );

    return [
      {
        id: 1,
        title: "My Services",
        value: totalServices,
        subtitle: "Total services created",
      },
      {
        id: 2,
        title: "Total Value",
        value: `$${totalValue}`,
        subtitle: "Combined listed prices",
      },
      {
        id: 3,
        title: "Account Type",
        value: user?.role || "user",
        subtitle: "Your role in the platform",
      },
    ];
  }, [services, user?.role]);

  const recentServices = useMemo(() => {
    return [...services]
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      .slice(0, 4);
  }, [services]);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#f7faf8] p-10 text-slate-900">
        <div className="mx-auto max-w-4xl text-center text-slate-500">
          Loading dashboard...
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7faf8] text-slate-900">
      <div className="flex min-h-screen">
        <DashboardSidebar user={user} />

        <div className="flex-1">
          <DashboardHeader user={user} />

          <section className="px-4 py-6 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl space-y-6">
              <DashboardWelcome
                user={user}
                servicesCount={services.length}
              />

              <DashboardStats stats={stats} />

              <div className="grid gap-6 xl:grid-cols-[1.2fr_0.55fr]">
                <DashboardRecentServices services={recentServices} />
                <DashboardQuickActions />
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}