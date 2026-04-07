import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AddServiceForm from "../addService/AddServiceForm";
import AddServiceGallery from "../addService/AddServiceGallery";
import AddServiceHeader from "../addService/AddServiceHeader";
import AddServiceIntro from "../addService/AddServiceIntro";
import AddServiceSidebar from "../addService/AddServiceSidebar";
import { useServices } from "../../context/ServicesContext";

export default function EditServicePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getServiceById, updateService } = useServices();

  const existingService = getServiceById(id);

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    location: "",
    price_type: "project",
    duration: "",
    service_type: "",
    image: "",
  });

  const [images, setImages] = useState(["", "", ""]);

  useEffect(() => {
    if (existingService) {
      setForm({
        title: existingService.title || "",
        description: existingService.description || "",
        category: existingService.category || "",
        price: existingService.price || "",
        location: existingService.location || "",
        price_type: existingService.price_type || "project",
        duration: existingService.duration || "",
        service_type: existingService.service_type || "",
        image: existingService.image || "",
      });

      setImages([existingService.image || "", "", ""]);
    }
  }, [existingService]);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateService(id, {
      ...form,
      image: form.image || images[0],
    });

    navigate(`/services/${id}`);
  };

  if (!existingService) {
    return (
      <main className="min-h-screen bg-[#f7faf8] p-10">
        <div className="mx-auto max-w-4xl text-center text-slate-600">
          Service not found
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7faf8] text-slate-900">
      <AddServiceHeader />

      <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <AddServiceIntro
            title="Edit Service"
            subtitle="Update your service details and keep the page consistent across the platform."
          />

          <div className="grid gap-6 xl:grid-cols-[1.2fr_0.48fr]">
            <AddServiceForm
              form={form}
              onChange={handleChange}
              onSubmit={handleSubmit}
              isSubmitting={false}
              submitLabel="Save Changes"
            />

            <AddServiceSidebar
              title={form.title}
              category={form.category}
              price={form.price}
            />
          </div>

          <AddServiceGallery images={images} />
        </div>
      </section>
    </main>
  );
}