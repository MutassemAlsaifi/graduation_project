import { Mail, MapPin, Phone } from "lucide-react";
import HomeNavbar from "../Home/HomeNavbar";
import HomeFooter from "../Home/HomeFooter";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f8faf8] text-slate-900">
      <HomeNavbar />

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-500">
            Contact Us
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            We are here to help.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Have a question or need support? Contact our team and we will help
            you as soon as possible.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <Mail className="h-7 w-7 text-emerald-500" />
              <h3 className="mt-4 font-semibold">Email</h3>
              <p className="mt-2 text-sm text-slate-500">
                support@directserve.com
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <Phone className="h-7 w-7 text-emerald-500" />
              <h3 className="mt-4 font-semibold">Phone</h3>
              <p className="mt-2 text-sm text-slate-500">+1 234 567 890</p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <MapPin className="h-7 w-7 text-emerald-500" />
              <h3 className="mt-4 font-semibold">Location</h3>
              <p className="mt-2 text-sm text-slate-500">Online Marketplace</p>
            </div>
          </div>
        </div>
      </section>

      <HomeFooter />
    </main>
  );
}