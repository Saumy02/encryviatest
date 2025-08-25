// // Ye ek reusable component hai har project ke liye (title + image + desc)
// import React from 'react';

// const ProjectCard = ({ title, description, image }) => {
//   return (
//     <div className="bg-[#1f1f2f] rounded-xl overflow-hidden shadow-lg">
//       <img src={image} alt={title} className="w-full h-48 object-cover" />  // 🖼️ Project ka image yahan lagega
//       <div className="p-5">
//         <h2 className="text-2xl font-bold mb-2">{title}</h2>
//         <p className="text-gray-300 text-sm">{description}</p>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;





// src/components/ProjectCard.jsx
// Ye ek reusable component hai har project ke liye (title + image + desc)
import React from 'react';

const ProjectCard = ({ title, description, image }) => {
  return (
    <div className="bg-[#1f1f2f] rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h2 className="text-2xl font-bold mb-2 text-purple-400">{title}</h2>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;