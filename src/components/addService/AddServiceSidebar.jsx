import { LayoutGrid } from "lucide-react";
import { mockExistingServices } from "../../data/addServiceData";

export default function AddServiceSidebar({ title, category, price }) {
  const suggestions = [];

  if (title.trim().length < 10) {
    suggestions.push("Use a more descriptive title so the service is easier to discover.");
  }
  if (!category) {
    suggestions.push("Choose a category to help users filter and find the service faster.");
  }
  if (!price) {
    suggestions.push("Add a starting price to set expectations before users contact you.");
  }
  if (suggestions.length === 0) {
    suggestions.push("Looks good. Add strong photos and a specific description to improve conversions.");
  }

  return (
    <aside className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center gap-3">
        <div className="rounded-2xl bg-emerald-100 p-3 text-emerald-600">
          <LayoutGrid className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-slate-900">Publishing tips</h3>
          <p className="text-sm text-slate-500">Make the page stronger before sending it to backend.</p>
        </div>
      </div>

      <div className="space-y-3">
        {suggestions.map((item, index) => (
          <div key={index} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-600">
            {item}
          </div>
        ))}
      </div>

      <div className="mt-6 border-t border-slate-100 pt-5">
        <p className="mb-3 text-sm font-semibold text-slate-800">Existing services</p>
        <div className="space-y-3">
          {mockExistingServices.map((item) => (
            <div key={item.id} className="rounded-2xl border border-slate-200 px-4 py-3">
              <p className="text-sm font-medium text-slate-800">{item.title}</p>
              <div className="mt-1 flex items-center justify-between text-xs text-slate-500">
                <span>{item.tag}</span>
                <span>{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}