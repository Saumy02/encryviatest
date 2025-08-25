
import React from "react";
import ProjectCard from '../components/Project/ProjectCard'
import projectsData from '../components/Project/ProjectData'

const Project = () => {
    return (
        <div className="text-white bg-gradient-to-br from-black via-gray-900 to-indigo-900 min-h-screen font-inter">
            {/* Main content wrapper - Enhanced spacing and layout */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 xl:py-32 relative z-10 w-full space-y-16 lg:space-y-20">
                
                {/* Main Heading Section - Enhanced typography and spacing */}
                <div className="text-center space-y-8 lg:space-y-12">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                        This is <span className="text-indigo-500 font-bold">Our Projects</span> 
                        <br />
                        See what we've built: Real‑world web development, cybersecurity implementations, and marketing campaigns that deliver
                    </h1>
                </div>

                {/* Buttons Section - Enhanced layout and spacing */}
                <div className="flex flex-wrap justify-center gap-4 lg:gap-6 mb-16 lg:mb-20">
                    {/* Example buttons with enhanced styling */}
                    {[
                        "All Projects", "Web Development", "Cyber Security", "SEO & Marketing",
                        "E-commerce", "Mobile Apps", "UI/UX Design", "Consulting"
                    ].map((buttonText, index) => (
                        <button 
                            key={index}
                            className="px-6 lg:px-8 py-3 lg:py-4 bg-transparent border border-white/30 text-white rounded-full text-base lg:text-lg font-medium hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            {buttonText}
                        </button>
                    ))}
                </div>

                {/* Project Cards Section - Enhanced spacing */}
                <div className="space-y-16 lg:space-y-20">
                    {/* Render Project Cards dynamically using map */}
                    {projectsData.map(project => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imageUrl={project.imageUrl}
                            direction={project.direction}
                        />
                    ))}
                </div>

                {/* Section: Connect Now - Enhanced styling and spacing */}
                <div className="bg-indigo-700/20 backdrop-blur-sm border border-indigo-500/30 rounded-3xl p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12 shadow-2xl mt-16 lg:mt-20">
                    <div className="text-center md:text-left space-y-4">
                        <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                            Wanna know more about successful projects?
                        </p>
                        <p className="text-lg lg:text-xl text-gray-300">
                            Let's discuss how we can help bring your vision to life
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <button className="px-8 lg:px-12 py-4 lg:py-5 bg-white text-indigo-700 rounded-full text-xl lg:text-2xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Connect Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
