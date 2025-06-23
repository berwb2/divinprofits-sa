
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

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-4 z-50 w-full transition-all duration-300">
      <div className="container flex justify-between items-center h-20 px-4 sm:px-6 mx-auto bg-white/70 border border-black/5 rounded-2xl shadow-lg shadow-black/[0.03] backdrop-blur-xl">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="bg-gradient-to-br from-dp-blue via-dp-blue-light to-dp-accent w-10 h-10 rounded-lg flex items-center justify-center shadow-md border-2 border-white/80 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-200">
            <span className="font-display font-extrabold text-2xl text-white tracking-tight">D</span>
          </div>
          <span className="font-display text-2xl font-bold text-dp-blue-dark tracking-tighter">
            Divin-Profits
          </span>
        </a>
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-1 text-dp-blue-dark font-semibold text-base">
          {navItems.map(({ label, href }) => (
            <button
              key={label}
              onClick={() => handleNavClick(href)}
              className="relative px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-dp-blue/10 text-gray-700 hover:text-dp-blue-dark"
            >
              {label}
            </button>
          ))}
        </nav>
        <div className="hidden sm:flex items-center">
          <button
            onClick={() => handleNavClick('#contact')}
            className="ml-4 bg-dp-blue-dark text-white px-6 py-2.5 rounded-lg font-semibold shadow-sm hover:scale-105 hover:bg-dp-blue transition-all duration-200 text-sm"
          >
           Book A Call
          </button>
        </div>
        <button
          className="md:hidden p-2 rounded-lg hover:bg-dp-blue/10 transition-colors"
          onClick={() => setMobileOpen((m) => !m)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg p-5 absolute left-4 right-4 top-24 rounded-2xl shadow-xl animate-fade-in border border-black/5 z-40 flex flex-col items-center">
          <nav className="flex flex-col gap-4 w-full">
            {navItems.map(({ label, href }) => (
              <button
                key={label}
                onClick={() => handleNavClick(href)}
                className="text-dp-blue-dark text-lg font-semibold py-2 px-4 rounded-lg transition-all hover:bg-dp-blue/10 hover:text-dp-blue-dark w-full text-center"
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className="bg-dp-blue text-white px-7 py-3 mt-2 rounded-lg font-bold shadow-md border-2 border-dp-blue-light transition-transform duration-150 hover:scale-105 text-base w-full text-center"
            >
              Book A Call
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default AppHeader;
