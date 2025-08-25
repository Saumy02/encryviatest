





// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// --- Global Components ---
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

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

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    y: -20,
    scale: 0.98
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.6
};

// Animated page wrapper component
const AnimatedPage = ({ children }) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
    className="w-full"
  >
    {children}
  </motion.div>
);

// --- Fallback Page ---
const NotFound = () => (
  <AnimatedPage>
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
      <motion.div 
        className="max-w-2xl mx-auto space-y-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <motion.div 
          className="space-y-4"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
        >
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-red-500 mb-4">404</h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Page Not Found</h2>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            The page you are looking for doesn't exist or has been moved.
          </p>
        </motion.div>
        <motion.div 
          className="pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.a 
            href="/" 
            className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            Return Home
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  </AnimatedPage>
);

// Animated routes wrapper
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        {/* === Public Pages === */}
        <Route path="/" element={
          <AnimatedPage>
            <Home />
          </AnimatedPage>
        } />
        <Route path="/about" element={
          <AnimatedPage>
            <OurTeam />
          </AnimatedPage>
        } />
        <Route path="/contact" element={
          <AnimatedPage>
            <Contact />
          </AnimatedPage>
        } />
        <Route path="/projects" element={
          <AnimatedPage>
            <Projects />
          </AnimatedPage>
        } />
        <Route path="/blog" element={
          <AnimatedPage>
            <Blog />
          </AnimatedPage>
        } />
        <Route path="/moreblog" element={
          <AnimatedPage>
            <MoreBlog />
          </AnimatedPage>
        } />
        <Route path="/privacy-policy" element={
          <AnimatedPage>
            <PrivacyPolicy />
          </AnimatedPage>
        } />

        {/* === Services Pages === */}
        <Route path="/services" element={
          <AnimatedPage>
            <OurServices />
          </AnimatedPage>
        } />
        <Route path="/services/web-development" element={
          <AnimatedPage>
            <WebDevelopment />
          </AnimatedPage>
        } />
        <Route path="/services/cyber-security" element={
          <AnimatedPage>
            <CyberSecurity />
          </AnimatedPage>
        } />
        <Route path="/services/seo-ads" element={
          <AnimatedPage>
            <SEOAndAds />
          </AnimatedPage>
        } />

        {/* === Fallback === */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router>
      {/* Main Application Container with enhanced animations */}
      <motion.div 
        className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-indigo-900 text-white font-sans flex flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Global Header with enhanced animations */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <Header />
        </motion.div>

        {/* Main Content Area with smooth transitions */}
        <main className="flex-1 w-full">
          <AnimatedRoutes />
        </main>

        {/* Global Footer with enhanced animations */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <Footer />
        </motion.div>
      </motion.div>
    </Router>
  );
};

export default App;
