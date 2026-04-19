export default function DashboardWelcome({ user, servicesCount = 0 }) {
  return (
    <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
        Welcome back, {user?.name || "User"} 👋
      </h2>

      <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
        You currently have {servicesCount} service{servicesCount === 1 ? "" : "s"} listed.
        Here you can monitor your activity, manage your services, and keep your business organized.
      </p>
    </section>
  );
}