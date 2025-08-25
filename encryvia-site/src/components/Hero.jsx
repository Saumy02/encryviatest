// // Intro hero section with text and image
// import React from 'react';

// const Hero = () => {
//   return (
//     <section className="relative w-full bg-white overflow-hidden pt-32 px-4">
//       <div className="flex flex-col md:flex-row items-center justify-between gap-10">
//         {/* Left image bubble */}
//         <div className="relative w-[300px] md:w-[500px] aspect-square rounded-full bg-purple-900/60">
//           <img src="https://placehold.co/501x501" className="rounded-full w-full h-full object-cover" alt="Hero" />
//         </div>

//         {/* Right text content */}
//         <div className="text-center md:text-right space-y-4">
//           <h1 className="text-[40px] md:text-[60px] font-bold text-white drop-shadow-md">
//             Think Vivid. Build Smart Stay Encrypted
//           </h1>
//           <h2 className="text-[70px] md:text-[90px] font-bold">
//             <span className="text-white">Encry</span>
//             <span className="text-[#120052]">Via</span>
//           </h2>
//           <p className="text-[24px] md:text-[30px] font-bold text-white">Know More</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;






// src/components/Hero.jsx
// Intro hero section with text and image
import React from 'react';
import { Link } from 'react-router-dom'; // Button ko link banane ke liye

const Hero = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-gray-950 to-gray-800 text-white overflow-hidden pt-32 px-4 py-16 md:py-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left image bubble */}
        <div className="relative w-[300px] md:w-[500px] aspect-square rounded-full bg-purple-900/60 flex-shrink-0">
          <img src="https://placehold.co/501x501/7e22ce/ffffff?text=EncryVia" className="rounded-full w-full h-full object-cover shadow-xl" alt="Hero" />
        </div>

        {/* Right text content */}
        <div className="text-center md:text-right space-y-4">
          <h1 className="text-[40px] md:text-[60px] font-bold text-white drop-shadow-md leading-tight">
            Think Vivid. Build Smart <br/> Stay Encrypted
          </h1>
          <h2 className="text-[70px] md:text-[90px] font-bold leading-none">
            <span className="text-white">Encry</span>
            <span className="text-purple-400">Via</span>
          </h2>
          <Link to="/contact" className="relative bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group mt-6 inline-flex items-center justify-center">
            Know More
            <span className="absolute top-1/2 -translate-y-1/2 ml-2 opacity-0 group-hover:opacity-100 group-hover:ml-4 transition-all duration-300">
              <svg
                className="w-5 h-5 inline-block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;