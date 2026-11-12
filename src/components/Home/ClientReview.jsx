import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import reviews from '../data/clientReviews.json';

const ClientReview = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [reviewKey, setReviewKey] = useState(0);
  const autoSlide = useRef();

  useEffect(() => {
    if (autoSlide.current) clearInterval(autoSlide.current);
    autoSlide.current = setInterval(() => handleNext(), 5000);
    return () => clearInterval(autoSlide.current);
  }, [currentReviewIndex]);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentReviewIndex(prev => {
      const newIndex = prev === reviews.length - 1 ? 0 : prev + 1;
      setReviewKey(k => k + 1);
      return newIndex;
    });
  }, [reviews.length]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentReviewIndex(prev => {
      const newIndex = prev === 0 ? reviews.length - 1 : prev - 1;
      setReviewKey(k => k + 1);
      return newIndex;
    });
  }, [reviews.length]);

  const handleDotClick = (index) => {
    if (index === currentReviewIndex) return;
    setDirection(index > currentReviewIndex ? 1 : -1);
    setCurrentReviewIndex(() => {
      setReviewKey(k => k + 1);
      return index;
    });
  };

  if (!reviews || reviews.length === 0) {
    return (
      <div className="text-center text-gray-400 p-8">
        No reviews available
      </div>
    );
  }

  const currentReview = reviews[currentReviewIndex];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4">
      <div className="relative bg-gradient-to-br from-purple-700 to-indigo-700 p-6 sm:p-8 rounded-2xl shadow-2xl overflow-hidden">

        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12" />

        {/* Left Arrow */}
        <motion.button
          onClick={handlePrev}
          className="absolute top-1/2 -left-6 sm:-left-8 transform -translate-y-1/2 p-3 bg-gray-800/90 backdrop-blur-sm rounded-full text-white z-30 hover:bg-gray-700 transition-colors duration-200 shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Previous review"
        >
          <ChevronLeft size={24} />
        </motion.button>

        {/* Review Content */}
        <div className="relative min-h-[200px] flex items-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={reviewKey}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="w-full"
            >
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8">

                {/* Text Content */}
                <div className="flex-1 text-center lg:text-left space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <blockquote className="text-gray-100 text-base sm:text-lg leading-relaxed mb-6 italic">
                      "{currentReview.text}"
                    </blockquote>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-3"
                  >
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {currentReview.name || 'Client Review'}
                    </h3>
                    
                    {currentReview.company && (
                      <p className="text-[rgb(168,85,247)] font-medium">
                        {currentReview.company}
                      </p>
                    )}

                    {/* Star Rating */}
                    <div className="flex justify-center lg:justify-start gap-1">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + i * 0.1 }}
                        >
                          <Star
                            size={20}
                            className={`${
                              i < (currentReview.rating || 5)
                                ? 'text-yellow-400 fill-yellow-400'
                                : 'text-gray-400'
                            } transition-colors duration-200`}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Client Image */}
                <motion.div
                  className="flex-shrink-0"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl blur opacity-30" />
                    <img
                      src={currentReview.image}
                      alt={currentReview.name || 'Client'}
                      className="relative w-32 h-32 sm:w-36 sm:h-36 object-cover rounded-xl shadow-lg"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://placehold.co/150x150/6366F1/FFFFFF?text=Client';
                      }}
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow */}
        <motion.button
          onClick={handleNext}
          className="absolute top-1/2 -right-6 sm:-right-8 transform -translate-y-1/2 p-3 bg-gray-800/90 backdrop-blur-sm rounded-full text-white z-30 hover:bg-gray-700 transition-colors duration-200 shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Next review"
        >
          <ChevronRight size={24} />
        </motion.button>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 mt-6">
          {reviews.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentReviewIndex
                  ? 'bg-white scale-110'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
