





// // src/App.jsx
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// // Components (from the 'components' folder as per your structure)
// import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
// import CyberSecurity from './components/Services/CyberSecurity'; // Correct path based on your image
// import SEOAndAds from './components/Services/SEOAds';           // Correct path and assumed name based on your image
// // If you have a generic 'OurServices' component for a general services page:
// import OurServices from './components/Home/OurServices';
// import Blog from './pages/Blog';
// // Pages (from the 'pages' folder as per your structure)
// import Home from './pages/Home';
// import Contact from './pages/Contact';
// import OurTeam from './pages/Aboutus'; // Based on your image's OurTeam.jsx in pages
// import Projects from './pages/Projects'; // Based on your image's Projects.jsx in pages
// import WebDevelopment from './components/Services/WebDevelopment'; // As provided in your webdevlopement.txt

//  // ✅ Route to full blog

// import Blog from './pages/Blog';
// import MoreBlog from './pages/MoreBlog';

// <Route path="/blog" element={<Blog />} />
// <Route path="/moreblog" element={<MoreBlog />} />

// // import './App.css'; // Make sure this imports Tailwind via index.css

// const App = () => {
//   return (
//     <Router>
//       {/* 🔧 Main Container: Ensures full screen width and handles potential horizontal overflow. */}
//       {/* Background gradient, text color, font, minimum height, flex column for layout. */}
//       <div className="bg-gradient-to-br from-black via-gray-900 to-indigo-900 text-white font-sans min-h-screen flex flex-col w-screen max-w-full overflow-x-hidden">

//         {/* Navbar/Header - Renders globally on all pages */}
//         <Header />

//         {/* Main content area, takes available space and spans full width */}
//         <main className="flex-grow w-full">
//           <Routes>
//             {/* Define Routes for different pages */}
//             <Route path="/" element={<Home />} /> {/* Home page as default */}
//             <Route path="/about" element={<OurTeam />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/projects" element={<Projects />} />

//             {/* Service-specific pages */}
//             <Route path="/services/web-development" element={<WebDevelopment />} />
//             <Route path="/services/cyber-security" element={<CyberSecurity />} />
//             <Route path="/services/seo-ads" element={<SEOAndAds />} />

//             {/* General Services page (if you have one, otherwise remove this route) */}
//             <Route path="/services" element={<OurServices />} />

//             {/* Placeholder routes for future development */}
//             <Route path="/Blog" element={<Blog/>} />
//             <Route path="*" element={<NotFound />} /> {/* Catch-all for undefined routes */}
//           </Routes>
//         </main>

//         {/* Footer - Renders globally on all pages */}
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// // --- Placeholder Components for pages not yet fully developed ---
// const BlogPlaceholder = () => (
//   <div className="w-full px-4 py-16 text-center min-h-screen flex flex-col items-center justify-center">
//     <h1 className="text-5xl font-bold">Blog Page</h1>
//     <p className="mt-4 text-lg text-gray-300">Our latest articles and insights will be featured here.</p>
//   </div>
// );

// const NotFound = () => (
//   <div className="w-full px-4 py-16 text-center min-h-screen flex flex-col items-center justify-center">
//     <h1 className="text-5xl font-bold text-red-500">404 - Page Not Found</h1>
//     <p className="mt-4 text-lg text-gray-300">The page you are looking for does not exist.</p>
//   </div>
// );

// export default App;





// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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

// --- Fallback Page ---
const NotFound = () => (
  <div className="w-full px-4 py-16 text-center min-h-screen flex flex-col items-center justify-center">
    <h1 className="text-5xl font-bold text-red-500">404 - Page Not Found</h1>
    <p className="mt-4 text-lg text-gray-300">The page you are looking for does not exist.</p>
  </div>
);

const App = () => {
  return (
    <Router>
      {/* Page Container with gradient background and global styling */}
      <div className="bg-gradient-to-br from-black via-gray-900 to-indigo-900 text-white font-sans min-h-screen flex flex-col w-screen max-w-full overflow-x-hidden">

        {/* Global Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-grow w-full">
          <Routes>
            {/* === Public Pages === */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<OurTeam />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/moreblog" element={<MoreBlog />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

            {/* === Services Pages === */}
            <Route path="/services" element={<OurServices />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/cyber-security" element={<CyberSecurity />} />
            <Route path="/services/seo-ads" element={<SEOAndAds />} />

            {/* === Fallback === */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
