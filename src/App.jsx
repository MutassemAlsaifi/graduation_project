import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./components/pages/HomePage";
import ServicesPage from "./components/pages/ServicesPage";
import ServiceDetailsPage from "./components/services/ServiceDetailsPage";
import AddServicePage from "./components/pages/AddServicePage";
import EditServicePage from "./components/pages/EditServicePage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import DashboardPage from "./components/pages/DashboardPage";
import ProfilePage from "./components/pages/ProfilePage";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import AdminUsersPage from "./components/pages/AdminUsersPage";
import AdminRoute from "./components/auth/AdminRoute";
import AdminDashboardPage from "./components/pages/AdminDashboardPage";

function App() {
  return (
    <main className="min-h-screen bg-[#f8faf8] text-slate-900">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:id" element={<ServiceDetailsPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />

        <Route
          path="/services/new"
          element={
            <ProtectedRoute allowedRoles={["provider", "admin"]}>
              <AddServicePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/services/:id/edit"
          element={
            <ProtectedRoute allowedRoles={["provider", "admin"]}>
              <EditServicePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allowedRoles={["provider", "admin"]}>
              <DashboardPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminDashboardPage />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/users"
          element={
            <AdminRoute>
              <AdminUsersPage />
            </AdminRoute>
          }
        />
      </Routes>

    </main>
  );
}

export default App;