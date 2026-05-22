import { Link } from "react-router-dom";

export default function DashboardQuickActions() {
  const storedUser = localStorage.getItem("user");
  const currentUser = storedUser ? JSON.parse(storedUser) : null;

  const canManageServices =
    currentUser?.role === "provider" || currentUser?.role === "admin";

  return (
    <section className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">
        Quick Actions
      </h3>

      <div className="mt-5 grid gap-3">
        {canManageServices && (
          <>
            <Link
              to="/services/new"
              className="rounded-2xl bg-emerald-500 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-emerald-600"
            >
              Add New Service
            </Link>

            <Link
              to="/services"
              className="rounded-2xl border border-slate-200 px-4 py-3 text-center text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Manage Services
            </Link>
          </>
        )}

        <Link
          to="/profile"
          className="rounded-2xl border border-slate-200 px-4 py-3 text-center text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        >
          Edit Profile
        </Link>
      </div>
    </section>
  );
}