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

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsOpen(false);
  };

  const handleGoHomeTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsOpen(false);
  };

  const handleAddService = () => {
    setIsOpen(false);

    if (!isAuthenticated) {
      navigate("/auth/login");
      return;
    }

    if (canAddService) {
      navigate("/services/new");
      return;
    }

    navigate("/dashboard");
  };

  const handleLogout = async () => {
    try {
      if (token) {
        await logoutUser(token);
      }
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setIsOpen(false);
      navigate("/auth/login");
    }
  };

  return (
    <header className="sticky top-0 z-30 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 text-sm text-slate-500 md:flex">
          <button
            type="button"
            onClick={handleGoHomeTop}
            className="text-emerald-500 transition hover:text-emerald-600"
          >
            Home
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("services")}
            className="transition hover:text-slate-900"
          >
            Services
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="transition hover:text-slate-900"
          >
            Contact
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("about")}
            className="transition hover:text-slate-900"
          >
            About
          </button>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {isAuthenticated ? (
            <>
              <button
                type="button"
                onClick={handleAddService}
                className="rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-emerald-600"
              >
                Add Service
              </button>

              <Link
                to="/dashboard"
                className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
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
                onClick={handleLogout}
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={handleAddService}
                className="rounded-full border border-emerald-200 px-5 py-2 text-sm font-medium text-emerald-600 transition hover:bg-emerald-50"
              >
                Add Service
              </button>

              <Link
                to="/auth/login"
                className="text-sm text-slate-600 transition hover:text-slate-900"
              >
                Sign In
              </Link>

              <Link
                to="/auth/register"
                className="rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-emerald-600"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-xl p-2 text-slate-600 transition hover:bg-slate-100 md:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-100 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm text-slate-600">
            <button
              type="button"
              onClick={handleGoHomeTop}
              className="text-left transition hover:text-slate-900"
            >
              Home
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("services")}
              className="text-left transition hover:text-slate-900"
            >
              Services
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="text-left transition hover:text-slate-900"
            >
              Contact
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("about")}
              className="text-left transition hover:text-slate-900"
            >
              About
            </button>

            <div className="mt-2 flex flex-col gap-3">
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
                    className="rounded-2xl border border-slate-200 px-4 py-3 text-center font-medium text-slate-700"
                    onClick={() => setIsOpen(false)}
                  >
                    Dashboard
                  </Link>

                  <Link
                    to="/profile"
                    className="rounded-2xl border border-slate-200 px-4 py-3 text-center font-medium text-slate-700"
                    onClick={() => setIsOpen(false)}
                  >
                    Profile
                  </Link>

                  <button
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
                    className="rounded-2xl border border-slate-200 px-4 py-3 text-center font-medium text-slate-700"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign In
                  </Link>

                  <Link
                    to="/auth/register"
                    className="rounded-2xl bg-emerald-500 px-4 py-3 text-center font-semibold text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}