export default function TextInput(props) {
  return (
    <input
      {...props}
      className="h-14 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
    />
  );
}