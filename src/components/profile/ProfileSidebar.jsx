import { LayoutDashboard, User, Briefcase, Settings, LogOut } from "lucide-react";

export default function ProfileSidebar() {
  const items = [
    { icon: LayoutDashboard, label: "Dashboard" },
    { icon: User, label: "Profile", active: true },
    { icon: Briefcase, label: "My Services" },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <aside className="hidden w-72 shrink-0 border-r border-slate-200 bg-white lg:block">
      <div className="p-6">
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
            <span className="text-base font-semibold">D</span>
          </div>
          <span className="text-xl font-semibold tracking-tight text-slate-900">
            DirectServe
          </span>
        </a>

        <nav className="mt-8 space-y-2">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                  item.active
                    ? "bg-emerald-50 text-emerald-600"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </button>
            );
          })}
        </nav>

        <button className="mt-10 flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-red-500 transition hover:bg-red-50">
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      </div>
    </aside>
  );
}