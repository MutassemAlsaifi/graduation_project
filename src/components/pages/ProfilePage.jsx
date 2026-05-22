import { profileData } from "../../data/profileData";
import ProfileActionsCard from "../profile/ProfileActionsCard";
import ProfileHeader from "../profile/ProfileHeader";
import ProfileHeroCard from "../profile/ProfileHeroCard";
import ProfileInfoCard from "../profile/ProfileInfoCard";
import ProfileServicesCard from "../profile/ProfileServicesCard";
import ProfileSidebar from "../profile/ProfileSidebar";
import ProfileStatsSection from "../profile/ProfileStatsSection";


export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-[#f7faf8] text-slate-900">
      <div className="flex min-h-screen">
        <ProfileSidebar />

        <div className="flex-1">
          <ProfileHeader />

          <section className="px-4 py-6 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl space-y-6">
              <ProfileHeroCard profile={profileData} />
              <ProfileStatsSection />

              <div className="grid gap-6 xl:grid-cols-[1.2fr_0.55fr]">
                <div className="space-y-6">
                  <ProfileInfoCard profile={profileData} />
                  <ProfileServicesCard />
                </div>

                <ProfileActionsCard />
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}