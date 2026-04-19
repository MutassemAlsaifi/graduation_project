import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authService";
import AuthInput from "./AuthInput";
import AuthDivider from "./AuthDivider";
import SocialAuthButtons from "./SocialAuthButtons";

export default function LoginForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      const response = await loginUser({
        email: form.email,
        password: form.password,
      });

      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));

      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      console.log("ERROR DATA:", error?.response?.data);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <AuthInput
        label="Email"
        type="email"
        placeholder="Enter your email"
        value={form.email}
        onChange={(e) => handleChange("email", e.target.value)}
      />

      <AuthInput
        label="Password"
        type="password"
        placeholder="Enter your password"
        value={form.password}
        onChange={(e) => handleChange("password", e.target.value)}
      />

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

        <a href="/forgot-password" className="font-medium text-emerald-500 hover:text-emerald-600">
          Forgot password?
        </a>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-2xl bg-emerald-500 px-6 py-4 text-sm font-semibold text-white transition hover:bg-emerald-600 disabled:opacity-70"
      >
        {isSubmitting ? "Signing in..." : "Sign In"}
      </button>

      <AuthDivider />
      <SocialAuthButtons />

      <p className="text-center text-sm text-slate-500">
        Don&apos;t have an account?{" "}
        <a href="/auth/register" className="font-medium text-emerald-500 hover:text-emerald-600">
          Create one
        </a>
      </p>
    </form>
  );
}