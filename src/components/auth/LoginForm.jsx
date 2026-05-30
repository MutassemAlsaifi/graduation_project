import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, AlertCircle } from "lucide-react";
import { loginUser } from "../../services/authService";
import AuthDivider from "./AuthDivider";
import SocialAuthButtons from "./SocialAuthButtons";

export default function LoginForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));

    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));

    setGeneralError("");
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(form.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!form.password) {
      newErrors.password = "Password is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLoginError = (error) => {
    const status = error?.response?.status;
    const data = error?.response?.data;
    const message = data?.message || "";

    if (data?.errors) {
      const backendErrors = {};

      Object.entries(data.errors).forEach(([field, messages]) => {
        backendErrors[field] = messages?.[0] || "Invalid value.";
      });

      setErrors(backendErrors);
      return;
    }

    if (status === 404 || message.toLowerCase().includes("not found")) {
      setErrors({
        email: "No account found with this email.",
      });
      return;
    }

    if (
      status === 401 ||
      message.toLowerCase().includes("password") ||
      message.toLowerCase().includes("credentials")
    ) {
      setErrors({
        password: "Incorrect password. Please try again.",
      });
      return;
    }

    if (status === 422) {
      setGeneralError(message || "Please check your email and password.");
      return;
    }

    setGeneralError("Something went wrong. Please try again.");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setGeneralError("");

    if (!validateForm()) return;

    try {
      setIsSubmitting(true);

      const response = await loginUser({
        email: form.email.trim(),
        password: form.password,
      });

      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));

      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      handleLoginError(error);
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

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {generalError && (
        <div className="flex gap-3 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-600">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <p>{generalError}</p>
        </div>
      )}

      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-700">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className={inputClass("email")}
          autoComplete="email"
        />
        {errors.email && (
          <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
        )}
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-700">
          Password
        </label>

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={form.password}
            onChange={(e) => handleChange("password", e.target.value)}
            className={`${inputClass("password")} pr-12`}
            autoComplete="current-password"
          />

          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-600"
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        </div>

        {errors.password && (
          <p className="mt-1.5 text-xs text-red-500">{errors.password}</p>
        )}
      </div>

      <div className="flex items-center justify-between gap-4 text-sm">
        <label className="flex items-center gap-2 text-slate-500">
          <input
            type="checkbox"
            checked={form.remember}
            onChange={(e) => handleChange("remember", e.target.checked)}
            className="h-4 w-4 rounded border-slate-300 text-emerald-500 focus:ring-emerald-400"
          />
          Remember me
        </label>

        <Link
          to="/forgot-password"
          className="font-medium text-emerald-500 hover:text-emerald-600"
        >
          Forgot password?
        </Link>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-2xl bg-emerald-500 px-6 py-4 text-sm font-semibold text-white transition hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Checking account..." : "Sign In"}
      </button>

      <AuthDivider />
      <SocialAuthButtons />

      <p className="text-center text-sm text-slate-500">
        Don&apos;t have an account?{" "}
        <Link
          to="/auth/register"
          className="font-medium text-emerald-500 hover:text-emerald-600"
        >
          Create one
        </Link>
      </p>
    </form>
  );
}