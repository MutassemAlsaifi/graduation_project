export default function ServiceCard({
  title,
  provider,
  rating,
  reviews,
  price,
  image,
}) {
  return (
    <div className="rounded-[26px] bg-white shadow-sm overflow-hidden">
      <img src={image} className="h-48 w-full object-cover" />

      <div className="p-4">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{provider}</p>

        <div className="flex justify-between mt-2">
          <span>{price}</span>
          <span>⭐ {rating}</span>
        </div>
      </div>
    </div>
  );
}