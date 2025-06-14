
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
    <header className="sticky top-0 z-50 bg-white/60 backdrop-blur-lg shadow-none border-b border-blue-100 transition-all">
      <div className="container flex justify-between items-center h-20">
        <a href="#" className="flex items-center gap-2">
          <div className="bg-gradient-to-br from-blue-600 to-blue-400 w-10 h-10 rounded-xl flex items-center justify-center shadow-glass">
            <span className="font-display font-bold text-2xl text-white tracking-tight">D</span>
          </div>
          <span className="font-display text-2xl font-bold text-dp-blue-dark tracking-tight">DeepDiveProfits</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 text-gray-800 font-medium text-lg">
          {navItems.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="relative inline-block px-1 hover:text-dp-blue transition-colors after:story-link"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex">
          <a href="#contact" className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-full font-semibold shadow-glass hover:scale-105 transition-transform">
            Get a Quote
          </a>
        </div>
        <button className="md:hidden p-2 rounded-lg" onClick={() => setMobileOpen((m) => !m)}>
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur p-6 absolute left-0 right-0 mt-2 rounded-2xl shadow-xl animate-fade-in">
          <nav className="flex flex-col gap-5">
            {navItems.map(({ label, href }) => (
              <a key={label} href={href} className="text-dp-blue-dark text-lg font-medium hover:text-dp-blue">
                {label}
              </a>
            ))}
            <a href="#contact" className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-full font-bold shadow-glass">
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default AppHeader;
