import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AutoSwappingClientReview = ({ testimonials, reviews, interval = 5000 }) => {
  // Use testimonials if provided, otherwise fall back to reviews
  const data = testimonials || reviews || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideKey, setSlideKey] = useState(0); // Force re-renders
  const [direction, setDirection] = useState(1);
  const timerRef = useRef();

  // Reset index if data changes
  useEffect(() => {
    setCurrentIndex(0);
    setSlideKey(0);
  }, [data]);

  // Navigation handlers with direction and key management
  const goToNext = useCallback(() => {
    if (data.length === 0) return;
    setDirection(1);
    setCurrentIndex(prev => {
      const newIndex = (prev + 1) % data.length;
      setSlideKey(k => k + 1);
      return newIndex;
    });
  }, [data.length]);

  const goToPrevious = useCallback(() => {
    if (data.length === 0) return;
    setDirection(-1);
    setCurrentIndex(prev => {
      const newIndex = (prev - 1 + data.length) % data.length;
      setSlideKey(k => k + 1);
      return newIndex;
    });
  }, [data.length]);

  const goToSlide = useCallback((index) => {
    if (data.length === 0 || index === currentIndex) return;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(() => {
      setSlideKey(k => k + 1);
      return index;
    });
  }, [currentIndex, data.length]);

  // Auto-slide with proper cleanup
  useEffect(() => {
    if (data.length === 0) return;
    
    if (timerRef.current) clearInterval(timerRef.current);
    
    timerRef.current = setInterval(() => {
      goToNext();
    }, interval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [goToNext, interval, data.length]);

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

  // Single slide animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    })
  };

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
            onClick={goToPrevious}
            className="absolute left-1 md:left-3 top-1/2 -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-lg z-10 transition duration-300 hover:bg-gray-300 focus:outline-none"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          {/* Single AnimatePresence for entire slide */}
          <div className="relative min-h-[200px] flex items-center w-full">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={slideKey}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.2 }
                }}
                className="flex flex-col md:flex-row items-center w-full"
              >
                {/* Review content */}
                <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 md:pr-8">
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
                </div>

                {/* Review image */}
                <div className="md:w-1/2 flex justify-center items-center">
                  <motion.img
                    src={currentReview.image}
                    alt={currentReview.author || "Client Review"}
                    className="rounded-2xl shadow-lg object-cover w-full h-full max-w-[630px] max-h-[630px]"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://placehold.co/630x630/2A2A2A/FFFFFF?text=Client+Review+Image";
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ scale: 1.05 }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right arrow */}
          <motion.button
            onClick={goToNext}
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
            onClick={() => goToSlide(idx)}
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
