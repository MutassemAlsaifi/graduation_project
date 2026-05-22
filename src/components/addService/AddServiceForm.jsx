import { MapPin, Upload } from "lucide-react";
import { categoryOptions } from "../../data/addServiceData";
import FormField from "./FormField";
import TextInput from "./TextInput";
import TextArea from "./TextArea";
import SelectField from "./SelectField";

export default function AddServiceForm({
  form,
  onChange,
  onSubmit,
  isSubmitting,
  submitLabel = "Submit Service",
}) {
  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[32px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:p-8"
    >
      <div className="mb-6 border-b border-slate-100 pb-5">
        <h2 className="text-lg font-semibold text-slate-900">Service Details</h2>
        <p className="mt-1 text-sm text-slate-500">
          Keep field names and structure ready for backend integration.
        </p>
      </div>

      <div className="space-y-5">
        <FormField label="Service Title">
          <TextInput
            value={form.title}
            onChange={(e) => onChange("title", e.target.value)}
            placeholder="e.g. Professional Landscaping"
          />
        </FormField>

        <FormField label="Description">
          <TextArea
            value={form.description}
            onChange={(e) => onChange("description", e.target.value)}
            placeholder="Describe your service in detail..."
          />
        </FormField>

        <FormField label="Category">
          <SelectField
            value={form.category}
            onChange={(e) => onChange("category", e.target.value)}
            options={categoryOptions}
          />
        </FormField>

        <div className="grid gap-5 md:grid-cols-2">
          <FormField label="Price">
            <TextInput
              value={form.price}
              onChange={(e) => onChange("price", e.target.value)}
              placeholder="50"
            />
          </FormField>

          <FormField label="Location">
            <div className="relative">
              <MapPin className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                value={form.location}
                onChange={(e) => onChange("location", e.target.value)}
                placeholder="New York, NY"
                className="h-14 w-full rounded-2xl border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
              />
            </div>
          </FormField>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <FormField label="Price Type">
            <TextInput
              value={form.price_type}
              onChange={(e) => onChange("price_type", e.target.value)}
              placeholder="hr / visit / project"
            />
          </FormField>

          <FormField label="Duration">
            <TextInput
              value={form.duration}
              onChange={(e) => onChange("duration", e.target.value)}
              placeholder="e.g. 2-4 hours"
            />
          </FormField>
        </div>

        <FormField label="Service Type">
          <TextInput
            value={form.service_type}
            onChange={(e) => onChange("service_type", e.target.value)}
            placeholder="e.g. Deep clean"
          />
        </FormField>

        <FormField label="Image URL">
          <TextInput
            value={form.image}
            onChange={(e) => onChange("image", e.target.value)}
            placeholder="Paste image URL"
          />
        </FormField>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-6 py-4 text-sm font-semibold text-white transition hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-70"
        >
          <Upload className="h-4 w-4" />
          {isSubmitting ? "Saving..." : submitLabel}
        </button>
      </div>
    </form>
  );
}