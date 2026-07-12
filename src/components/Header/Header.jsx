// src/components/Header/Header.jsx
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/image/encryvia-logo.png";

const Header = () => {
  const location = useLocation();
  
  // UI state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  
  // refs
  const dropdownRef = useRef(null);

  // --- 2) Prevent page scroll when mobile menu is open ---
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  // --- 3) Click outside to close desktop dropdown ---
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDesktopServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // --- 4) Close menus on Esc ---
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
        setIsDesktopServicesOpen(false);
        setIsMobileServicesOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // --- 5) When route changes: close menus ---
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDesktopServicesOpen(false);
    setIsMobileServicesOpen(false);
  }, [location.pathname]);

  // helpers
  const toggleMobileMenu = () => setIsMobileMenuOpen((s) => !s);
  const toggleDesktopServices = () => setIsDesktopServicesOpen((s) => !s);
  const toggleMobileServices = () => setIsMobileServicesOpen((s) => !s);

  const closeAllMenus = useCallback(() => {
    setIsMobileMenuOpen(false);
    setIsDesktopServicesOpen(false);
    setIsMobileServicesOpen(false);
  }, []);

  const isActive = (path) => location.pathname === path;

  // animation variants (kept lightweight)
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
        className="fixed top-0 left-0 right-0 w-full z-50 bg-black/85 border-b border-white/10"
        aria-label="Main header"
      >
        <nav className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center">
            {/* Logo */}
            <Link to="/" onClick={closeAllMenus} className="flex items-center space-x-2">
              <img
                src={logo}
                alt="EncryVia Logo"
                className="w-10 h-10 rounded-full"
              />
              <span className="text-xl font-bold">
                Encry<span className="text-indigo-500">Via</span>
              </span>
            </Link>

            {/* Desktop nav - Updated sequence: About Us, Services, Projects, Blog */}
            <div className="hidden md:flex items-center space-x-4 mx-auto">
              {/* About Us */}
              <Link
                to="/about-us"
                onClick={closeAllMenus}
                className={`px-4 py-2 rounded-full font-semibold transition ${
                  isActive("/about-us") ? "bg-indigo-700 text-white" : "hover:bg-indigo-700 hover:text-white"
                }`}
              >
                About Us
              </Link>

              {/* Services dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={toggleDesktopServices}
                  className="flex items-center px-4 py-2 rounded-full font-semibold hover:bg-indigo-700 hover:text-white transition"
                  aria-haspopup="true"
                  aria-expanded={isDesktopServicesOpen}
                >
                  Services
                  <motion.div animate={{ rotate: isDesktopServicesOpen ? 180 : 0 }} className="ml-1">
                    <ChevronDown size={16} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isDesktopServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="absolute top-full mt-2 w-56 bg-black/40 border border-white/20 rounded-lg shadow-lg backdrop-blur-md"
                      role="menu"
                    >
                      {[
                        { path: "/services/web-and-app-development", label: "Web/App Development" },
                        { path: "/services/cybersecurity", label: "CyberSecurity" },
                        { path: "/services/seo-geo-and-ads", label: "SEO-GEO And Ads" },
                      ].map((s) => (
                        <Link
                          key={s.path}
                          to={s.path}
                          onClick={closeAllMenus}
                          className="block px-4 py-2 text-sm hover:bg-indigo-700 rounded-lg"
                          role="menuitem"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Projects */}
              <Link
                to="/projects"
                onClick={closeAllMenus}
                className={`px-4 py-2 rounded-full font-semibold transition ${
                  isActive("/projects") ? "bg-indigo-700 text-white" : "hover:bg-indigo-700 hover:text-white"
                }`}
              >
                Projects
              </Link>

              {/* Blog */}
              <Link
                to="/blog"
                onClick={closeAllMenus}
                className={`px-4 py-2 rounded-full font-semibold transition ${
                  isActive("/blog") ? "bg-indigo-700 text-white" : "hover:bg-indigo-700 hover:text-white"
                }`}
              >
                Blog
              </Link>
            </div>

            {/* Right side: contact */}
            <div className="hidden md:flex items-center space-x-4">
              <Link 
                to="/contact" 
                onClick={closeAllMenus} 
                className="bg-indigo-600 px-4 py-2 rounded-lg text-white hover:bg-indigo-700"
              >
                Contact
              </Link>
            </div>

            {/* Mobile toggle */}
            <button 
              className="md:hidden ml-auto text-white" 
              onClick={toggleMobileMenu} 
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu (overlay) - Updated sequence: About Us, Services, Projects, Blog */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center space-y-6"
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
                className={`text-2xl font-bold ${
                  isActive("/about-us") ? "text-indigo-400" : "text-white hover:text-indigo-400"
                }`}
              >
                About Us
              </Link>
            </motion.div>

            {/* Mobile services */}
            <motion.div className="text-center" variants={menuItemVariants}>
              <button onClick={toggleMobileServices} className="flex items-center text-2xl text-white">
                Services
                <motion.div animate={{ rotate: isMobileServicesOpen ? 180 : 0 }} className="ml-2">
                  <ChevronDown size={20} />
                </motion.div>
              </button>

              <AnimatePresence>
                {isMobileServicesOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: -10 }} 
                    className="mt-4 space-y-2"
                  >
                    {[
                      { path: "/services/web-and-app-development", label: "Web Development" },
                      { path: "/services/cybersecurity", label: "Cyber Security" },
                      { path: "/services/seo-geo-and-ads", label: "SEO & Ads" },
                    ].map((s) => (
                      <Link 
                        key={s.path} 
                        to={s.path} 
                        onClick={closeAllMenus} 
                        className="block text-lg text-gray-200 hover:text-indigo-400"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Projects */}
            <motion.div variants={menuItemVariants}>
              <Link
                to="/projects"
                onClick={closeAllMenus}
                className={`text-2xl font-bold ${
                  isActive("/projects") ? "text-indigo-400" : "text-white hover:text-indigo-400"
                }`}
              >
                Projects
              </Link>
            </motion.div>

            {/* Blog */}
            <motion.div variants={menuItemVariants}>
              <Link
                to="/blog"
                onClick={closeAllMenus}
                className={`text-2xl font-bold ${
                  isActive("/blog") ? "text-indigo-400" : "text-white hover:text-indigo-400"
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
                className="text-2xl font-bold bg-indigo-600 px-4 py-2 rounded-lg text-white hover:text-indigo-400"
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
