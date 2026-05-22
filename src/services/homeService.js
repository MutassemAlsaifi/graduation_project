import api from "./api";

export const getHomeData = async () => {
  const response = await api.get("/home");
  return response.data;
};

export const getCategories = async () => {
  const response = await api.get("/categories");
  return response.data;
};