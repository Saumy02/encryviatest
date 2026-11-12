import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Handshake, Sparkles } from 'lucide-react';
import web from '../Services/webpage_data.json';
import sec2 from './sec2.json';
import SEO from '../SEO';

const ConnectNow = lazy(() => import('../Home/ConnectNow'));

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

// Clean section wrapper ensuring content is always immediately visible
const AnimatedSection = ({ children, className = "" }) => (
  <section className={className}>
    {children}
  </section>
);

function WebDevelopment() {
  return (
    <>
      <SEO 
        title="Web & App Development Services | EncryVia"
        description="Custom web development, mobile applications, JAMstack speed optimization & eCommerce solutions. 100/100 Lighthouse performance guaranteed."
        keywords="Web development services India, custom web applications, React development, Next.js agency, full stack development, mobile app development"
        ogUrl="https://encryvia.com/services/web-and-app-development"
      />

      <div className="min-h-screen text-white relative overflow-hidden bg-transparent">
        {/* Hero Section - Always directly visible */}
        <section className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-12 sm:pb-16 text-center">
          <div className="relative z-10 max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight break-words px-2 mb-4">
              Web & App <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-pink-400">Development</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
              Web development that works as hard as you do secure, scalable, and engineered for high-performance business growth from day one.
            </p>
          </div>
        </section>

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
                    src="/image/Web_dev/web_dev_main.webp"
                    alt="Web & App Development Service"
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
                  We build powerful, scalable web applications that drive real business results. From custom websites to complex SaaS platforms, our development approach combines cutting-edge technology with user-centered design delivering solutions that perform flawlessly and scale effortlessly.
                </motion.p>
                <motion.p 
                  className="text-base sm:text-lg lg:text-xl leading-8 text-gray-300"
                  variants={textVariants}
                >
                  Every line of code is crafted with security, speed, and future growth in mind.
                  <span className="text-indigo-400"> We don't just build websites we engineer digital success.</span>
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Superb Digital Offerings Section */}
        <AnimatedSection className="py-16 md:py-20 px-4 sm:px-6 lg:px-8" delay={0.2}>
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
        <div className="space-y-16 sm:space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-2 sm:pb-4">
          {sec2.map((section, index) => (
            <AnimatedSection key={index} delay={0.15 + index * 0.08}>
              <div className="relative">
                <div
                  className={`flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-14 ${
                    section.reverse ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image Column (Balanced 5/12 width) */}
                  <motion.div
                    className="w-full lg:w-5/12 flex justify-center"
                    variants={imageVariants}
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="relative w-full max-w-md lg:max-w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl group">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-2xl sm:rounded-3xl blur-xl -z-10" />
                      <div className="rounded-2xl sm:rounded-3xl border border-purple-400/30 overflow-hidden aspect-[4/3] sm:aspect-square bg-gray-900/40">
                        <img
                          src={section.image}
                          alt={section.imageAlt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://placehold.co/600x600/4F46E5/ffffff?text=Web+Development";
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Content Column (Balanced 7/12 width) */}
                  <motion.div
                    className="w-full lg:w-7/12 space-y-6 text-left"
                    variants={containerVariants}
                  >
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight tracking-tight">
                      {section.title}
                    </h2>

                    <motion.p
                      className="text-base sm:text-lg leading-relaxed text-gray-300"
                      variants={textVariants}
                    >
                      {section.description}
                    </motion.p>

                    {section.listTitle && section.items && section.items.length > 0 && (
                      <motion.div
                        className="bg-white/[0.03] hover:bg-white/[0.05] backdrop-blur-xl rounded-2xl p-5 sm:p-6 border border-white/15 hover:border-[rgba(168,85,247,0.5)] space-y-3.5 shadow-xl transition-all duration-300"
                        variants={itemVariants}
                      >
                        <h4 className="text-base sm:text-lg font-bold text-[rgb(168,85,247)] flex items-center gap-2">
                          <Sparkles size={18} className="text-purple-400" />
                          <span>{section.listTitle}</span>
                        </h4>
                        <ul className="space-y-2.5 sm:space-y-3">
                          {section.items.map((item, i) => (
                            <motion.li
                              key={i}
                              className="flex items-start gap-3 text-gray-300 text-xs sm:text-sm md:text-base leading-snug"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.05 }}
                              viewport={{ once: true }}
                            >
                              <div className="w-2 h-2 bg-[rgb(168,85,247)] rounded-full mt-1.5 flex-shrink-0 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                              <span>{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom Compact Connect Now Banner */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-1 sm:mt-2 lg:mt-3 mb-4 sm:mb-6 lg:mb-8">
          <Suspense fallback={null}>
            <ConnectNow compact />
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default WebDevelopment;
