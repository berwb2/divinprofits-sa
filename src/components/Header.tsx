
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">
              Shibui <span className="text-orange-500">Digital</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-orange-500 transition-colors">
              Home
            </a>
            <a href="#services" className="text-gray-700 hover:text-orange-500 transition-colors">
              Services
            </a>
            <a href="#portfolio" className="text-gray-700 hover:text-orange-500 transition-colors">
              Portfolio
            </a>
            <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-orange-500 transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors font-medium">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-orange-500"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-orange-500">
                Home
              </a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-orange-500">
                Services
              </a>
              <a href="#portfolio" className="block px-3 py-2 text-gray-700 hover:text-orange-500">
                Portfolio
              </a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-orange-500">
                About
              </a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-orange-500">
                Contact
              </a>
              <button className="w-full text-left bg-orange-500 text-white px-3 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
