import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/authService";
import AuthInput from "./AuthInput";
import AuthDivider from "./AuthDivider";
import SocialAuthButtons from "./SocialAuthButtons";

export default function RegisterForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.password_confirmation) {
      console.error("Passwords do not match");
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await registerUser({
        name: form.name,
        email: form.email,
        password: form.password,
      });

      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));

      navigate("/dashboard");
    } catch (error) {
      console.error("Register failed:", error);
      console.log("ERROR DATA:", error?.response?.data);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <AuthInput
        label="Full Name"
        placeholder="Enter your full name"
        value={form.name}
        onChange={(e) => handleChange("name", e.target.value)}
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
        disabled={isSubmitting}
        className="w-full rounded-2xl bg-emerald-500 px-6 py-4 text-sm font-semibold text-white transition hover:bg-emerald-600 disabled:opacity-70"
      >
        {isSubmitting ? "Creating..." : "Create Account"}
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