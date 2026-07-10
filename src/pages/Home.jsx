import React, { Suspense, lazy, useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ErrorBoundary } from 'react-error-boundary';
import SEO from '../components/SEO';

// Lazy-loaded components with error handling
const Hero = lazy(() => 
  import('../components/Home/Hero').catch(() => ({
    default: () => <div className="text-white text-center py-20">Failed to load Hero component</div>
  }))
);

const HighlightBanner = lazy(() => 
  import('../components/Home/HighlightBanner').catch(() => ({
    default: () => <div className="text-white text-center py-20">Failed to load HighlightBanner</div>
  }))
);

const DrivenByIndependence = lazy(() => 
  import('../components/Home/DrivenByIndependence').catch(() => ({
    default: () => <div className="text-white text-center py-20">Failed to load DrivenByIndependence</div>
  }))
);

const WhyTrustUsSection = lazy(() => 
  import('../components/Home/WhyTrustUsSection').catch(() => ({
    default: () => <div className="text-white text-center py-20">Failed to load WhyTrustUsSection</div>
  }))
);

const SingleServiceHighlight = lazy(() => 
  import('../components/Home/SingleServiceHighlight').catch(() => ({
    default: () => <div className="text-white text-center py-20">Failed to load SingleServiceHighlight</div>
  }))
);

const AutoSwappingClientReview = lazy(() => 
  import('../components/Home/AutoSwappingClientReview').catch(() => ({
    default: () => <div className="text-white text-center py-20">Failed to load AutoSwappingClientReview</div>
  }))
);

const ConnectNow = lazy(() => 
  import('../components/Home/ConnectNow').catch(() => ({
    default: () => <div className="text-white text-center py-20">Failed to load ConnectNow</div>
  }))
);

const NewsletterSubscribe = lazy(() => 
  import('../components/Home/NewsletterSubscribe').catch(() => ({
    default: () => <div className="text-white text-center py-20">Failed to load NewsletterSubscribe</div>
  }))
);

// Import JSON data
import testimonials from '../data/testimonials.json';
import services from '../components/Home/services.json';
import slides from '../components/Home/slides.json';

// Loader fallback
const Loader = ({ height = "50vh" }) => (
  <div className={`min-h-[${height}] flex items-center justify-center`}>
    <motion.div 
      className="flex flex-col items-center space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <motion.p 
        className="text-gray-400 text-lg"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Loading...
      </motion.p>
    </motion.div>
  </div>
);

const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="text-center p-8 bg-red-900/20 rounded-lg border border-red-500/30 max-w-md">
      <h2 className="text-2xl font-bold text-red-400 mb-4">Something went wrong</h2>
      <p className="text-gray-300 mb-6 text-sm">{error?.message || 'An error occurred'}</p>
      <button
        onClick={resetErrorBoundary}
        className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300"
      >
        Try again
      </button>
    </div>
  </div>
);
// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

// Animated section wrapper
const AnimatedSection = React.memo(({ children, className = "", delay = 0 }) => {
  // Detect the scroll container element after mount (the custom scroll wrapper)
  const [scrollRoot, setScrollRoot] = useState(null);

  useEffect(() => {
    // Look for the specific attribute we set on the SmoothScroll wrapper
    const rootEl = typeof window !== 'undefined' ? document.querySelector('[data-smooth-scroll-container]') : null;
    setScrollRoot(rootEl);
  }, []);

  // Pass found scrollRoot to useInView as `root` so IntersectionObserver watches the right container
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.02,
    root: scrollRoot || undefined,
    rootMargin: "200px 0px 200px 0px"
  });

  return (
    <motion.section
      ref={ref}
      className={`will-change-auto ${className}`}
      variants={sectionVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay, duration: 0.6 }}
    >
      <Suspense fallback={<div className="min-h-[300px]"></div>}>
        {children}
      </Suspense>
    </motion.section>
  );
});

const SmoothScroll = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Apply smooth scroll behavior
    container.style.scrollBehavior = "smooth";
    
    // Add scroll event listener for performance monitoring
    const handleScroll = () => {
      if (container.scrollTop > 100) {
        document.body.classList.add('scrolled');
      } else {
        document.body.classList.remove('scrolled');
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div
      ref={containerRef}
      // important: mark this element so hooked components can find it and use as IntersectionObserver root
      data-smooth-scroll-container
      className="min-h-screen overflow-y-auto overflow-x-hidden"
      style={{
        WebkitOverflowScrolling: 'touch',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}
    >
      {/* Hide scrollbar for Chrome/Safari */}
      <style jsx global>{`
        ::-webkit-scrollbar {
          display: none;
          width: 0;
          height: 0;
        }
      `}</style>
      {children}
    </div>
  );
};

const Home = () => {
  return (
     <>
      {/* Add SEO component here */}
      <SEO 
        title="EncryVia | Web Development, Security & SEO Services in India"
        description="3-in-1 digital solutions: web development, cybersecurity & AI-driven marketing in India. Fast websites, secure systems, higher rankings. Packages from ₹25K."
        keywords="web development India, cybersecurity services, SEO services India, digital solutions provider, AI-driven marketing, custom website development, integrated IT services"
        ogUrl="https://encryvia.com"
      />

    <motion.div
      className="min-h-screen bg-transparent overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <AnimatedSection className="min-h-screen flex items-center justify-center">
        <Suspense fallback={<Loader />}>
          <Hero />
        </Suspense>
      </AnimatedSection>

      {/* Highlight Banner */}
      <AnimatedSection className="relative py-8 lg:py-8" delay={0.2}>
        <div className="relative z-10">
          <HighlightBanner slides={slides} />
        </div>
      </AnimatedSection>

      {/* Driven by Independence */}
      <AnimatedSection className="relative" delay={0.3}>
        <div className="relative z-10">
          <DrivenByIndependence />
        </div>
      </AnimatedSection>

      {/* Why Trust Us */}
      <AnimatedSection className="relative" delay={0.4}>
        <div className="relative z-10">
          <WhyTrustUsSection />
        </div>
      </AnimatedSection>

      {/* Services */}
      <AnimatedSection className="relative" delay={0.5}>
        <div className="relative z-10 mt-20">
          <motion.div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="text-center mb-4 lg:mb-2" variants={itemVariants}>
              <motion.h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Services</span>
              </motion.h2>
              <motion.p className="text-lg lg:text-2xl text-gray-300 max-w-4xl mt-4 mx-auto leading-relaxed">
                Comprehensive digital solutions designed to elevate your business presence and drive measurable results
              </motion.p>
            </motion.div>

            <motion.div className="space-y-12 lg:space-y-6" variants={containerVariants}>
              {Array.isArray(services) && services.length > 0 ? (
                services.map((service, index) => (
                  <motion.div
                    key={`service-${index}`}
                    className="relative"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <div className="relative z-10">
                      <SingleServiceHighlight
                        title={service.title}
                        hook={service.hook}
                        description={service.description}
                        cta={service.cta}
                        imageUrl={service.imageUrl}
                        imageOnRight={index % 2 === 0}
                      />
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-20 text-gray-400">
                  <p>No services data available</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

       {/* Client Reviews */}
      <AnimatedSection className="relative py-16 lg:py-20" delay={0.7}>
        <div className="relative z-10">
          <motion.div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="text-center mb-12 lg:mb-16" variants={itemVariants}>
              <motion.h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
                What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Clients Say</span>
              </motion.h2>
              <motion.p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Real feedback from businesses we've helped transform and grow
              </motion.p>
            </motion.div>

            <motion.div variants={itemVariants}>
              {/* Passing testimonials to AutoSwappingClientReview */}
              <AutoSwappingClientReview testimonials={testimonials} />
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Connect Now */}
      <AnimatedSection className="relative py-16 lg:py-20" delay={0.7}>
        <div className="relative z-10">
          <ConnectNow />
        </div>
      </AnimatedSection>

      {/* Newsletter */}
      <AnimatedSection className="relative py-16 lg:py-20" delay={0.8}>
        <div className="relative z-10">
          <NewsletterSubscribe />
        </div>
      </AnimatedSection>
    </motion.div>
     </>
  );
};

// Final export with SmoothScroll wrapper
// export default React.memo(function SmoothScrollHome() {
//   return (
//     <SmoothScroll>
//       <Home />
//     </SmoothScroll>
//   );
// });

export default React.memo(function SmoothScrollHome() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <SmoothScroll>
        <Home />
      </SmoothScroll>
    </ErrorBoundary>
  );
});