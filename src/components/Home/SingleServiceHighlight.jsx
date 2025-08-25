import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

  const highlightWords = ['web', 'development', 'cyber', 'security', 'digital', 'marketing'];

  const renderHighlightedTitle = () =>
    title.split(' ').map((word, i) => {
      const clean = word.replace(/[^a-zA-Z]/g, '').toLowerCase();
      const highlight = highlightWords.includes(clean);
      return (
        <span key={i} className={highlight ? 'text-indigo-400' : ''}>
          {word + ' '}
        </span>
      );
    });

  const handleCrack = () => {
    setCrackStarted(true);
    setTimeout(() => {
      setShowDescription(!showDescription);
      setCrackStarted(false);
    }, 400); // Match duration of split animation
  };

  return (
    <section className="py-20 px-4 text-white relative">
      <div className="max-w-6xl mx-auto">
        <div
          className={`flex flex-col gap-12 ${
            imageOnRight ? 'md:flex-row' : 'md:flex-row-reverse'
          } items-center`}
        >
          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-5xl font-bold mb-4">{renderHighlightedTitle()}</h3>
            <p className="italic mb-4">{hook}</p>

            {/* Description animation */}
            <AnimatePresence>
              {showDescription && (
                <motion.p
                  key="desc"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="text-lg mb-6 leading-relaxed text-gray-300"
                >
                  {description}
                  <p className="text-sm text-gray-400 mt-4 italic bold">{cta}</p>
                </motion.p>
              )}
            </AnimatePresence>

            {/* Crack Button */}
            {!showDescription && (
              <div className="relative w-fit mx-auto">
                {/* Left Half */}
                <motion.div
                  className="absolute inset-0 w-1/2 h-full bg-white rounded-l-full z-10"
                  initial={false}
                  animate={crackStarted ? { x: '-120%' } : { x: 0 }}
                  transition={{ duration: 0.1 }}
                />
                {/* Right Half */}
                <motion.div
                  className="absolute inset-0 left-1/2 w-1/2 h-full bg-white rounded-r-full z-10"
                  initial={false}
                  animate={crackStarted ? { x: '120%' } : { x: 0 }}
                  transition={{ duration: 0.1 }}
                />
                {/* Button Label */}
                <button
                  onClick={handleCrack}
                  disabled={crackStarted}
                  className="relative z-20 bg-transparent text-black font-semibold py-3 px-8 rounded-full border border-white shadow-lg"
                >
                  View More
                </button>
              </div>
            )}

            {/* View Less Button */}
            {showDescription && (
              <button
                onClick={() => setShowDescription(false)}
                className="bg-white text-black font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 mt-4"
              >
                View Less
              </button>
            )}
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center items-center relative">
            <img
              src={imageUrl}
              alt={title}
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
              style={{ width: '630px', height: '630px' }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  'https://placehold.co/630x630/2A2A2A/FFFFFF?text=Image+Error';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleServiceHighlight;
