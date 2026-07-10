import React, { useEffect, useMemo, useCallback, useRef } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HighlightBanner = ({ slides }) => {
  const controls = useAnimation();

  // Use a ref for the custom scroll container to avoid reinitializing observers
  const scrollRootRef = useRef(null);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    scrollRootRef.current = document.querySelector('[data-smooth-scroll-container]') || null;
  }, []);

  // In-view with stable root ref
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
    root: scrollRootRef.current || undefined,
    rootMargin: '200px 0px',
  });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);

  const memoizedSlides = useMemo(() => (Array.isArray(slides) ? slides : []), [slides]);
  if (memoizedSlides.length === 0) return null;

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.08,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        opacity: { duration: 0.6 },
        y: { duration: 0.8 },
        scale: { duration: 0.8 },
      },
    }),
  };

  const handleVideoError = useCallback((e) => {
    const video = e.currentTarget;
    video.style.display = 'none';
    const fallback = document.createElement('div');
    fallback.className = 'w-full h-full bg-gray-800 flex items-center justify-center';
    fallback.textContent = 'Video not available';
    video.parentNode?.appendChild(fallback);
  }, []);

  const handleImageError = useCallback((e) => {
    const img = e.currentTarget;
    img.onerror = null;
    img.src = 'https://placehold.co/288x456/2A2A2A/FFFFFF?text=Image';
  }, []);

  // Stable motion container without AnimatePresence to avoid list flicker
  return (
    <section
      ref={ref}
      className="relative py-10 px-4 text-white flex flex-col items-center overflow-hidden"
      style={{
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        willChange: 'transform, opacity',
      }}
    >
      <div className="flex flex-wrap justify-center items-start gap-6 max-w-7xl mx-auto pb-2">
        {memoizedSlides.map((slide, index) => (
          <motion.div
            key={`${slide.type}-${slide.url}-${index}`}
            className="flex flex-col items-center text-center p-4 flex-shrink-0"
            custom={index}
            initial="hidden"
            animate={controls}
            variants={cardVariants}
            whileHover={{
              scale: 1.1,
              zIndex: 10,
              transition: {
                type: 'spring',
                stiffness: 400,
                damping: 20,
                mass: 0.8,
              },
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 20,
              mass: 0.5,
            }}
            style={{
              willChange: 'transform, opacity',
              transform: 'translateZ(0)',
            }}
          >
            <motion.div
              className="rounded-full overflow-hidden flex items-center justify-center bg-gray-800 shadow-2xl mb-4 w-[238px] h-[377px]"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3, ease: 'easeOut' },
              }}
              style={{
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                willChange: 'transform',
              }}
            >
              {slide.type === 'video' ? (
                <video
                  src={slide.url}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover"
                  style={{
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden',
                    willChange: 'transform',
                    transformStyle: 'preserve-3d',
                    WebkitTransformStyle: 'preserve-3d',
                    WebkitFontSmoothing: 'antialiased',
                    WebkitBackfaceVisibility: 'hidden',
                    WebkitPerspective: 1000,
                    WebkitTransform: 'translate3d(0,0,0)',
                  }}
                  onLoadedData={(e) => {
                    const video = e.currentTarget;
                    // Force hardware acceleration
                    video.style.transform = 'translate3d(0,0,0)';
                    const playPromise = video.play();
                    if (playPromise !== undefined) {
                      playPromise.catch(() => {
                        const playVideo = () => {
                          video.play().catch(() => {});
                          document.removeEventListener('click', playVideo);
                        };
                        document.addEventListener('click', playVideo, { once: true });
                      });
                    }
                  }}
                  onError={handleVideoError}
                  onPlay={(e) => {
                    // Correctly use the event param and force repaint
                    const video = e.currentTarget;
                    video.style.transform = 'translateZ(0)';
                    requestAnimationFrame(() => {
                      video.style.transform = 'translateZ(0.1px)';
                      requestAnimationFrame(() => {
                        video.style.transform = 'translateZ(0)';
                      });
                    });
                  }}
                />
              ) : (
                <img
                  src={slide.url}
                  alt={slide.title || 'highlight'}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  style={{
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    willChange: 'transform',
                  }}
                  onError={handleImageError}
                />
              )}
            </motion.div>
            <p className="text-xl font-semibold">{slide.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default React.memo(HighlightBanner);
