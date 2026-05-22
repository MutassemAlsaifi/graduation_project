import AuthCard from "../auth/AuthCard";
import AuthHeader from "../auth/AuthHeader";
import AuthIntro from "../auth/AuthIntro";
import LoginForm from "../auth/LoginForm";


export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#f7faf8] text-slate-900">
      <AuthHeader />

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-center">
          <div className="w-full max-w-md">
            <AuthCard>
              <AuthIntro
                title="Welcome Back"
                subtitle="Sign in to manage your services, view requests, and continue building your business."
              />
              <LoginForm />
            </AuthCard>
          </div>
        </div>
      </section>
    </main>
  );
}