const fallbackImage =
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80";

export default function AddServiceGallery({ preview = [] }) {
  console.log("gallery preview:", preview);

  return (
    <section className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">Image Preview</h3>

      {preview.length === 0 ? (
        <div className="mt-4 overflow-hidden rounded-[24px] border border-slate-200">
          <img
            src={fallbackImage}
            alt="Service preview"
            className="h-[320px] w-full object-cover"
          />
        </div>
      ) : (
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[20px] border border-slate-200"
            >
              <img
                src={img}
                alt={`Preview ${index + 1}`}
                className="h-48 w-full object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}