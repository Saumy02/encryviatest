

// // src/components/Header.jsx
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { ChevronDown, Menu, X } from 'lucide-react';

// const Header = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
//
//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };
//
//   const toggleServicesDropdown = () => {
//     setIsServicesDropdownOpen(!isServicesDropdownOpen);
//   };
//
//   return (
//     // Removed px-4 from here. Now it's truly full width.
//     <nav className="relative z-20 w-full py-4 flex justify-between items-center">
//       {/* Logo: Added px-4 to this specific container */}
//       <div className="flex items-center space-x-2 px-4">
//         <Link to="/">
//           <img
//             src="\src\assets\logo.svg"
//             alt="EncryVia Logo"
//             className="rounded-full"
//             onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/40x40/5D3FD3/FFFFFF?text=Logo+Error"; }}
//           />
//         </Link>
//         <span className='text-xl font-bold'>Encry<span className='text-xl font-bold text-indigo-400'>Via</span></span> 
//       
//       </div>
//
//       {/* Desktop Navigation Links: Added px-4 to this specific container */}
//       <div className="hidden md:flex items-center space-x-4 px-4">
//         <Link to="/about" className="group relative px-4 py-2 rounded-full transition-all duration-300 ease-in-out hover:bg-indigo-700">
//           <span className="group-hover:text-white transition-colors duration-300">About Us</span>
//         </Link>
//         <div className="relative">
//           <button
//             onClick={toggleServicesDropdown}
//             className="group relative flex items-center px-4 py-2 rounded-full transition-all duration-300 ease-in-out hover:bg-indigo-700 focus:outline-none"
//           >
//             <span className="group-hover:text-white transition-colors duration-300">Services</span> <ChevronDown size={16} className="ml-1 group-hover:text-white transition-colors duration-300" />
//           </button>
//           {isServicesDropdownOpen && (
//             <div className="absolute top-full left-0 mt-2 py-2 w-48 bg-gray-800 rounded-md shadow-lg z-30 animate-fade-in-dropdown">
//               <Link to="/services/web-development" className="block px-4 py-2 text-sm text-white hover:bg-indigo-700 hover:text-white transition-colors duration-300" onClick={() => setIsServicesDropdownOpen(false)}>Web Development</Link>
//               <Link to="/services/cyber-security" className="block px-4 py-2 text-sm text-white hover:bg-indigo-700 hover:text-white transition-colors duration-300" onClick={() => setIsServicesDropdownOpen(false)}>Cyber Security</Link>
//               <Link to="/services/seo-ads" className="block px-4 py-2 text-sm text-white hover:bg-indigo-700 hover:text-white transition-colors duration-300" onClick={() => setIsServicesDropdownOpen(false)}>SEO & Ads</Link>
//             </div>
//           )}
//         </div>
//         <Link to="/projects" className="group relative px-4 py-2 rounded-full transition-all duration-300 ease-in-out hover:bg-indigo-700">
//           <span className="group-hover:text-white transition-colors duration-300">Our Projects</span>
//         </Link>
//         <Link to="/blog" className="group relative px-4 py-2 rounded-full transition-all duration-300 ease-in-out hover:bg-indigo-700">
//           <span className="group-hover:text-white transition-colors duration-300">Blog</span>
//         </Link>
//       </div>
//
//       {/* Contact Us Button - Desktop: Added px-4 to this specific container */}
//       <div className="hidden md:block px-4">
//         <Link to="/contact" className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition duration-300 ease-in-out">Contact us</Link>
//       </div>
//
//       {/* Mobile Menu Button: Added px-4 to this specific container */}
//       <div className="md:hidden px-4">
//         <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
//           {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>
//
//       {/* Mobile Menu Overlay: This is fixed inset-0, so it naturally covers full screen */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden fixed inset-0 bg-gray-900 bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-6 animate-fade-in">
//           <button onClick={toggleMobileMenu} className="absolute top-4 right-4 text-white">
//             <X size={28} />
//           </button>
//           <Link to="/about" className="text-2xl px-4 py-2 rounded-full hover:bg-indigo-700 hover:text-white transition-colors duration-300" onClick={toggleMobileMenu}>About Us</Link>
//           <div className="relative text-center">
//             <button
//               onClick={toggleServicesDropdown}
//               className="flex items-center text-2xl px-4 py-2 rounded-full hover:bg-indigo-700 hover:text-white transition-colors duration-300 focus:outline-none"
//             >
//               Services <ChevronDown size={24} className="ml-2" />
//             </button>
//             {isServicesDropdownOpen && (
//               <div className="mt-4 py-2 bg-gray-800 rounded-md shadow-lg">
//                 <Link to="/services/web-development" className="block px-4 py-2 text-xl text-white hover:bg-indigo-700" onClick={() => { toggleMobileMenu(); setIsServicesDropdownOpen(false); }}>Web Development</Link>
//                 <Link to="/services/cyber-security" className="block px-4 py-2 text-xl text-white hover:bg-indigo-700" onClick={() => { toggleMobileMenu(); setIsServicesDropdownOpen(false); }}>Cyber Security</Link>
//                 <Link to="/services/seo-ads" className="block px-4 py-2 text-xl text-white hover:bg-indigo-700" onClick={() => { toggleMobileMenu(); setIsServicesDropdownOpen(false); }}>SEO & Ads</Link>
//               </div>
//             )}
//           </div>
//           <Link to="/projects" className="text-2xl px-4 py-2 rounded-full hover:bg-indigo-700 hover:text-white transition-colors duration-300" onClick={toggleMobileMenu}>Our Projects</Link>
//           <Link to="/blog" className="text-2xl px-4 py-2 rounded-full hover:bg-indigo-700 hover:text-white transition-colors duration-300" onClick={toggleMobileMenu}>Blog</Link>
//           <Link to="/contact" className="bg-white text-black px-8 py-3 rounded-lg font-semibold text-xl hover:bg-gray-200 transition duration-300 ease-in-out" onClick={toggleMobileMenu}>Contact us</Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Header;
// src/components/Header.jsx
// src/components/Header.jsx
// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logo.svg';

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [dateTime, setDateTime] = useState(new Date());
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    let count = localStorage.getItem('encryvia-visitor-count');
    if (!count) count = 0;
    count = parseInt(count) + 1;
    localStorage.setItem('encryvia-visitor-count', count);
    setVisitorCount(count);
    return () => clearInterval(timer);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  // Animation variants
  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      y: -10,
      scale: 0.95,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      filter: "blur(10px)",
      transition: {
        duration: 0.2
      }
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      filter: "blur(20px)"
    },
    visible: { 
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 25,
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      filter: "blur(20px)",
      transition: {
        duration: 0.3
      }
    }
  };

  const menuItemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200
      }
    }
  };

  return (
    <motion.header 
      className="sticky top-0 z-30 backdrop-blur-md bg-gray-900/80 border-b border-white/10"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <nav className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center">
          {/* Left: Logo */}
          <motion.div 
            className="flex items-center space-x-3 px-0 flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link to="/" onClick={closeMenus} className="flex items-center">
              <motion.img
                src={logo}
                alt="EncryVia Logo"
                className="rounded-full w-10 h-10 object-cover"
                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://placehold.co/40x40/5D3FD3/FFFFFF?text=Logo"; }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </Link>
            <motion.span 
              className="text-xl font-bold"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Encry<span className="text-indigo-500">Via</span>
            </motion.span>
          </motion.div>

          {/* Center: Nav Links */}
          <div className="hidden md:flex items-center space-x-2 mx-auto">
            <motion.div 
              className="flex items-center space-x-2 px-2 py-1 bg-white text-black rounded-full shadow-lg border border-black/5"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/about" className={`px-4 py-2 rounded-full font-semibold transition ${isActive("/about") ? "bg-indigo-700 text-white" : "hover:bg-indigo-700 hover:text-white"}`}>
                  About Us
                </Link>
              </motion.div>
              
              <div className="relative">
                <motion.button
                  onClick={toggleServicesDropdown}
                  className="flex items-center px-4 py-2 rounded-full font-semibold hover:bg-indigo-700 hover:text-white transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Services
                  <motion.div
                    animate={{ rotate: isServicesDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={16} className="ml-1" />
                  </motion.div>
                </motion.button>
                
                <AnimatePresence>
                  {isServicesDropdownOpen && (
                    <motion.div 
                      className="absolute top-full left-0 mt-2 py-2 w-56 bg-gray-800/95 border border-white/10 backdrop-blur rounded-xl shadow-2xl z-30"
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      {[
                        { path: "/services/web-development", label: "Web Development" },
                        { path: "/services/cyber-security", label: "Cyber Security" },
                        { path: "/services/seo-ads", label: "SEO & Ads" }
                      ].map((item, index) => (
                        <motion.div
                          key={item.path}
                          variants={menuItemVariants}
                          whileHover={{ x: 10, backgroundColor: "rgba(99, 102, 241, 0.8)" }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Link 
                            to={item.path} 
                            onClick={closeMenus} 
                            className="block px-4 py-2 text-sm text-white rounded-lg"
                          >
                            {item.label}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/projects" className={`px-4 py-2 rounded-full font-semibold transition ${isActive("/projects") ? "bg-indigo-700 text-white" : "hover:bg-indigo-700 hover:text-white"}`}>
                  Our Projects
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/blog" className={`px-4 py-2 rounded-full font-semibold transition ${isActive("/blog") ? "bg-indigo-700 text-white" : "hover:bg-indigo-700 hover:text-white"}`}>
                  Blog
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Time/Visitor + Contact */}
          <motion.div 
            className="hidden md:flex items-center space-x-6 px-0 flex-shrink-0"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
          >
            <motion.div 
              className="flex flex-col items-end"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-xs text-gray-300 font-mono">
                {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}
              </span>
              <span className="text-[10px] text-indigo-300 font-mono">Visitors: {visitorCount}</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(99, 102, 241, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link to="/contact" className="bg-indigo-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition">
                Contact us
              </Link>
            </motion.div>
          </motion.div>

          {/* Mobile Toggle Button */}
          <motion.div 
            className="md:hidden ml-auto"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <button onClick={toggleMobileMenu} className="text-white p-2 rounded-lg border border-white/10">
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={22} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={22} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="md:hidden fixed inset-0 bg-gray-900/95 z-40 flex flex-col items-center justify-center space-y-6"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.button 
                onClick={toggleMobileMenu} 
                className="absolute top-4 right-4 text-white p-2"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <X size={24} />
              </motion.button>

              {/* Date/Time & Visitor Counter in Mobile Menu */}
              <motion.div 
                className="flex flex-col items-center mb-4"
                variants={menuItemVariants}
              >
                <span className="text-base text-gray-300 font-mono">
                  {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}
                </span>
                <span className="text-xs text-indigo-300 font-mono">Visitors: {visitorCount}</span>
              </motion.div>

              {[
                { path: "/about", label: "About Us" },
                { path: "/projects", label: "Our Projects" },
                { path: "/blog", label: "Blog" },
                { path: "/contact", label: "Contact us", isButton: true }
              ].map((item, index) => (
                <motion.div
                  key={item.path}
                  variants={menuItemVariants}
                  whileHover={{ scale: 1.05, x: 20 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link 
                    to={item.path} 
                    onClick={closeMenus} 
                    className={`text-2xl font-bold text-white px-6 py-2 rounded-full hover:bg-indigo-700 ${
                      item.isButton ? "bg-indigo-600 hover:bg-indigo-700" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              {/* Services Dropdown in Mobile */}
              <motion.div 
                className="relative text-center"
                variants={menuItemVariants}
              >
                <motion.button 
                  onClick={toggleServicesDropdown} 
                  className="flex items-center text-2xl text-white px-6 py-2 rounded-full hover:bg-indigo-700"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="font-bold">Services</span>
                  <motion.div
                    animate={{ rotate: isServicesDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={24} className="ml-2" />
                  </motion.div>
                </motion.button>
                
                <AnimatePresence>
                  {isServicesDropdownOpen && (
                    <motion.div 
                      className="mt-4 py-2 bg-gray-800/95 border border-white/10 rounded-xl shadow-xl"
                      initial={{ opacity: 0, y: -20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      {[
                        { path: "/services/web-development", label: "Web Development" },
                        { path: "/services/cyber-security", label: "Cyber Security" },
                        { path: "/services/seo-ads", label: "SEO & Ads" }
                      ].map((service, index) => (
                        <motion.div
                          key={service.path}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ x: 10, backgroundColor: "rgba(99, 102, 241, 0.8)" }}
                        >
                          <Link 
                            to={service.path} 
                            onClick={closeMenus} 
                            className="block px-4 py-2 text-xl text-white hover:bg-indigo-700 rounded-lg"
                          >
                            {service.label}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
