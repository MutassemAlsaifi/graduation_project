import { Bell, Menu, Search } from "lucide-react";

export default function ProfileHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div>
          <h1 className="text-xl font-semibold tracking-tight text-slate-900">
            My Profile
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            View and manage your personal information.
          </p>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button className="rounded-xl p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 lg:hidden">
            <Menu className="h-5 w-5" />
          </button>
          <button className="rounded-xl p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700">
            <Search className="h-5 w-5" />
          </button>
          <button className="rounded-xl p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700">
            <Bell className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}