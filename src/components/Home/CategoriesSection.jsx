import CategoryCard from "./CategoryCard";
import SectionHeader from "./SectionHeader";
import {
  Wrench,
  GraduationCap,
  Sparkles,
  Flower2,
  Paintbrush,
} from "lucide-react";

// mapping icons
const icons = {
  Plumbing: Wrench,
  Tutoring: GraduationCap,
  Cleaning: Sparkles,
  Gardening: Flower2,
  Painting: Paintbrush,
};

export default function CategoriesSection({ categories = [] }) {
  return (
    <section className="px-6 py-4 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader title="Popular Categories" />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((category) => {
            const Icon = icons[category.label];

            return (
              <CategoryCard
                key={category.id}
                label={category.label}
                icon={Icon}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}