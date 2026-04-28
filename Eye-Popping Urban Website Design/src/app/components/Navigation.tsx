import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="#" className="font-bold text-2xl text-white tracking-tight">
          NL VISUALS
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <a
            href="#"
            className="text-white transition-colors hover:text-gray-300"
          >
            Home
          </a>
          <a
            href="#portfolio"
            className="text-white transition-colors hover:text-gray-300"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="text-white transition-colors hover:text-gray-300"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-black/95 backdrop-blur-md md:hidden"
        >
          <div className="flex flex-col gap-4 px-6 py-6">
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white transition-colors hover:text-gray-300"
            >
              Home
            </a>
            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white transition-colors hover:text-gray-300"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white transition-colors hover:text-gray-300"
            >
              Contact
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
