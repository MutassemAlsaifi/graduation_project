import api from "./api";

const getAuthConfig = () => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
};

export const getAdminDashboard = async () => {
  const response = await api.get("/admin/dashboard", getAuthConfig());
  return response.data;
};

export const getAdminUsers = async () => {
  const response = await api.get("/admin/users", getAuthConfig());
  return response.data;
};

export const updateAdminUser = async (id, data) => {
  const response = await api.put(`/admin/users/${id}`, data, getAuthConfig());
  return response.data;
};

export const deleteAdminUser = async (id) => {
  const response = await api.delete(`/admin/users/${id}`, getAuthConfig());
  return response.data;
};