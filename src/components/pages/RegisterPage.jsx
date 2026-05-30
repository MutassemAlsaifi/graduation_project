import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, UserPlus } from "lucide-react";
import { registerUser } from "../../services/authService";

export default function RegisterPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    role: "provider",
    password: "",
    password_confirmation: "",
  });

  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const getPasswordStrength = (password) => {
    let score = 0;

    if (password.length >= 8) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[@$!%*?&.#_-]/.test(password)) score++;

    return score;
  };

  const passwordStrength = getPasswordStrength(form.password);

  const handleChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));

    setGeneralError("");
  };

  const validateForm = () => {
    const newErrors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const phoneRegex = /^\+?[0-9\s-]{7,15}$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#_-]).{8,}$/;

    if (!form.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(form.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!form.country.trim()) {
      newErrors.country = "Country is required.";
    }

    if (!form.password) {
      newErrors.password = "Password is required.";
    } else if (!passwordRegex.test(form.password)) {
      newErrors.password =
        "Password must include uppercase, lowercase, number, and special character.";
    }

    if (!form.password_confirmation) {
      newErrors.password_confirmation = "Please confirm your password.";
    } else if (form.password !== form.password_confirmation) {
      newErrors.password_confirmation = "Passwords do not match.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setGeneralError("");

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const data = await registerUser({
        ...form,
        role: "provider",
      });

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/dashboard");
    } catch (err) {
      console.error("Register failed:", err);

      if (err.response?.data?.errors) {
        const backendErrors = {};

        Object.entries(err.response.data.errors).forEach(([field, messages]) => {
          backendErrors[field] = messages?.[0] || "Invalid value.";
        });

        setErrors(backendErrors);
      } else {
        setGeneralError(err.response?.data?.message || "Registration failed.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (field) =>
    `w-full rounded-2xl border px-4 py-3 text-sm outline-none transition ${
      errors[field]
        ? "border-red-300 bg-red-50 focus:border-red-500"
        : "border-slate-200 bg-white focus:border-emerald-500"
    }`;

  const strengthText =
    passwordStrength <= 2
      ? "Weak password"
      : passwordStrength <= 4
      ? "Medium password"
      : "Strong password";

  const strengthWidth =
    passwordStrength <= 2
      ? "w-1/3 bg-red-500"
      : passwordStrength <= 4
      ? "w-2/3 bg-yellow-500"
      : "w-full bg-emerald-500";

  return (
    <main className="min-h-screen bg-[#f8faf8] px-4 py-10">
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-6xl items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
        <section className="hidden lg:block">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-500">
            Provider Registration
          </p>

          <h1 className="mt-4 max-w-xl text-5xl font-semibold leading-tight tracking-tight text-slate-900">
            Start offering your services professionally.
          </h1>

          <p className="mt-5 max-w-lg text-base leading-7 text-slate-500">
            Create your provider account, publish your services, and connect
            with customers looking for trusted professionals.
          </p>
        </section>

        <form
          onSubmit={handleSubmit}
          className="w-full rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
          noValidate
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
              <UserPlus className="h-6 w-6" />
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Create provider account
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Your account will be created as a provider.
              </p>
            </div>
          </div>

          {generalError && (
            <p className="mb-5 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-600">
              {generalError}
            </p>
          )}

          <div className="space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Full name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className={inputClass("name")}
              />
              {errors.name && (
                <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Email address
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={inputClass("email")}
              />
              {errors.email && (
                <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
              )}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Phone number
                </label>
                <input
                  type="tel"
                  placeholder="+39 123 456 789"
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className={inputClass("phone")}
                />
                {errors.phone && (
                  <p className="mt-1.5 text-xs text-red-500">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Country
                </label>
                <input
                  type="text"
                  placeholder="Italy"
                  value={form.country}
                  onChange={(e) => handleChange("country", e.target.value)}
                  className={inputClass("country")}
                />
                {errors.country && (
                  <p className="mt-1.5 text-xs text-red-500">
                    {errors.country}
                  </p>
                )}
              </div>
            </div>

            <input type="hidden" name="role" value="provider" />

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Uppercase, lowercase, number, symbol"
                  value={form.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  className={`${inputClass("password")} pr-12`}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>

              {form.password && (
                <div className="mt-2">
                  <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                    <div
                      className={`h-full rounded-full transition-all ${strengthWidth}`}
                    />
                  </div>

                  <p className="mt-1 text-xs text-slate-500">
                    {strengthText}
                  </p>
                </div>
              )}

              {errors.password && (
                <p className="mt-1.5 text-xs text-red-500">
                  {errors.password}
                </p>
              )}
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Confirm password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Repeat your password"
                value={form.password_confirmation}
                onChange={(e) =>
                  handleChange("password_confirmation", e.target.value)
                }
                className={inputClass("password_confirmation")}
              />
              {errors.password_confirmation && (
                <p className="mt-1.5 text-xs text-red-500">
                  {errors.password_confirmation}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 w-full rounded-2xl bg-emerald-500 px-4 py-3 font-medium text-white transition hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Creating account..." : "Create provider account"}
          </button>

          <p className="mt-5 text-center text-sm text-slate-500">
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className="font-medium text-emerald-600 hover:text-emerald-700"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}