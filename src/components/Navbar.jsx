import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLabels = ["Home", "Skills", "Projects", "About", "Contact"];

  const scrollToSection = (href) => {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="gradient-text text-xl font-bold  dark:text-white">
            <a
              href="#home"
              className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-pink-600"
            >
              𝓜𝓸𝓴𝓫𝓫𝓲𝓻 𝓜𝓲𝓼𝓸
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLabels.map((label) => {
              const href = `#${label.toLowerCase()}`;
              return (
                <button
                  key={label}
                  onClick={() => scrollToSection(href)}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-200 font-medium"
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X size={24} className="text-gray-800 dark:text-white" />
              ) : (
                <Menu size={24} className="text-gray-800 dark:text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
            {navLabels.map((label) => {
              const href = `#${label.toLowerCase()}`;
              return (
                <button
                  key={label}
                  onClick={() => scrollToSection(href)}
                  className="block w-full text-left px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-200"
                >
                  {label}
                </button>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
