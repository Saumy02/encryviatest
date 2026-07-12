import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const highlightWords = new Set([
  'web',
  'development',
  'cyber',
  'security',
  'digital',
  'marketing',
  'seo',
  'ads',
]);

const SingleServiceHighlight = ({
  title,
  hook,
  description,
  cta,
  imageUrl,
  imageOnRight = true,
}) => {
  const [showDescription, setShowDescription] = useState(false);
  const [crackStarted, setCrackStarted] = useState(false);
  const crackTimeoutRef = useRef(null);

  useEffect(() => () => window.clearTimeout(crackTimeoutRef.current), []);

  const highlightedTitle = useMemo(() =>
    title.split(' ').map((word, i) => {
      const clean = word.replace(/[^a-zA-Z]/g, '').toLowerCase();
      const highlight = highlightWords.has(clean);
      return (
        <span
          key={i}
          className={
            highlight
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400'
              : 'text-white'
          }
        >
          {word + ' '}
        </span>
      );
    }), [title]);

  const handleCrack = () => {
    if (crackStarted) return;
    setCrackStarted(true);
    window.clearTimeout(crackTimeoutRef.current);
    crackTimeoutRef.current = window.setTimeout(() => {
      setShowDescription(true);
      setCrackStarted(false);
    }, 400);
  };

  return (
    <section
      className="py-8 lg:py-14 px-4 sm:px-6 lg:px-8 text-white relative"
      style={{ contentVisibility: 'auto', containIntrinsicSize: '900px' }}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`flex flex-col gap-8 lg:gap-12 ${
            imageOnRight ? 'lg:flex-row' : 'lg:flex-row-reverse'
          } items-center`}
        >
          {/* Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-6">
            {/* Title */}
            <div className="space-y-3">
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                {highlightedTitle}
              </h3>
              <p className="text-xl lg:text-2xl text-gray-300 italic font-medium leading-relaxed">
                {hook}
              </p>
            </div>

            {/* Description animation */}
            <AnimatePresence>
              {showDescription && (
                <motion.div
                  key="desc"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="space-y-6"
                >
                  <p className="text-lg lg:text-lg leading-relaxed text-gray-300">
                    {description}
                  </p>
                  <p className="text-base lg:text-lg text-indigo-300 font-semibold italic">
                    {cta}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Interactive Button */}
            <div className="pt-2">
              {!showDescription ? (
                <div className="relative w-fit mx-auto lg:mx-0">
                  {/* Crack effect container */}
                  <div className="relative overflow-hidden rounded-2xl">
                    {/* Left Half */}
                    <motion.div
                      className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-l-2xl z-10"
                      initial={false}
                      animate={crackStarted ? { x: '-120%' } : { x: 0 }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                    />
                    {/* Right Half */}
                    <motion.div
                      className="absolute inset-0 left-1/2 w-1/2 h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-r-2xl z-10"
                      initial={false}
                      animate={crackStarted ? { x: '120%' } : { x: 0 }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                    />
                    {/* Button Label */}
                    <button
                      onClick={handleCrack}
                      disabled={crackStarted}
                      className="relative z-20 bg-transparent text-white font-bold py-4 px-8 rounded-2xl border-2 border-indigo-500/50 shadow-xl hover:shadow-2xl transition-shadow duration-300"
                    >
                      <span className="flex items-center gap-2">
                        View More
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              ) : (
                <motion.button
                  onClick={() => setShowDescription(false)}
                  className="group bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 mx-auto lg:mx-0"
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center gap-2">
                    View Less
                    <svg
                      className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 15l7-7 7 7"
                      ></path>
                    </svg>
                  </span>
                </motion.button>
              )}
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 flex justify-center items-center relative">
            <div className="relative group">
              {/* Image container */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[550px] lg:h-[550px] object-cover"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      'https://placehold.co/630x630/2A2A2A/FFFFFF?text=Image+Error';
                  }}
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleServiceHighlight;
