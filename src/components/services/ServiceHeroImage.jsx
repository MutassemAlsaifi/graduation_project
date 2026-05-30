export default function ServiceHeroImage({ images = [], title }) {
  const API_URL =
    import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api";

  const BASE_URL = API_URL.replace("/api", "");

  const rawImage = images?.[0];

  const imagePath =
    typeof rawImage === "string"
      ? rawImage
      : rawImage?.image_url ||
        rawImage?.url ||
        rawImage?.path ||
        rawImage?.image ||
        "";

  let imageUrl = "/placeholder.jpg";

  if (imagePath) {
    if (imagePath.startsWith("http")) {
      imageUrl = imagePath
        .replace(
          "http://127.0.0.1:8000/services/",
          "http://127.0.0.1:8000/storage/services/"
        )
        .replace(
          "http://localhost:8000/services/",
          "http://localhost:8000/storage/services/"
        );
    } else {
      const cleanPath = imagePath
        .replace("public/", "")
        .replace("storage/", "");

      imageUrl = `${BASE_URL}/storage/${cleanPath}`;
    }
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <img
        src={imageUrl}
        alt={title}
        className="h-[420px] w-full object-cover"
        onError={(e) => {
          e.currentTarget.src = "/placeholder.jpg";
        }}
      />
    </div>
  );
}