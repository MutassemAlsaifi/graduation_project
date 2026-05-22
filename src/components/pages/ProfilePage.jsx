import { useEffect, useState } from "react";
import { getCurrentUser } from "../../services/authService";
import { getMyServices } from "../../services/servicesService";

import ProfileActionsCard from "../profile/ProfileActionsCard";
import ProfileHeader from "../profile/ProfileHeader";
import ProfileHeroCard from "../profile/ProfileHeroCard";
import ProfileInfoCard from "../profile/ProfileInfoCard";
import ProfileServicesCard from "../profile/ProfileServicesCard";
import ProfileSidebar from "../profile/ProfileSidebar";
import ProfileStatsSection from "../profile/ProfileStatsSection";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const currentUser = await getCurrentUser(token);

        setUser(currentUser);
        localStorage.setItem("user", JSON.stringify(currentUser));

        if (
          currentUser?.role === "provider" ||
          currentUser?.role === "admin"
        ) {
          const myServices = await getMyServices();
          setServices(myServices);
        } else {
          setServices([]);
        }
      } catch (error) {
        console.error("Failed to load profile:", error);
        setUser(null);
        setServices([]);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#f7faf8] p-10 text-slate-900">
        <div className="mx-auto max-w-4xl text-center text-slate-500">
          Loading profile...
        </div>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="min-h-screen bg-[#f7faf8] p-10 text-slate-900">
        <div className="mx-auto max-w-4xl text-center text-slate-600">
          Profile not found
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7faf8] text-slate-900">
      <div className="flex min-h-screen">
        <ProfileSidebar user={user} />

        <div className="flex-1">
          <ProfileHeader user={user} />

          <section className="px-4 py-6 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl space-y-6">
              <ProfileHeroCard profile={user} />
              <ProfileStatsSection user={user} services={services} />

              <div className="grid gap-6 xl:grid-cols-[1.2fr_0.55fr]">
                <div className="space-y-6">
                  <ProfileInfoCard
                    profile={user}
                    isEditing={isEditing}
                    setIsEditing={setIsEditing}
                    onProfileUpdated={setUser}
                  />

                  <ProfileServicesCard user={user} services={services} />
                </div>

                <ProfileActionsCard
                  user={user}
                  isEditing={isEditing}
                  setIsEditing={setIsEditing}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}