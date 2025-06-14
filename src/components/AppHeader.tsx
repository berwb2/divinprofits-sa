
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

const AppHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-lg shadow-none border-b border-blue-100 transition-all">
      <div className="container flex justify-between items-center h-20 px-2 sm:px-6">
        <a href="#" className="flex items-center gap-3 group">
          <div className="glass-shadow bg-gradient-to-br from-blue-700 via-blue-200 to-blue-500 w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-200 group-hover:scale-105 border-2 border-blue-400 shadow-lg">
            <span className="font-display font-extrabold text-2xl text-white tracking-tight drop-shadow-lg">D</span>
          </div>
          <span className="font-display text-2xl md:text-3xl font-bold text-dp-blue-dark tracking-tight bg-gradient-to-r from-blue-600 via-blue-400 to-blue-800 bg-clip-text text-transparent">
            Divin-Profits
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-7 text-blue-900 font-medium text-lg rounded-full bg-white/60 px-5 py-2 backdrop-blur-md border border-blue-100 shadow glass-shadow">
          {navItems.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="relative inline-block px-2 py-1 rounded-full transition-colors duration-200 hover:bg-blue-100/70 hover:text-blue-700 hover-scale story-link"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex">
          <a 
            href="#contact" 
            className="ml-6 bg-gradient-to-r from-blue-500 via-blue-700 to-dp-blue hover:from-blue-400 hover:to-blue-800 text-white px-7 py-3 rounded-full font-semibold font-display tracking-wide shadow-glass transition-all duration-150 hover:scale-105 border-2 border-white/70 hover:border-blue-400 text-base"
            style={{ boxShadow: "0 6px 32px 0 rgba(80,120,255,0.09), 0 1.5px 12px 0 rgba(22,86,185,0.16)" }}
          >
            Get a Quote
          </a>
        </div>
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-blue-100 transition-colors" 
          onClick={() => setMobileOpen((m) => !m)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur p-7 absolute left-2 right-2 top-[74px] rounded-2xl shadow-xl animate-fade-in border border-blue-200 z-40">
          <nav className="flex flex-col gap-6">
            {navItems.map(({ label, href }) => (
              <a 
                key={label} 
                href={href} 
                className="text-dp-blue-dark text-lg font-medium py-2 px-3 rounded-full transition-all hover:bg-blue-50/60 hover:text-blue-800 hover:pl-5 duration-200"
              >
                {label}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-blue-500 via-blue-600 to-dp-blue text-white px-7 py-3 rounded-full font-bold shadow-glass border-2 border-blue-100 transition-transform duration-150 hover:scale-105 text-base"
            >
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default AppHeader;
