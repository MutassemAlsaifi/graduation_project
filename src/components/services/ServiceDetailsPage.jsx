import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getServiceById } from "../../services/servicesService";

import ServiceContactBar from "./ServiceContactBar";
import ServiceDescription from "./ServiceDescription";
import ServiceDetailsHeader from "./ServiceDetailsHeader";
import ServiceHeroImage from "./ServiceHeroImage";
import ServiceIncludedList from "./ServiceIncludedList";
import ServiceInfoCards from "./ServiceInfoCards";
import ServiceProviderCard from "./ServiceProviderCard";

export default function ServiceDetailsPage() {
  const { id } = useParams();

  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadService = async () => {
      try {
        const data = await getServiceById(id);
        setService(data);
      } catch (error) {
        console.error("Failed to load service:", error);
        setService(null);
      } finally {
        setLoading(false);
      }
    };

    loadService();
  }, [id]);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#f7f8f7] p-10">
        <div className="mx-auto max-w-4xl text-center text-slate-500">
          Loading service details...
        </div>
      </main>
    );
  }

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
      <ServiceDetailsHeader service={service} />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          {service.title}
        </h1>

        <ServiceHeroImage
          images={service.images || []}
          title={service.title}
        />

        <div className="mt-6">
          <ServiceContactBar service={service} />
        </div>

        <div className="mt-8">
          <ServiceProviderCard
            provider={service.user}
            rating={service.rating || 0}
            reviewsCount={service.reviews_count || 0}
          />
        </div>

        <div className="mt-10">
          <ServiceDescription
            description={service.description}
            description2={service.description_2 || ""}
          />
        </div>

        <div className="mt-10">
          <ServiceIncludedList included={service.included || []} />
        </div>

        <div className="mt-10">
          <ServiceInfoCards
            info={[
              {
                label: "Category",
                value: service.category?.name || "Not specified",
              },
              {
                label: "Duration",
                value: service.duration || "Not specified",
              },
              {
                label: "Location",
                value: service.location || "Not specified",
              },
              {
                label: "Price Type",
                value: service.price_type || "Not specified",
              },
              {
                label: "Price",
                value: service.price ? `$${service.price}` : "Not specified",
              },
            ]}
          />
        </div>
      </div>
    </main>
  );
}