import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Hero from '../components/Home/Hero';
import HighlightBanner from '../components/Home/HighlightBanner';
import DrivenByIndependence from '../components/Home/DrivenByIndependence';
import WhyTrustUsSection from '../components/Home/WhyTrustUsSection';
import SingleServiceHighlight from '../components/Home/SingleServiceHighlight';
import AutoSwappingClientReview from '../components/Home/AutoSwappingClientReview';
import ConnectNow from '../components/Home/ConnectNow';
import NewsletterSubscribe from '../components/Home/NewsletterSubscribe';
import testimonials from '../data/testimonials.json';
import services from '../components/Home/services.json';
import slides from '../components/Home/slides.json';

// Animation variants for sections
const sectionVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

// Animated section wrapper
const AnimatedSection = ({ children, className = "", delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px"
  });

  return (
    <motion.section
      ref={ref}
      className={className}
      variants={sectionVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay }}
    >
      {children}
    </motion.section>
  );
};

const Home = () => {
  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Hero Section */}
      <AnimatedSection>
        <Hero />
      </AnimatedSection>

      {/* Highlight Banner Section */}
      <AnimatedSection className="relative py-16 lg:py-20" delay={0.2}>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 to-purple-900/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        />
        <div className="relative z-10">
          <HighlightBanner slides={slides} />
        </div>
      </AnimatedSection>

      {/* Driven by Independence Section */}
      <AnimatedSection className="relative  " delay={0.3}>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-800/10 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        />
        <div className="relative z-10">
          <DrivenByIndependence />
        </div>
      </AnimatedSection>

      {/* Why Trust Us Section */}
      <AnimatedSection className="relative  " delay={0.4}>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/10 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        />
        <div className="relative z-10">
          <WhyTrustUsSection />
        </div>
      </AnimatedSection>

      {/* Our Services Section */}
      <AnimatedSection className="relative  " delay={0.5}>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        />
        <div className="relative z-10">
          <motion.div 
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Section Header */}
            <motion.div 
              className="text-center mb-12 lg:mb-16"
              variants={itemVariants}
            >
              <motion.div 
                className="inline-flex items-center justify-center "
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
              >
                <motion.div 
                  className="flex-grow border-t-2 border-indigo-500/30 max-w-xs"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
                <motion.h2 
                  className="mx-6 text-4xl lg:text-5xl xl:text-6xl font-bold text-white"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
                >
                  Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Services</span>
                </motion.h2>
                <motion.div 
                  className="flex-grow border-t-2 border-indigo-500/30 max-w-xs"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </motion.div>
              <motion.p 
                className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, type: "spring", stiffness: 100 }}
              >
                Comprehensive digital solutions designed to elevate your business presence and drive measurable results
              </motion.p>
            </motion.div>

            {/* Services Grid */}
            <motion.div 
              className="space-y-16 lg:space-y-20"
              variants={containerVariants}
            >
              {services.map((service, index) => (
                <motion.div 
                  key={index} 
                  className="relative"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {/* Background decoration */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-3xl transform -skew-y-1"
                    initial={{ opacity: 0, rotateY: -15 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    transition={{ delay: index * 0.2 + 1, duration: 0.8 }}
                  />
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
              ))}
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Client Reviews Section */}
      <AnimatedSection className="relative py-16 lg:py-20" delay={0.6}>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-800/10 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
        />
        <div className="relative z-10">
          <motion.div 
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Section Header */}
            <motion.div 
              className="text-center mb-12 lg:mb-16"
              variants={itemVariants}
            >
              <motion.h2 
                className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
              >
                What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Clients Say</span>
              </motion.h2>
              <motion.p 
                className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
              >
                Real feedback from businesses we've helped transform and grow
              </motion.p>
            </motion.div>

            {/* Client Reviews Component */}
            <motion.div variants={itemVariants}>
              <AutoSwappingClientReview testimonials={testimonials} />
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Connect Now Section */}
      <AnimatedSection className="relative py-16 lg:py-20" delay={0.7}>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/10 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        />
        <div className="relative z-10">
          <ConnectNow />
        </div>
      </AnimatedSection>

      {/* Newsletter Subscribe Section */}
      <AnimatedSection className="relative py-16 lg:py-20" delay={0.8}>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
        />
        <div className="relative z-10">
          <NewsletterSubscribe />
        </div>
      </AnimatedSection>
    </motion.div>
  );
};

export default Home;
