export default function DashboardWelcome() {
  return (
    <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
        Welcome back 👋
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
        Here you can monitor your listings, review recent requests, and keep your
        service business organized in one place.
      </p>
    </section>
  );
}