
import React, { useState } from "react";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCard from '../components/Project/ProjectCard'
import projectsData from '../components/Project/ProjectData'

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

const textVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

const buttonVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.8
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 25
    }
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)",
    transition: {
      type: "spring",
      stiffness: 300
    }
  },
  tap: {
    scale: 0.95
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9,
    rotateY: -15
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    rotateY: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

// Animated section wrapper
const AnimatedSection = ({ children, className = "", delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px"
  });

  return (
    <motion.section
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay }}
    >
      {children}
    </motion.section>
  );
};

const Project = () => {
    const [activeFilter, setActiveFilter] = useState("All Projects");

    const filterButtons = [
        "All Projects", "Web Development", "Cyber Security", "SEO & Marketing",
        "E-commerce", "Mobile Apps", "UI/UX Design", "Consulting"
    ];

    return (
        <motion.div 
            className="text-white bg-gradient-to-br from-black via-gray-900 to-indigo-900 min-h-screen font-inter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {/* Main content wrapper - Enhanced spacing and layout */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 xl:py-32 relative z-10 w-full space-y-16 lg:space-y-20">
                
                {/* Main Heading Section - Enhanced typography and spacing */}
                <AnimatedSection className="text-center space-y-8 lg:space-y-12">
                    <motion.h1 
                        className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
                        variants={textVariants}
                    >
                        This is <motion.span 
                            className="text-indigo-500 font-bold"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Our Projects
                        </motion.span> 
                        <br />
                        See what we've built: Real‑world web development, cybersecurity implementations, and marketing campaigns that deliver
                    </motion.h1>
                </AnimatedSection>

                {/* Buttons Section - Enhanced layout and spacing */}
                <AnimatedSection className="flex flex-wrap justify-center gap-4 lg:gap-6 mb-16 lg:mb-20" delay={0.2}>
                    {/* Example buttons with enhanced styling */}
                    {filterButtons.map((buttonText, index) => (
                        <motion.button 
                            key={index}
                            className={`px-6 lg:px-8 py-3 lg:py-4 border text-white rounded-full text-base lg:text-lg font-medium transition-all duration-300 shadow-lg ${
                                activeFilter === buttonText 
                                    ? 'bg-white text-gray-900 border-white' 
                                    : 'bg-transparent border-white/30 hover:bg-white hover:text-gray-900'
                            }`}
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            onClick={() => setActiveFilter(buttonText)}
                        >
                            {buttonText}
                        </motion.button>
                    ))}
                </AnimatedSection>

                {/* Project Cards Section - Enhanced spacing */}
                <AnimatedSection className="space-y-16 lg:space-y-20" delay={0.3}>
                    {/* Render Project Cards dynamically using map */}
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <ProjectCard
                                title={project.title}
                                description={project.description}
                                imageUrl={project.imageUrl}
                                direction={project.direction}
                            />
                        </motion.div>
                    ))}
                </AnimatedSection>

                {/* Section: Connect Now - Enhanced styling and spacing */}
                <AnimatedSection className="bg-indigo-700/20 backdrop-blur-sm border border-indigo-500/30 rounded-3xl p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12 shadow-2xl mt-16 lg:mt-20" delay={0.4}>
                    <motion.div 
                        className="text-center md:text-left space-y-4"
                        variants={containerVariants}
                    >
                        <motion.p 
                            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight"
                            variants={textVariants}
                        >
                            Wanna know more about successful projects?
                        </motion.p>
                        <motion.p 
                            className="text-lg lg:text-xl text-gray-300"
                            variants={textVariants}
                        >
                            Let's discuss how we can help bring your vision to life
                        </motion.p>
                    </motion.div>
                    <motion.div 
                        className="flex-shrink-0"
                        variants={buttonVariants}
                    >
                        <motion.button 
                            className="px-8 lg:px-12 py-4 lg:py-5 bg-white text-indigo-700 rounded-full text-xl lg:text-2xl font-semibold shadow-lg"
                            whileHover={{ 
                                scale: 1.05, 
                                boxShadow: "0 25px 50px rgba(255, 255, 255, 0.3)",
                                backgroundColor: "#f3f4f6"
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Connect Now
                        </motion.button>
                    </motion.div>
                </AnimatedSection>
            </div>
        </motion.div>
    );
};

export default Project;
