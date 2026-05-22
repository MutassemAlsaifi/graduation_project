import { createContext, useContext, useEffect, useState } from "react";
import { services as mockServices } from "../services/servicesData";

const ServicesContext = createContext();

export function ServicesProvider({ children }) {
  const [services, setServices] = useState(() => {
    const saved = localStorage.getItem("services");
    return saved ? JSON.parse(saved) : mockServices;
  });

  useEffect(() => {
    localStorage.setItem("services", JSON.stringify(services));
  }, [services]);

  const addService = (newService) => {
    const serviceToAdd = {
      id: Date.now(),
      title: newService.title,
      description: newService.description,
      description_2:
        newService.description_2 ||
        "This service was added recently and will be expanded with more details later.",
      rating: 0,
      reviews_count: 0,
      price: Number(newService.price) || 0,
      price_type: newService.price_type || "project",
      duration: newService.duration || "Flexible",
      service_type: newService.service_type || "Custom service",
      category: newService.category || "General",
      image:
        newService.image ||
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      tag: newService.tag || newService.category || "General",
      location: newService.location || "",
      provider: {
        name: "New Owner",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
        verified: true,
        years_on_platform: 0,
      },
      included: newService.included?.length
        ? newService.included
        : [
            "Custom service package",
            "Direct communication with owner",
            "Flexible scheduling",
          ],
      info: [
        {
          id: 1,
          label: "Duration",
          value: newService.duration || "Flexible",
        },
        {
          id: 2,
          label: "Location",
          value: newService.location || "Not specified",
        },
        {
          id: 3,
          label: "Payment",
          value: "Cash or online transfer",
        },
      ],
    };

    setServices((prev) => [serviceToAdd, ...prev]);
  };

  const updateService = (id, updatedData) => {
    setServices((prev) =>
      prev.map((service) =>
        service.id === Number(id)
          ? {
              ...service,
              ...updatedData,
              price: Number(updatedData.price) || service.price,
              tag: updatedData.category || service.tag,
              info: [
                {
                  id: 1,
                  label: "Duration",
                  value: updatedData.duration || service.duration || "Flexible",
                },
                {
                  id: 2,
                  label: "Location",
                  value: updatedData.location || service.location || "Not specified",
                },
                {
                  id: 3,
                  label: "Payment",
                  value: "Cash or online transfer",
                },
              ],
            }
          : service
      )
    );
  };

  const deleteService = (id) => {
    setServices((prev) => prev.filter((service) => service.id !== Number(id)));
  };

  const getServiceById = (id) => {
    return services.find((item) => item.id === Number(id));
  };

  return (
    <ServicesContext.Provider
      value={{
        services,
        addService,
        updateService,
        deleteService,
        getServiceById,
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
}

export function useServices() {
  return useContext(ServicesContext);
}