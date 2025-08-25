// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    // Removed px-4 from the footer.
    <footer className="py-8 font-sans rounded-lg shadow-lg">
      {/* Added px-4 to an inner div for content spacing */}
      <div className="w-full px-4 grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
        {/* Left Section: Company Info */}
        <div className="flex flex-col space-y-4 md:col-span-1">
          <h2 className="text-3xl font-bold">Encry<span className='text-indigo-500'>Via</span></h2>
          <p className="text-gray-400 text-sm">
          Build. Protect. Grow. Real impact through web, security & marketing.
          </p>
          <div className="flex items-center space-x-2">
            <Mail size={20} className="text-gray-400" />
            <a href="mailto:contact@encryvia.com" className="text-gray-400 hover:text-white text-sm">
               encryvia@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <Phone size={20} className="text-gray-400" />
            <a href="tel:+911234567890" className="text-gray-400 hover:text-white text-sm">
              +911234567890
            </a>
          </div>
        </div>

        {/* Middle Section: World Map Image and Copyright */}
        <div className="flex flex-col items-center justify-center space-y-4 md:col-span-2">
          <img
            src="src\assets\worldmap.jpg"
            alt="World Map"
            className="rounded-xl shadow-lg w-full max-w-xs h-auto"
            onError={(e) => { e.target.onerror = null; e.target.src="https://maps.google.com/"; }}
          />
          <p className="text-gray-400 text-sm">Copyright@2025 - EncryVia</p>
        </div>

        {/* Right Section: Links and Social Media Icons */}
        <div className="flex flex-col space-y-4 md:col-span-1">
          <div className="grid grid-cols-2 gap-2 text-sm">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
            <a href="#" className="text-gray-400 hover:text-white">Our Projects</a>
            <a href="#" className="text-gray-400 hover:text-white">Our Projects</a>
            <a href="#" className="text-gray-400 hover:text-white">Our Projects</a>
            <a href="#" className="text-gray-400 hover:text-white">Our Projects</a>
            <a href="#" className="text-gray-400 hover:text-white">Our Projects</a>
            <a href="#" className="text-gray-400 hover:text-white">Our Projects</a>
            <a href="#" className="text-gray-400 hover:text-white">Our Projects</a>
          </div>
          <div className="flex flex-wrap md:justify-start justify-center gap-4 mt-6 ml-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                    <path stroke="none" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.866 8.163 6.839 9.489.5.09.682-.217.682-.483 0-.237-.009-.868-.014-1.7V18c-2.782.6-3.37-1.34-3.37-1.34-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.007.07 1.532 1.03 1.532 1.03.89 1.53 2.336 1.088 2.906.83.09-.646.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.945 0-1.09.39-1.984 1.03-2.68a3.61 3.61 0 01.098-2.65c.92-.26 3.018.94 3.018.94.87-.24 1.795-.36 2.72-.36.925 0 1.85.12 2.72.36 0 0 2.098-1.2 3.018-.94.07-.46.39-.81.098-2.65.64.696 1.03 1.59 1.03 2.68 0 3.84-2.335 4.69-4.555 4.945.35.3.67.9.67 1.95 0 1.41-.014 2.54-.014 2.88 0 .267.18.573.687.485C21.137 20.163 24 16.418 24 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" fillRule="evenodd"></path>
                </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
                   <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.3 2 9.5 9.5 0 01-5.7 6.4c-1.1.2-2.3.3-3.6.3-4 0-7.3-2.7-8.3-6.1-1.1-3.4-.6-6.8 1.4-9.3.9-1.1 2.2-2.1 3.8-2.8 1.3-.6 2.8-.9 4.3-.9 1.7 0 3.3.3 4.9.8.7.2 1.4.5 2.1.8l.8.4-.7 1.2-1.3 2.1c-.5.9-.6 2.1-.1 3.2.7 1.4 2.2 2.3 3.8 2.3 1.6 0 2.9-.9 3.6-2.3.5-.9.6-2.1.1-3.2l-1.3-2.1-.7-1.2c-.3-.5-.7-.9-1.2-1.3-.6-.4-1.2-.7-1.9-.9z"></path>
                  </svg>
              </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;