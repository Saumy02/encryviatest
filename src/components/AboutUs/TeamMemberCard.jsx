// Isko Import nhi kiya gya hai 




// import React from 'react';
// import { FaTwitter, FaLinkedinIn } from 'react-icons/fa'; // Social media icons

// const TeamMemberCard = ({ member }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-lg p-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
//       {/* Team Member Image - Circular with Placeholder */}
//       <img
//         src={member.image} // Yahaan placeholder image URL aayega
//         alt={member.name}
//         className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-purple-500" // Image ko circular banata hai
//       />

//       {/* Name */}
//       <h3 className="text-xl font-bold text-gray-900 mb-1">
//         {member.name}
//       </h3>

//       {/* Role / Designation */}
//       <p className="text-md text-gray-600 mb-4">
//         {member.role}
//       </p>

//       {/* Social Media Icons */}
//       <div className="flex justify-center space-x-4">
//         {member.social.twitter && (
//           <a
//             href={member.social.twitter}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-500 hover:text-blue-400 transition-colors duration-200"
//           >
//             <FaTwitter size={24} />
//           </a>
//         )}
//         {member.social.linkedin && (
//           <a
//             href={member.social.linkedin}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
//           >
//             <FaLinkedinIn size={24} />
//           </a>
//         )}
//         {/* Aap yahaan aur social media icons add kar sakte hain */}
//       </div>
//     </div>
//   );
// };

// export default TeamMemberCard;