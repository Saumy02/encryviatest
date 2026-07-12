import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const usefulLinks = [
  { to: "/", label: "Home" },
  { to: "/about-us", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Blog" },
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
      <svg fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8a4 4 0 013.37 3.37zM17.5 6.5h.01" />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/people/EncryVia/61581619425819/",
    label: "Facebook",
    icon: (
      <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    href: "https://x.com/encryvia",
    label: "Twitter",
    icon: (
      <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/company/encryvia",
    label: "LinkedIn",
    icon: (
      <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: "https://www.youtube.com/@EncryVia",
    label: "Youtube",
    icon: (
      <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.16 6.84 9.49.5.1.68-.22.68-.48v-1.7c-2.79.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.61.07-.61 1.01.07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68a3.6 3.6 0 01.1-2.65c.92-.26 3.02.94 3.02.94.87-.24 1.8-.36 2.72-.36.92 0 1.85.12 2.72.36 0 0 2.1-1.2 3.02-.94.07.46.1 1.63.1 2.65 0 3.84-2.34 4.69-4.56 4.94.36.3.68.89.68 1.95v2.89c0 .27.18.58.69.49C19.13 20.16 22 16.42 22 12c0-5.52-4.48-10-10-10z"
        />
      </svg>
    ),
  },
  {
    href: "https://www.pinterest.com/encryvia_official/",
    label: "Pinterest",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.737 2.822c-.267 1.011-.985 2.295-1.468 3.074C8.965 23.796 10.46 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
      </svg>
    ),
  },
  {
    href: "https://medium.com/@encryvia",
    label: "Medium",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer
      className="mt-2 bg-black/40 border-t border-white/20 py-16 font-sans text-white"
      style={{ contentVisibility: "auto", containIntrinsicSize: "500px" }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="flex flex-col space-y-6 lg:col-span-1">
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              Encry<span className="text-indigo-500">Via</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Build. Secure. Grow. Real impact through web development, cybersecurity & digital marketing solutions.
            </p>

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
                <a href="tel:+91 8796051145" className="text-gray-300 hover:text-white transition-colors duration-300">
                  +91 8796051145
                </a>
              </div>

              <div className="flex items-center space-x-3 text-base">
                <Phone size={20} className="text-indigo-400 flex-shrink-0" />
                <a href="tel:+91 6390215426" className="text-gray-300 hover:text-white transition-colors duration-300">
                  +91 6390215426
                </a>
              </div>

              <div className="flex items-start space-x-3 text-base">
                <MapPin size={20} className="text-indigo-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  39/B Dwarka Expressway, Royal Oak International School, New Palam Vihar Phase 1 Gurugram,
                  Haryana - 122017, India
                </span>
              </div>
            </div>
          </div>

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

          <div className="flex flex-col space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-white">Follow Us</h3>
            <div className="flex flex-wrap gap-4">
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
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm sm:text-base text-center md:text-center">
              © {new Date().getFullYear()} EncryVia. All rights reserved. Crafted in India.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
