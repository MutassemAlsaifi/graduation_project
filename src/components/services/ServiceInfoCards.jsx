export default function ServiceInfoCards({ info = [] }) {
  if (!Array.isArray(info) || info.length === 0) return null;

  return (
    <section>
      <h3 className="mb-4 text-xl font-semibold tracking-tight text-slate-900">
        Service info
      </h3>

      <div className="grid gap-4 md:grid-cols-3">
        {info.map((item) => (
          <div
            key={item.label} // أفضل من index
            className="rounded-[22px] border border-slate-200 bg-white p-5 shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-500">
              {item.label || "N/A"}
            </p>
            <p className="mt-3 text-sm font-medium leading-6 text-slate-700">
              {item.value || "Not provided"}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}