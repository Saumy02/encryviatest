import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 120 : -120,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 120 : -120,
    opacity: 0,
  }),
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: {
      type: 'spring',
      stiffness: 280,
    },
  },
  tap: {
    scale: 0.97,
  },
};

const AutoSwappingClientReview = ({ testimonials, reviews, interval = 5000 }) => {
  const data = testimonials || reviews || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef(null);

  useEffect(() => {
    setCurrentIndex(0);
  }, [data]);

  const goToNext = useCallback(() => {
    if (data.length === 0) return;
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % data.length);
  }, [data.length]);

  const goToPrevious = useCallback(() => {
    if (data.length === 0) return;
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
  }, [data.length]);

  const goToSlide = useCallback((index) => {
    if (data.length === 0 || index === currentIndex) return;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex, data.length]);

  useEffect(() => {
    if (data.length === 0) return undefined;

    window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(goToNext, interval);

    return () => window.clearInterval(timerRef.current);
  }, [data.length, goToNext, interval]);

  if (!data.length) {
    return (
      <section className="py-20 px-6 text-white relative">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <p className="text-xl text-gray-400">No testimonials available</p>
        </div>
      </section>
    );
  }

  const currentReview = data[currentIndex];
  if (!currentReview) return null;

  return (
    <section
      className="py-10 px-6 text-white relative"
      style={{ contentVisibility: 'auto', containIntrinsicSize: '700px' }}
    >
      <div className="max-w-4xl mx-auto flex items-center justify-center">
        <div className="relative w-full rounded-3xl overflow-hidden bg-black/20 border border-white/20 shadow-2xl shadow-black/40 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between">
          <button
            onClick={goToPrevious}
            className="absolute left-1 md:left-3 top-1/2 -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-lg z-10 transition duration-300 hover:bg-gray-300 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="relative min-h-[200px] flex items-center w-full">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="flex flex-col md:flex-row items-center w-full"
              >
                <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 md:pr-8">
                  <p className="text-lg md:text-xl mb-4 leading-relaxed">
                    "{currentReview.text}"
                  </p>
                  <h3 className="text-xl font-semibold mb-2">
                    {currentReview.author}
                  </h3>
                  <div className="flex justify-center md:justify-start">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < currentReview.rating ? 'text-green-400' : 'text-gray-400'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.97 6.06h6.388c.969 0 1.371 1.24.588 1.81l-5.174 3.754 1.97 6.06c.3.921-.755 1.688-1.539 1.158L10 16.294l-5.174 3.754c-.784.53-1.839-.237-1.539-1.158l1.97-6.06L.963 10.797c-.783-.57-.38-1.81.588-1.81h6.388l1.97-6.06z" />
                      </svg>
                    ))}
                  </div>
                </div>

                <div className="md:w-1/2 flex justify-center items-center">
                  <img
                    src={currentReview.image}
                    alt={currentReview.author || 'Client Review'}
                    className="rounded-2xl shadow-lg object-cover w-full h-full max-w-[630px] max-h-[630px]"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://placehold.co/630x630/2A2A2A/FFFFFF?text=Client+Review+Image';
                    }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={goToNext}
            className="absolute right-1 md:right-3 top-1/2 -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-lg z-10 transition duration-300 hover:bg-gray-300 focus:outline-none"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {data.map((_, idx) => (
          <motion.button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${idx === currentIndex ? 'bg-white' : 'bg-gray-500 hover:bg-gray-400'}`}
            aria-label={`Go to slide ${idx + 1}`}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          />
        ))}
      </div>
    </section>
  );
};

export default React.memo(AutoSwappingClientReview);
