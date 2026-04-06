export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
        <span className="text-sm font-semibold">D</span>
      </div>
      <span className="text-lg font-semibold tracking-tight text-slate-800">
        DirectServe
      </span>
    </div>
  );
}