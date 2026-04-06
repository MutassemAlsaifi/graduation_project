export default function ServiceDescription({ description, description2 }) {
  return (
    <section className="mt-10">
      <h3 className="mb-4 text-lg font-semibold tracking-tight text-slate-800">
        Description
      </h3>

      <div className="space-y-4 text-[15px] leading-7 text-slate-500">
        <p>{description}</p>
        <p>{description2}</p>
      </div>
    </section>
  );
}