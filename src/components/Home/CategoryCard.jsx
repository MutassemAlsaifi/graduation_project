export default function CategoryCard({ label, icon: Icon }) {
  return (
    <div className="rounded-[24px] border-0 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
      <div className="flex flex-col items-center justify-center gap-4 p-6 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
          <Icon className="h-6 w-6" />
        </div>
        <span className="text-sm font-medium text-slate-700">{label}</span>
      </div>
    </div>
  );
}