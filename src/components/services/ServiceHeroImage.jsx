export default function ServiceHeroImage({ image, title }) {
  return (
    <div className="overflow-hidden rounded-[28px] shadow-sm">
      <img
        src={image}
        alt={title}
        className="h-[260px] w-full object-cover sm:h-[360px] lg:h-[390px]"
      />
    </div>
  );
}