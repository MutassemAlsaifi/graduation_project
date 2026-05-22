export default function DashboardStatCard({ title, value, subtitle }) {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-slate-500">{title}</p>
      <h3 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
        {value}
      </h3>
      <p className="mt-2 text-sm text-slate-400">{subtitle}</p>
    </div>
  );
}