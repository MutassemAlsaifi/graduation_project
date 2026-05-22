import SearchBar from "./SearchBar";
import TrustIndicators from "./TrustIndicators";
import FeaturedServiceCard from "./FeaturedServiceCard";

export default function HeroSection({ featuredService }) {
  return (
    <section className="relative overflow-hidden px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.2fr_0.9fr]">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-emerald-500">
            Home services marketplace
          </p>

          <h1 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Find Real Services from{" "}
            <span className="text-emerald-500">Real Owners.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
            Discover trusted local professionals, hire directly, and get things
            done faster with a simple, modern experience.
          </p>

          <div className="mt-8 max-w-2xl">
            <SearchBar />
            <TrustIndicators />
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-[36px] bg-gradient-to-br from-emerald-100 via-white to-slate-100 blur-2xl" />
          <FeaturedServiceCard service={featuredService} />
        </div>
      </div>
    </section>
  );
}