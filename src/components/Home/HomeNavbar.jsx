import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { logoutUser } from "../../services/authService";

export default function HomeNavbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const token = localStorage.getItem("token");
  const storedUser = localStorage.getItem("user");
  const currentUser = storedUser ? JSON.parse(storedUser) : null;

  const isAuthenticated = !!token && !!currentUser;
  const canAddService =
    currentUser?.role === "provider" || currentUser?.role === "admin";

  const userInitial = useMemo(() => {
    return currentUser?.name?.charAt(0)?.toUpperCase() || "U";
  }, [currentUser]);

  const closeMenu = () => setIsOpen(false);

  const handleAddService = () => {
    closeMenu();

    if (!isAuthenticated) {
      navigate("/auth/login");
      return;
    }

    navigate(canAddService ? "/services/new" : "/dashboard");
  };

  const handleLogout = async () => {
    try {
      if (token) await logoutUser(token);
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      closeMenu();
      navigate("/auth/login");
    }
  };

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Services", to: "/services" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-500 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="transition hover:text-emerald-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {isAuthenticated ? (
            <>
              {canAddService && (
                <button
                  type="button"
                  onClick={handleAddService}
                  className="rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-emerald-600"
                >
                  Add Service
                </button>
              )}

              <Link
                to="/dashboard"
                className="text-sm font-medium text-slate-600 hover:text-slate-900"
              >
                Dashboard
              </Link>

              <Link
                to="/profile"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-600"
              >
                {userInitial}
              </Link>

              <button
                type="button"
                onClick={handleLogout}
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={handleAddService}
                className="rounded-full border border-emerald-200 px-5 py-2 text-sm font-medium text-emerald-600 hover:bg-emerald-50"
              >
                Add Service
              </button>

              <Link
                to="/auth/login"
                className="text-sm text-slate-600 hover:text-slate-900"
              >
                Sign In
              </Link>

              <Link
                to="/auth/register"
                className="rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-white hover:bg-emerald-600"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-xl p-2 text-slate-600 hover:bg-slate-100 md:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-100 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm text-slate-600">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                className="transition hover:text-emerald-600"
              >
                {link.label}
              </Link>
            ))}

            <button
              type="button"
              onClick={handleAddService}
              className="rounded-2xl bg-emerald-500 px-4 py-3 text-white"
            >
              Add Service
            </button>

            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  onClick={closeMenu}
                  className="rounded-2xl border border-slate-200 px-4 py-3 text-center font-medium text-slate-700"
                >
                  Dashboard
                </Link>

                <Link
                  to="/profile"
                  onClick={closeMenu}
                  className="rounded-2xl border border-slate-200 px-4 py-3 text-center font-medium text-slate-700"
                >
                  Profile
                </Link>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="rounded-2xl border border-slate-200 px-4 py-3 text-slate-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/auth/login"
                  onClick={closeMenu}
                  className="rounded-2xl border border-slate-200 px-4 py-3 text-center font-medium text-slate-700"
                >
                  Sign In
                </Link>

                <Link
                  to="/auth/register"
                  onClick={closeMenu}
                  className="rounded-2xl bg-emerald-500 px-4 py-3 text-center font-semibold text-white"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}