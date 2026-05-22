import {
  LayoutDashboard,
  Briefcase,
  PlusSquare,
  Settings,
  LogOut,
  Users,
  ShieldCheck,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { logoutUser } from "../../services/authService";

export default function DashboardSidebar({ user }) {
  const navigate = useNavigate();

  const isAdmin = user?.role === "admin";
  const canManageServices =
    user?.role === "provider" || user?.role === "admin";

  const handleLogout = async () => {
    const token = localStorage.getItem("token");

    try {
      if (token) {
        await logoutUser(token);
      }
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/auth/login");
    }
  };

  const items = [
    { icon: LayoutDashboard, label: "Overview", to: "/dashboard" },

    ...(canManageServices
      ? [
          { icon: Briefcase, label: "My Services", to: "/services" },
          { icon: PlusSquare, label: "Add Service", to: "/services/new" },
        ]
      : []),

    ...(isAdmin
      ? [
          { icon: Users, label: "Users", to: "/admin/users" },
          { icon: ShieldCheck, label: "Admin Panel", to: "/admin" },
        ]
      : []),

    { icon: Settings, label: "Settings", to: "/profile" },
  ];

  return (
    <aside className="hidden w-72 shrink-0 border-r border-slate-200 bg-white lg:block">
      <div className="p-6">
        <NavLink to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
            <span className="text-base font-semibold">
              {user?.name?.charAt(0).toUpperCase() || "D"}
            </span>
          </div>

          <div>
            <span className="block text-xl font-semibold tracking-tight text-slate-900">
              DirectServe
            </span>
            <span className="text-xs text-slate-500">
              {user?.name || "User"} {isAdmin ? "(Admin)" : ""}
            </span>
          </div>
        </NavLink>

        <nav className="mt-8 space-y-2">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  `flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-emerald-50 text-emerald-600"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`
                }
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        <button
          onClick={handleLogout}
          className="mt-10 flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-red-500 transition hover:bg-red-50"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      </div>
    </aside>
  );
}