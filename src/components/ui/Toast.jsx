import { CheckCircle2, AlertCircle, X } from "lucide-react";

export default function Toast({
  isOpen,
  type = "success",
  title,
  message,
  onClose,
}) {
  if (!isOpen) return null;

  const isSuccess = type === "success";

  return (
    <div className="fixed right-4 top-4 z-[110] w-full max-w-sm">
      <div className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-xl">
        <div className="flex items-start gap-3">
          <div
            className={`rounded-2xl p-2.5 ${
              isSuccess
                ? "bg-emerald-50 text-emerald-500"
                : "bg-red-50 text-red-500"
            }`}
          >
            {isSuccess ? (
              <CheckCircle2 className="h-5 w-5" />
            ) : (
              <AlertCircle className="h-5 w-5" />
            )}
          </div>

          <div className="flex-1">
            <h4 className="text-sm font-semibold text-slate-900">{title}</h4>
            <p className="mt-1 text-sm leading-6 text-slate-500">{message}</p>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}