import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/Project/ProjectCard';
import projectsData from '../components/Project/projects.json';
import SEO from '../components/SEO';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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
    boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)",
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
    y: 60,
    scale: 0.9,
    filter: 'blur(6px)'
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18
    }
  },
  exit: {
    opacity: 0,
    y: -30,
    scale: 0.9,
    filter: 'blur(6px)',
    transition: {
      duration: 0.3
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
    { name: "All Projects", count: projectsData.length },
    { name: "Web Development", count: projectsData.filter(p => p.category === "Web Development").length },
    { name: "Cyber Security", count: projectsData.filter(p => p.category === "Cyber Security").length },
    { name: "SEO & Marketing", count: projectsData.filter(p => p.category === "SEO & Marketing").length },
    { name: "E-commerce", count: projectsData.filter(p => p.category === "E-commerce").length },
    { name: "Mobile Apps", count: projectsData.filter(p => p.category === "Mobile Apps").length },
    { name: "UI/UX Design", count: projectsData.filter(p => p.category === "UI/UX Design").length },
    { name: "Consulting", count: projectsData.filter(p => p.category === "Consulting").length }
  ];

  // Filter projects based on active filter
  const filteredProjects = useMemo(() => {
    if (activeFilter === "All Projects") {
      return projectsData;
    }
    return projectsData.filter(project => project.category === activeFilter);
  }, [activeFilter]);

  return (
     <>
      <SEO 
        title="EncryVia Portfolio | Web, Security & SEO Projects"
        description="View our portfolio: custom websites, e-commerce stores, cybersecurity solutions & successful SEO campaigns. Real results for real businesses."
        keywords="web development portfolio, cybersecurity case studies, SEO success stories, e-commerce development projects, digital marketing portfolio, website design examples, IT solutions showcase"
        ogUrl="https://encryvia.com/projects"
      />
    <motion.div 
      className="text-white min-h-screen font-inter"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Hero Section */}
      <AnimatedSection className="flex items-center justify-center py-12 lg:py-12 px-4 sm:px-6 lg:px-8 text-center">
        <motion.div 
          className="relative z-10 max-w-6xl text-center"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-8"
            variants={textVariants}
          >
            This is{' '}
            <motion.span 
              className="text-indigo-500 font-bold"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Our Projects
            </motion.span>
            <br />
            <span className="text-lg sm:text-xl lg:text-2xl text-gray-300 font-normal block mt-6 max-w-4xl mx-auto leading-relaxed">
              See what we've built: Real‑world web development, cybersecurity implementations, and marketing campaigns that deliver measurable results
            </span>
          </motion.h1>
        </motion.div>
      </AnimatedSection>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 relative z-10">
        
        {/* Filter Buttons Section */}
        <AnimatedSection className="mb-16 lg:mb-20" delay={0.2}>
          <motion.div className="flex flex-wrap justify-center gap-3 lg:gap-4">
            {filterButtons.map((button, index) => (
              <motion.button 
                key={button.name}
                className={`group relative px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full text-sm sm:text-base lg:text-lg font-medium transition-all duration-300 shadow-lg backdrop-blur-sm ${
                  activeFilter === button.name
                    ? 'bg-indigo-600 text-white border-2 border-indigo-500 shadow-indigo-500/25' 
                    : 'bg-gray-800/50 border-2 border-gray-600/50 text-gray-300 hover:bg-indigo-600/20 hover:border-indigo-500/50 hover:text-white'
                }`}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={() => setActiveFilter(button.name)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {button.name}
                  {button.count > 0 && (
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      activeFilter === button.name 
                        ? 'bg-white/20 text-white' 
                        : 'bg-gray-700 text-gray-300 group-hover:bg-indigo-500/30'
                    }`}>
                      {button.count}
                    </span>
                  )}
                </span>
                
                {/* Hover background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100"
                  initial={false}
                  animate={{ opacity: activeFilter === button.name ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </motion.div>
        </AnimatedSection>

        {/* Project Count */}
        <AnimatedSection className="text-center mb-12" delay={0.3}>
          <motion.p 
            className="text-lg lg:text-xl text-gray-300"
            variants={textVariants}
          >
            Showing <span className="text-indigo-400 font-semibold">{filteredProjects.length}</span> projects
            {activeFilter !== "All Projects" && (
              <span> in <span className="text-indigo-400 font-semibold">{activeFilter}</span></span>
            )}
          </motion.p>
        </AnimatedSection>

        {/* Project Cards Section */}
        <AnimatedSection className="space-y-16 lg:space-y-20" delay={0.4}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-16 lg:space-y-20"
            >
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                  <motion.div
                    key={`${activeFilter}-${project.id}`}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ProjectCard
                      project={project}
                    />
                  </motion.div>
                ))
              ) : (
                <motion.div
                  className="text-center py-20"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="max-w-md mx-auto">
                    <div className="w-24 h-24 mx-auto mb-6 bg-gray-800/50 rounded-full flex items-center justify-center">
                      <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-300 mb-4">No Projects Found</h3>
                    <p className="text-gray-400 mb-6">
                      We don't have any projects in the <span className="text-indigo-400 font-semibold">{activeFilter}</span> category yet.
                    </p>
                    <motion.button
                      onClick={() => setActiveFilter("All Projects")}
                      className="px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View All Projects
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </AnimatedSection>

        {/* Call to Action Section */}
        <AnimatedSection className="mt-20 lg:mt-24" delay={0.6}>
          <motion.div 
            className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 backdrop-blur-sm border border-indigo-500/30 rounded-3xl p-8 lg:p-12 shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
              <motion.div 
                className="text-center lg:text-left space-y-4 flex-1"
                variants={containerVariants}
              >
                <motion.h3 
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight"
                  variants={textVariants}
                >
                  Ready to Start Your Project?
                </motion.h3>
                <motion.p 
                  className="text-lg lg:text-xl text-gray-300 leading-relaxed"
                  variants={textVariants}
                >
                  Let's discuss how we can help bring your vision to life with our proven expertise and innovative solutions
                </motion.p>
                <motion.div 
                  className="flex flex-wrap gap-4 justify-center lg:justify-start"
                  variants={containerVariants}
                >
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    ✓ Free Consultation
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    ✓ Custom Solutions
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    ✓ Expert Team
                  </span>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                variants={buttonVariants}
              >
                <Link to="/contact">
                  <motion.button 
                    className="px-8 lg:px-10 py-4 lg:py-5 bg-indigo-600 text-white rounded-full text-lg lg:text-xl font-semibold shadow-lg hover:bg-indigo-700 transition-colors duration-300"
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: "0 25px 50px rgba(99, 102, 241, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Start Your Project
                  </motion.button>
                </Link>
                <Link to="/about-us">
                  <motion.button 
                    className="px-8 lg:px-10 py-4 lg:py-5 bg-transparent text-white border-2 border-white/30 rounded-full text-lg lg:text-xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 25px 50px rgba(255, 255, 255, 0.1)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Learn More
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </motion.div>
    </>
  );
};

export default Project;
