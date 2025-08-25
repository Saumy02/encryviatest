import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-20 right-0 w-80 h-20 bg-indigo-700 opacity-60 rounded-full filter blur-3xl transform rotate-12 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-20 left-0 w-80 h-20 bg-indigo-700 opacity-60 rounded-full filter blur-3xl transform -rotate-12 translate-x-1/2 translate-y-1/2"></div>

      {/* Hero Section Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-around h-[calc(100vh-96px)] px-4 pb-16 pt-0 md:pt-16">
        {/* Left Section: Illustrative Graphic (SVG for scalability) */}
        <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-16">
          <svg className="w-64 h-64 md:w-96 md:h-96" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="95" stroke="white" strokeWidth="2" />
            <path d="M100 5C141.421 5 175 38.579 175 80C175 121.421 141.421 155 100 155" stroke="#B0A6F0" strokeWidth="2" />
            <path d="M100 195C58.579 195 25 161.421 25 120C25 78.579 58.579 45 100 45" stroke="#7A6AD6" strokeWidth="2" />
            {/* Hand reaching out (simplified representation) */}
            <path d="M90 80 L110 90 L100 110 L80 100 L90 80Z" fill="#B0A6F0" />
            {/* Robot hand (simplified representation) */}
            <path d="M110 120 L90 110 L100 90 L120 100 L110 120Z" fill="#7A6AD6" />
          </svg>
        </div>

        {/* Right Section: Hero Text */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            Encry<span className="text-indigo-500">Via</span>
          </h1>
          <p className="text-3xl md:text-4xl font-semibold mb-8">
            “Build, Protect & Grow — Web Development, Cybersecurity,<br />  and SEO & Ads strategies designed for real — world impact.”
          </p>
          <div className="mt-12">
            <a href="#" className="text-lg md:text-xl font-medium flex items-center justify-center md:justify-start">
              Know More <span className="ml-2 text-3xl">&#8595;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;