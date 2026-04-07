import { ImagePlus } from "lucide-react";

export default function UploadCard({ preview, title }) {
  return (
    <div className="group relative overflow-hidden rounded-[28px] border border-dashed border-slate-300 bg-white shadow-sm transition hover:border-emerald-300 hover:shadow-md">
      {preview ? (
        <img src={preview} alt={title} className="h-64 w-full object-cover" />
      ) : (
        <div className="flex h-64 flex-col items-center justify-center gap-3 text-slate-400">
          <div className="rounded-2xl bg-slate-100 p-4 text-slate-500">
            <ImagePlus className="h-7 w-7" />
          </div>
          <p className="text-sm font-medium">Add photo</p>
          <p className="px-6 text-center text-xs text-slate-400">
            Upload a clear service image to improve trust and clicks.
          </p>
        </div>
      )}
    </div>
  );
}