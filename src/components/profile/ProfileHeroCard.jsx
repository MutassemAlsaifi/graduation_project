const fallbackAvatar =
  "https://ui-avatars.com/api/?name=User&background=E2E8F0&color=334155";

export default function ProfileHeroCard({ profile, onEditClick }) {
  return (
    <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
        <img
          src={profile?.avatar || fallbackAvatar}
          alt={profile?.name || "User"}
          className="h-24 w-24 rounded-full object-cover"
        />

        <div className="flex-1">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            {profile?.name || "Unknown User"}
          </h2>

          <p className="mt-1 text-sm font-medium capitalize text-emerald-500">
            {profile?.role || "user"}
          </p>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
            {profile?.phone || "No phone added yet."}
          </p>
        </div>

        <button
          type="button"
          onClick={onEditClick}
          className="rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
        >
          Edit Profile
        </button>
      </div>
    </section>
  );
}