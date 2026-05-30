import { getImageUrl } from "../../utils/imageUrl";

export default function ServiceHeroImage({ images = [], title }) {
  const rawImage = images?.[0];

  const imagePath =
    typeof rawImage === "string"
      ? rawImage
      : rawImage?.image_url ||
        rawImage?.url ||
        rawImage?.path ||
        rawImage?.image ||
        "";

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <img
        src={getImageUrl(imagePath)}
        alt={title}
        className="h-[420px] w-full object-cover"
        onError={(e) => {
          e.currentTarget.src = "https://placehold.co/800x500?text=No+Image";
        }}
      />
    </div>
  );
}