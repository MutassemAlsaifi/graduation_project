import { useState } from "react";
import AuthInput from "./AuthInput";
import AuthDivider from "./AuthDivider";
import SocialAuthButtons from "./SocialAuthButtons";

export default function LoginForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("LOGIN PAYLOAD READY FOR LARAVEL:", form);
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
        className="w-full rounded-2xl bg-emerald-500 px-6 py-4 text-sm font-semibold text-white transition hover:bg-emerald-600"
      >
        Sign In
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