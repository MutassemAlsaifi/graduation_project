import CategoryCard from "./CategoryCard";
import SectionHeader from "./SectionHeader";
import { categories } from "../../data/homeData";

export default function CategoriesSection() {
  return (
    <section className="px-6 py-4 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader title="Popular Categories" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((category) => (
            <CategoryCard
              key={category.label}
              label={category.label}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}