import CategoryCard from "./CategoryCard";
import SectionHeader from "./SectionHeader";
import {
  Wrench,
  GraduationCap,
  Sparkles,
  Flower2,
  Paintbrush,
  Hammer,
  Briefcase,
} from "lucide-react";

const icons = {
  Plumbing: Wrench,
  Tutoring: GraduationCap,
  Cleaning: Sparkles,
  Gardening: Flower2,
  Painting: Paintbrush,
  Repair: Hammer,
  Services: Briefcase,
};

export default function CategoriesSection({ categories = [] }) {
  return (
    <section className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader title="Popular Categories" />

        {categories.length === 0 ? (
          <div className="rounded-[24px] border border-slate-200 bg-white p-8 text-center text-sm text-slate-500 shadow-sm">
            No categories available right now.
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {categories.map((category) => {
              const label = category?.name || category?.label || "Services";
              const Icon = icons[label] || Briefcase;

              return (
                <CategoryCard
                  key={category.id}
                  label={label}
                  icon={Icon}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}