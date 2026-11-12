import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles } from 'lucide-react';
import SEO from '../SEO';

const ConnectNow = lazy(() => import('../Home/ConnectNow'));

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

// Clean section wrapper ensuring content is always immediately visible
const AnimatedSection = ({ children, className = "" }) => (
  <section className={className}>
    {children}
  </section>
);

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

      <div className="min-h-screen text-white relative overflow-hidden bg-transparent">
        {/* Hero Section - Always directly visible */}
        <section className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-12 sm:pb-16 text-center">
          <div className="relative z-10 max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight break-words px-2 mb-4">
              SEO, GEO & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-pink-400">AI Ads</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
              Next-generation search discovery combining Google rankings with ChatGPT & Gemini GEO optimization and high-ROI multi-channel ad campaigns.
            </p>
          </div>
        </section>

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
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-3 shadow-2xl w-full aspect-[16/9] flex items-center justify-center overflow-hidden border border-gray-700/50">
                  <img
                    src="/image/SEO_page/Content_Ads.webp"
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
                  Clicks are nice. But conversions? That's way better. We build SEO campaigns and ad programs that actually make people do something beginning with what your crowd is already seeking out.
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Four Feature Blocks */}
        <AnimatedSection className="py-16 md:py-20 px-4 sm:px-6 lg:px-8" delay={0.2}>
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
                  description: "Our specialists cover the full stack: from crawling and indexing to CPC optimization and multi-channel campaign management. We don't just 'run ads' or 'write blogs' we scale performance."
                },
                {
                  icon: <TargetIcon />,
                  title: "Platform-Neutral, Performance-Obsessed",
                  description: "We choose the right channels, not the familiar ones. Whether it's organic search, Google Ads, or Facebook retargeting, your campaigns are tailored to behavior, not trends."
                },
                {
                  icon: <FunnelIcon />,
                  title: "Built Into Your Funnel",
                  description: "We don't work in a vacuum. Your SEO and ads are synced with your site structure, analytics, CRM, and email flows. We optimize for outcomes form fills, sales, calls, leads not just impressions."
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
        <div className="space-y-16 sm:space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-2 sm:pb-4">
          {[
            {
              slug: "seo-services",
              badge: "ORGANIC VISIBILITY",
              title: "SEO Services",
              image: "/image/SEO_page/Easy-to-Read.webp",
              imageAlt: "SEO Services",
              description: "We don't chase vanity metrics — we target keywords that convert into paying customers. From deep technical audits and on-page optimization to high-authority backlink acquisition, our SEO strategies build compounding search dominance on Google.",
              listTitle: "Core SEO Capabilities:",
              items: [
                "Full technical SEO audits, crawl budget & Core Web Vitals fixes",
                "High-intent keyword research backed by buyer search behavior",
                "On-page content optimization, title tags, and schema markup",
                "High-authority link building and entity trust signals"
              ],
              reverse: false
            },
            {
              slug: "geo-generative-engine-optimization",
              badge: "AI ENGINE DISCOVERY",
              title: "GEO (Generative Engine Optimization)",
              image: "/image/SEO_page/Search_Generative.webp",
              imageAlt: "Generative Engine Optimization (GEO)",
              description: "Search has fundamentally shifted toward conversational AI answers. We position your brand directly inside the knowledge models of ChatGPT, Perplexity, Claude, and Google Gemini — ensuring your business is recommended when high-intent buyers ask AI assistants for solutions.",
              listTitle: "GEO Strategies:",
              items: [
                "Semantic entity optimization for LLM training data and RAG retrieval",
                "Brand authority citation mapping on ChatGPT, Gemini, and Claude",
                "Conversational query targeting and answer-engine snippet dominance",
                "Zero-click search defense and high-converting AI traffic funnels"
              ],
              reverse: true
            },
            {
              slug: "meta-and-google-ads",
              badge: "HIGH-ROI PAID ACQUISITION",
              title: "Meta & Google Ads",
              image: "/image/SEO_page/Content_Ads.webp",
              imageAlt: "Meta & Google Ads Management",
              description: "Stop burning ad budgets on clicks that don't convert. We design, manage, and scale hyper-targeted paid acquisition campaigns across Google Search, Performance Max, Instagram, and Facebook with conversion-focused landing pages and precision retargeting.",
              listTitle: "Paid Ad Features:",
              items: [
                "High-intent Google Search, Shopping, and Display campaigns",
                "Meta (Facebook & Instagram) full-funnel creative & retargeting",
                "High-converting CRO landing page design & A/B testing",
                "Real-time ROAS tracking and automated budget optimization"
              ],
              reverse: false
            },
            {
              slug: "local-seo",
              badge: "GEO-TARGETED DOMINANCE",
              title: "Local SEO",
              image: "/image/SEO_page/SEO_GEO.webp",
              imageAlt: "Local SEO & Map Pack Optimization",
              description: "Capture high-intent local customers right in your geographic area. We optimize your Google Business Profile, local map pack rankings, geo-targeted landing pages, and regional citations to dominate search results when nearby clients look for your services.",
              listTitle: "Local SEO Deliverables:",
              items: [
                "Google Business Profile (GBP) complete optimization & ranking",
                "Google Maps 3-Pack visibility and local proximity signals",
                "Consistent NAP (Name, Address, Phone) citation management",
                "Geo-specific landing pages and local review generation strategies"
              ],
              reverse: true
            }
          ].map((section, index) => (
            <AnimatedSection
              key={index}
              delay={0.15 + index * 0.08}
            >
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
                            e.target.src = "https://placehold.co/600x600/4F46E5/ffffff?text=SEO+%26+Ads";
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

export default SEOAds;
