import UploadCard from "./UploadCard";

export default function AddServiceGallery({ images }) {
  return (
    <section className="mt-8">
      <div className="mb-5">
        <h3 className="text-lg font-semibold text-slate-900">Service gallery</h3>
        <p className="mt-1 text-sm text-slate-500">
          Add up to 3 photos. Later this can connect to Laravel uploads.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {images.map((image, index) => (
          <UploadCard
            key={index}
            preview={image}
            title={`Service photo ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}