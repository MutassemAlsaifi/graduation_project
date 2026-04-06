import { useParams } from "react-router-dom";
import { services } from "../../services/servicesData";
import ServiceContactBar from "../services/ServiceContactBar";
import ServiceDescription from "../services/ServiceDescription";
import ServiceDetailsHeader from "../services/ServiceDetailsHeader";
import ServiceHeroImage from "../services/ServiceHeroImage";
import ServiceIncludedList from "../services/ServiceIncludedList";
import ServiceInfoCards from "../services/ServiceInfoCards";
import ServiceProviderCard from "../services/ServiceProviderCard";

export default function ServiceDetailsPage() {
  const { id } = useParams();

  const service = services.find((item) => item.id === Number(id));

  if (!service) {
    return (
      <main className="min-h-screen bg-[#f7f8f7] p-10">
        <div className="mx-auto max-w-4xl text-center text-slate-600">
          Service not found
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f8f7]">
      <ServiceDetailsHeader />

      <div className="mx-auto max-w-4xl px-5 pb-16 pt-2 sm:px-6 lg:px-8">
        <ServiceHeroImage image={service.image} title={service.title} />

        <ServiceContactBar service={service} />

        <ServiceProviderCard
          provider={service.provider}
          rating={service.rating}
          reviewsCount={service.reviews_count}
        />

        <ServiceDescription
          description={service.description}
          description2={service.description_2}
        />

        <ServiceIncludedList included={service.included} />

        <ServiceInfoCards info={service.info} />
      </div>
    </main>
  );
}