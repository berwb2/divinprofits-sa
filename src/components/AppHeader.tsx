
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
    <header className="sticky top-0 z-50 w-full bg-white/60 shadow-lg border-b border-blue-100 backdrop-blur-[10px] transition-all">
      <div className="container flex justify-between items-center h-20 px-2 sm:px-7">
        <a href="#" className="flex items-center gap-3 group">
          <div className="bg-gradient-to-br from-blue-700 via-dp-blue-light to-blue-400 w-12 h-12 rounded-2xl flex items-center justify-center shadow-glass hover:scale-105 transition-transform duration-150 border-2 border-dp-blue-light/50">
            <span className="font-display font-extrabold text-2xl text-white tracking-tight drop-shadow-lg">D</span>
          </div>
          <span className="font-display text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-dp-blue-light via-dp-blue to-dp-blue-dark bg-clip-text text-transparent tracking-tighter drop-shadow animate-fade-in">
            Divin-Profits
          </span>
        </a>
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-dp-blue-dark font-semibold text-lg rounded-full bg-white/80 px-6 py-2 backdrop-blur-lg border border-blue-100 shadow-glass">
          {navItems.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="relative inline-block px-3 py-1 rounded-full transition-colors duration-200 text-dp-blue-dark hover:bg-dp-blue/10 hover:text-dp-blue hover-scale story-link"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden sm:flex">
          <a
            href="#contact"
            className="ml-5 bg-gradient-to-r from-dp-blue-light via-dp-accent to-dp-blue text-white px-7 py-3 rounded-full font-bold font-display tracking-wide shadow-glass transition-all duration-150 hover:scale-105 text-base border-2 border-white/60 hover:border-dp-blue-light animate-fade-in"
          >
            Get a Quote
          </a>
        </div>
        <button
          className="md:hidden p-2 rounded-lg hover:bg-dp-blue-light/10 transition-colors"
          onClick={() => setMobileOpen((m) => !m)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg p-7 absolute left-2 right-2 top-[74px] rounded-2xl shadow-xl animate-fade-in border border-blue-200 z-40 flex flex-col items-center">
          <nav className="flex flex-col gap-6">
            {navItems.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-dp-blue-dark text-lg font-semibold py-2 px-4 rounded-full transition-all hover:bg-blue-100/60 hover:text-dp-blue hover:pl-5 duration-200"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-gradient-to-r from-dp-blue-light via-dp-accent to-dp-blue text-white px-7 py-3 rounded-full font-bold shadow-glass border-2 border-dp-blue-light transition-transform duration-150 hover:scale-105 text-base"
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
