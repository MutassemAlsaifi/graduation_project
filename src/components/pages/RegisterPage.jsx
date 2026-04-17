import AuthCard from "../auth/AuthCard";
import AuthHeader from "../auth/AuthHeader";
import AuthIntro from "../auth/AuthIntro";
import RegisterForm from "../auth/RegisterForm";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-[#f7faf8] text-slate-900">
      <AuthHeader />

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-center">
          <div className="w-full max-w-md">
            <AuthCard>
              <AuthIntro
                title="Create Account"
                subtitle="Join DirectServe and start offering services, connecting with customers, and growing faster."
              />
              <RegisterForm />
            </AuthCard>
          </div>
        </div>
      </section>
    </main>
  );
}