export default function SectionHeader({ title, action = "View all" }) {
  return (
    <div className="mb-5 flex items-center justify-between gap-4">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
        {title}
      </h2>
      <button className="text-sm font-medium text-emerald-500 transition hover:text-emerald-600">
        {action}
      </button>
    </div>
  );
}