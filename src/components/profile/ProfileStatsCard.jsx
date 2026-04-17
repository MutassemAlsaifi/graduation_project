export default function ProfileStatsCard({ item }) {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-slate-500">{item.title}</p>
      <h3 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
        {item.value}
      </h3>
      <p className="mt-2 text-sm text-slate-400">{item.subtitle}</p>
    </div>
  );
}