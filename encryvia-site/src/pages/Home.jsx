// // 🏠 Home page ka layout jisme sab sections lage hain
// import React from 'react';
// import Hero from '../components/Hero';
// import WebDevelopment from '../components/WebDevelopment';
// import CyberSecurity from '../components/CyberSecurity';
// import SEOAds from '../components/SEOAds';
// import HighlightBanner from '../components/HighlightBanner';

// const Home = () => {
//   return (
//     <>
//       <Hero />              // 🖼️ Intro section with heading and image
//       <WebDevelopment />    // 💻 Web dev service ka section
//       <CyberSecurity />     // 🔐 Cyber security wala section
//       <SEOAds />            // 📈 SEO & Ads services
//       <HighlightBanner />   // 📢 Full-width banner ya tagline
//     </>
//   );
// };

// export default Home;




// src/pages/Home.jsx
// 🏠 Home page ka layout jisme sab sections lage hain
import React from 'react';
import Hero from '../components/Hero';
import WebDevelopment from '../components/WebDevelopment';
import CyberSecurity from '../components/CyberSecurity';
import SEOAds from '../components/SEOAds';
import HighlightBanner from '../components/HighlightBanner';

const Home = () => {
  return (
    <div className="home-page-wrapper">
      <Hero />              {/* 🖼️ Intro section with heading and image */}
      {/* Service sections yahan ek ke baad ek dikhenge */}
      <WebDevelopment />    {/* 💻 Web dev service ka section */}
      <CyberSecurity />     {/* 🔐 Cyber security wala section */}
      <SEOAds />            {/* 📈 SEO & Ads services */}
      <HighlightBanner />   {/* 📢 Full-width banner ya tagline */}
    </div>
  );
};

export default Home;