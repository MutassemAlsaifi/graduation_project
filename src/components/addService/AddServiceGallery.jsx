export default function AddServiceGallery({ preview = [] }) {
  if (!preview.length) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {preview.map((img, index) => (
        <img
          key={index}
          src={img}
          alt=""
          className="h-16 w-16 rounded-xl object-cover"
        />
      ))}
    </div>
  );
}