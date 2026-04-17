export default function SocialAuthButtons() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <button
        type="button"
        className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
      >
        Continue with Google
      </button>

      <button
        type="button"
        className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
      >
        Continue with Apple
      </button>
    </div>
  );
}