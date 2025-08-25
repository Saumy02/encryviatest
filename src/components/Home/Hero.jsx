import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
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
      y: 30,
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

  const visualVariants = {
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
        damping: 20,
        delay: 0.5
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const glowVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <motion.div 
          className="absolute top-20 right-10 w-72 h-72 bg-indigo-600/20 rounded-full filter blur-3xl"
          variants={glowVariants}
          animate="animate"
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl"
          variants={glowVariants}
          animate="animate"
          transition={{ delay: 1 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/10 rounded-full filter blur-3xl"
          variants={glowVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
        
        {/* Grid pattern overlay */}
        <motion.div 
          className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 1, duration: 2 }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Hero Text */}
            <motion.div 
              className="text-center lg:text-left space-y-8"
              variants={containerVariants}
            >
              {/* Main Heading */}
              <motion.div 
                className="space-y-6"
                variants={textVariants}
              >
                <motion.h1 
                  className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                >
                  <motion.span 
                    className="text-white"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
                  >
                    Encry
                  </motion.span>
                  <motion.span 
                    className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
                  >
                    Via
                  </motion.span>
                </motion.h1>
                
                {/* Subtitle */}
                <motion.p 
                  className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                  variants={textVariants}
                >
                  "Build, Protect & Grow — Web Development, Cybersecurity, and SEO & Ads strategies designed for 
                  <motion.span 
                    className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 font-semibold"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {" "}real-world impact
                  </motion.span>."
                </motion.p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                variants={containerVariants}
              >
                <motion.button 
                  className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 ease-out"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <span className="relative z-10">Get Started</span>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
                
                <motion.button 
                  className="group px-8 py-4 border-2 border-indigo-500/50 text-indigo-400 font-semibold rounded-xl hover:bg-indigo-500/10 hover:border-indigo-400 transition-all duration-300 ease-out"
                  variants={buttonVariants}
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(99, 102, 241, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center justify-center gap-2">
                    Learn More
                    <motion.svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </motion.svg>
                  </span>
                </motion.button>
              </motion.div>

              {/* Scroll indicator */}
              <motion.div 
                className="pt-8"
                variants={textVariants}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <div className="flex flex-col items-center lg:items-start space-y-2 text-gray-400">
                  <motion.span 
                    className="text-sm font-medium"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Scroll to explore
                  </motion.span>
                  <motion.div 
                    className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className="w-1 h-3 bg-gray-400 rounded-full mt-2"
                      animate={{ y: [0, 12, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column: Hero Visual */}
            <motion.div 
              className="flex justify-center lg:justify-end"
              variants={visualVariants}
            >
              <div className="relative">
                {/* Main visual container */}
                <motion.div 
                  className="relative w-80 h-80 lg:w-96 lg:h-96"
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {/* Background glow */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-2xl"
                    variants={glowVariants}
                    animate="animate"
                  />
                  
                  {/* Main visual */}
                  <motion.div 
                    className="relative w-full h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-full border border-indigo-500/30 flex items-center justify-center"
                    whileHover={{ borderColor: "rgba(99, 102, 241, 0.6)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.svg 
                      className="w-64 h-64 lg:w-80 lg:h-80" 
                      viewBox="0 0 200 200" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      {/* Outer ring */}
                      <motion.circle 
                        cx="100" 
                        cy="100" 
                        r="95" 
                        stroke="url(#gradient1)" 
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 1 }}
                      >
                        <defs>
                          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#8B5CF6" />
                            <stop offset="50%" stopColor="#3B82F6" />
                            <stop offset="100%" stopColor="#8B5CF6" />
                          </linearGradient>
                        </defs>
                      </motion.circle>
                      
                      {/* Animated paths */}
                      <motion.path 
                        d="M100 5C141.421 5 175 38.579 175 80C175 121.421 141.421 155 100 155" 
                        stroke="url(#gradient2)" 
                        strokeWidth="3"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 1.5 }}
                      >
                        <defs>
                          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#A78BFA" />
                            <stop offset="100%" stopColor="#7C3AED" />
                          </linearGradient>
                        </defs>
                      </motion.path>
                      
                      <motion.path 
                        d="M100 195C58.579 195 25 161.421 25 120C25 78.579 58.579 45 100 45" 
                        stroke="url(#gradient3)" 
                        strokeWidth="3"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 2 }}
                      >
                        <defs>
                          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#7C3AED" />
                            <stop offset="100%" stopColor="#A78BFA" />
                          </linearGradient>
                        </defs>
                      </motion.path>
                      
                      {/* Central elements */}
                      <motion.circle 
                        cx="100" 
                        cy="100" 
                        r="15" 
                        fill="url(#gradient4)"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 2.5, type: "spring", stiffness: 200 }}
                      >
                        <defs>
                          <radialGradient id="gradient4" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#A78BFA" />
                            <stop offset="100%" stopColor="#7C3AED" />
                          </radialGradient>
                        </defs>
                      </motion.circle>
                      
                      {/* Connection lines */}
                      <motion.path 
                        d="M90 80 L110 90 L100 110 L80 100 L90 80Z" 
                        fill="#A78BFA"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 3, type: "spring", stiffness: 200 }}
                      />
                      <motion.path 
                        d="M110 120 L90 110 L100 90 L120 100 L110 120Z" 
                        fill="#7C3AED"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 3.2, type: "spring", stiffness: 200 }}
                      />
                    </motion.svg>
                  </motion.div>
                </motion.div>
                
                {/* Floating elements */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-8 h-8 bg-indigo-500 rounded-full"
                  variants={floatingVariants}
                  animate="animate"
                />
                <motion.div 
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full"
                  variants={floatingVariants}
                  animate="animate"
                  transition={{ delay: 1 }}
                />
                <motion.div 
                  className="absolute top-1/2 -right-8 w-4 h-4 bg-blue-500 rounded-full"
                  variants={floatingVariants}
                  animate="animate"
                  transition={{ delay: 2 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;