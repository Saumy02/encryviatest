// import React from 'react';
// import { CheckCircle, Brain, TrendingUp, Shield } from 'lucide-react';

// const TrustUs = () => {
//   return (
//     <div className="relative py-16 text-white min-h-screen font-sans overflow-hidden">
//       {/* Changed 'container mx-auto' to 'w-full px-4' to allow content to spread, with padding */}
//       <div className="w-full px-4">
//         {/* Section Header */}
//         <div className="mb-16 text-left md:text-center">
//           <h2 className="text-4xl font-bold inline-block border-b-2 border-blue-400 pb-2">
//             Why Should You Trust Us?
//           </h2>
//         </div>

//         {/* Content Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           {/* Left Column: Image with rounded corners */}
//           <div className="flex justify-center md:justify-start">
//             <img
//               src="https://placehold.co/400x300/2A2A2A/FFFFFF?text=Fist+Bump"
//               alt="Trust Us"
//               className="rounded-2xl shadow-lg w-full max-w-md h-auto"
//               onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x300/2A2A2A/FFFFFF?text=Image+Error"; }}
//             />
//           </div>

//           {/* Right Column: List of reasons to trust */}
//           <div className="flex flex-col space-y-6">
//             {/* List Item 1 */}
//             <div className="flex items-start space-x-3">
//               <CheckCircle size={24} className="text-green-500 flex-shrink-0 mt-1" />
//               <p className="text-lg text-gray-300">
//                 <span className="font-semibold">100% In-house</span> team of developers,
//                 analysts, and security pros
//               </p>
//             </div>

//             {/* List Item 2 */}
//             <div className="flex items-start space-x-3">
//               <Brain size={24} className="text-purple-500 flex-shrink-0 mt-1" />
//               <p className="text-lg text-gray-300">
//                 <span className="font-semibold">Decades of combined experience</span>
//                 across SaaS, eCommerce, and enterprise projects
//               </p>
//             </div>

//             {/* List Item 3 */}
//             <div className="flex items-start space-x-3">
//               <TrendingUp size={24} className="text-red-500 flex-shrink-0 mt-1" />
//               <p className="text-lg text-gray-300">
//                 <span className="font-semibold">Results-first approach</span> to SEO,
//                 performance marketing, and digital product delivery
//               </p>
//             </div>

//             {/* List Item 4 */}
//             <div className="flex items-start space-x-3">
//               <Shield size={24} className="text-blue-500 flex-shrink-0 mt-1" />
//               <p className="text-lg text-gray-300">
//                 <span className="font-semibold">Trusted by startups and SMEs</span> across
//                 India and abroad
//               </p>
//             </div>

//             {/* Concluding Paragraph */}
//             <p className="text-lg text-gray-300 mt-6">
//               Whether you need a secure, scalable
//               platform or a search strategy that
//               actually drives leads—Encryvia delivers.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TrustUs;



import React from 'react';

const WhyTrustUsSection = () => (
  <section className="py-20 px-4 text-white">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">Why Should You  <span className='text-indigo-400'> Trust Us </span>?</h2>
      <div className="flex flex-col md:flex-row items-center md:items-center gap-12">
        <div className="md:w-1/2 flex justify-center md:justify-start items-center">
          <img
            src="https://placehold.co/516x766/0A0A0A/FFFFFF?text=Fists+Bumping"
            alt="Fists Bumping"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
            style={{ width: '516px', height: '766px' }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/516x766/0A0A0A/FFFFFF?text=Image+Error";
            }}
          />
        </div>
        <div className="md:w-1/2 text-left">
  <ul className="list-none space-y-4 mb-8 text-justify">
    <li className="flex items-start">
      <svg className="w-6 h-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 2a8 8 0 108 8 8.009 8.009 0 00-8-8zm1 12H9v-2h2zm0-4H9V6h2z" />
      </svg>
      <span>
        We’re a young, agile digital team helping businesses navigate the modern web — with secure platforms, creative marketing, and data-driven strategies that fit real-world budgets and timelines.
      </span>
    </li>
    <li className="flex items-start">
      <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
      <span>
        Built by a passionate in‑house team of developers, data analysts, and cybersecurity specialists — because we believe real impact starts when everything is crafted under one roof.
      </span>
    </li>
    <li className="flex items-start">
      <svg className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8.293 9.707a1 1 0 011.414-1.414L12 10.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3z" />
      </svg>
      <span>
        Fresh energy, proven skill: as a startup ourselves, we blend hustle and creativity with experience across SaaS, eCommerce, and enterprise-grade projects.
      </span>
    </li>
    <li className="flex items-start">
      <svg className="w-6 h-6 text-pink-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 12.5a.5.5 0 00.5-.5V8.293l1.146 1.147a.5.5 0 00.708-.708l-2-2a.5.5 0 00-.708 0l-2 2a.5.5 0 10.708.708L9.5 8.293V12a.5.5 0 00.5.5zM10 18a8 8 0 100-16 8 8 0 000 16z" />
      </svg>
      <span>
        Growth-first mindset: from SEO strategies and paid ads to secure, scalable digital products — everything we build is designed to deliver real, trackable results.
      </span>
    </li>
  </ul>
  <p className="text-lg leading-relaxed text-justify">
    Whether you’re launching your first platform, scaling up, or chasing your next big milestone — EncryVia delivers digital solutions built by a startup, for startups.
  </p>
</div>

      </div>
    </div>
  </section>
);

export default WhyTrustUsSection;

