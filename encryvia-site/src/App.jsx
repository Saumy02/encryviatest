// // src/App.jsx
// 📌 Is file me sari routing hoti hai (Home, Projects, Contact) + Header/Footer common layout me
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Divider from './components/Divider';
// Components aur Pages ko import kiya
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact'; // Contact page ko import kiya

const App = () => {
  return (
    // 🌌 Global container div with dark background (consistent with your content sections)
    // aur default text color white rakha hai
    <div className="bg-gradient-to-br from-gray-900 to-black text-white min-h-screen flex flex-col font-inter">
      {/* Header component sabhi pages par dikhega, isliye ise <Routes> ke bahar rakha hai */}
      {/* Fixed header ke liye padding top diya body ko, ya fir main content ko padding de sakte hain */}
      <Header />
      

      {/* Main content area, jo available space lega */}
      <main className="flex-grow pt-[80px]"> {/* Header ki height ke hisaab se padding */}
        {/* <Routes> ke andar hi page specific content render hoga */}
        <Routes>
           <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />         {/* 🏠 Home page ka route */}
          <Route path="/projects" element={<Projects />} /> {/* 📁 Projects page ka route */}
          <Route path="/contact" element={<Contact />} /> {/* 📞 Contact page ka route */}

          {/* 🆕 Future me aur route add kar sakte ho */}
          <Route path="/our-team" element={<div className="min-h-[calc(100vh-80px-300px)] flex items-center justify-center text-3xl font-bold bg-gray-800 text-white">Our Team Page (Coming Soon!)</div>} />
          <Route path="/blog" element={<div className="min-h-[calc(100vh-80px-300px)] flex items-center justify-center text-3xl font-bold bg-gray-800 text-white">Blog Page (Coming Soon!)</div>} />
          <Route path="/services" element={<div className="min-h-[calc(100vh-80px-300px)] flex items-center justify-center text-3xl font-bold bg-gray-800 text-white">Services Page (Coming Soon!)</div>} />

          {/* Optional: 404 Not Found page ke liye fallback route */}
          <Route path="*" element={
            <div className="min-h-[calc(100vh-80px-300px)] flex flex-col items-center justify-center text-center text-3xl font-bold bg-gray-800 text-white">
              <h1>404 - Page Not Found</h1>
              <p className="mt-2 text-xl">The page you are looking for does not exist.</p>
            </div>
          } />
        </Routes>
      </main>

      {/* Footer component sabhi pages par dikhega, isliye ise <Routes> ke bahar rakha hai */}
      <Footer />
    </div>
  );
};

export default App;