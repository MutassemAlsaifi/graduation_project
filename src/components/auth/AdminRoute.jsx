import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }) {
  const token = localStorage.getItem("token");
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  const isAdmin = !!token && user?.role === "admin";

  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  return children;
}