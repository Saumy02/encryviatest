// src/components/Header/Header.jsx
import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/image/encryvia-logo.webp";

const Header = () => {
  const location = useLocation();
  
  // UI state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // --- Prevent page scroll when mobile menu is open ---
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  // --- Close menus on Esc ---
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // --- When route changes: close menus ---
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // helpers
  const toggleMobileMenu = () => setIsMobileMenuOpen((s) => !s);

  const closeAllMenus = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const isActive = (path) => location.pathname === path;

  // animation variants
  const mobileMenuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 200, damping: 25 } },
    exit: { opacity: 0, x: "100%", transition: { duration: 0.25 } },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200 } },
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 w-full z-50 bg-[#070312]/80 border-b border-purple-500/20 backdrop-blur-xl"
        aria-label="Main header"
      >
        <nav className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
            {/* Dramatic & Aesthetic Brand Logo */}
            <Link to="/" onClick={closeAllMenus} className="group flex items-center space-x-2.5 flex-shrink-0">
              <div className="relative flex items-center justify-center">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-indigo-500 to-pink-500 rounded-full blur-sm opacity-50 group-hover:opacity-100 transition-all duration-300 -z-10" />
                <img
                  src={logo}
                  alt="EncryVia Logo"
                  className="w-10 h-10 rounded-full border border-purple-400/30 group-hover:scale-105 transition-transform duration-300 shadow-lg"
                />
              </div>
              <span className="text-2xl sm:text-[26px] font-black tracking-[-0.03em] select-none flex items-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-purple-200 group-hover:text-white transition-colors duration-300">
                  Encry
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 drop-shadow-[0_0_16px_rgba(192,132,252,0.65)] group-hover:drop-shadow-[0_0_24px_rgba(216,180,254,0.95)] transition-all duration-300 font-black">
                  Via
                </span>
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2.5 mx-auto">
              {/* About Us */}
              <Link
                to="/about-us"
                onClick={closeAllMenus}
                className={`px-2.5 xl:px-3.5 py-1.5 xl:py-2 rounded-full text-xs xl:text-sm font-bold tracking-wide transition whitespace-nowrap ${
                  isActive("/about-us") ? "bg-[rgb(168,85,247)] text-white shadow-md shadow-purple-500/30" : "hover:bg-[rgb(168,85,247)] hover:text-white text-gray-100"
                }`}
              >
                About Us
              </Link>

              {/* Services */}
              <Link
                to="/services"
                onClick={closeAllMenus}
                className={`px-2.5 xl:px-3.5 py-1.5 xl:py-2 rounded-full text-xs xl:text-sm font-bold tracking-wide transition whitespace-nowrap ${
                  isActive("/services") || location.pathname.startsWith("/services")
                    ? "bg-[rgb(168,85,247)] text-white shadow-md shadow-purple-500/30"
                    : "hover:bg-[rgb(168,85,247)] hover:text-white text-gray-100"
                }`}
              >
                Services
              </Link>

              {/* Innovations / Products */}
              <Link
                to="/innovations"
                onClick={closeAllMenus}
                className={`px-2.5 xl:px-3.5 py-1.5 xl:py-2 rounded-full text-xs xl:text-sm font-bold tracking-wide transition whitespace-nowrap ${
                  isActive("/innovations") || isActive("/products") ? "bg-[rgb(168,85,247)] text-white shadow-md shadow-purple-500/30" : "hover:bg-[rgb(168,85,247)] hover:text-white text-gray-100"
                }`}
              >
                Innovations
              </Link>

              {/* Clients & Projects */}
              <Link
                to="/clients-and-projects"
                onClick={closeAllMenus}
                className={`px-2.5 xl:px-3.5 py-1.5 xl:py-2 rounded-full text-xs xl:text-sm font-bold tracking-wide transition whitespace-nowrap ${
                  isActive("/clients-and-projects") || isActive("/our-clients-and-projects") || isActive("/clients-projects") || isActive("/projects")
                    ? "bg-[rgb(168,85,247)] text-white shadow-md shadow-purple-500/30"
                    : "hover:bg-[rgb(168,85,247)] hover:text-white text-gray-100"
                }`}
              >
                Clients and Projects
              </Link>

              {/* FAQ */}
              <Link
                to="/faq"
                onClick={closeAllMenus}
                className={`px-2.5 xl:px-3.5 py-1.5 xl:py-2 rounded-full text-xs xl:text-sm font-bold tracking-wide transition whitespace-nowrap ${
                  isActive("/faq") ? "bg-[rgb(168,85,247)] text-white shadow-md shadow-purple-500/30" : "hover:bg-[rgb(168,85,247)] hover:text-white text-gray-100"
                }`}
              >
                FAQ
              </Link>

              {/* Blog */}
              <Link
                to="/blog"
                onClick={closeAllMenus}
                className={`px-2.5 xl:px-3.5 py-1.5 xl:py-2 rounded-full text-xs xl:text-sm font-bold tracking-wide transition whitespace-nowrap ${
                  isActive("/blog") ? "bg-[rgb(168,85,247)] text-white shadow-md shadow-purple-500/30" : "hover:bg-[rgb(168,85,247)] hover:text-white text-gray-100"
                }`}
              >
                Blog
              </Link>
            </div>

            {/* Right side: contact button in purple */}
            <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
              <Link 
                to="/contact" 
                onClick={closeAllMenus} 
                className="bg-purple-600 px-5 py-2 rounded-xl text-sm font-extrabold text-white hover:bg-[rgb(168,85,247)] transition shadow-lg hover:shadow-purple-500/30 hover:scale-105"
              >
                Contact
              </Link>
            </div>

            {/* Mobile toggle */}
            <button 
              className="lg:hidden ml-auto text-white p-2 rounded-lg hover:bg-white/10" 
              onClick={toggleMobileMenu} 
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu (overlay) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-[#070312]/98 backdrop-blur-2xl z-40 flex flex-col items-center justify-center space-y-5 overflow-y-auto py-12 px-6"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            aria-modal="true"
            role="dialog"
          >
            {/* About Us */}
            <motion.div variants={menuItemVariants}>
              <Link
                to="/about-us"
                onClick={closeAllMenus}
                className={`text-xl font-extrabold ${
                  isActive("/about-us") ? "text-[rgb(168,85,247)]" : "text-white hover:text-[rgb(168,85,247)]"
                }`}
              >
                About Us
              </Link>
            </motion.div>

            {/* Services */}
            <motion.div variants={menuItemVariants}>
              <Link
                to="/services"
                onClick={closeAllMenus}
                className={`text-xl font-extrabold ${
                  isActive("/services") || location.pathname.startsWith("/services")
                    ? "text-[rgb(168,85,247)]"
                    : "text-white hover:text-[rgb(168,85,247)]"
                }`}
              >
                Services
              </Link>
            </motion.div>

            {/* Innovations */}
            <motion.div variants={menuItemVariants}>
              <Link
                to="/innovations"
                onClick={closeAllMenus}
                className={`text-xl font-extrabold ${
                  isActive("/innovations") || isActive("/products") ? "text-[rgb(168,85,247)]" : "text-white hover:text-[rgb(168,85,247)]"
                }`}
              >
                Innovations
              </Link>
            </motion.div>

            {/* Clients & Projects */}
            <motion.div variants={menuItemVariants}>
              <Link
                to="/clients-and-projects"
                onClick={closeAllMenus}
                className={`text-xl font-extrabold ${
                  isActive("/clients-and-projects") || isActive("/our-clients-and-projects") || isActive("/clients-projects") || isActive("/projects")
                    ? "text-[rgb(168,85,247)]"
                    : "text-white hover:text-[rgb(168,85,247)]"
                }`}
              >
                Clients and Projects
              </Link>
            </motion.div>

            {/* FAQ */}
            <motion.div variants={menuItemVariants}>
              <Link
                to="/faq"
                onClick={closeAllMenus}
                className={`text-xl font-extrabold ${
                  isActive("/faq") ? "text-[rgb(168,85,247)]" : "text-white hover:text-[rgb(168,85,247)]"
                }`}
              >
                FAQ
              </Link>
            </motion.div>

            {/* Blog */}
            <motion.div variants={menuItemVariants}>
              <Link
                to="/blog"
                onClick={closeAllMenus}
                className={`text-xl font-extrabold ${
                  isActive("/blog") ? "text-[rgb(168,85,247)]" : "text-white hover:text-[rgb(168,85,247)]"
                }`}
              >
                Blog
              </Link>
            </motion.div>

            {/* Contact */}
            <motion.div variants={menuItemVariants}>
              <Link
                to="/contact"
                onClick={closeAllMenus}
                className="text-xl font-extrabold bg-[rgb(168,85,247)] px-6 py-2.5 rounded-xl text-white hover:bg-[rgb(147,51,234)] transition"
              >
                Contact
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* spacer for fixed header */}
      <div className="h-16" />
    </>
  );
};

export default Header;
