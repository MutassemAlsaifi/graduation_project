import { useEffect, useState } from "react";
import { getAdminUsers, updateAdminUser, deleteAdminUser } from "../../services/adminService";

export default function AdminUsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [savingUserId, setSavingUserId] = useState(null);
  const [deletingUserId, setDeletingUserId] = useState(null);

  const loadUsers = async () => {
    try {
      const data = await getAdminUsers();
      setUsers(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Failed to load users:", error);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleRoleChange = async (userId, newRole) => {
    try {
      setSavingUserId(userId);

      const response = await updateAdminUser(userId, { role: newRole });

      setUsers((prev) =>
        prev.map((user) =>
          user.id === userId ? response.user : user
        )
      );
    } catch (error) {
      console.error("Failed to update user role:", error);
    } finally {
      setSavingUserId(null);
    }
  };

  const handleDelete = async (userId) => {
    const confirmed = window.confirm("Are you sure you want to delete this user?");
    if (!confirmed) return;

    try {
      setDeletingUserId(userId);
      await deleteAdminUser(userId);

      setUsers((prev) => prev.filter((user) => user.id !== userId));
    } catch (error) {
      console.error("Failed to delete user:", error);
      alert(error?.response?.data?.message || "Failed to delete user.");
    } finally {
      setDeletingUserId(null);
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-[#f7faf8] p-10 text-slate-900">
        <div className="mx-auto max-w-6xl text-center text-slate-500">
          Loading users...
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7faf8] px-4 py-8 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-6 text-3xl font-semibold tracking-tight text-slate-900">
          Manage Users
        </h1>

        {users.length === 0 ? (
          <div className="rounded-[24px] border border-slate-200 bg-white p-8 text-center text-slate-500 shadow-sm">
            No users found.
          </div>
        ) : (
          <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm">
            <div className="hidden grid-cols-6 gap-4 border-b border-slate-200 px-6 py-4 text-sm font-semibold text-slate-700 md:grid">
              <span>Name</span>
              <span>Email</span>
              <span>Phone</span>
              <span>Country</span>
              <span>Role</span>
              <span>Actions</span>
            </div>

            <div className="divide-y divide-slate-100">
              {users.map((user) => (
                <div
                  key={user.id}
                  className="grid gap-4 px-6 py-4 md:grid-cols-6 md:items-center"
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400 md:hidden">
                      Name
                    </p>
                    <p className="text-sm text-slate-700">{user.name}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400 md:hidden">
                      Email
                    </p>
                    <p className="text-sm text-slate-700">{user.email}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400 md:hidden">
                      Phone
                    </p>
                    <p className="text-sm text-slate-700">{user.phone || "—"}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400 md:hidden">
                      Country
                    </p>
                    <p className="text-sm text-slate-700">{user.country || "—"}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400 md:hidden">
                      Role
                    </p>
                    <select
                      value={user.role}
                      onChange={(e) => handleRoleChange(user.id, e.target.value)}
                      disabled={savingUserId === user.id}
                      className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-700 outline-none focus:border-emerald-500"
                    >
                      <option value="customer">Customer</option>
                      <option value="provider">Provider</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>

                  <div>
                    <button
                      onClick={() => handleDelete(user.id)}
                      disabled={deletingUserId === user.id}
                      className="rounded-xl bg-red-50 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {deletingUserId === user.id ? "Deleting..." : "Delete"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}