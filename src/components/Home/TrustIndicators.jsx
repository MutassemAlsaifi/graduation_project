import { CheckCircle2 } from "lucide-react";

export default function TrustIndicators() {
  return (
    <div className="mt-5 flex flex-wrap items-center gap-6 text-sm text-slate-500">
      <div className="flex items-center gap-2">
        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
        <span>Verified owners only</span>
      </div>

      <div className="flex items-center gap-2">
        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
        <span>AI-powered service moderation</span>
      </div>
    </div>
  );
}