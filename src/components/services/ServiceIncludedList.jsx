import { Check } from "lucide-react";

export default function ServiceIncludedList({ included = [] }) {
  return (
    <section className="mt-10">
      <h3 className="mb-4 text-lg font-semibold tracking-tight text-slate-800">
        What&apos;s included
      </h3>

      <div className="grid gap-4 md:grid-cols-2">
        {included.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm"
          >
            <div className="mt-0.5 rounded-full bg-emerald-50 p-1.5 text-emerald-500">
              <Check className="h-3.5 w-3.5" />
            </div>

            <p className="text-sm leading-6 text-slate-500">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}