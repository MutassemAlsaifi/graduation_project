import HomeNavbar from "../Home/HomeNavbar";
import HomeFooter from "../Home/HomeFooter";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f8faf8] text-slate-900">
      <HomeNavbar />

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-500">
            About DirectServe
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Connecting customers with trusted service providers.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            DirectServe is a modern service marketplace that helps customers
            find reliable providers, compare services, and contact professionals
            easily.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              ["Trusted", "Clear provider profiles and service details."],
              ["Fast", "Find and contact providers quickly."],
              ["Simple", "Clean experience without complicated steps."],
              ["Modern", "Designed for smooth service discovery."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-3xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-slate-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomeFooter />
    </main>
  );
}