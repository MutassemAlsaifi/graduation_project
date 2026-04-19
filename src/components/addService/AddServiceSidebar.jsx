export default function AddServiceSidebar({ form, categories = [] }) {
  const title = (form?.title || "").trim();
  const description = (form?.description || "").trim();
  const price = form?.price || "";
  const categoryId = form?.category_id || "";

  const selectedCategory = categories.find(
    (category) => String(category.id) === String(categoryId)
  );

  const isValid =
    title.length > 3 &&
    description.length > 10 &&
    price !== "" &&
    categoryId !== "";

  return (
    <aside className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">Service status</h3>

      <div className="mt-4 space-y-2 text-sm text-slate-600">
        <p>
          Title: <span className="font-medium">{title || "Missing"}</span>
        </p>

        <p>
          Description:{" "}
          <span className="font-medium">
            {description ? "Added" : "Missing"}
          </span>
        </p>

        <p>
          Price: <span className="font-medium">{price || "Missing"}</span>
        </p>

        <p>
          Category:{" "}
          <span className="font-medium">
            {selectedCategory?.name || "Missing"}
          </span>
        </p>

        <p>
          Images:{" "}
          <span className="font-medium">
            {form?.images?.length || 0}
          </span>
        </p>
      </div>

      <div className="mt-5">
        <span
          className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
            isValid
              ? "bg-emerald-50 text-emerald-600"
              : "bg-red-50 text-red-500"
          }`}
        >
          {isValid ? "Ready to publish" : "Incomplete"}
        </span>
      </div>
    </aside>
  );
}