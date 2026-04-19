import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AddServiceForm from "../addService/AddServiceForm";
import AddServiceGallery from "../addService/AddServiceGallery";
import AddServiceHeader from "../addService/AddServiceHeader";
import AddServiceIntro from "../addService/AddServiceIntro";
import AddServiceSidebar from "../addService/AddServiceSidebar";
import {
  getCategories,
  getServiceById,
  updateServiceRequest,
} from "../../services/servicesService";

export default function EditServicePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    category_id: "",
    price: "",
    location: "",
    price_type: "project",
    duration: "",
    service_type: "",
    images: [],
  });

  const [categories, setCategories] = useState([]);
  const [preview, setPreview] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [service, categoriesData] = await Promise.all([
          getServiceById(id),
          getCategories(),
        ]);

        setForm({
          title: service.title || "",
          description: service.description || "",
          category_id: service.category_id || "",
          price: service.price || "",
          location: service.location || "",
          price_type: service.price_type || "project",
          duration: service.duration || "",
          service_type: service.service_type || "",
          images: [],
        });

        setPreview(
          Array.isArray(service.images)
            ? service.images.map((img) => img.path)
            : []
        );

        setCategories(Array.isArray(categoriesData) ? categoriesData : []);
      } catch (error) {
        console.error("Failed to load edit data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [id]);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleImagesChange = (files) => {
    const filesArray = Array.from(files || []);

    setForm((prev) => ({
      ...prev,
      images: filesArray,
    }));

    const previews = filesArray.map((file) => URL.createObjectURL(file));
    setPreview(previews);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData();

      formData.append("title", form.title);
      formData.append("description", form.description);
      formData.append("category_id", form.category_id);
      formData.append("price", form.price);
      formData.append("location", form.location);
      formData.append("price_type", form.price_type);
      formData.append("duration", form.duration);
      formData.append("service_type", form.service_type);

      form.images.forEach((image, index) => {
        formData.append(`images[${index}]`, image);
      });

      const updatedService = await updateServiceRequest(id, formData);
      navigate(`/services/${updatedService.id}`);
    } catch (error) {
      console.error("Failed to update service:", error);
      console.error("STATUS:", error?.response?.status);
      console.error("ERROR DATA:", error?.response?.data);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-[#f7faf8] p-10 text-slate-900">
        <div className="mx-auto max-w-4xl text-center text-slate-500">
          Loading service...
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7faf8] text-slate-900">
      <AddServiceHeader />

      <section className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 xl:grid-cols-[1fr_320px]">
          <div className="space-y-6">
            <AddServiceIntro />

            <AddServiceGallery preview={preview} />

            <AddServiceForm
              form={form}
              categories={categories}
              onChange={handleChange}
              onImagesChange={handleImagesChange}
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
              isEdit
            />
          </div>

          <AddServiceSidebar form={form} categories={categories} />
        </div>
      </section>
    </main>
  );
}