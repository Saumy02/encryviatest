import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// SVG Icons for the cards
const LightbulbIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.8-2.2 2-3.4a10 10 0 0 0-2.3-2.6C16.4 5.3 15 4 11 4 7 4 5.6 5.3 4.5 6.5A10 10 0 0 0 2 9.4c.2 1.2 1 2.5 2 3.4.8.8 1.3 1.5 1.5 2.5"></path>
    <path d="M9 18h6"></path>
    <path d="M10 22h4"></path>
    <path d="M11 17v5"></path>
  </svg>
);

const LayoutGridIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
    <rect x="3" y="3" width="7" height="7"></rect>
    <rect x="14" y="3" width="7" height="7"></rect>
    <rect x="14" y="14" width="7" height="7"></rect>
    <rect x="3" y="14" width="7" height="7"></rect>
  </svg>
);
4
const NetworkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
    <rect x="16" y="2" width="6" height="6" rx="1"></rect>
    <rect x="2" y="16" width="6" height="6" rx="1"></rect>
    <path d="M16 8v3a1 1 0 0 0 1 1h3"></path>
    <path d="M8 16h3a1 1 0 0 1 1 1v3"></path>
    <path d="M12 12v.01"></path>
  </svg>
);

const LayersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
    <path d="m12.83 2.18-.3.9a4.37 4.37 0 0 0-4.65 6.36l.51.53c.8-.08 1.45-.63 1.6-1.4.3-.9-1.2-2.13-2.1-3-.8.74-1.3 1.68-1.64 2.76-.52 1.57-.96 4.41-.96 7.07 0 4.07.82 5.67 3.02 6.78.38.19.78.33 1.18.45"></path>
    <path d="M12.83 2.18c-.85-.43-1.65-.67-2.33-.67-2.73 0-5.71 1.76-7.38 5.76C1.45 10.74 1.45 15.2 5.16 20.25c.38.52.82 1.0 1.29 1.44"></path>
    <path d="m21.5 7.12-3.87-3.87a2 2 0 0 0-2.83 0L12.5 9.5l4.66 4.66 4.34-4.34a2 2 0 0 0 0-2.83Z"></path>
  </svg>
);

// Animation variants
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

const itemVariants = {
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
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

const textVariants = {
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

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
    filter: 'blur(6px)'
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18
    }
  },
  hover: {
    scale: 1.02,
    y: -5,
    boxShadow: "0 25px 50px rgba(99, 102, 241, 0.2)",
    transition: {
      type: "spring",
      stiffness: 200
    }
  }
};

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    rotateY: -15
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

// Data for sections
const aboutSections = [
  {
    title: "Holistic Approach: All Development, Security, and Modern Marketing Under One Roof",
    image: "./image/About_US/Holistic.webp",
    imageAlt: "Holistic Development Approach",
    description: "Why juggle multiple vendors when one partner can do it all? EncryVia integrates web development, security, and AI-powered marketing under one roof—creating synergy where security builds trust, architecture enhances SEO/GEO performance, and AI optimization drives future-ready business growth.",
    listTitle: "Why One Partner Changes Everything:",
    items: [
      "Seamless Integration - All services work together, not separately",
      "Unified Strategy - Aligned objectives, not competing priorities",
      "Single Contact - One team, faster decisions",
      "Cross-Optimization - Each service enhances the others",
      "Complete Solutions - Maximum results, minimum oversight"
    ],
    reverse: false
  },
  {
    title: "Transparent Processes and Measurable Outcomes",
    image: "./image/About_US/Flexible Packages That Scale With Your Business.webp",
    imageAlt: "Development Process",
    description: "No guesswork, no surprises. Every EncryVia project delivers clear expectations, defined metrics, and regular updates that translate complex tech into actionable business insights—tracking development, security, SEO, and conversions for trusted growth decisions.",
    listTitle: "Complete Project Transparency & Accountability:",
    items: [
      "Milestone-Driven Progress - Clear deliverables with defined timelines",
      "Real-Time Dashboards - Live project status and performance metrics",
      "Business-Focused Analytics - Technical data translated into ROI insights",
      "Budget Transparency - Detailed cost breakdowns, no hidden fees",
      "Guaranteed Results - Measurable outcomes with performance commitments"
    ],
    reverse: true
  },
  {
    title: "Flexible Packages That Scale With Your Business",
    image: "./image/About_US/Holistic.webp",
    imageAlt: "Holistic Development Approach",
    description: "Start small, scale smart. Our modular services grow with you—from startup security basics to enterprise-grade defense. Add services as needed, pivot when markets shift, and build digital capabilities without restrictive contracts or vendor lock-in.",
    listTitle: "Scalable Solutions That Grow With You:",
    items: [
      "Modular Architecture - Add or modify services without disruption",
      "Growth-Stage Optimization - Tailored strategies for every business size",
      "Flexible Engagement - Project, retainer, or hybrid arrangements",
      "NNo Vendor Lock-in - Complete freedom to scale or pivot",
      "Future-Ready Planning - Strategies for rapid growth and emerging tech"
    ],
    reverse: false
  },
   {
    title: "Future-Ready with Generative Engine Optimization (GEO)",
    image: "./image/About_US/Flexible Packages That Scale With Your Business.webp",
    imageAlt: "Development Process",
    description: "While others optimize for yesterday's search, we prepare you for tomorrow's AI discovery. EncryVia's GEO expertise gets you found when customers ask ChatGPT, Gemini, and other AI assistants—positioning your business to lead where search is heading.",
    listTitle: " AI-Powered Search Domination:",
    items: [
      "AI-First Content - Optimized for comprehension across all AI platforms",
      "First-Mover Advantage - Establish authority before competitors discover GEO",
      "Conversational Query Mastery - Content structured for natural language search",
      "Multi-Platform Coverage - Visibility across ChatGPT, Gemini, Claude, and emerging AI",
      "Integrated SEO + GEO - Combined traditional and AI optimization for maximum exposure"
    ],
    reverse: true
  },
];

// Cards Data for the Extraordinary Digital Products section
const digitalProductsCards = [
  {
    icon: <LightbulbIcon className="w-8 h-8 text-indigo-400" />,
    title: "Vision‑driven",
    description: "Here at EncryVia, we construct digital businesses that grow companies, not websites and advertisements. Every plan, line of code, and campaign is customized to help real businesses  simplify, secure, and scale."
  },
  {
    icon: <LayoutGridIcon className="w-8 h-6 text-indigo-400" />,
    title: "Problem‑solving Focus",
    description: "We think technology should solve, not create, problems. That's why EncryVia provides open solutions, secure solutions, and innovative campaigns – so your business performs, protects, and thrives."
  },
  {
    icon: <NetworkIcon className="w-8 h-8 text-indigo-400" />,
    title: "Human + Data",
    description: "We combine data-driven precision with human-centered creativity. From cybersecurity threat analysis to ROI-boosting marketing, we build solutions that not only get the job done – but get it done better for your business."
  },
  {
    icon: <LayersIcon className="w-8 h-8 text-indigo-400" />,
    title: "Partnership Tone ",
    description: "Rather than an agency, EncryVia is an extension of your team – crafting sites, protecting networks, and powering marketing that propels you forward. Transparent. Proactive. Fueled by your success."
  }
];

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
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay }}
    >
      {children}
    </motion.section>
  );
};

function OurTeam() {
  return (
    <motion.div
      className="min-h-screen text-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Hero Section */}
      <AnimatedSection className="flex items-center justify-center py-20 lg:py-28 xl:py-32 px-4 sm:px-6 lg:px-8 min-h-[60vh]">
        <motion.div
          className="relative z-10 max-w-5xl text-center"
          variants={containerVariants}
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mt-24 sm:mt-8 mb-8 lg:mb-12"
            variants={textVariants}
          >
            <motion.span
              className="text-indigo-500"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            >
              " Who We Are:
            </motion.span>
            A startup digital team blending creative hustle and data‑driven precision to build secure, scalable solutions."
            <motion.span
              className="text-indigo-500"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            >
            </motion.span>
          </motion.h1>
        </motion.div>
      </AnimatedSection>


      {/* About Section */}
      <AnimatedSection className="py-20 lg:py-28 xl:py-32 px-4 sm:px-6 lg:px-8 relative z-10" delay={0.2}>
        <motion.div
          className="max-w-7xl mx-auto space-y-16 lg:space-y-20"
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div
            className="flex items-center justify-center"
            variants={itemVariants}
          >
            <motion.div
              className="flex-grow border-t border-gray-600 max-w-xs lg:max-w-sm"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mx-6 text-indigo-500 whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              About EncryVia
            </motion.h2>
            <motion.div
              className="flex-grow border-t border-gray-600 max-w-xs lg:max-w-sm"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </motion.div>

          {/* Main Title */}
          <motion.h3
            className="text-3xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-center max-w-4xl mx-auto"
            variants={textVariants}
          >
            Great Tech, Built for Great Teams
          </motion.h3>

          {/* Main Content */}
          <div className="flex flex-col items-center gap-12 lg:gap-16">
            {/* Hero Image - Consistent with CyberSecurity sizing */}
            <motion.div
              className="w-full flex justify-center"
              variants={imageVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-3 shadow-2xl w-full max-w-4xl h-[300px] sm:h-[300px] lg:h-[400px] flex items-center justify-center overflow-hidden border border-gray-700/50">
                <img
                  src="./image/About_US/headimg.png"
                  alt="About EncryVia Team"
                  className="w-full h-full object-cover rounded-2xl"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/800x500/4F46E5/ffffff?text=About+EncryVia";
                  }}
                />
              </div>
            </motion.div>

            {/* Content */}
            <div className="w-full max-w-5xl text-center mx-auto space-y-4">
              {/* Description Paragraphs */}
              <motion.div className="space-y-8" variants={containerVariants}>
                <motion.p
                  className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-300"
                  variants={textVariants}
                >
                  At EncryVia, we believe technology should solve problems—not create new ones. That's why we focus on purpose-driven solutions, crafted with precision and always keeping people at the heart of what we build—whether it's code, campaigns, or cybersecurity protocols.
                </motion.p>
                <motion.p
                  className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-300"
                  variants={textVariants}
                >
                  By deeply understanding how businesses grow and adapt in real-world markets, we design and deliver digital tools that are more than just websites, dashboards, or ads—they become engines of growth. <span className="font-bold text-indigo-400">We make complex operations simple, secure what is most important, and evolve with your business effortlessly.</span>
                </motion.p>
              </motion.div>

              {/* What We Deliver */}
              <motion.div className="space-y-8" variants={containerVariants}>
                <motion.h4
                  className="text-2xl lg:text-3xl font-bold text-white mt-8 lg:mt-20"
                  variants={textVariants}
                >
                  What we deliver:
                </motion.h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 text-left">
                  <motion.ul
                    className=" list-none space-y-4 text-base lg:text-lg text-gray-300 "
                    variants={containerVariants}
                  >
                    {[
                      "👥 We have a fully in-house staff of analysts, developers, and cybersecurity professionals.",
                      "💼 We have extensive experience in SaaS platforms, eCommerce websites, and enterprise-scale software.",
                      "📈 Results-focused mindset that cares about ROI and real effect, not pretty figures.",
                      "🌟 Startups, small businesses, and large brands completely rely on us for robust and scalable digital solutions!"
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start gap-3 list-none"
                        variants={itemVariants}
                      >
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                  <motion.ul
                    className="space-y-4 text-base lg:text-lg text-gray-300 list-none"
                    variants={containerVariants}
                  >
                    {[
                      "🔄 Flexible strategy that expands with your business as you do, with long-lasting success",
                      "🔗 Seamless integration of web development, cybersecurity, and advertising strategies in one place.",
                      "💬 Commitment to transparent communication, so you’re always informed at every stage",
                      "🤖 Industry-first GEO expertise that positions you ahead of competitors in AI-powered search."
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start gap-3"
                        variants={itemVariants}
                      >
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>

              {/* Vision & Mission */}
              <motion.div
                className="flex flex-col lg:flex-row items-stretch justify-center py-4 lg:py-40 gap-8 lg:gap-16 pt-16"
                variants={containerVariants}
              >
                <motion.div
                  className="flex-1 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 space-y-6 flex flex-col"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <h4 className="text-3xl lg:text-4xl font-bold">
                    Our <span className="text-indigo-500 font-bold">Vision</span>
                  </h4>
                  <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                    To empower businesses with AI-ready digital solutions that combine security, performance,
                    and future-proof growth strategies—ensuring they dominate both today's search landscape and
                    tomorrow's AI-powered customer discovery.
                  </p>
                </motion.div>

                <motion.div
                  className="flex-1 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 space-y-6 flex flex-col"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <h4 className="text-3xl lg:text-4xl font-bold">
                    Our <span className="text-indigo-500 font-bold">Mission</span>
                  </h4>
                  <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                    To deliver end-to-end digital transformation—web development, cybersecurity, and pioneering
                    SEO & GEO marketing—that are crafted in-house, performance-driven, and designed to capture
                    customers across every search channel, from Google rankings to ChatGPT conversations.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatedSection>

      {/* Service Detail Sections */}
      {aboutSections.map((section, index) => (
        <AnimatedSection
          key={index}
          className="py-8 lg:py-14 px-4 sm:px-6 lg:px-8"
          delay={0.3 + index * 0.1}
        >
          <motion.div
            className="max-w-7xl mx-auto space-y-8 lg:space-y-12"
            variants={containerVariants}
          >
            {/* Section Title */}
            <motion.h3
              className="text-3xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-center"
              variants={textVariants}
            >
              {section.title}
            </motion.h3>

            {/* Content Layout */}
            <div className={`flex flex-col items-center gap-12 lg:gap-16 ${section.reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}>

              {/* Image */}
              <motion.div
                className="lg:w-1/2 flex justify-center"
                variants={imageVariants}
                whileHover={{ scale: 1.02, rotate: section.reverse ? -1 : 1 }}
              >
                <div className="relative">
                  <motion.div
                    className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-[140px] blur-xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                <img
                      src={section.image}
                      alt={section.imageAlt}
                      className="relative z-10 rounded-3xl shadow-2xl h-[400px] w-full max-w-md border-2 border-cyan-400/30 object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://placehold.co/400x400/4F46E5/ffffff?text=About+EncryVia";
                      }}
                    />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                className="lg:w-1/2 text-center lg:text-left space-y-8"
                variants={containerVariants}
              >
                <motion.p
                  className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-300"
                  variants={textVariants}
                >
                  {section.description}
                </motion.p>

                {/* Optional List */}
                {section.listTitle && section.items.length > 0 && (
                  <motion.div
                    className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 space-y-4"
                    variants={itemVariants}
                  >
                    <h4 className="text-xl lg:text-xl font-bold text-indigo-400">
                      {section.listTitle}
                    </h4>
                    <ul className="space-y-3">
                      {section.items.map((item, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-3 text-gray-300"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-base sm:text-lg">{item}</span>
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

      {/* Extraordinary Digital Products Cards Section */}
      <AnimatedSection className="py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 relative" delay={0.6}>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-purple-900/30 to-indigo-900/30 backdrop-blur-sm -z-10"></div>
        <motion.div
          className="max-w-7xl mx-auto space-y-12 lg:space-y-16"
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div className="space-y-6" variants={textVariants}>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Extraordinary Digital Products
            </h3>
            <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-300 max-w-5xl">
              We play to our strengths: For years we've been ideating, creating and shipping wonderful things on the internet.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
            variants={containerVariants}
          >
            {digitalProductsCards.map((card, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-8 lg:p-10 shadow-2xl flex flex-col items-start space-y-6 hover:border-white/40 group"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {card.icon}
                  </motion.div>
                  <h4 className="text-xl lg:text-2xl font-bold group-hover:text-indigo-400 transition-colors duration-300">
                    {card.title}
                  </h4>
                </div>
                <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </AnimatedSection>
    </motion.div>
  );
}

export default OurTeam;
