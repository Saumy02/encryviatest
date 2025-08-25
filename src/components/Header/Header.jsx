

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
import logo from '../../assets/logo.svg';

const Header = () => {
  const location = useLocation(); // for active link highlighting
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [dateTime, setDateTime] = useState(new Date());
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Real-time clock
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    // Visitor counter
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

  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-gray-900/80 border-b border-white/10">
      <nav className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center">
          {/* Left: Logo */}
          <div className="flex items-center space-x-3 px-0 flex-shrink-0">
            <Link to="/" onClick={closeMenus} className="flex items-center">
              <img
                src={logo}
                alt="EncryVia Logo"
                className="rounded-full w-10 h-10 object-cover"
                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://placehold.co/40x40/5D3FD3/FFFFFF?text=Logo"; }}
              />
            </Link>
            <span className="text-xl font-bold">
              Encry<span className="text-indigo-500">Via</span>
            </span>
          </div>

          {/* Center: Nav Links */}
          <div className="hidden md:flex items-center space-x-2 mx-auto">
            <div className="flex items-center space-x-2 px-2 py-1 bg-white text-black rounded-full shadow-lg border border-black/5">
              <Link to="/about" className={`px-4 py-2 rounded-full font-semibold transition ${isActive("/about") ? "bg-indigo-700 text-white" : "hover:bg-indigo-700 hover:text-white"}`}>
                About Us
              </Link>
              <div className="relative">
                <button
                  onClick={toggleServicesDropdown}
                  className="flex items-center px-4 py-2 rounded-full font-semibold hover:bg-indigo-700 hover:text-white transition"
                >
                  Services
                  <ChevronDown size={16} className={`ml-1 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 py-2 w-56 bg-gray-800/95 border border-white/10 backdrop-blur rounded-xl shadow-2xl z-30">
                    <Link to="/services/web-development" onClick={closeMenus} className="block px-4 py-2 text-sm text-white hover:bg-indigo-700 rounded-lg">Web Development</Link>
                    <Link to="/services/cyber-security" onClick={closeMenus} className="block px-4 py-2 text-sm text-white hover:bg-indigo-700 rounded-lg">Cyber Security</Link>
                    <Link to="/services/seo-ads" onClick={closeMenus} className="block px-4 py-2 text-sm text-white hover:bg-indigo-700 rounded-lg">SEO & Ads</Link>
                  </div>
                )}
              </div>
              <Link to="/projects" className={`px-4 py-2 rounded-full font-semibold transition ${isActive("/projects") ? "bg-indigo-700 text-white" : "hover:bg-indigo-700 hover:text-white"}`}>
                Our Projects
              </Link>
              <Link to="/blog" className={`px-4 py-2 rounded-full font-semibold transition ${isActive("/blog") ? "bg-indigo-700 text-white" : "hover:bg-indigo-700 hover:text-white"}`}>
                Blog
              </Link>
            </div>
          </div>

          {/* Right: Time/Visitor + Contact */}
          <div className="hidden md:flex items-center space-x-6 px-0 flex-shrink-0">
            <div className="flex flex-col items-end">
              <span className="text-xs text-gray-300 font-mono">
                {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}
              </span>
              <span className="text-[10px] text-indigo-300 font-mono">Visitors: {visitorCount}</span>
            </div>
            <Link to="/contact" className="bg-indigo-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition">Contact us</Link>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden ml-auto">
            <button onClick={toggleMobileMenu} className="text-white p-2 rounded-lg border border-white/10">
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-gray-900/95 z-40 flex flex-col items-center justify-center space-y-6">
            <button onClick={toggleMobileMenu} className="absolute top-4 right-4 text-white p-2">
              <X size={24} />
            </button>

            {/* Date/Time & Visitor Counter in Mobile Menu */}
            <div className="flex flex-col items-center mb-4">
              <span className="text-base text-gray-300 font-mono">
                {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}
              </span>
              <span className="text-xs text-indigo-300 font-mono">Visitors: {visitorCount}</span>
            </div>

            <Link to="/about" onClick={closeMenus} className="text-2xl font-bold text-white px-6 py-2 rounded-full hover:bg-indigo-700">About Us</Link>

            <div className="relative text-center">
              <button onClick={toggleServicesDropdown} className="flex items-center text-2xl text-white px-6 py-2 rounded-full hover:bg-indigo-700">
                <span className="font-bold">Services</span>
                <ChevronDown size={24} className={`ml-2 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesDropdownOpen && (
                <div className="mt-4 py-2 bg-gray-800/95 border border-white/10 rounded-xl shadow-xl">
                  <Link to="/services/web-development" onClick={closeMenus} className="block px-4 py-2 text-xl text-white hover:bg-indigo-700 rounded-lg">Web Development</Link>
                  <Link to="/services/cyber-security" onClick={closeMenus} className="block px-4 py-2 text-xl text-white hover:bg-indigo-700 rounded-lg">Cyber Security</Link>
                  <Link to="/services/seo-ads" onClick={closeMenus} className="block px-4 py-2 text-xl text-white hover:bg-indigo-700 rounded-lg">SEO & Ads</Link>
                </div>
              )}
            </div>

            <Link to="/projects" onClick={closeMenus} className="text-2xl font-bold text-white px-6 py-2 rounded-full hover:bg-indigo-700">Our Projects</Link>
            <Link to="/blog" onClick={closeMenus} className="text-2xl font-bold text-white px-6 py-2 rounded-full hover:bg-indigo-700">Blog</Link>
            <Link to="/contact" onClick={closeMenus} className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold text-xl hover:bg-indigo-700">Contact us</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
