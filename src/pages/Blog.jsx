// import React from 'react';
// import { useNavigate } from 'react-router-dom'; // Importing navigation
// import MoreBlog from '../components/MoreBlog';

// const Blog = () => {
//   const navigate = useNavigate(); // Hook to navigate
//
//   const handleReadMore = () => {
//     navigate('/MoreBlog'); // Navigate to MoreBlog page
//   };
//
//   return (
//     <div className="flex flex-col items-center justify-start min-h-screen p-4 bg-gradient-to-br from-black via-gray-900 to-indigo-900 font-inter">
//       ...
//     </div>
//   );
// };
//
// export default Blog;

import React from 'react';

const Blog = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-indigo-900">
    {/* Construction SVG Icon */}
    <svg className="w-24 h-24 mb-6 animate-fade-in" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="32" cy="56" rx="20" ry="4" fill="#6366F1" fillOpacity="0.3"/>
      <rect x="12" y="28" width="40" height="18" rx="9" fill="#FBBF24" stroke="#B45309" strokeWidth="2"/>
      <path d="M16 28c0-8.837 7.163-16 16-16s16 7.163 16 16" fill="#FDE68A" stroke="#B45309" strokeWidth="2"/>
      <rect x="22" y="38" width="6" height="8" rx="2" fill="#B45309"/>
      <rect x="36" y="38" width="6" height="8" rx="2" fill="#B45309"/>
      <circle cx="32" cy="36" r="2" fill="#B45309"/>
    </svg>
    <h1 className="text-5xl font-bold text-white mb-4 animate-pulse drop-shadow-lg transition-all duration-700 animate-fade-in">Coming Soon</h1>
    <p className="text-xl text-gray-300 animate-float transition-all duration-700 animate-fade-in [animation-delay:300ms]">Our blog page is under construction. Stay tuned!</p>
    <style>{`
      @keyframes fade-in {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in {
        animation: fade-in 1s cubic-bezier(0.4,0,0.2,1) both;
      }
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
      .animate-float {
        animation: float 2.5s ease-in-out infinite;
      }
    `}</style>
  </div>
);

export default Blog;
