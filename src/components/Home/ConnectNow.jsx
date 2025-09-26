import React from 'react';
import { useNavigate } from 'react-router-dom';

const ConnectNow = () => {
  const navigate = useNavigate();

  const handleConnectClick = () => {
    navigate('/contact');
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
      <div className="max-w-6xl mx-auto">
        <div className="relative group">
          {/* Background glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
          
          {/* Main container (glassmorphism) */}
          <div className="relative bg-transparent supports-[backdrop-filter]:bg-transparent backdrop-blur-sm supports-[backdrop-filter]:backdrop-blur-sm border-2 border-white/30 ring-1 ring-white/10 p-8 sm:p-10 lg:p-12 rounded-3xl shadow-2xl shadow-black/50">
            
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.05\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30 rounded-3xl"></div>
            {/* Glass highlight overlay */}
            <div className="pointer-events-none absolute inset-px rounded-3xl bg-gradient-to-b from-white/12 via-white/5 to-transparent"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
              
              {/* Text Content */}
              <div className="text-center lg:text-left flex-1 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Transform</span> Your Business?
                  </h3>
                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                    Get to know more about us. Relax and feel free to connect with us without any doubt. 
                    Let's build something amazing together.
                  </p>
                </div>
                
                {/* Features list */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center lg:justify-start">
                  <div className="flex items-center gap-2 text-indigo-300">
                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">Free Consultation</span>
                  </div>
                  <div className="flex items-center gap-2 text-indigo-300">
                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">24/7 Support</span>
                  </div>
                  <div className="flex items-center gap-2 text-indigo-300">
                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">Custom Solutions</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex-shrink-0">
                <button
                  onClick={handleConnectClick}
                  className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Connect Now
                    <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-4 right-4 w-3 h-3 bg-indigo-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 right-8 w-1 h-1 bg-pink-400 rounded-full animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectNow;
