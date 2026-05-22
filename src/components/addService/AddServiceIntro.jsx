export default function AddServiceIntro({ title, subtitle }) {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h1>
      <p className="mt-2 text-sm text-slate-500 sm:text-base">{subtitle}</p>
    </div>
  );
}