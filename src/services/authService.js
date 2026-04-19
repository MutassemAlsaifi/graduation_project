import api from "./api";

export const registerUser = async (data) => {
  const response = await api.post("/register", data);
  return response.data;
};

export const loginUser = async (data) => {
  const response = await api.post("/login", data);
  return response.data;
};

export const logoutUser = async (token) => {
  const response = await api.post(
    "/logout",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const getCurrentUser = async (token) => {
  const response = await api.get("/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const updateProfile = async (data) => {
  const token = localStorage.getItem("token");

  const response = await api.put("/profile", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};