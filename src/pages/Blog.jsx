import React from 'react';
import { motion } from 'framer-motion';

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

const itemVariants = {
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

const textVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
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

const iconVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0,
    rotate: -180
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  },
  hover: {
    scale: 1.1,
    rotate: 360,
    transition: {
      type: "spring",
      stiffness: 300
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

const floatingVariants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const Blog = () => (
  <motion.div 
    className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <motion.div 
      className="max-w-4xl mx-auto text-center space-y-12 lg:space-y-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      
      {/* Construction SVG Icon - Enhanced styling */}
      <motion.div 
        className="flex justify-center"
        variants={itemVariants}
      >
        <motion.svg 
          className="w-24 h-24 lg:w-32 lg:h-32 mb-8" 
          viewBox="0 0 64 64" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          variants={iconVariants}
          whileHover="hover"
        >
          <motion.ellipse 
            cx="32" 
            cy="56" 
            rx="20" 
            ry="4" 
            fill="#6366F1" 
            fillOpacity="0.3"
            animate={{ 
              rx: [20, 22, 20],
              fillOpacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          <motion.rect 
            x="12" 
            y="28" 
            width="40" 
            height="18" 
            rx="9" 
            fill="#FBBF24" 
            stroke="#B45309" 
            strokeWidth="2"
            whileHover={{ 
              fill: "#FCD34D",
              scale: 1.05
            }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.path 
            d="M16 28c0-8.837 7.163-16 16-16s16 7.163 16 16" 
            fill="#FDE68A" 
            stroke="#B45309" 
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.rect 
            x="22" 
            y="38" 
            width="6" 
            height="8" 
            rx="2" 
            fill="#B45309"
            whileHover={{ fill: "#92400E" }}
          />
          <motion.rect 
            x="36" 
            y="38" 
            width="6" 
            height="8" 
            rx="2" 
            fill="#B45309"
            whileHover={{ fill: "#92400E" }}
          />
          <motion.circle 
            cx="32" 
            cy="36" 
            r="2" 
            fill="#B45309"
            animate={{ 
              scale: [1, 1.2, 1],
              fill: ["#B45309", "#92400E", "#B45309"]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        </motion.svg>
      </motion.div>
      
      {/* Main Content - Enhanced typography and spacing */}
      <motion.div 
        className="space-y-8 lg:space-y-12"
        variants={containerVariants}
      >
        <motion.h1 
          className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 lg:mb-8 drop-shadow-lg leading-tight"
          variants={textVariants}
          animate="visible"
          whileHover={{ 
            scale: 1.02,
            textShadow: "0 0 30px rgba(255, 255, 255, 0.5)"
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Coming Soon
        </motion.h1>
        
        <motion.div 
          className="space-y-6 lg:space-y-8"
          variants={containerVariants}
        >
          <motion.p 
            className="text-xl lg:text-2xl xl:text-3xl text-gray-300 leading-relaxed"
            variants={textVariants}
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Our blog page is under construction. Stay tuned!
          </motion.p>
          
          <motion.p 
            className="text-lg lg:text-xl text-gray-400 leading-relaxed"
            variants={textVariants}
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            We're working hard to bring you insightful content about web development, cybersecurity, and digital marketing.
          </motion.p>
        </motion.div>
        
        {/* Call to Action - Enhanced styling */}
        <motion.div 
          className="pt-8 lg:pt-12"
          variants={buttonVariants}
        >
          <motion.a 
            href="/contact" 
            className="inline-flex items-center px-8 lg:px-12 py-4 lg:py-5 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg text-lg lg:text-xl"
            whileHover="hover"
            whileTap="tap"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  </motion.div>
);

export default Blog;
