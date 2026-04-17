export default function ProfileInfoCard({ profile }) {
  return (
    <section className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="mb-5 text-lg font-semibold text-slate-900">
        Personal Information
      </h3>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-500">
            Email
          </p>
          <p className="mt-2 text-sm text-slate-700">{profile.email}</p>
        </div>

        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-500">
            Phone
          </p>
          <p className="mt-2 text-sm text-slate-700">{profile.phone}</p>
        </div>

        <div className="rounded-2xl bg-slate-50 p-4 sm:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-500">
            Location
          </p>
          <p className="mt-2 text-sm text-slate-700">{profile.location}</p>
        </div>
      </div>
    </section>
  );
}