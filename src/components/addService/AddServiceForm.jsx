export default function AddServiceForm({
  form,
  categories = [],
  errors = {},
  onChange,
  onImagesChange,
  onSubmit,
  isSubmitting,
  isEdit = false,
}) {
  const inputClass = (field) =>
    `w-full rounded-2xl border px-4 py-3 text-sm outline-none transition ${
      errors[field]
        ? "border-red-300 bg-red-50 focus:border-red-500"
        : "border-slate-200 bg-white focus:border-emerald-500"
    }`;

  const ErrorText = ({ field }) =>
    errors[field] ? (
      <p className="mt-1.5 text-xs text-red-500">{errors[field]}</p>
    ) : null;

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-6 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div>
        <h2 className="text-xl font-semibold text-slate-900">
          {isEdit ? "Edit service" : "Create new service"}
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          All fields are required to publish a complete service.
        </p>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-700">
          Service title <span className="text-red-500">*</span>
        </label>
        <input
          required
          type="text"
          placeholder="Example: Home cleaning service"
          value={form.title}
          onChange={(e) => onChange("title", e.target.value)}
          className={inputClass("title")}
        />
        <ErrorText field="title" />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-700">
          Description <span className="text-red-500">*</span>
        </label>
        <textarea
          required
          placeholder="Describe what you offer, what is included, and who this service is for..."
          value={form.description}
          onChange={(e) => onChange("description", e.target.value)}
          className={`${inputClass("description")} min-h-[150px] resize-none`}
        />
        <ErrorText field="description" />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Category <span className="text-red-500">*</span>
          </label>
          <select
            required
            value={form.category_id}
            onChange={(e) => onChange("category_id", e.target.value)}
            className={inputClass("category_id")}
          >
            <option value="">Select category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <ErrorText field="category_id" />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Location <span className="text-red-500">*</span>
          </label>
          <input
            required
            type="text"
            placeholder="Example: Milan, Italy"
            value={form.location}
            onChange={(e) => onChange("location", e.target.value)}
            className={inputClass("location")}
          />
          <ErrorText field="location" />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Price <span className="text-red-500">*</span>
          </label>
          <input
            required
            type="number"
            min="0"
            step="0.01"
            placeholder="100"
            value={form.price}
            onChange={(e) => onChange("price", e.target.value)}
            className={inputClass("price")}
          />
          <ErrorText field="price" />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Price type <span className="text-red-500">*</span>
          </label>
          <select
            required
            value={form.price_type}
            onChange={(e) => onChange("price_type", e.target.value)}
            className={inputClass("price_type")}
          >
            <option value="">Select type</option>
            <option value="fixed">Fixed</option>
            <option value="hour">Per hour</option>
            <option value="day">Per day</option>
            <option value="project">Per project</option>
          </select>
          <ErrorText field="price_type" />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Duration <span className="text-red-500">*</span>
          </label>
          <input
            required
            type="text"
            placeholder="Example: 2 hours"
            value={form.duration}
            onChange={(e) => onChange("duration", e.target.value)}
            className={inputClass("duration")}
          />
          <ErrorText field="duration" />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-700">
          Service delivery type <span className="text-red-500">*</span>
        </label>
        <select
          required
          value={form.service_type}
          onChange={(e) => onChange("service_type", e.target.value)}
          className={inputClass("service_type")}
        >
          <option value="">Select delivery type</option>
          <option value="onsite">On-site</option>
          <option value="online">Online</option>
          <option value="hybrid">Hybrid</option>
        </select>
        <ErrorText field="service_type" />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Service images <span className="text-red-500">*</span>
        </label>

        <input
          required={!isEdit}
          type="file"
          multiple
          accept="image/jpeg,image/png,image/webp"
          onChange={(e) => onImagesChange(e.target.files)}
          className="w-full rounded-2xl border border-dashed border-slate-300 px-4 py-4 text-sm outline-none file:mr-4 file:rounded-xl file:border-0 file:bg-emerald-50 file:px-3 file:py-2 file:text-sm file:font-medium file:text-emerald-600"
        />

        <p className="mt-2 text-xs text-slate-500">
          Upload at least one image. Recommended size: 1200×800 or higher.
        </p>

        <ErrorText field="images" />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-2xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting
          ? isEdit
            ? "Updating service..."
            : "Creating service..."
          : isEdit
          ? "Update Service"
          : "Create Service"}
      </button>
    </form>
  );
}