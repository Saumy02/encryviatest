import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const serviceLinks = {
  'Web/App Development': '/services/web-and-app-development',
  'Cyber Security': '/services/cybersecurity',
  'SEO/GEO & Ads': '/services/seo-geo-and-ads',
  'FAQ': '/faq',
  'Analytics': '/faq'
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 18 }
  }
};

const HighlightBanner = ({ slides }) => {
  const memoizedSlides = useMemo(() => (Array.isArray(slides) ? slides : []), [slides]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const videoRefs = useRef([]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === hoveredIndex) {
        const playPromise = video.play();
        if (playPromise && typeof playPromise.catch === 'function') {
          playPromise.catch(() => {});
        }
      } else {
        video.pause();
      }
    });
  }, [hoveredIndex, memoizedSlides.length]);

  if (memoizedSlides.length === 0) return null;

  return (
    <section
      className="relative py-3 sm:py-4 lg:py-5 px-4 text-white flex flex-col items-center overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full max-w-5xl h-64 bg-gradient-to-r from-purple-600/10 via-indigo-600/20 to-pink-600/10 blur-3xl rounded-full" />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        onMouseLeave={() => setHoveredIndex(null)}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto pb-4 relative z-10 place-items-center w-full"
      >
        {memoizedSlides.map((slide, index) => {
          const isHovered = index === hoveredIndex;
          const routeLink = serviceLinks[slide.title] || '/services';

          return (
            <motion.div
              key={`${slide.type}-${slide.url}-${index}`}
              variants={cardVariants}
              animate={{
                y: isHovered ? -8 : [0, index % 2 === 0 ? -6 : 6, 0]
              }}
              transition={{
                y: isHovered ? { duration: 0.3 } : { duration: 4 + index, repeat: Infinity, ease: 'easeInOut' }
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="flex flex-col items-center text-center p-2 flex-shrink-0 group cursor-pointer"
            >
              {/* Arched Pill Capsule Card */}
              <div 
                className={`relative rounded-full overflow-hidden flex items-center justify-center bg-gray-900 shadow-2xl mb-5 w-[220px] h-[350px] sm:w-[240px] sm:h-[380px] border-2 transition-all duration-500 ${
                  isHovered 
                    ? 'border-purple-500 shadow-purple-500/40 shadow-2xl scale-105' 
                    : 'border-white/10 group-hover:border-purple-500/50 group-hover:scale-102'
                }`}
              >
                {/* Glowing Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-purple-900/20 transition-opacity duration-300 ${isHovered ? 'opacity-80' : 'opacity-40 group-hover:opacity-60'}`} />

                {slide.type === 'video' ? (
                  <video
                    ref={(node) => {
                      videoRefs.current[index] = node;
                    }}
                    src={slide.url}
                    muted
                    loop
                    playsInline
                    preload={isHovered ? 'metadata' : 'none'}
                    autoPlay={isHovered}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  <img
                    src={slide.url}
                    alt={slide.title || 'highlight'}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                )}

                {/* Top Active Badge */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8, y: -4 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: -4 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-4 px-3 py-1 rounded-full bg-purple-600/90 text-white text-[10px] font-extrabold uppercase tracking-widest border border-purple-400/50 shadow-lg flex items-center space-x-1 pointer-events-none z-20"
                    >
                      <Sparkles size={12} className="animate-spin" />
                      <span>EXPLORE</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Bottom Overlay Link CTA */}
                <div className="absolute bottom-6 left-0 right-0 px-4 text-center">
                  <Link 
                    to={routeLink} 
                    className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-full bg-black/70 border border-white/20 text-xs font-bold text-white hover:bg-purple-600 transition-colors shadow-lg"
                  >
                    <span>Learn More</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Title Link */}
              <Link to={routeLink}>
                <h4
                  className={`text-lg sm:text-xl font-bold transition-all duration-300 flex items-center space-x-1 ${
                    isHovered ? 'text-[rgb(168,85,247)] scale-105' : 'text-gray-300 group-hover:text-white'
                  }`}
                >
                  <span>{slide.title}</span>
                </h4>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default React.memo(HighlightBanner);
