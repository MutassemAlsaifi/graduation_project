export default function AuthCard({ children }) {
  return (
    <div className="w-full rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      {children}
    </div>
  );
}