import React from 'react';
import { useNavigate } from 'react-router-dom';

const ConnectNow = () => {
  const navigate = useNavigate();

  const handleConnectClick = () => {
    navigate('/contact');
  };

  return (
    <div className="w-full px-4 sm:px-6 py-10">
      <div className="relative bg-purple-600/60 backdrop-blur-md border border-white/30 p-6 sm:p-8 lg:p-10 rounded-3xl shadow-2xl w-full max-w-3xl mx-auto flex flex-col md:flex-row flex-wrap items-center justify-between gap-6">
        
        {/* Text */}
        <div className="text-center md:text-left flex-1 min-w-[250px]">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed">
            Get to know more about us,
            Relax and feel free to connect
            with us without any doubt.
          </p>
        </div>

        {/* Button */}
        <div className="w-full sm:w-auto flex-shrink-0">
          <button
            onClick={handleConnectClick}
            className="w-full sm:w-auto bg-white text-black text-sm sm:text-base md:text-lg font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out"
          >
            Connect Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConnectNow;
