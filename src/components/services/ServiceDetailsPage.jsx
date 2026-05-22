import { useParams } from "react-router-dom";
import { useServices } from "../../context/ServicesContext";
import ServiceContactBar from "./ServiceContactBar";
import ServiceDescription from "./ServiceDescription";
import ServiceDetailsHeader from "./ServiceDetailsHeader";
import ServiceHeroImage from "./ServiceHeroImage";
import ServiceIncludedList from "./ServiceIncludedList";
import ServiceInfoCards from "./ServiceInfoCards";
import ServiceProviderCard from "./ServiceProviderCard";

export default function ServiceDetailsPage() {
  const { id } = useParams();
  const { getServiceById } = useServices();

  const service = getServiceById(id);

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
    <main className="min-h-screen bg-[#f7f8f7] pb-16">
      <ServiceDetailsHeader />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          {service.title}
        </h1>

        <ServiceHeroImage image={service.image} title={service.title} />

        <div className="mt-6">
          <ServiceContactBar service={service} />
        </div>

        <div className="mt-8">
          <ServiceProviderCard
            provider={service.provider}
            rating={service.rating}
            reviewsCount={service.reviews_count}
          />
        </div>

        <div className="mt-10">
          <ServiceDescription
            description={service.description}
            description2={service.description_2}
          />
        </div>

        <div className="mt-10">
          <ServiceIncludedList included={service.included} />
        </div>

        <div className="mt-10">
          <ServiceInfoCards info={service.info} />
        </div>
      </div>
    </main>
  );
}