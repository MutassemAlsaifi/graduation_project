import SectionHeader from "./SectionHeader";
import ServiceCard from "./ServiceCard";
import { latestServices } from "../../data/homeData";

export default function LatestServicesSection() {
  return (
    <section id="services" className="px-6 py-8 lg:px-8 lg:py-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader title="Latest Services" action="See more" />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {latestServices.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}