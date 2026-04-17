import { Bell, Menu, Search } from "lucide-react";

export default function AuthHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 lg:gap-4">
          <button className="rounded-xl p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 lg:hidden">
            <Menu className="h-5 w-5" />
          </button>

          <a href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <span className="text-base font-semibold">D</span>
            </div>
            <span className="text-xl font-semibold tracking-tight text-slate-900">
              DirectServe
            </span>
          </a>
        </div>

        <nav className="hidden items-center gap-8 lg:flex">
          <a href="/" className="text-sm font-medium text-slate-500 hover:text-slate-900">
            Home
          </a>
          <a href="/services" className="text-sm font-medium text-slate-500 hover:text-slate-900">
            Services
          </a>
          <a href="/services/new" className="text-sm font-medium text-slate-500 hover:text-slate-900">
            Add Service
          </a>
          <a href="/about" className="text-sm font-medium text-slate-500 hover:text-slate-900">
            About
          </a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button className="hidden rounded-xl p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 sm:inline-flex">
            <Search className="h-5 w-5" />
          </button>
          <button className="rounded-xl p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700">
            <Bell className="h-5 w-5" />
          </button>
          <a href="/auth/login" className="hidden text-sm font-medium text-emerald-500 sm:inline">
            Sign In
          </a>
          <a
            href="/auth/register"
            className="rounded-full bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-600 sm:px-5"
          >
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
}