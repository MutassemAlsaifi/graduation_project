import Logo from "./Logo";

export default function HomeNavbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 text-sm text-slate-500 md:flex">
          <a href="#" className="text-emerald-500 transition hover:text-emerald-600">
            Home
          </a>
          <a href="services" className="transition hover:text-slate-900">
            Services
          </a>
          <a href="contact" className="transition hover:text-slate-900">
            Contact
          </a>
          <a href="about" className="transition hover:text-slate-900">
            About
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="text-sm text-slate-600 transition hover:text-slate-900">
            Sign In
          </button>
          <button className="rounded-full bg-emerald-500 px-5 py-2 text-white hover:bg-emerald-600">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}