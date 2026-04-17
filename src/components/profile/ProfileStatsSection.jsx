import { profileStats } from "../../data/profileData";
import ProfileStatsCard from "./ProfileStatsCard";

export default function ProfileStatsSection() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {profileStats.map((item) => (
        <ProfileStatsCard key={item.id} item={item} />
      ))}
    </section>
  );
}