const fallbackImage =
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80";

export default function ServiceHeroImage({ images = [], title }) {
  return (
    <section className="overflow-hidden rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm">
      {images.length === 0 ? (
        <div className="overflow-hidden rounded-[22px] border border-slate-200">
          <img
            src={fallbackImage}
            alt={title}
            className="h-[420px] w-full object-cover"
          />
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img) => (
            <div
              key={img.id}
              className="overflow-hidden rounded-[22px] border border-slate-200"
            >
              <img
                src={img.path}
                alt={title}
                className="h-64 w-full object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}