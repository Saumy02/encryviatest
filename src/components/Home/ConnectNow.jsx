import React from 'react';
import { useNavigate } from 'react-router-dom';

const ConnectNow = ({ compact = false }) => {
  const navigate = useNavigate();

  const handleConnectClick = () => {
    navigate('/contact');
  };

  return (
    <div
      className={compact ? "w-full py-2 sm:py-3" : "w-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6"}
    >
      <div className={compact ? "w-full" : "max-w-7xl mx-auto"}>
        <div className="relative">
          {/* Main container */}
          <div className={`relative bg-white/[0.04] border border-white/20 rounded-2xl sm:rounded-3xl backdrop-blur-2xl shadow-2xl overflow-hidden ${
            compact ? 'p-5 sm:p-6 lg:p-7' : 'p-8 sm:p-10 lg:p-12'
          }`}>
            
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.05\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30 rounded-3xl pointer-events-none"></div>
            {/* Glass highlight overlay */}
            <div className="pointer-events-none absolute inset-px rounded-3xl bg-gradient-to-b from-white/12 via-white/5 to-transparent"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-8">
              
              {/* Text Content */}
              <div className="text-center lg:text-left flex-1 space-y-3 sm:space-y-4">
                <div className={compact ? "space-y-1.5" : "space-y-4"}>
                  <h3 className={`font-bold text-white leading-tight ${
                    compact ? 'text-xl sm:text-2xl lg:text-3xl' : 'text-3xl sm:text-4xl lg:text-5xl'
                  }`}>
                    Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Transform</span> Your Business?
                  </h3>
                  <p className={`text-gray-300 leading-relaxed ${
                    compact ? 'text-xs sm:text-sm lg:text-base max-w-xl' : 'text-lg sm:text-xl lg:text-2xl max-w-2xl'
                  }`}>
                    Get to know more about us. Relax and feel free to connect with us without any doubt. 
                    Let's build something amazing together.
                  </p>
                </div>
                
                {/* Features list */}
                <div className={`flex flex-wrap gap-3 sm:gap-6 justify-center lg:justify-start ${
                  compact ? 'text-xs sm:text-sm' : 'text-sm'
                }`}>
                  <div className="flex items-center gap-1.5 text-indigo-300">
                    <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">Free Consultation</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-indigo-300">
                    <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">24/7 Support</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-indigo-300">
                    <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">Custom Solutions</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex-shrink-0 mt-2 lg:mt-0">
                <button
                  onClick={handleConnectClick}
                  className={`group relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                    compact ? 'px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm rounded-xl shadow-md hover:shadow-indigo-500/25' : 'px-8 py-4 text-lg rounded-2xl shadow-xl hover:shadow-2xl'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Connect Now
                    <svg className={`group-hover:translate-x-1 transition-transform duration-300 ${compact ? 'w-4 h-4' : 'w-6 h-6'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </span>
                  <div className={`absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    compact ? 'rounded-xl' : 'rounded-2xl'
                  }`}></div>
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ConnectNow);
