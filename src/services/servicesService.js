import api from "./api";

const getAuthConfig = (isMultipart = false) => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      ...(isMultipart ? { "Content-Type": "multipart/form-data" } : {}),
    },
  };
};

export const getCategories = async () => {
  const response = await api.get("/categories");
  return response.data;
};

export const getServices = async (filters = {}) => {
  const response = await api.get("/services", {
    params: filters,
  });
  return response.data;
};

export const getMyServices = async () => {
  const response = await api.get("/my-services", getAuthConfig());
  return response.data;
};

export const getServiceById = async (id) => {
  const response = await api.get(`/services/${id}`);
  return response.data;
};

export const createService = async (formData) => {
  const response = await api.post("/services", formData, getAuthConfig(true));
  return response.data;
};

export const updateServiceRequest = async (id, formData) => {
  const response = await api.post(
    `/services/${id}?_method=PUT`,
    formData,
    getAuthConfig(true)
  );
  return response.data;
};

export const deleteServiceRequest = async (id) => {
  const response = await api.delete(`/services/${id}`, getAuthConfig());
  return response.data;
};