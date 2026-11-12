import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "/image/encryvia-logo.webp";

const usefulLinks = [
  { to: "/", label: "Home" },
  { to: "/about-us", label: "About" },
  { to: "/clients-and-projects", label: "Clients and Projects" },
  { to: "/blog", label: "Blog" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
  { to: "/privacy-policy-and-terms", label: "Privacy Policy And Terms" },
];

const serviceLinks = [
  { to: "/services/web-and-app-development", label: "Web/App Development" },
  { to: "/services/cybersecurity", label: "CyberSecurity" },
  { to: "/services/seo-geo-and-ads", label: "SEO-GEO And Ads" },
];

const socialIcons = [
  {
    href: "https://www.instagram.com/encryvia/",
    label: "Instagram",
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" viewBox="0 0 24 24">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8a4 4 0 013.37 3.37zM17.5 6.5h.01" />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/people/EncryVia/61581619425819/",
    label: "Facebook",
    icon: (
      <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/company/encryvia",
    label: "LinkedIn",
    icon: (
      <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
  },
  {
    href: "https://www.youtube.com/@EncryVia",
    label: "YouTube",
    icon: (
      <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    href: "https://www.pinterest.com/encryvia_official/",
    label: "Pinterest",
    icon: (
      <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.332 1.364-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    href: "https://medium.com/@encryvia",
    label: "Medium",
    icon: (
      <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer
      className="mt-2 bg-[#070312]/70 border-t border-purple-500/20 py-16 font-sans text-white backdrop-blur-xl"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Brand Info & Social Media under description */}
          <div className="flex flex-col space-y-6 lg:col-span-1">
            <Link to="/" className="inline-flex items-center space-x-3 group">
              <div className="relative flex items-center justify-center">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-indigo-500 to-pink-500 rounded-full blur-sm opacity-50 group-hover:opacity-100 transition-all duration-300 -z-10" />
                <img
                  src={logo}
                  alt="EncryVia Logo"
                  className="w-10 h-10 rounded-full border border-purple-400/30 group-hover:scale-105 transition-transform duration-300 shadow-lg"
                />
              </div>
              <span className="text-3xl sm:text-4xl font-black tracking-[-0.03em] select-none flex items-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-purple-200 group-hover:text-white transition-colors duration-300">
                  Encry
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 drop-shadow-[0_0_16px_rgba(192,132,252,0.65)] group-hover:drop-shadow-[0_0_24px_rgba(216,180,254,0.95)] transition-all duration-300 font-black">
                  Via
                </span>
              </span>
            </Link>
            
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Build. Secure. Grow. Real impact through web development, cybersecurity & digital marketing solutions.
            </p>

            {/* Social Media Links under Description */}
            <div className="flex flex-wrap gap-3 pt-1">
              {socialIcons.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 p-2 bg-gray-800/50 rounded-lg hover:bg-indigo-500/20"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-white">Quick Links</h3>
            <div className="space-y-3">
              {usefulLinks.map((link) => (
                <div key={link.to}>
                  <Link to={link.to} className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 block text-base">
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Our Services */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-white">Our Services</h3>
            <div className="space-y-3">
              {serviceLinks.map((link) => (
                <div key={link.to}>
                  <Link to={link.to} className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 block text-base">
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: Contact Us (In place of Follow Us) */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-white">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-base">
                <Mail size={20} className="text-indigo-400 flex-shrink-0" />
                <a href="mailto:info@encryvia.com" className="text-gray-300 hover:text-white transition-colors duration-300">
                  info@encryvia.com
                </a>  
              </div>
              <div className="flex items-center space-x-3 text-base">
                <Mail size={20} className="text-indigo-400 flex-shrink-0" />
                <a href="mailto:sales@encryvia.com" className="text-gray-300 hover:text-white transition-colors duration-300">
                  sales@encryvia.com
                </a>
              </div>

              <div className="flex items-center space-x-3 text-base">
                <Phone size={20} className="text-indigo-400 flex-shrink-0" />
                <a href="tel:+918796051145" className="text-gray-300 hover:text-white transition-colors duration-300">
                  +91 8796051145
                </a>
              </div>

              <div className="flex items-center space-x-3 text-base">
                <Phone size={20} className="text-indigo-400 flex-shrink-0" />
                <a href="tel:+916390215426" className="text-gray-300 hover:text-white transition-colors duration-300">
                  +91 6390215426
                </a>
              </div>

              <div className="flex items-start space-x-3 text-base">
                <MapPin size={20} className="text-indigo-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm leading-relaxed">
                  39/B Dwarka Expressway, Opposite Royal Oak International School, New Palam Vihar Phase 1, Gurugram,
                  Haryana - 122017, India
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Copyright */}
            <p className="text-gray-400 text-sm sm:text-base text-center md:text-left">
              © {new Date().getFullYear()} Encry<span className="text-[rgb(168,85,247)] font-semibold">Via</span>. All rights reserved. Crafted in India.
            </p>

            {/* Official Initiative Logos with Links */}
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-3">
              {/* Startup India */}
              <a
                href="https://www.startupindia.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                title="DPIIT Recognized - Startup India"
                className="h-10 px-3 py-1.5 rounded-xl bg-white hover:bg-gray-100 border border-white/20 transition-all duration-300 flex items-center justify-center shadow-md group hover:scale-105"
              >
                <img 
                  src="/image/startup-india-original.webp" 
                  alt="Startup India" 
                  className="h-6 w-auto max-w-[120px] object-contain"
                />
              </a>

              {/* Make in India */}
              <a
                href="https://www.makeinindia.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="Make in India Initiative"
                className="h-10 px-3 py-1.5 rounded-xl bg-white hover:bg-gray-100 border border-white/20 transition-all duration-300 flex items-center justify-center shadow-md group hover:scale-105"
              >
                <img 
                  src="/image/make-in-india-clean.webp" 
                  alt="Make in India" 
                  className="h-6 w-auto max-w-[120px] object-contain"
                />
              </a>

              {/* Skill India */}
              <a
                href="https://www.skillindia.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                title="Skill India Mission"
                className="h-10 px-3 py-1.5 rounded-xl bg-white hover:bg-gray-100 border border-white/20 transition-all duration-300 flex items-center justify-center shadow-md group hover:scale-105"
              >
                <img 
                  src="/image/skill-india-original.webp" 
                  alt="Skill India" 
                  className="h-7 w-auto max-w-[120px] object-contain"
                />
              </a>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
