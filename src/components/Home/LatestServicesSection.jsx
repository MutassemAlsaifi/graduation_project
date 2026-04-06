import SectionHeader from "./SectionHeader";
import ServiceCard from "./ServiceCard";

export default function LatestServicesSection({ services = [] }) {
  return (
    <section id="services" className="px-6 py-8 lg:px-8 lg:py-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader title="Latest Services" action="See more" />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              provider={service.provider_name}
              rating={service.rating}
              reviews={service.reviews_count}
              price={`$${service.price}/${service.price_type}`}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}