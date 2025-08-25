import React from 'react';

const Blog = () => (
  <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-indigo-900 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto text-center space-y-12 lg:space-y-16">
      
      {/* Construction SVG Icon - Enhanced styling */}
      <div className="flex justify-center">
        <svg 
          className="w-24 h-24 lg:w-32 lg:h-32 mb-8 animate-fade-in" 
          viewBox="0 0 64 64" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="32" cy="56" rx="20" ry="4" fill="#6366F1" fillOpacity="0.3"/>
          <rect x="12" y="28" width="40" height="18" rx="9" fill="#FBBF24" stroke="#B45309" strokeWidth="2"/>
          <path d="M16 28c0-8.837 7.163-16 16-16s16 7.163 16 16" fill="#FDE68A" stroke="#B45309" strokeWidth="2"/>
          <rect x="22" y="38" width="6" height="8" rx="2" fill="#B45309"/>
          <rect x="36" y="38" width="6" height="8" rx="2" fill="#B45309"/>
          <circle cx="32" cy="36" r="2" fill="#B45309"/>
        </svg>
      </div>
      
      {/* Main Content - Enhanced typography and spacing */}
      <div className="space-y-8 lg:space-y-12">
        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 lg:mb-8 animate-pulse drop-shadow-lg transition-all duration-700 animate-fade-in leading-tight">
          Coming Soon
        </h1>
        
        <div className="space-y-6 lg:space-y-8">
          <p className="text-xl lg:text-2xl xl:text-3xl text-gray-300 animate-float transition-all duration-700 animate-fade-in [animation-delay:300ms] leading-relaxed">
            Our blog page is under construction. Stay tuned!
          </p>
          
          <p className="text-lg lg:text-xl text-gray-400 animate-float transition-all duration-700 animate-fade-in [animation-delay:600ms] leading-relaxed">
            We're working hard to bring you insightful content about web development, cybersecurity, and digital marketing.
          </p>
        </div>
        
        {/* Call to Action - Enhanced styling */}
        <div className="pt-8 lg:pt-12 animate-fade-in [animation-delay:900ms]">
          <a 
            href="/contact" 
            className="inline-flex items-center px-8 lg:px-12 py-4 lg:py-5 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg lg:text-xl"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
    
    {/* Enhanced CSS animations */}
    <style>{`
      @keyframes fade-in {
        from { 
          opacity: 0; 
          transform: translateY(30px); 
        }
        to { 
          opacity: 1; 
          transform: translateY(0); 
        }
      }
      
      .animate-fade-in {
        animation: fade-in 1s cubic-bezier(0.4,0,0.2,1) both;
      }
      
      @keyframes float {
        0%, 100% { 
          transform: translateY(0); 
        }
        50% { 
          transform: translateY(-10px); 
        }
      }
      
      .animate-float {
        animation: float 2.5s ease-in-out infinite;
      }
    `}</style>
  </div>
);

export default Blog;
