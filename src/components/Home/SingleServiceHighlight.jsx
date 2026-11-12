import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowUpRight, ChevronDown } from 'lucide-react';

const SingleServiceHighlight = ({
  badge,
  title,
  highlightWord,
  middleWord,
  highlightWord2,
  titleRest,
  hook,
  description,
  closingLine,
  listTitle = "What We Deliver:",
  items = [],
  ctaText = "Explore Service Page",
  imageUrl,
  imageAlt,
  link = "/services",
  imageOnRight = false,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="py-4 sm:py-6 text-white relative w-full overflow-visible">
      <div className="max-w-7xl mx-auto overflow-visible">
        <div
          className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 overflow-visible ${
            imageOnRight ? 'lg:flex-row-reverse' : 'lg:flex-row'
          }`}
        >
          {/* Image Column (lg:w-1/2 matching Why Should You Trust Us) */}
          <div className="lg:w-1/2 flex justify-center items-center w-full p-2 overflow-visible">
            <Link to={link} className="relative group w-full h-full flex items-center justify-center block">
              {/* Ambient Purple Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl opacity-30 blur-xl group-hover:opacity-55 transition duration-500 pointer-events-none" />
              <img
                src={imageUrl}
                alt={imageAlt || title}
                className="rounded-3xl relative shadow-2xl object-cover border border-white/10 w-full h-full min-h-[340px] sm:min-h-[400px] lg:min-h-[440px] max-h-[500px]"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://placehold.co/600x600/4F46E5/ffffff?text=EncryVia+Service';
                }}
              />
            </Link>
          </div>

          {/* Content Column (lg:w-1/2 text-left matching Why Should You Trust Us) */}
          <div className="lg:w-1/2 text-left space-y-6 w-full">
            <Link to={link} className="block group">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-left">
                {highlightWord ? (
                  <>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-pink-400">
                      {highlightWord}
                    </span>
                    {middleWord && <span>{middleWord}</span>}
                    {highlightWord2 && (
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-pink-400">
                        {highlightWord2}
                      </span>
                    )}
                    <span>{titleRest}</span>
                  </>
                ) : (
                  title
                )}
              </h3>
            </Link>

            {hook && (
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 italic leading-relaxed text-left">
                {hook}
              </p>
            )}

            {/* Expandable Details Drawer */}
            <AnimatePresence>
              {showDetails && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden space-y-4 pt-1 text-left"
                >
                  {description && (
                    <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed text-left">
                      {description}
                    </p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Action Buttons: View Details + Explore Service Page */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-purple-600/30 hover:shadow-purple-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-sm sm:text-base cursor-pointer w-full sm:w-auto"
                aria-expanded={showDetails}
              >
                <span>{showDetails ? 'Hide Details' : 'View Details'}</span>
                <motion.div animate={{ rotate: showDetails ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown size={18} />
                </motion.div>
              </button>

              <Link
                to={link}
                className="bg-purple-950/40 hover:bg-purple-900/60 border border-purple-500/40 hover:border-purple-400/70 text-purple-100 hover:text-white font-bold px-6 py-3 rounded-2xl flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-sm sm:text-base group w-full sm:w-auto"
              >
                <span>{ctaText || 'Explore Service Page'}</span>
                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SingleServiceHighlight);
