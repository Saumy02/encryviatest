import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import web from '../Services/webpage_data.json';
import sec2 from '../Services/sec2.json';
import SEO from '../SEO';

// Animation variants - simplified for better performance
const containerVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      staggerChildren: 0.08, 
      delayChildren: 0.04, 
      duration: 0.4, 
      ease: "easeOut" 
    } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { 
      type: "spring", 
      stiffness: 120, 
      damping: 18 
    } 
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.35 } 
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { 
      type: "spring", 
      stiffness: 140, 
      damping: 20 
    } 
  },
  hover: {
    scale: 1.01,
    y: -3,
    boxShadow: "0 10px 30px rgba(99,102,241,0.15)"
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.5 } 
  }
};

// Animated section wrapper
const AnimatedSection = ({ children, className = "", delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.12,
    rootMargin: "0px 0px -10% 0px"
  });

  return (
    <motion.section
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay }}
    >
      {children}
    </motion.section>
  );
};

function WebDevelopment() {
  return (
    <>
      <SEO 
        title="SEO, GEO & Ads Services | EncryVia Marketing"
        description="Boost rankings with AI-driven SEO, GEO & Google Ads. Get featured in ChatGPT & Google. 25% traffic increase guaranteed. From ₹25K/month."
        keywords="SEO services India, GEO optimization, Google Ads management, AI-driven SEO, digital marketing services, ChatGPT optimization, local SEO services"
        ogUrl="https://encryvia.com/services/seo-ads"
      />

      <motion.div 
        className="min-h-screen text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <AnimatedSection className="flex flex-20 items-center justify-center px-4 sm:px-6 lg:px-8 pt-12 pb-16 md:pt-12 md:pb-20 text-center">
          <motion.div 
            className="relative z-10 max-w-5xl mx-auto"
            variants={containerVariants}
          >
            <motion.h1 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mt-20 sm:mt-8 mb-6"
              variants={textVariants}
            >
              <motion.span 
                className="text-indigo-500"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 220, damping: 18 }}
              >
              </motion.span> 
              Our <motion.span 
                className='text-indigo-500'
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 280 }}
              >
                Web Development
              </motion.span> 
              <br />
              that works as hard as you do — secure, scalable, and built for growth from day one. 
              <motion.span 
                className="text-indigo-500"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 220, damping: 18 }}
              >
      
              </motion.span>
            </motion.h1>
          </motion.div>
        </AnimatedSection>

        {/* Service Header */}
        <AnimatedSection className="py-8 md:py-8 px-4 sm:px-6 lg:px-8" delay={0.1}>
          <motion.div 
            className="flex items-center justify-center max-w-7xl mx-auto"
            variants={itemVariants}
          >
            <motion.div 
              className="flex-grow border-t border-gray-700/60 max-w-[160px] sm:max-w-sm"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            />
            <motion.h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mx-4 sm:mx-6 text-indigo-400"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 280 }}
            >
              Web Development Service
            </motion.h2>
            <motion.div 
              className="flex-grow border-t border-gray-700/60 max-w-[160px] sm:max-w-sm"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            />
          </motion.div>
        </AnimatedSection>

        {/* Main Service Image and Description in One Container */}
        <AnimatedSection className="py-12 md:py-16 px-4 sm:px-6 lg:px-8" delay={0.15}>
          <motion.div 
            className="max-w-6xl mx-auto"
            variants={containerVariants}
          >
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Main Service Image - Left Side */}
              <motion.div 
                className="w-full lg:w-1/2 flex justify-center"
                variants={imageVariants}
                whileHover={{ scale: 1.01 }}
              >
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-3 shadow-2xl w-full aspect-[16/9] flex items-center justify-center overflow-hidden border border-gray-700/50">
                  <motion.img
                    src="../image/Web_dev/WEB_Development.webp"
                    alt="Web Development Service"
                    className="w-full h-full object-cover rounded-2xl"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5 }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://placehold.co/1200x675/4F46E5/ffffff?text=Web+Development+Service";
                    }}
                  />
                </div>
              </motion.div>

              {/* Description - Right Side */}
              <motion.div 
                className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
                variants={containerVariants}
              >
                <motion.p 
                  className="text-base sm:text-lg lg:text-xl leading-8 text-gray-300"
                  variants={textVariants}
                >
                  We build powerful, scalable web applications that drive real business results. From custom websites to complex SaaS platforms, our development approach combines cutting-edge technology with user-centered design—delivering solutions that perform flawlessly and scale effortlessly.
                </motion.p>
                <motion.p 
                  className="text-base sm:text-lg lg:text-xl leading-8 text-gray-300"
                  variants={textVariants}
                >
                  Every line of code is crafted with security, speed, and future growth in mind.
                  <span className="text-indigo-400"> We don't just build websites—we engineer digital success.</span>
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Superb Digital Offerings Section */}
        <AnimatedSection className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30" delay={0.2}>
          <motion.div 
            className="max-w-7xl mx-auto space-y-10 md:space-y-14"
            variants={containerVariants}
          >
            {/* Section Header */}
            <motion.div 
              className="text-center space-y-4"
              variants={containerVariants}
            >
              <motion.h3 
                className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white"
                variants={textVariants}
              >
                Superb Digital Offerings
              </motion.h3>
              <motion.p 
                className="text-base sm:text-lg lg:text-xl leading-8 text-gray-300 max-w-4xl mx-auto"
                variants={textVariants}
              >
                We play to our strengths: For years we've been ideating, creating and shipping wonderful things on the internet.
              </motion.p>
            </motion.div>
            
            {/* Cards Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-8"
              variants={containerVariants}
            >
              {web.map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/15 rounded-2xl p-6 md:p-8 shadow-xl hover:border-white/30 transition-colors duration-300 group"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="space-y-4">
                    <h4 className="text-lg lg:text-xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-7">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatedSection>

        {/* Service Detail Sections */}
        {sec2.map((section, index) => (
          <AnimatedSection 
            key={index} 
            className="py-14 md:py-20 px-4 sm:px-6 lg:px-8" 
            delay={0.25 + index * 0.06}
          >
            <motion.div 
              className="max-w-7xl mx-auto space-y-8 md:space-y-10"
              variants={containerVariants}
            >
              {/* Section Title */}
              <motion.h3
                className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-white text-center"
                variants={textVariants}
              >
                {section.title}
              </motion.h3>
              
              {/* Content Layout - Image and Text in One Line */}
              <div className={`flex flex-col items-stretch justify-center gap-8 lg:gap-12 ${section.reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
                {/* Image Container - Equal width */}
                <motion.div
                  className="lg:w-2/6 w-full flex justify-center "
                  variants={imageVariants}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="relative w-full max-w-md lg:max-w-full rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/15 to-purple-500/15 rounded-3xl blur-2xl -z-10" />
                    <div className="rounded-3xl border border-cyan-400/30 overflow-hidden aspect-square">
                      <img
                        src={section.image}
                        alt={section.imageAlt}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://placehold.co/600x600/4F46E5/ffffff?text=Web+Development";
                        }}
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Text Content - Equal width, vertically centered */}
                <motion.div 
                  className="lg:w-1/2 w-full text-center lg:text-left space-y-6 flex flex-col justify-center"
                  variants={containerVariants}
                >
                  <motion.p 
                    className="text-base sm:text-lg lg:text-xl leading-8 text-gray-300" variants={textVariants}
                  >
                    {section.description}
                  </motion.p>
                  
                  {/* Optional List */}
                  {section.listTitle && section.items && (
                    <motion.div 
                      className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-5 md:p-6 border border-gray-700/50 space-y-3"
                      variants={itemVariants}
                    >
                      <h4 className="text-lg lg:text-xl font-bold text-indigo-400">
                        {section.listTitle}
                      </h4>
                      <ul className="space-y-2.5">
                        {section.items.map((item, i) => (
                          <motion.li 
                            key={i} 
                            className="flex items-start gap-3 text-gray-300 text-sm sm:text-base"
                            initial={{ opacity: 0, x: -12 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.06 }}
                            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                          >
                            <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </motion.div>
    </>
  );
}

export default WebDevelopment;
