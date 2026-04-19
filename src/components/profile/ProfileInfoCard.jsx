import { useEffect, useState } from "react";
import { updateProfile } from "../../services/authService";

export default function ProfileInfoCard({
  profile,
  isEditing,
  setIsEditing,
  onProfileUpdated,
}) {
  const [form, setForm] = useState({
    name: profile?.name || "",
    phone: profile?.phone || "",
    country: profile?.country || "",
  });

  const [isSaving, setIsSaving] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setForm({
      name: profile?.name || "",
      phone: profile?.phone || "",
      country: profile?.country || "",
    });
  }, [profile]);

  const handleChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCancel = () => {
    setForm({
      name: profile?.name || "",
      phone: profile?.phone || "",
      country: profile?.country || "",
    });
    setErrorMessage("");
    setSuccessMessage("");
    setIsEditing(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const data = await updateProfile(form);

      onProfileUpdated(data.user);
      localStorage.setItem("user", JSON.stringify(data.user));

      setSuccessMessage("Profile updated successfully.");
      setIsEditing(false);
    } catch (error) {
      console.error("Failed to update profile:", error);

      if (error?.response?.data?.errors) {
        const firstError = Object.values(error.response.data.errors)[0]?.[0];
        setErrorMessage(firstError || "Failed to update profile.");
      } else {
        setErrorMessage(
          error?.response?.data?.message || "Failed to update profile."
        );
      }
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <section className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold text-slate-900">
          Profile Information
        </h3>

        {!isEditing && (
          <button
            type="button"
            onClick={() => {
              setSuccessMessage("");
              setErrorMessage("");
              setIsEditing(true);
            }}
            className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            Edit
          </button>
        )}
      </div>

      {successMessage && (
        <div className="mb-4 rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-600">
          {successMessage}
        </div>
      )}

      {errorMessage && (
        <div className="mb-4 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-600">
          {errorMessage}
        </div>
      )}

      {isEditing ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Full Name
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-emerald-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Email Address
            </label>
            <input
              type="email"
              value={profile?.email || ""}
              disabled
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-500 outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Phone Number
            </label>
            <input
              type="text"
              value={form.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-emerald-500"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Country
            </label>
            <input
              type="text"
              value={form.country}
              onChange={(e) => handleChange("country", e.target.value)}
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-emerald-500"
              placeholder="Enter your country"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Role
            </label>
            <input
              type="text"
              value={profile?.role || "User"}
              disabled
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-500 outline-none"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="submit"
              disabled={isSaving}
              className="rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSaving ? "Saving..." : "Save Changes"}
            </button>

            <button
              type="button"
              onClick={handleCancel}
              disabled={isSaving}
              className="rounded-2xl border border-slate-200 px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-70"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[22px] border border-slate-200 bg-slate-50/70 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
              Full Name
            </p>
            <p className="mt-2 text-sm font-medium text-slate-800">
              {profile?.name || "Not provided"}
            </p>
          </div>

          <div className="rounded-[22px] border border-slate-200 bg-slate-50/70 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
              Email Address
            </p>
            <p className="mt-2 text-sm font-medium text-slate-800">
              {profile?.email || "Not provided"}
            </p>
          </div>

          <div className="rounded-[22px] border border-slate-200 bg-slate-50/70 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
              Phone Number
            </p>
            <p className="mt-2 text-sm font-medium text-slate-800">
              {profile?.phone || "Not provided"}
            </p>
          </div>

          <div className="rounded-[22px] border border-slate-200 bg-slate-50/70 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
              Country
            </p>
            <p className="mt-2 text-sm font-medium text-slate-800">
              {profile?.country || "Not provided"}
            </p>
          </div>

          <div className="rounded-[22px] border border-slate-200 bg-slate-50/70 p-4 sm:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
              Role
            </p>
            <p className="mt-2 text-sm font-medium capitalize text-slate-800">
              {profile?.role || "Not provided"}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}