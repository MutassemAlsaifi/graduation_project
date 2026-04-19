import { Bell, Menu } from "lucide-react";

export default function ServicesHeader({ onMenuClick, onBellClick }) {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        
        {/* LEFT */}
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            aria-label="Open menu"
            className="rounded-xl p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
          >
            <Menu className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <span className="text-sm font-semibold">D</span>
            </div>
            <span className="text-xl font-semibold tracking-tight text-slate-800">
              DirectServe
            </span>
          </div>
        </div>

        {/* RIGHT */}
        <button
          onClick={onBellClick}
          aria-label="Notifications"
          className="relative rounded-xl p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
        >
          <Bell className="h-5 w-5" />

          {/* Notification badge */}
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
        </button>
      </div>
    </header>
  );
}