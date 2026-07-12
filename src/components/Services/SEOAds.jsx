import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SEO from '../SEO';

// Simplified animation variants for better performance
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

// Icon Components
const StrategyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/>
    <polyline points="16,7 22,7 22,13"/>
  </svg>
);

const TeamIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const TargetIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
);

const FunnelIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46"/>
  </svg>
);

function SEOAds() {
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
        <AnimatedSection className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pt-20 md:pb-20 text-center">
          <motion.div className="relative z-10 max-w-5xl mx-auto" variants={containerVariants}>
            <motion.h1
              className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-6"
              variants={textVariants}
            >
              <motion.span
                className="text-indigo-500"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 220, damping: 18 }}
              >
              </motion.span>
              Turn clicks into customers — data‑driven <motion.span
                className="text-indigo-500"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 280 }}
              >
                SEO
              </motion.span> & Ads campaigns crafted to outsmart competitors and drive real ROI.
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
              SEO & Ads Service
            </motion.h2>
            <motion.div
              className="flex-grow border-t border-gray-700/60 max-w-[160px] sm:max-w-sm"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            />
          </motion.div>
        </AnimatedSection>

        {/* Main Image and Description in One Container */}
        <AnimatedSection className="py-12 md:py-16 px-4 sm:px-6 lg:px-8" delay={0.15}>
          <motion.div
            className="max-w-7xl mx-auto"
            variants={containerVariants}
          >
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Main Image - Left Side */}
              <motion.div
                className="w-full lg:w-1/2 flex justify-center"
                variants={imageVariants}
                whileHover={{ scale: 1.01 }}
              >
                <div className="bg-gray-100 rounded-3xl p-3 shadow-2xl w-full aspect-[16/9] flex items-center justify-center overflow-hidden">
                  <img
                    src="../image/SEO_page/Content_Ads.webp"
                    alt="Team collaborating on digital marketing strategies"
                    className="w-full h-full object-cover rounded-2xl"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://placehold.co/1200x675/4F46E5/ffffff?text=SEO+%26+Ads";
                    }}
                  />
                </div>
              </motion.div>

              {/* Description - Right Side */}
              <motion.div
                className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
                variants={containerVariants}
              >
                <motion.h3
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white"
                  variants={textVariants}
                >
                  We Don't Do "<span className="text-blue-400">Traffic</span>." We Do <span className="text-blue-400">Growth</span>.
                </motion.h3>
                <motion.p
                  className="text-base sm:text-lg lg:text-xl leading-8 text-gray-300"
                  variants={textVariants}
                >
                  Clicks are nice. But conversions? That's way better. We build SEO campaigns and ad programs that actually make people do something—beginning with what your crowd is already seeking out.
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Four Feature Blocks */}
        <AnimatedSection className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30" delay={0.2}>
          <motion.div
            className="max-w-7xl mx-auto space-y-10 md:space-y-14"
            variants={containerVariants}
          >
            {/* Cards Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-8"
              variants={containerVariants}
            >
              {[
                {
                  icon: <StrategyIcon />,
                  title: "Strategy to Scale",
                  description: "We handle the full journey: technical fixes, keyword strategy, optimized content, smart ad funnels, and results you can measure. Every piece is connected because isolated tactics don't move the needle."
                },
                {
                  icon: <TeamIcon />,
                  title: "Team of Thinkers and Executors",
                  description: "Our specialists cover the full stack: from crawling and indexing to CPC optimization and multi-channel campaign management. We don't just 'run ads' or 'write blogs'—we scale performance."
                },
                {
                  icon: <TargetIcon />,
                  title: "Platform-Neutral, Performance-Obsessed",
                  description: "We choose the right channels, not the familiar ones. Whether it's organic search, Google Ads, or Facebook retargeting, your campaigns are tailored to behavior, not trends."
                },
                {
                  icon: <FunnelIcon />,
                  title: "Built Into Your Funnel",
                  description: "We don't work in a vacuum. Your SEO and ads are synced with your site structure, analytics, CRM, and email flows. We optimize for outcomes—form fills, sales, calls, leads—not just impressions."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/15 rounded-2xl p-6 md:p-8 shadow-xl hover:border-white/30 transition-colors duration-300 group"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="text-blue-400 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="p-3 bg-blue-500/20 rounded-xl">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-white mb-4 text-center group-hover:text-indigo-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-7 text-center">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatedSection>

        {/* Service Detail Sections */}
        {[
          {
            title: "Search Engine Strategy That Pays You Back",
            image: "../image/SEO_page/Easy-to-Read.webp",
            imageAlt: "SEO Strategy Dashboard",
            description: "We don't chase vanity metrics. We go after rankings that convert. With Encryvia, SEO is a measurable asset, not a guessing game. Every click, link, and page we touch is part of a plan to boost visibility and revenue—not just traffic.",
            listTitle: "Core SEO Focus Areas:",
            items: [
              "Full technical audits & error fixes",
              "Keyword targeting backed by market intent",
              "On-page SEO for pages that sell",
              "Structured data and schema markup"
            ],
            reverse: false
          },
          {
            title: "Content & Ads That Pull in the Right Audience",
            image: "../image/SEO_page/Search_Generative.webp",
            imageAlt: "Content and Advertising Strategy",
            description: "We blend strong content with sharp ads to bring qualified traffic to your site. Our SEO-driven blog strategy works hand-in-hand with high-converting paid ad funnels on Google and Meta — so you're not relying on one channel to grow.",
            listTitle: "What's Included:",
            items: [
              "Blog calendars tied to keywords that matter",
              "Google Ads (Search, Display, Shopping)",
              "Facebook/Instagram full-funnel campaigns",
              "CRO-ready landing pages & A/B testing"
            ],
            reverse: true
          },
          {
            title: "Performance-Driven Reporting You Can Understand",
            image: "../image/SEO_page/SEO_GEO.webp",
            imageAlt: "Performance Analytics Dashboard",
            description: "No vague graphs. No technical fluff. Just clear, customized reports that show what's working and what needs improvement. Our dashboards connect the dots between clicks, conversions, and cost—so you can make smarter marketing decisions.",
            listTitle: "Deliverables:",
            items: [
              "Custom Looker Studio/GA4 dashboards",
              "Keyword rank tracking & ad ROI reports",
              "Monthly growth reviews with strategy shifts",
              "Slack/email insights for real-time adjustments"
            ],
            reverse: false
          }
        ].map((section, index) => (
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
                  className="lg:w-2/6 w-full flex justify-center lg:justify-start"
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
                          e.target.src = "https://placehold.co/600x600/4F46E5/ffffff?text=SEO+%26+Ads";
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
                    className="text-base sm:text-lg lg:text-xl leading-8 text-gray-300"
                    variants={textVariants}
                  >
                    {section.description}
                  </motion.p>

                  {/* List */}
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
                </motion.div>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </motion.div>
    </>
  );
}

export default SEOAds;
