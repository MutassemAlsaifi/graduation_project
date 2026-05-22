import DashboardHeader from "../dashboard/DashboardHeader";
import DashboardQuickActions from "../dashboard/DashboardQuickActions";
import DashboardRecentServices from "../dashboard/DashboardRecentServices";
import DashboardSidebar from "../dashboard/DashboardSidebar";
import DashboardStats from "../dashboard/DashboardStats";
import DashboardWelcome from "../dashboard/DashboardWelcome";


export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#f7faf8] text-slate-900">
      <div className="flex min-h-screen">
        <DashboardSidebar />

        <div className="flex-1">
          <DashboardHeader />

          <section className="px-4 py-6 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl space-y-6">
              <DashboardWelcome />
              <DashboardStats />

              <div className="grid gap-6 xl:grid-cols-[1.2fr_0.55fr]">
                <DashboardRecentServices />
                <DashboardQuickActions />
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}