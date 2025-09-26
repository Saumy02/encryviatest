import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AutoSwappingClientReview = ({ testimonials, reviews, interval = 5000 }) => {
  // Use testimonials if provided, otherwise fall back to reviews
  const data = testimonials || reviews || [];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset index if data changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [data]);

  useEffect(() => {
    if (data.length === 0) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, interval);
    return () => clearInterval(timer);
  }, [data.length, interval]);

  // Don't render if no data
  if (!data || data.length === 0) {
    return (
      <section className="py-20 px-6 text-white relative">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <div className="text-center">
            <p className="text-xl text-gray-400">No testimonials available</p>
          </div>
        </div>
      </section>
    );
  }

  const currentReview = data[currentIndex];
  if (!currentReview) return null;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 25
      }
    },
    exit: { 
      opacity: 0, 
      x: 50,
      transition: {
        duration: 0.3
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.2
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      rotateY: 15,
      transition: {
        duration: 0.3
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      boxShadow: "0 10px 30px rgba(255, 255, 255, 0.3)",
      transition: {
        type: "spring",
        stiffness: 300
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const dotVariants = {
    hover: {
      scale: 1.2,
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  return (
    <motion.section 
      className="py-10 px-6 text-white relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-4xl mx-auto flex items-center justify-center">
        <div className="relative w-full rounded-3xl overflow-hidden bg-transparent supports-[backdrop-filter]:bg-transparent backdrop-blur-2xl supports-[backdrop-filter]:backdrop-blur-2xl border-2 border-white/30 ring-1 ring-white/10 shadow-2xl shadow-black/50 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between">
          {/* Glass highlight overlay */}
          <div className="pointer-events-none absolute inset-px rounded-3xl bg-gradient-to-b from-white/12 via-white/5 to-transparent"></div>
          {/* Left arrow */}
          <motion.button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + data.length) % data.length)}
            className="absolute left-1 md:left-3 top-1/2 -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-lg z-10 transition duration-300 hover:bg-gray-300 focus:outline-none"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          {/* Review content */}
          <div className="flex flex-col md:flex-row items-center w-full">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentIndex}
                className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 md:pr-8"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.p 
                  className="text-lg md:text-xl mb-4 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  ❝{currentReview.text}❞
                </motion.p>
                <motion.h3 
                  className="text-xl font-semibold mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {currentReview.author}
                </motion.h3>
                <motion.div 
                  className="flex justify-center md:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.svg
                      key={i}
                      className={`w-5 h-5 ${i < currentReview.rating ? 'text-green-400' : 'text-gray-400'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.4 + i * 0.1, type: "spring", stiffness: 200 }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.97 6.06h6.388c.969 0 1.371 1.24.588 1.81l-5.174 3.754 1.97 6.06c.3.921-.755 1.688-1.539 1.158L10 16.294l-5.174 3.754c-.784.53-1.839-.237-1.539-1.158l1.97-6.06L.963 10.797c-.783-.57-.38-1.81.588-1.81h6.388l1.97-6.06z" />
                    </motion.svg>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Review image */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={`image-${currentIndex}`}
                className="md:w-1/2 flex justify-center items-center"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.img
                  src={currentReview.image}
                  alt={currentReview.author || "Client Review"}
                  className="rounded-2xl shadow-lg object-cover w-full h-full max-w-[630px] max-h-[630px]"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/630x630/2A2A2A/FFFFFF?text=Client+Review+Image";
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right arrow */}
          <motion.button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % data.length)}
            className="absolute right-1 md:right-3 top-1/2 -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-lg z-10 transition duration-300 hover:bg-gray-300 focus:outline-none"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Dots navigation */}
      <motion.div 
        className="flex justify-center mt-8 space-x-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {data.map((_, idx) => (
          <motion.button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-white' : 'bg-gray-500 hover:bg-gray-400'}`}
            aria-label={`Go to slide ${idx + 1}`}
            variants={dotVariants}
            whileHover="hover"
            whileTap={{ scale: 0.8 }}
          ></motion.button>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default AutoSwappingClientReview;
