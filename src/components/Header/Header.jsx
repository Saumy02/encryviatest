// src/components/Header/Header.jsx
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo.svg";

const Header = () => {
  const location = useLocation();
  
  // UI state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  
  // info
  const [visitorCount, setVisitorCount] = useState(0);
  const [dateTime, setDateTime] = useState(new Date());
  
  // refs
  const dropdownRef = useRef(null);

  // --- 1) TIME + VISITOR: update time every second, increment visitor once per session/tab ---
  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    
    try {
      // Use sessionStorage to ensure we only increment once per browser tab/session.
      const alreadyIncremented = sessionStorage.getItem("encryvia-visitor-incremented");
      if (!alreadyIncremented) {
        const raw = localStorage.getItem("encryvia-visitor-count");
        const current = Number.isNaN(parseInt(raw, 10)) ? 0 : parseInt(raw, 10);
        const next = current + 1;
        localStorage.setItem("encryvia-visitor-count", String(next));
        sessionStorage.setItem("encryvia-visitor-incremented", "1");
        setVisitorCount(next);
      } else {
        // read current count
        const raw = localStorage.getItem("encryvia-visitor-count");
        const current = Number.isNaN(parseInt(raw, 10)) ? 0 : parseInt(raw, 10);
        setVisitorCount(current);
      }
    } catch (err) {
      // storage access may fail in some environments, avoid breaking UI
      console.error("storage error:", err);
    }

    return () => clearInterval(timer);
  }, []);

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
      <motion.header
        className="fixed top-0 left-0 right-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/20"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        aria-label="Main header"
      >
        <nav className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center">
            {/* Logo */}
            <Link to="/" onClick={closeAllMenus} className="flex items-center space-x-2">
              <motion.img
                src={logo}
                alt="EncryVia Logo"
                className="w-10 h-10 rounded-full"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              />
              <span className="text-xl font-bold">
                Encry<span className="text-indigo-500">Via</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center space-x-4 mx-auto">
              {[
                { path: "/about", label: "About Us" },
                { path: "/projects", label: "Projects" },
                { path: "/blog", label: "Blog" },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeAllMenus}
                  className={`px-4 py-2 rounded-full font-semibold transition ${
                    isActive(item.path) ? "bg-indigo-700 text-white" : "hover:bg-indigo-700 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

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
                        { path: "/services/web-development", label: "Web Development" },
                        { path: "/services/cyber-security", label: "Cyber Security" },
                        { path: "/services/seo-ads", label: "SEO & Ads" },
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
            </div>

            {/* Right side: time + contact */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex flex-col text-xs text-gray-300 font-mono">
                <span>{dateTime.toLocaleTimeString()}</span>
                <span className="text-indigo-400">Visitors: {visitorCount}</span>
              </div>
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
      </motion.header>

      {/* Mobile menu (overlay) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-40 flex flex-col items-center justify-center space-y-6"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            aria-modal="true"
            role="dialog"
          >
            {[
              { path: "/about", label: "About Us" },
              { path: "/projects", label: "Projects" },
              { path: "/blog", label: "Blog" },
              { path: "/contact", label: "Contact", isButton: true },
            ].map((item) => (
              <motion.div key={item.path} variants={menuItemVariants}>
                <Link
                  to={item.path}
                  onClick={closeAllMenus}
                  className={`text-2xl font-bold ${
                    isActive(item.path) ? "text-indigo-400" : "text-white hover:text-indigo-400"
                  } ${item.isButton ? "bg-indigo-600 px-4 py-2 rounded-lg" : ""}`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}

            {/* Mobile services */}
            <div className="text-center">
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
                      { path: "/services/web-development", label: "Web Development" },
                      { path: "/services/cyber-security", label: "Cyber Security" },
                      { path: "/services/seo-ads", label: "SEO & Ads" },
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* spacer for fixed header */}
      <div className="h-16" />
    </>
  );
};

export default Header;
