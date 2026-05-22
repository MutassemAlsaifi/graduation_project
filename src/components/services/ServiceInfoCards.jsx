export default function ServiceInfoCards({ info = [] }) {
  return (
    <section className="mt-10">
      <h3 className="mb-4 text-lg font-semibold tracking-tight text-slate-800">
        Service info
      </h3>

      <div className="grid gap-4 md:grid-cols-3">
        {info.map((item) => (
          <div
            key={item.id}
            className="rounded-[22px] border border-slate-200 bg-white p-5 shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-500">
              {item.label}
            </p>
            <p className="mt-3 text-sm font-medium leading-6 text-slate-700">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}