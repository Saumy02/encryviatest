// // 🔝 Har page ke top par dikhega — logo + navbar links ke sath
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   return (
//     <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 px-6 md:px-10 py-4 flex items-center justify-between">
//       {/* 🔷 Logo text */}
//       <div className="text-2xl md:text-3xl font-bold text-white drop-shadow-md bg-[#120052] px-4 py-2 rounded">
//         EncryVia
//       </div>

//       {/* 🔷 Navigation links (Home, Projects, etc.) */}
//       <nav className="hidden md:flex gap-6 text-black font-bold text-base lg:text-lg">
//         <Link to="/">Home</Link>
//         <Link to="/projects">Our Projects</Link>
//         {/* ➕ Aage aur pages add karne ke liye yahan link add karna */}
//       </nav>

//       {/* 🔷 CTA Button */}
//       <button className="hidden md:inline-flex px-6 py-2 bg-white text-black font-bold rounded shadow-sm border border-gray-300">
//         Get Connect
//       </button>
//     </header>
//   );
// };

// export default Header;



// src/components/Header.jsx
// 🔝 Har page ke top par dikhega — logo + navbar links ke sath
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  // Mobile menu ke state ko manage karne ke liye
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation links array with 'to' property for routing
  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Our Projects', to: '/projects' },
    { name: 'Our Team', to: '/our-team' },
    { name: 'Blog', to: '/blog' },
    { name: 'Services', to: '/services' },
    { name: 'Contact Us', to: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 shadow-lg z-50 px-6 md:px-10 py-4 flex items-center justify-between">
      {/* 🔷 Logo text */}
      <div className="flex items-center space-x-2">
        {/* Logo icon (optional, can replace with actual SVG/Image) */}
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center">
          <span className="text-sm font-bold text-white">EV</span>
        </div>
        {/* Company Name, Home page par link karega */}
        <Link to="/" className="text-2xl md:text-3xl font-bold text-white hover:text-purple-400 transition-colors duration-300">
          EncryVia
        </Link>
      </div>

      {/* Mobile menu button (Hamburger Icon) */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Icon changes based on menu open/close state */}
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
          </svg>
        </button>
      </div>

      {/* 🔷 Desktop Navigation links (Home, Projects, etc.) */}
      <nav className="hidden md:flex gap-6 text-gray-300 font-bold text-base lg:text-lg">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.to}
            className="hover:text-purple-400 transition-colors duration-300 relative group"
          >
            {link.name}
            {/* Services link ke liye dropdown indicator (Agar services ke liye dropdown hai) */}
            {link.name === 'Services' && (
              <svg
                className="inline-block ml-1 w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-transform duration-200 group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            )}
            {/* Hover underline effect */}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </nav>

      {/* 🔷 CTA Button - Desktop */}
      <Link to="/contact" className="hidden md:inline-flex px-6 py-2 bg-gradient-to-r from-purple-700 to-purple-900 text-white font-bold rounded shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
        Get Connect
      </Link>

      {/* Mobile Navigation Menu */}
      <nav
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 w-full bg-gray-900 shadow-lg py-4`}
      >
        <ul className="flex flex-col items-center space-y-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                onClick={() => setIsMenuOpen(false)} // Click par menu close ho jaye
                className="block text-xl font-medium text-white hover:text-purple-400 py-2 px-4 transition-colors duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="inline-flex px-6 py-2 bg-gradient-to-r from-purple-700 to-purple-900 text-white font-bold rounded shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 mt-4">
              Get Connect
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;