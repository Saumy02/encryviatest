
import React from "react";
import ProjectCard from '../components/Project/ProjectCard'
import projectsData from '../components/Project/ProjectData'

const Project = () => {
    return (
        <div className="text-white bg-gradient-to-br from-black via-gray-900 to-indigo-900 min-h-screen flex justify-center items-center font-inter">
            {/* Main content wrapper */}
            <div className="max-w-7xl mx-auto p-8 relative z-10 w-full">
                {/* Main Heading Section */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 text-center leading-tight">
                    This is <span className="text-indigo-500 BOld">Our Projects</span> See what we’ve built: Real‑world web development, cybersecurity implementations, and marketing campaigns that deliver
                </h1>

                {/* Buttons Section */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {/* Example buttons, you can duplicate these as needed */}
                    <button className="px-6 py-3 bg-transparent border border-white text-white rounded-full text-lg font-medium hover:bg-white hover:text-gray-900 transition-colors duration-300">
                        Our Projects
                    </button>
                    <button className="px-6 py-3 bg-transparent border border-white text-white rounded-full text-lg font-medium hover:bg-white hover:text-gray-900 transition-colors duration-300">
                        Our Projects
                    </button>
                    <button className="px-6 py-3 bg-transparent border border-white text-white rounded-full text-lg font-medium hover:bg-white hover:text-gray-900 transition-colors duration-300">
                        Our Projects
                    </button>
                    <button className="px-6 py-3 bg-transparent border border-white text-white rounded-full text-lg font-medium hover:bg-white hover:text-gray-900 transition-colors duration-300">
                        Our Projects
                    </button>
                    <button className="px-6 py-3 bg-transparent border border-white text-white rounded-full text-lg font-medium hover:bg-white hover:text-gray-900 transition-colors duration-300">
                        Our Projects
                    </button>
                    <button className="px-6 py-3 bg-transparent border border-white text-white rounded-full text-lg font-medium hover:bg-white hover:text-gray-900 transition-colors duration-300">
                        Our Projects
                    </button>
                    <button className="px-6 py-3 bg-transparent border border-white text-white rounded-full text-lg font-medium hover:bg-white hover:text-gray-900 transition-colors duration-300">
                        Our Projects
                    </button>
                    <button className="px-6 py-3 bg-transparent border border-white text-white rounded-full text-lg font-medium hover:bg-white hover:text-gray-900 transition-colors duration-300">
                        Our Projects
                    </button>
                </div>

                {/* Render Project Cards dynamically using map */}
                {/* Each project from the projectsData array is passed as props to ProjectCard */}
                {projectsData.map(project => (
                    <ProjectCard
                        key={project.id} // 'key' prop is essential for list rendering in React
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                        direction={project.direction}
                    />
                ))}

                {/* Section: Connect Now */}
                <div className="bg-indigo-700 bg-opacity-70 rounded-full p-8 flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg mt-16">
                    <p className="text-2xl sm:text-3xl font-bold text-white text-center md:text-left">
                        Wanna know more about successful projects
                    </p>
                    <button className="px-8 py-4 bg-white text-indigo-700 rounded-full text-xl font-semibold hover:bg-gray-200 transition-colors duration-300 shadow-md">
                        Connect Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Project;
