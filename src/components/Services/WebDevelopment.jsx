import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import web from '../Services/webpage_data.json'
import sec2 from '../Services/sec2.json'
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

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.95,
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
  hover: {
    scale: 1.02,
    y: -5,
    boxShadow: "0 25px 50px rgba(99, 102, 241, 0.2)",
    transition: {
      type: "spring",
      stiffness: 200
    }
  }
};

const imageVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    rotateY: -15 
  },
  visible: { 
    opacity: 1, 
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

function WebDevelopment() {
  return (
    <motion.div 
      className="min-h-screen text-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      
      {/* Hero Section */}
      <AnimatedSection className="flex flex-col items-center justify-center py-20 lg:py-28 xl:py-32 px-4 sm:px-6 lg:px-8 text-center min-h-[calc(100vh-80px)]">
        <motion.div 
          className="relative z-10 max-w-5xl mx-auto"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8 lg:mb-12"
            variants={textVariants}
          >
            <motion.span 
              className="text-indigo-500 font-bold"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            >
              "
            </motion.span> 
            Our <motion.span 
              className='text-indigo-500'
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Web Development
            </motion.span> 
            <br />
            that works as hard as you do — secure, scalable, and built for growth from day one. 
            <motion.span 
              className="text-indigo-500 font-bold"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            >
              "
            </motion.span>
          </motion.h1>
        </motion.div>
      </AnimatedSection>

      {/* Service Header */}
      <AnimatedSection className="py-12 px-4 sm:px-6 lg:px-8" delay={0.2}>
        <motion.div 
          className="flex items-center justify-center max-w-6xl mx-auto"
          variants={itemVariants}
        >
          <motion.div 
            className="flex-grow border-t border-gray-600 max-w-xs lg:max-w-sm"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
          <motion.h2 
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mx-6 text-indigo-500 whitespace-nowrap"
            transition={{ type: "spring", stiffness: 300 }}
          >
            Web Development Service
          </motion.h2>
          <motion.div 
            className="flex-grow border-t border-gray-600 max-w-xs lg:max-w-sm"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </motion.div>
      </AnimatedSection>

      {/* Main Service Image */}
      <AnimatedSection className="py-12 px-4 sm:px-6 lg:px-8" delay={0.3}>
        <motion.div 
          className="w-full flex justify-center max-w-6xl mx-auto"
          variants={imageVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-3 shadow-2xl w-full max-w-5xl h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center overflow-hidden border border-gray-700/50">
            <motion.img
              src="../image/Web_dev/WEB_Development.webp"
              alt="Web Development Service"
              className="w-full h-full object-cover rounded-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/800x500/4F46E5/ffffff?text=Web+Development+Service";
              }}
            />
          </div>
        </motion.div>
      </AnimatedSection>

      {/* Superb Digital Offerings Section */}
      <AnimatedSection className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30" delay={0.4}>
        <motion.div 
          className="max-w-6xl mx-auto space-y-12 lg:space-y-16"
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div 
            className="text-center space-y-6"
            variants={containerVariants}
          >
            <motion.h3 
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-white"
              variants={textVariants}
            >
              Superb Digital Offerings
            </motion.h3>
            <motion.p 
              className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-300 max-w-4xl mx-auto"
              variants={textVariants}
            >
              We play to our strengths: For years we've been ideating, creating and shipping wonderful things on the internet.
            </motion.p>
          </motion.div>
          
          {/* Cards Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
            variants={containerVariants}
          >
           {web.map((item, index) => (
              <motion.div 
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-xl border border-gray-700/50 hover:border-indigo-500/30 transition-colors duration-300 group"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="space-y-4">
                  <h4 className="text-xl lg:text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </AnimatedSection>

      {/* Service Detail Sections */}
      {sec2.map((section, index) => (
        <AnimatedSection 
          key={index} 
          className="py-12 lg:py-8 px-4 sm:px-6 lg:px-8" 
          delay={0.5 + index * 0.1}
        >
          <motion.div 
            className="max-w-6xl mx-auto space-y-12 lg:space-y-8"
            variants={containerVariants}
          >
            <motion.h3
              className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-extrabold leading-tight text-white text-center "
              variants={textVariants}
            >
              {section.title}
            </motion.h3>
            
            <div className={`flex flex-col items-center gap-12 lg:gap-16 ${section.reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
                        <motion.div
                          className="lg:w-1/2 flex justify-center"
                          variants={imageVariants}
                          whileHover={{ scale: 1.03, rotate: section.reverse ? -1 : 1 }}
                        >
                          <div className="relative">
                            <motion.div
                              className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full  blur-xl"
                              animate={{ 
                                scale: [1, 1.1, 1],
                                opacity: [0.3, 0.6, 0.3]
                              }}
                              transition={{ 
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            />
                            <img
                              src={section.image}
                              alt={section.imageAlt}
                              className="relative z-10 rounded-3xl shadow-2xl h-[300px] lg:h-[400px] w-full max-w-md border-2 border-cyan-400/30 object-cover"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "https://placehold.co/400x600/6B7280/ffffff?text=Image+Not+Found";
                              }}
                            />
                          </div>
                        </motion.div>
              {/* Content */}
              <motion.div 
                className="lg:w-1/2 space-y-8"
                variants={containerVariants}
              >
                <motion.p 
                  className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-300 text-justify"
                  variants={textVariants}
                >
                  {section.description}
                </motion.p>
                
                <motion.div 
                  className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 space-y-4"
                  variants={itemVariants}
                >
                  <h4 className="text-xl lg:text-2xl font-bold text-indigo-400">
                    {section.listTitle}
                  </h4>
                  <ul className="space-y-3">
                    {section.items.map((item, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start gap-3 text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-base sm:text-lg">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatedSection>
      ))}
    </motion.div>
  );
}

export default WebDevelopment;
