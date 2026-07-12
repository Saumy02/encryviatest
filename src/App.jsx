// src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';

// --- Global Components ---
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import GTMDeferredLoader from './components/GTMDeferredLoader';

// --- Pages ---
import Home from './pages/Home';
import Contact from './pages/Contact';
import OurTeam from './pages/Aboutus';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import MoreBlog from "./components/Blog/MoreBlog";
import PrivacyPolicy from './components/Footer/PrivacyPolicy';

// --- Service-Specific Pages ---
import WebDevelopment from './components/Services/WebDevelopment';
import CyberSecurity from './components/Services/CyberSecurity';
import SEOAndAds from './components/Services/SEOAds';

// --- General Services Page (Optional) ---
import OurServices from './components/Home/OurServices';
import ScrollToTop from "./components/ScrollToTop"; 

// --- Fallback Page ---
const NotFound = () => (
  <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
    <div className="max-w-2xl mx-auto space-y-a8">
      <div className="space-y-4">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
          The page you are looking for doesn't exist or has been moved.
        </p>
      </div>
      <div className="pt-8">
        <a
          href="/"
          className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-300 shadow-lg"
        >
          Return Home
        </a>
      </div>
    </div>
  </div>
);

// Animated routes wrapper
const AnimatedRoutes = () => {

  const location = useLocation();
 
  // Toggle a slightly darker overlay on non-home pages
  useEffect(() => {
    const isHome = location.pathname === '/';
    if (isHome) {
      document.body.classList.remove('page-other');
    } else {
      document.body.classList.add('page-other');
    }
    return () => {
      // Ensure cleanup does not leave the class behind when component unmounts
      document.body.classList.remove('page-other');
    };
  }, [location.pathname]);
  
 useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);
  return (
    <Routes location={location}>
      {/* === Public Pages === */}
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<OurTeam />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/moreblog" element={<MoreBlog />} />
      <Route path="/privacy-policy-and-terms" element={<PrivacyPolicy />} />

      {/* === Services Pages === */}
      <Route path="/services" element={<OurServices />} />
      <Route path="/services/web-and-app-development" element={<WebDevelopment />} />
      <Route path="/services/cybersecurity" element={<CyberSecurity />} />
      <Route path="/services/seo-geo-and-ads" element={<SEOAndAds />} />

      {/* === Fallback === */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => {
  return (
    <MotionConfig reducedMotion="always">
      <Router>
        <GTMDeferredLoader />
        <ScrollToTop />
        <div
          className="min-h-screen text-white font-sans flex flex-col bg-transparent"
          style={{ background: 'transparent' }}
        >
          <div>
            <Header />
          </div>

          <main className="flex-1 w-full">
            <AnimatedRoutes />
          </main>

          <div>
            <Footer />
          </div>
        </div>
      </Router>
    </MotionConfig>
  );
};

export default App;
