import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-600/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/10 rounded-full filter blur-3xl animate-pulse delay-500"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Hero Text */}
            <div className="text-center lg:text-left space-y-8">
              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight">
                  <span className="text-white">Encry</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Via</span>
                </h1>
                
                {/* Subtitle */}
                <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  "Build, Protect & Grow — Web Development, Cybersecurity, and SEO & Ads strategies designed for 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 font-semibold"> real-world impact</span>."
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out">
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <button className="group px-8 py-4 border-2 border-indigo-500/50 text-indigo-400 font-semibold rounded-xl hover:bg-indigo-500/10 hover:border-indigo-400 transition-all duration-300 ease-out">
                  <span className="flex items-center justify-center gap-2">
                    Learn More
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </span>
                </button>
              </div>

              {/* Scroll indicator */}
              <div className="pt-8">
                <div className="flex flex-col items-center lg:items-start space-y-2 text-gray-400">
                  <span className="text-sm font-medium">Scroll to explore</span>
                  <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Main visual container */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  {/* Background glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
                  
                  {/* Main visual */}
                  <div className="relative w-full h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-full border border-indigo-500/30 flex items-center justify-center">
                    <svg className="w-64 h-64 lg:w-80 lg:h-80" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Outer ring */}
                      <circle cx="100" cy="100" r="95" stroke="url(#gradient1)" strokeWidth="2" className="animate-spin-slow">
                        <defs>
                          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#8B5CF6" />
                            <stop offset="50%" stopColor="#3B82F6" />
                            <stop offset="100%" stopColor="#8B5CF6" />
                          </linearGradient>
                        </defs>
                      </circle>
                      
                      {/* Animated paths */}
                      <path d="M100 5C141.421 5 175 38.579 175 80C175 121.421 141.421 155 100 155" 
                            stroke="url(#gradient2)" strokeWidth="3" className="animate-pulse">
                        <defs>
                          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#A78BFA" />
                            <stop offset="100%" stopColor="#7C3AED" />
                          </linearGradient>
                        </defs>
                      </path>
                      
                      <path d="M100 195C58.579 195 25 161.421 25 120C25 78.579 58.579 45 100 45" 
                            stroke="url(#gradient3)" strokeWidth="3" className="animate-pulse delay-1000">
                        <defs>
                          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#7C3AED" />
                            <stop offset="100%" stopColor="#A78BFA" />
                          </linearGradient>
                        </defs>
                      </path>
                      
                      {/* Central elements */}
                      <circle cx="100" cy="100" r="15" fill="url(#gradient4)" className="animate-pulse">
                        <defs>
                          <radialGradient id="gradient4" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#A78BFA" />
                            <stop offset="100%" stopColor="#7C3AED" />
                          </radialGradient>
                        </defs>
                      </circle>
                      
                      {/* Connection lines */}
                      <path d="M90 80 L110 90 L100 110 L80 100 L90 80Z" fill="#A78BFA" className="animate-pulse delay-500" />
                      <path d="M110 120 L90 110 L100 90 L120 100 L110 120Z" fill="#7C3AED" className="animate-pulse delay-700" />
                    </svg>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-indigo-500 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-bounce delay-1000"></div>
                <div className="absolute top-1/2 -right-8 w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;