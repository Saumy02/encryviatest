import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  // Container animation
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

  // Text animations
  const textVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  // Button animations
  const buttonVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 25 }
    },
    hover: { scale: 1.05, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)" },
    tap: { scale: 0.95 }
  };

  // Image floating animation
  const floatingVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9, rotate: 5 },
    visible: {
      opacity: 1,
      y: [0, 15, 0, 15, 0],
      scale: [1, , 1],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Right column fade-in
  const visualVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } }
  };

  return (
    <motion.div
      className="relative min-h-screen overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="relative  flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto w-full ">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Left Column */}
            <motion.div className="text-center lg:text-left space-y-6 lg:px-8" variants={containerVariants}>
              <motion.div className="space-y-5" variants={textVariants}>
                <motion.h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight">
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

                <motion.p
                  className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                  variants={textVariants}
                >
                  "Build, Protect & Grow — Web Development, Cybersecurity, and SEO & Ads strategies designed for
                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 font-semibold"
                    whileHover={{ scale: 1.05 }}
                  >
                    {" "}real-world impact
                  </motion.span>."
                </motion.p>
              </motion.div>

              {/* CTA Buttons */}

              <motion.div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" variants={containerVariants}>
                <Link to="">
                  <motion.button
                    className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <span className="relative z-10">Get Started</span>
                  </motion.button>
                </Link>

                <Link to="/about">
                  <motion.button
                    className="group px-8 py-4 border-2 border-indigo-500/50 text-indigo-400 font-semibold rounded-xl hover:bg-indigo-500/10 hover:border-indigo-400"
                    variants={buttonVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center justify-center gap-2">
                      Learn More
                    </span>
                  </motion.button>
                </Link>
              </motion.div>

              {/* Scroll Indicator */}
              <motion.div className="pt-6" variants={textVariants}>
                <div className="flex flex-col items-center lg:items-start space-y-2 text-gray-400">
                  <motion.span animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}>
                    Scroll to explore
                  </motion.span>
                  <motion.div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                    <motion.div
                      className="w-1 h-3 bg-gray-400 rounded-full mt-2"
                      animate={{ y: [0, 12, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column: Hero Image */}
            <motion.div className="flex justify-center lg:justify-end relative" variants={visualVariants}>
              <motion.img
                src="/image/hero_image.png"
                alt="Hero Visual"
                className="w-[280px] sm:w-[360px] md:w-[420px] lg:w-[480px] xl:w-[520px] object-contain drop-shadow-2xl" s
                onError={(e) => { e.currentTarget.src = "https://placehold.co/500x500/0a0a0a/FFF?text=Hero+Image"; }}
              />
            </motion.div>

          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
