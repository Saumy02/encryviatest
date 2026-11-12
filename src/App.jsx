// src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { ErrorBoundary } from 'react-error-boundary';

// --- Global Components ---
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import GTMDeferredLoader from './components/GTMDeferredLoader';

// --- Pages ---
import Home from './pages/Home';
import Contact from './pages/Contact';
import OurTeam from './pages/Aboutus';
import ClientsAndProjects from './pages/ClientsAndProjects';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import MoreBlog from "./components/Blog/MoreBlog";
import PrivacyPolicy from './components/Footer/PrivacyPolicy';
import FAQ from './pages/FAQ';
import Products from './pages/Products';
import Partners from './pages/Partners';

// --- Service-Specific Pages ---
import WebDevelopment from './components/Services/WebDevelopment';
import CyberSecurity from './components/Services/CyberSecurity';
import SEOAndAds from './components/Services/SEOAds';

// --- General Services Page ---
import Services from './pages/Services';
import ScrollToTop from "./components/ScrollToTop"; 
import ScrollToTopButton from "./components/ScrollToTopButton"; 

// --- Fallback Page ---
const NotFound = () => (
  <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
    <div className="max-w-2xl mx-auto space-y-8">
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

const GlobalErrorFallback = ({ error, resetErrorBoundary }) => (
  <div className="min-h-[60vh] flex items-center justify-center px-4">
    <div className="text-center p-8 bg-red-950/40 rounded-2xl border border-red-500/30 max-w-lg backdrop-blur-md">
      <h2 className="text-2xl font-bold text-red-400 mb-3">Something went wrong</h2>
      <p className="text-gray-300 mb-6 text-sm">{error?.message || 'Failed to load this page'}</p>
      <div className="flex gap-4 justify-center">
        <button
          onClick={resetErrorBoundary}
          className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition"
        >
          Try Again
        </button>
        <a
          href="/"
          className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition"
        >
          Return Home
        </a>
      </div>
    </div>
  </div>
);

// Redirect legacy /faq.html links directly to the original website FAQ page (/faq)
const FaqRedirect = () => {
  const location = useLocation();
  return <Navigate to={`/faq${location.hash || ''}`} replace />;
};

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
      <Route path="/clients-and-projects" element={<ClientsAndProjects />} />
      <Route path="/our-clients-and-projects" element={<ClientsAndProjects />} />
      <Route path="/clients-projects" element={<ClientsAndProjects />} />
      <Route path="/projects" element={<ClientsAndProjects />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/moreblog" element={<MoreBlog />} />
      <Route path="/privacy-policy-and-terms" element={<PrivacyPolicy />} />
      
      {/* === New Pages === */}
      <Route path="/faq" element={<FAQ />} />
      <Route path="/faq.html" element={<FaqRedirect />} />
      <Route path="/innovations" element={<Products />} />
      <Route path="/products" element={<Products />} />
      <Route path="/partners" element={<Partners />} />

      {/* === Services Pages === */}
      <Route path="/services" element={<Services />} />
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
    <MotionConfig reducedMotion="user">
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
            <ErrorBoundary FallbackComponent={GlobalErrorFallback}>
              <AnimatedRoutes />
            </ErrorBoundary>
          </main>

          <div>
            <Footer />
          </div>

          <ScrollToTopButton />
        </div>
      </Router>
    </MotionConfig>
  );
};

export default App;
