import { Pencil, X } from "lucide-react";

export default function ProfileActionsCard({ user, isEditing, setIsEditing }) {
  return (
    <section className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">Actions</h3>

      <div className="mt-5 grid gap-3">
        <button
          type="button"
          onClick={() => setIsEditing((prev) => !prev)}
          className={`inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-center text-sm font-semibold transition ${
            isEditing
              ? "border border-slate-200 text-slate-700 hover:bg-slate-50"
              : "bg-emerald-500 text-white hover:bg-emerald-600"
          }`}
        >
          {isEditing ? (
            <>
              <X className="h-4 w-4" />
              Exit Edit Mode
            </>
          ) : (
            <>
              <Pencil className="h-4 w-4" />
              Edit Profile
            </>
          )}
        </button>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
          Signed in as <span className="font-semibold">{user?.name || "User"}</span>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
          Role: <span className="font-semibold capitalize">{user?.role || "user"}</span>
        </div>
      </div>
    </section>
  );
}