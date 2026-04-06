export default function HomeFooter() {
  return (
    <footer className="mt-10 border-t border-slate-100 px-6 py-8 text-sm text-slate-400 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2025 DirectServe. All rights reserved.</p>

        <div className="flex items-center gap-5">
          <a href="#" className="transition hover:text-slate-600">
            Privacy
          </a>
          <a href="#" className="transition hover:text-slate-600">
            Terms
          </a>
          <a href="#" className="transition hover:text-slate-600">
            Support
          </a>
        </div>
      </div>
    </footer>
  );
}