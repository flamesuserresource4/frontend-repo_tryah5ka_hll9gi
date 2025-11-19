import { Menu } from "lucide-react";

function Navbar() {
  return (
    <header className="relative z-20">
      <nav className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-rose-600 to-red-500 ring-2 ring-rose-200/40 shadow-lg shadow-rose-500/20" />
          <div className="leading-tight">
            <p className="text-lg font-semibold tracking-wide text-rose-900/90">Hanabira</p>
            <p className="text-xs uppercase tracking-[0.2em] text-rose-900/60">Japanese Atelier</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-rose-900/80">
          <a href="#experience" className="hover:text-rose-900 transition-colors">Experience</a>
          <a href="#architecture" className="hover:text-rose-900 transition-colors">Architecture</a>
          <a href="#gallery" className="hover:text-rose-900 transition-colors">Gallery</a>
          <a href="#contact" className="px-4 py-2 rounded-full bg-rose-600 text-rose-50 hover:bg-rose-700 transition-colors shadow-sm shadow-rose-600/30">Reserve</a>
        </div>

        <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-rose-100 text-rose-700">
          <Menu size={20} />
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
