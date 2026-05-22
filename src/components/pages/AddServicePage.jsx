import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { initialImages } from "../../data/addServiceData";
import AddServiceForm from "../addService/AddServiceForm";
import AddServiceGallery from "../addService/AddServiceGallery";
import AddServiceHeader from "../addService/AddServiceHeader";
import AddServiceIntro from "../addService/AddServiceIntro";
import AddServiceSidebar from "../addService/AddServiceSidebar";
import { useServices } from "../../context/ServicesContext";

export default function AddServicePage() {
  const navigate = useNavigate();
  const { addService } = useServices();

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

  const [images] = useState(initialImages);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addService({
      ...form,
      image: form.image || images[0],
      tag: form.category,
    });

    navigate("/services");
  };

  return (
    <main className="min-h-screen bg-[#f7faf8] text-slate-900">
      <AddServiceHeader />

      <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <AddServiceIntro />

          <div className="grid gap-6 xl:grid-cols-[1.2fr_0.48fr]">
            <AddServiceForm
              form={form}
              onChange={handleChange}
              onSubmit={handleSubmit}
              isSubmitting={false}
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