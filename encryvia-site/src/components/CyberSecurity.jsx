// // Section describing Cyber Security service
// import React from 'react';

// const CyberSecurity = () => {
//   return (
//     <section className="px-4 md:px-10 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-10 bg-[#120052] text-white">
//       {/* Left image */}
//       <div className="w-full max-w-[400px] md:max-w-[630px] aspect-square bg-gray-300 rounded-[140px] shadow-xl overflow-hidden">
//         <img
//           src="https://placehold.co/630x630"
//           alt="Cyber Security"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Right text content */}
//       <div className="max-w-xl text-center md:text-right space-y-6">
//         <h2 className="text-[40px] md:text-[70px] font-bold">Cyber Security</h2>
//         <p className="text-[24px] md:text-[40px] font-light">
//           this is a sample text of cyber-security section area
//         </p>
//         <button className="px-6 py-3 bg-white text-black text-lg md:text-[30px] font-bold rounded-lg">
//           View More
//         </button>
//       </div>
//     </section>
//   );
// };

// export default CyberSecurity;





// src/components/CyberSecurity.jsx
// Section describing Cyber Security service
import React from 'react';
import { Link } from 'react-router-dom'; // Button ko link banane ke liye

const CyberSecurity = () => {
  return (
    <section className="px-4 md:px-10 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-10 bg-[#120052] text-white">
      {/* Left image */}
      <div className="w-full max-w-[400px] md:max-w-[630px] aspect-square bg-gray-300 rounded-[140px] shadow-xl overflow-hidden flex-shrink-0">
        <img
          src="https://placehold.co/630x630/e5e7eb/5e3a9d?text=Cyber+Security"
          alt="Cyber Security"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right text content */}
      <div className="max-w-xl text-center md:text-right space-y-6">
        <h2 className="text-[40px] md:text-[70px] font-bold">Cyber Security</h2>
        <p className="text-[24px] md:text-[40px] font-light">
          This is a sample text of cyber-security section area, highlighting our robust defense mechanisms.
        </p>
        <Link to="/services" className="px-6 py-3 bg-white text-purple-900 text-lg md:text-[30px] font-bold rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-block">
          View More
        </Link>
      </div>
    </section>
  );
};

export default CyberSecurity;