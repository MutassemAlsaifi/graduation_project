import { useEffect, useState } from "react";
import { ArrowLeft, Pencil, Share2, Trash2 } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteServiceRequest } from "../../services/servicesService";
import ConfirmModal from "../ui/ConfirmModal";
import Toast from "../ui/Toast";

export default function ServiceDetailsHeader({ service }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const storedUser = localStorage.getItem("user");
  const currentUser = storedUser ? JSON.parse(storedUser) : null;

  const isOwner =
    Number(currentUser?.id) === Number(service?.user_id) ||
    Number(currentUser?.id) === Number(service?.user?.id);

  const canEditOrDelete =
    !!token &&
    !!currentUser &&
    (currentUser?.role === "admin" ||
      (currentUser?.role === "provider" && isOwner));

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [toast, setToast] = useState({
    isOpen: false,
    type: "success",
    title: "",
    message: "",
  });

  const closeToast = () => {
    setToast((prev) => ({ ...prev, isOpen: false }));
  };

  useEffect(() => {
    if (!toast.isOpen) return;

    const timer = setTimeout(() => {
      closeToast();
    }, 3000);

    return () => clearTimeout(timer);
  }, [toast.isOpen]);

  const handleDelete = async () => {
    try {
      setIsDeleting(true);

      await deleteServiceRequest(id);

      setToast({
        isOpen: true,
        type: "success",
        title: "Service deleted",
        message: "The service was removed successfully.",
      });

      setIsModalOpen(false);

      setTimeout(() => {
        navigate("/services");
      }, 700);
    } catch (error) {
      console.error("Delete failed:", error);

      setToast({
        isOpen: true,
        type: "error",
        title: "Delete failed",
        message:
          error?.response?.data?.message ||
          "Something went wrong while deleting the service.",
      });
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <header className="px-5 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center justify-between gap-4">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-700"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to services
            </Link>

            <div className="flex items-center gap-4">
              {canEditOrDelete && (
                <>
                  <Link
                    to={`/services/${id}/edit`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 transition hover:text-slate-700"
                  >
                    <Pencil className="h-4 w-4" />
                    Edit
                  </Link>

                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center gap-1 text-sm font-medium text-red-500 transition hover:text-red-600"
                  >
                    <Trash2 className="h-4 w-4" />
                    Delete
                  </button>
                </>
              )}

              <button
                type="button"
                className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 transition hover:text-slate-700"
              >
                <Share2 className="h-4 w-4" />
                Share
              </button>
            </div>
          </div>

          {service && (
            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-500">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                {service.category?.name || "Uncategorized"}
              </span>

              <span>By {service.user?.name || "Unknown provider"}</span>

              <span>•</span>

              <span>{service.location || "Location not specified"}</span>
            </div>
          )}
        </div>
      </header>

      <ConfirmModal
        isOpen={isModalOpen}
        title="Delete this service?"
        message="This action will remove the service from the platform. You can’t undo this later."
        confirmText="Delete service"
        cancelText="Keep service"
        onConfirm={handleDelete}
        onCancel={() => !isDeleting && setIsModalOpen(false)}
        isLoading={isDeleting}
      />

      <Toast
        isOpen={toast.isOpen}
        type={toast.type}
        title={toast.title}
        message={toast.message}
        onClose={closeToast}
      />
    </>
  );
}