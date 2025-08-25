import React from "react";

const ProjectCard = ({ title, description, imageUrl, direction }) => {
    // Determine the flex direction based on the 'direction' prop
    const flexDirectionClass = direction === 'reverse' ? 'md:flex-row-reverse' : 'md:flex-row';

    return (
        <div className={`flex flex-col ${flexDirectionClass} items-center gap-8 mb-16`}>
            {/* Text content for the project card */}
            <div className="md:w-1/2 text-left p-4">
                <h2 className="text-4xl sm:text-5xl font-bold mb-4">{title}</h2>
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                    {description}
                </p>
            </div>
            {/* Image content for the project card */}
            <div className="md:w-1/2 flex justify-center p-4">
                <img
                    src={imageUrl}
                    alt={`${title} Image`}
                    className="rounded-3xl max-w-full h-auto w-[630px] h-[630px] object-cover shadow-md"
                />
            </div>
        </div>
    );
};

export default ProjectCard;