import api from "./api";

export const createService = async (data) => {
  const response = await api.post("/services", data);
  return response.data;
};

export const updateServiceRequest = async (id, data) => {
  const response = await api.put(`/services/${id}`, data);
  return response.data;
};

export const deleteServiceRequest = async (id) => {
  const response = await api.delete(`/services/${id}`);
  return response.data;
};