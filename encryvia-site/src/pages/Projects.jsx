// // 📁 Projects page jahan multiple project cards dikhte hain
// import React from 'react';
// import ProjectCard from '../components/ProjectCard';

// const Projects = () => {
//   return (
//     <div className="min-h-screen px-6 py-24 bg-[#0f0f1f] text-white">
//       <h1 className="text-4xl md:text-6xl font-bold text-center mb-10">Our Projects</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
//         {/* 🖼️ Yahan image URLs placeholder hain — actual image lagana hai /assets se ya URL se */}
//         <ProjectCard title="First Project" image="https://placehold.co/400x300" description="Details about first project." />
//         <ProjectCard title="Second Project" image="https://placehold.co/400x300" description="Details about second project." />
//         <ProjectCard title="Third Project" image="https://placehold.co/400x300" description="Details about third project." />
//         <ProjectCard title="Fourth Project" image="https://placehold.co/400x300" description="Details about fourth project." />
//         <ProjectCard title="Fifth Project" image="https://placehold.co/400x300" description="Details about fifth project." />
//         <ProjectCard title="Sixth Project" image="https://placehold.co/400x300" description="Details about sixth project." />
//       </div>
//     </div>
//   );
// };

// export default Projects;




// src/pages/Projects.jsx
// 📁 Projects page jahan multiple project cards dikhte hain
import React from 'react';
import ProjectCard from '../components/ProjectCard'; // ProjectCard component ko import kiya

const Projects = () => {
  // Page ki min-height ko adjust kiya taaki Header aur Footer ke baad bacha hua space cover ho
  // bg-[#0f0f1f] aur text-white, consistent with other dark content sections
  return (
    <div className="min-h-[calc(100vh-80px-300px)] px-6 py-24 bg-[#0f0f1f] text-white">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-10 text-purple-400">Our Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* 🖼️ Yahan image URLs placeholder hain — actual image lagana hai /assets se ya URL se */}
        {/* Har ProjectCard ko data props ke through pass kiya ja raha hai */}
        <ProjectCard title="First Project" image="https://placehold.co/400x300/e5e7eb/5e3a9d?text=Project+1" description="Details about the first project, focusing on secure backend development and API integration." />
        <ProjectCard title="Second Project" image="https://placehold.co/400x300/e5e7eb/5e3a9d?text=Project+2" description="An innovative mobile application designed for secure communication and data sharing." />
        <ProjectCard title="Third Project" image="https://placehold.co/400x300/e5e7eb/5e3a9d?text=Project+3" description="Development of a scalable e-commerce platform with robust payment gateway security." />
        <ProjectCard title="Fourth Project" image="https://placehold.co/400x300/e5e7eb/5e3a9d?text=Project+4" description="Implementation of a blockchain-based solution for secure supply chain management." />
        <ProjectCard title="Fifth Project" image="https://placehold.co/400x300/e5e7eb/5e3a9d?text=Project+5" description="Creation of a custom CRM system with advanced data encryption and user access controls." />
        <ProjectCard title="Sixth Project" image="https://placehold.co/400x300/e5e7eb/5e3a9d?text=Project+6" description="A comprehensive cybersecurity audit and penetration testing for a financial institution." />
      </div>
    </div>
  );
};

export default Projects;