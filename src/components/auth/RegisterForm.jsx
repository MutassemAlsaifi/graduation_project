import { useState } from "react";
import AuthInput from "./AuthInput";
import AuthDivider from "./AuthDivider";
import SocialAuthButtons from "./SocialAuthButtons";

export default function RegisterForm() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("REGISTER PAYLOAD READY FOR LARAVEL:", form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <AuthInput
        label="Full Name"
        placeholder="Enter your full name"
        value={form.full_name}
        onChange={(e) => handleChange("full_name", e.target.value)}
      />

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
        placeholder="Create a password"
        value={form.password}
        onChange={(e) => handleChange("password", e.target.value)}
      />

      <AuthInput
        label="Confirm Password"
        type="password"
        placeholder="Confirm your password"
        value={form.password_confirmation}
        onChange={(e) => handleChange("password_confirmation", e.target.value)}
      />

      <button
        type="submit"
        className="w-full rounded-2xl bg-emerald-500 px-6 py-4 text-sm font-semibold text-white transition hover:bg-emerald-600"
      >
        Create Account
      </button>

      <AuthDivider />
      <SocialAuthButtons />

      <p className="text-center text-sm text-slate-500">
        Already have an account?{" "}
        <a href="/auth/login" className="font-medium text-emerald-500 hover:text-emerald-600">
          Sign in
        </a>
      </p>
    </form>
  );
}