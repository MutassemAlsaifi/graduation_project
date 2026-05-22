export default function AddServiceForm({
  form,
  categories = [],
  onChange,
  onImagesChange,
  onSubmit,
  isSubmitting,
  isEdit = false,
}) {
  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
    >
      <input
        type="text"
        placeholder="Service title"
        value={form.title}
        onChange={(e) => onChange("title", e.target.value)}
        className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
      />

      <textarea
        placeholder="Description"
        value={form.description}
        onChange={(e) => onChange("description", e.target.value)}
        className="min-h-[140px] w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
      />

      <select
        value={form.category_id}
        onChange={(e) => onChange("category_id", e.target.value)}
        className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
      >
        <option value="">Select category</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Price"
        value={form.price}
        onChange={(e) => onChange("price", e.target.value)}
        className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
      />

      <input
        type="text"
        placeholder="Location"
        value={form.location}
        onChange={(e) => onChange("location", e.target.value)}
        className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
      />

      <input
        type="text"
        placeholder="Price type"
        value={form.price_type}
        onChange={(e) => onChange("price_type", e.target.value)}
        className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
      />

      <input
        type="text"
        placeholder="Duration"
        value={form.duration}
        onChange={(e) => onChange("duration", e.target.value)}
        className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
      />

      <input
        type="text"
        placeholder="Service type"
        value={form.service_type}
        onChange={(e) => onChange("service_type", e.target.value)}
        className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
      />

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Service Images
        </label>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={(e) => onImagesChange(e.target.files)}
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none file:mr-4 file:rounded-xl file:border-0 file:bg-emerald-50 file:px-3 file:py-2 file:text-sm file:font-medium file:text-emerald-600"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-2xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting
          ? isEdit
            ? "Updating..."
            : "Creating..."
          : isEdit
          ? "Update Service"
          : "Create Service"}
      </button>
    </form>
  );
}