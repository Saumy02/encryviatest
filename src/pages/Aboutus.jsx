import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SEO from "../components/SEO";

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
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.08, delayChildren: 0.04, duration: 0.4, ease: "easeOut" } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 120, damping: 18 } },
};

const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 140, damping: 20 } },
  hover: { scale: 1.01, y: -3, boxShadow: "0 10px 30px rgba(99,102,241,0.15)" },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

// Data for sections
const aboutSections = [
  {
    title: "Holistic Approach: All Development, Security, and Modern Marketing Under One Roof",
    image: "./image/About_US/Holistic.webp",
    imageAlt: "Holistic Development Approach",
    description:
      "Why juggle multiple vendors when one partner can do it all? EncryVia integrates web development, security, and AI-powered marketing under one roof—creating synergy where security builds trust, architecture enhances SEO/GEO performance, and AI optimization drives future-ready business growth.",
    listTitle: "Why One Partner Changes Everything:",
    items: [
      "Seamless Integration - All services work together, not separately",
      "Unified Strategy - Aligned objectives, not competing priorities",
      "Single Contact - One team, faster decisions",
      "Cross-Optimization - Each service enhances the others",
      "Complete Solutions - Maximum results, minimum oversight",
    ],
    reverse: false,
  },
  {
    title: "Transparent Processes and Measurable Outcomes",
    image: "./image/About_US/Flexible Packages That Scale With Your Business.webp",
    imageAlt: "Development Process",
    description:
      "No guesswork, no surprises. Every EncryVia project delivers clear expectations, defined metrics, and regular updates that translate complex tech into actionable business insights—tracking development, security, SEO, and conversions for trusted growth decisions.",
    listTitle: "Complete Project Transparency & Accountability:",
    items: [
      "Milestone-Driven Progress - Clear deliverables with defined timelines",
      "Real-Time Dashboards - Live project status and performance metrics",
      "Business-Focused Analytics - Technical data translated into ROI insights",
      "Budget Transparency - Detailed cost breakdowns, no hidden fees",
      "Guaranteed Results - Measurable outcomes with performance commitments",
    ],
    reverse: true,
  },
  {
    title: "Flexible Packages That Scale With Your Business",
    image: "./image/About_US/Holistic.webp",
    imageAlt: "Holistic Development Approach",
    description:
      "Start small, scale smart. Our modular services grow with you—from startup security basics to enterprise-grade defense. Add services as needed, pivot when markets shift, and build digital capabilities without restrictive contracts or vendor lock-in.",
    listTitle: "Scalable Solutions That Grow With You:",
    items: [
      "Modular Architecture - Add or modify services without disruption",
      "Growth-Stage Optimization - Tailored strategies for every business size",
      "Flexible Engagement - Project, retainer, or hybrid arrangements",
      "No Vendor Lock-in - Complete freedom to scale or pivot",
      "Future-Ready Planning - Strategies for rapid growth and emerging tech",
    ],
    reverse: false,
  },
  {
    title: "Future-Ready with Generative Engine Optimization (GEO)",
    image: "./image/About_US/Flexible Packages That Scale With Your Business.webp",
    imageAlt: "Development Process",
    description:
      "While others optimize for yesterday's search, we prepare you for tomorrow's AI discovery. EncryVia's GEO expertise gets you found when customers ask ChatGPT, Gemini, and other AI assistants—positioning your business to lead where search is heading.",
    listTitle: "AI-Powered Search Domination:",
    items: [
      "AI-First Content - Optimized for comprehension across all AI platforms",
      "First-Mover Advantage - Establish authority before competitors discover GEO",
      "Conversational Query Mastery - Content structured for natural language search",
      "Multi-Platform Coverage - Visibility across ChatGPT, Gemini, Claude, and emerging AI",
      "Integrated SEO + GEO - Combined traditional and AI optimization for maximum exposure",
    ],
    reverse: true,
  },
];

// Cards Data for the Extraordinary Digital Products section
const digitalProductsCards = [
  {
    icon: <LightbulbIcon />,
    title: "Vision‑driven",
    description:
      "Here at EncryVia, we construct digital businesses that grow companies, not websites and advertisements. Every plan, line of code, and campaign is customized to help real businesses simplify, secure, and scale.",
  },
  {
    icon: <LayoutGridIcon />,
    title: "Problem‑solving Focus",
    description:
      "We think technology should solve, not create, problems. That's why EncryVia provides open solutions, secure solutions, and innovative campaigns – so your business performs, protects, and thrives.",
  },
  {
    icon: <NetworkIcon />,
    title: "Human + Data",
    description:
      "We combine data-driven precision with human-centered creativity. From cybersecurity threat analysis to ROI-boosting marketing, we build solutions that not only get the job done – but get it done better for your business.",
  },
  {
    icon: <LayersIcon />,
    title: "Partnership Tone",
    description:
      "Rather than an agency, EncryVia is an extension of your team – crafting sites, protecting networks, and powering marketing that propels you forward. Transparent. Proactive. Fueled by your success.",
  },
];

// Animated section wrapper
const AnimatedSection = ({ children, className = "", delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.12,
    rootMargin: "0px 0px -10% 0px",
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
    <>
      <SEO
        title="About EncryVia | Web, Security & SEO Experts India"
        description="EncryVia delivers custom web development, cybersecurity & AI-driven SEO. Performance guarantees. Years of experience and Trusted by many clients."
        keywords="digital solutions provider India, web development company, cybersecurity experts, SEO agency India, EncryVia company, trusted digital agency, IT services India"
        ogUrl="https://encryvia.com/about-us"
      />

      <motion.div
        className="min-h-screen text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <AnimatedSection className="flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-8 pb-16 md:pt-12 md:pb-20">
          <motion.div className="relative z-10 max-w-5xl text-center" variants={containerVariants}>
            <motion.h1
              className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mt-20 sm:mt-8 mb-6"
              variants={textVariants}
            >
              <motion.span
                className="text-indigo-500 block"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 220, damping: 18 }}
              >
                "Who We Are"
              </motion.span>
              A startup digital team blending creative hustle and data‑driven precision to build secure, scalable solutions.
            </motion.h1>
          </motion.div>
        </AnimatedSection>

        {/* About Section */}
        <AnimatedSection className="py-8 md:py-8 px-4 sm:px-6 lg:px-8 relative z-10" delay={0.1}>
          <motion.div className="max-w-7xl mx-auto space-y-10 md:space-y-14" variants={containerVariants}>
            {/* Section Header */}
            <motion.div className="flex items-center justify-center" variants={itemVariants}>
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
                About EncryVia
              </motion.h2>
              <motion.div
                className="flex-grow border-t border-gray-700/60 max-w-[160px] sm:max-w-sm"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              />
            </motion.div>

            {/* Main Title */}
            <motion.h3
              className="text-2xl sm:text-3xl lg:text-3xl font-bold leading-tight text-center max-w-3xl mx-auto"
              variants={textVariants}
            >
              Great Tech, Built for Great Teams
            </motion.h3>

            {/* Main Content */}
            <div className="flex flex-col items-center gap-10 lg:gap-14">
              {/* Hero Image and Description in One Container */}
              <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
                {/* Hero Image - Left Side */}
                <motion.div className="w-full lg:w-1/2 flex justify-center" variants={imageVariants} whileHover={{ scale: 1.01 }}>
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-3 shadow-2xl w-full aspect-[16/9] flex items-center justify-center overflow-hidden border border-gray-700/50">
                    <img
                      src="./image/About_US/headimg.webp"
                      alt="About EncryVia Team"
                      className="w-full h-full object-cover rounded-2xl"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://placehold.co/960x540/4F46E5/ffffff?text=About+EncryVia";
                      }}
                    />
                  </div>
                </motion.div>

                {/* Description Paragraphs - Right Side */}
                <motion.div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left" variants={containerVariants}>
                  <motion.p className="text-base sm:text-lg lg:text-xl leading-8 text-gray-300" variants={textVariants}>
                    At EncryVia, technology solves real problems—never creates them—so every solution is purpose‑built, precise, and people‑centered across code, campaigns, and cybersecurity.
                  </motion.p>
                  <motion.p className="text-base sm:text-lg lg:text-xl leading-8 text-gray-300" variants={textVariants}>
                    By understanding how businesses grow in real markets, we design tools that become engines of growth—making operations simple, securing what matters, and evolving with you effortlessly.
                    <span className="text-indigo-400"> We simplify, secure, and scale with you.</span>
                  </motion.p>
                </motion.div>
              </div>

              {/* Rest of the content below */}
              <div className="w-full max-w-4xl text-center mx-auto space-y-6">

                {/* What We Deliver */}
                <motion.div className="w-full space-y-8 mt-12" variants={containerVariants}>
                  <motion.h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center" variants={textVariants}>
                    What we deliver
                  </motion.h4>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 text-left max-w-6xl mx-auto">
                    <motion.ul className="space-y-5 text-base sm:text-lg lg:text-xl text-gray-300" variants={containerVariants}>
                      {[
                        "👥 Fully in-house staff of analysts, developers, and cybersecurity professionals.",
                        "💼 Deep experience in SaaS, eCommerce, and enterprise-scale software.",
                        "📈 Results-first mindset focused on ROI and real business outcomes.",
                        "🌟 Trusted by startups, SMBs, and large brands for robust, scalable solutions.",
                      ].map((item, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-4 leading-relaxed"
                          variants={itemVariants}
                        >
                          <span className="text-2xl flex-shrink-0">{item.split(' ')[0]}</span>
                          <span>{item.substring(item.indexOf(' ') + 1)}</span>
                        </motion.li>
                      ))}
                    </motion.ul>

                    <motion.ul className="space-y-5 text-base sm:text-lg lg:text-xl text-gray-300" variants={containerVariants}>
                      {[
                        "🔄 Flexible strategy that expands with your business for durable success.",
                        "🔗 Seamless integration of web development, cybersecurity, and marketing.",
                        "💬 Transparent communication at every stage.",
                        "🤖 GEO expertise to get discovered in AI-powered search.",
                      ].map((item, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-4 leading-relaxed"
                          variants={itemVariants}
                        >
                          <span className="text-2xl flex-shrink-0">{item.split(' ')[0]}</span>
                          <span>{item.substring(item.indexOf(' ') + 1)}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </motion.div>


                {/* Vision & Mission */}
                <motion.div className="flex flex-col lg:flex-row items-stretch justify-center gap-6 lg:gap-8 pt-10" variants={containerVariants}>
                  <motion.div
                    className="flex-1 bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50 space-y-4"
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <h4 className="text-2xl lg:text-3xl font-bold">
                      Our <span className="text-indigo-500">Vision</span>
                    </h4>
                    <p className="text-base lg:text-lg text-gray-300 leading-8">
                      Empower businesses with AI-ready digital solutions that combine security, performance, and future‑proof growth strategies across today's search and tomorrow's AI discovery.
                    </p>
                  </motion.div>

                  <motion.div
                    className="flex-1 bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50 space-y-4"
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <h4 className="text-2xl lg:text-3xl font-bold">
                      Our <span className="text-indigo-500">Mission</span>
                    </h4>
                    <p className="text-base lg:text-lg text-gray-300 leading-8">
                      Deliver end‑to‑end transformation—web, cybersecurity, and SEO/GEO marketing—crafted in‑house, performance‑driven, and designed to capture customers from Google rankings to AI assistants.
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Service Detail Sections */}
        {aboutSections.map((section, index) => (
          <AnimatedSection key={index} className="py-14 md:py-20 px-4 sm:px-6 lg:px-8" delay={0.12 + index * 0.06}>
            <motion.div className="max-w-7xl mx-auto space-y-8 md:space-y-10" variants={containerVariants}>
              {/* Section Title */}
              <motion.h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center px-4" variants={textVariants}>
                {section.title}
              </motion.h3>

              {/* Content Layout - Fixed alignment */}
              <div className={`flex flex-col items-stretch justify-center gap-8 lg:gap-12 ${section.reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
                {/* Image Container - Equal width on desktop */}
                <motion.div className="lg:w-2/6 w-full flex justify-center " variants={imageVariants} whileHover={{ scale: 1.01 }}>
                  <div className="relative w-full max-w-md lg:max-w-full rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/15 to-purple-500/15 rounded-3xl blur-2xl -z-10" />
                    <div className="rounded-3xl border border-cyan-400/30 overflow-hidden aspect-square">
                      <img
                        src={section.image}
                        alt={section.imageAlt}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://placehold.co/600x600/4F46E5/ffffff?text=About+EncryVia";
                        }}
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Text Content - Equal width on desktop, aligned properly */}
                <motion.div className="lg:w-1/2 w-full text-center lg:text-left space-y-6 flex flex-col justify-center" variants={containerVariants}>
                  <motion.p className="text-base sm:text-lg lg:text-xl leading-8 text-gray-300" variants={textVariants}>
                    {section.description}
                  </motion.p>

                  {/* Optional List */}
                  {section.listTitle && section.items.length > 0 && (
                    <motion.div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-5 md:p-6 border border-gray-700/50 space-y-3" variants={itemVariants}>
                      <h4 className="text-lg lg:text-xl font-bold text-indigo-400">{section.listTitle}</h4>
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


        {/* Extraordinary Digital Products Cards Section */}
        <AnimatedSection className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative" delay={0.2}>
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/25 via-purple-900/25 to-indigo-900/25 backdrop-blur-[2px] -z-10"></div>
          <motion.div className="max-w-7xl mx-auto space-y-6 md:space-y-10" variants={containerVariants}>
            {/* Section Header */}
            <motion.div className="space-y-3 md:space-y-4" variants={textVariants}>
              <h3 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight">Extraordinary Digital Products</h3>
              <p className="text-base sm:text-lg lg:text-xl leading-8 text-gray-300 max-w-4xl">
                We play to our strengths: for years we've been ideating, creating and shipping wonderful things on the internet.
              </p>
            </motion.div>

            {/* Cards Grid */}
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-8" variants={containerVariants}>
              {digitalProductsCards.map((card, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/15 rounded-2xl p-6 md:p-8 shadow-xl flex flex-col items-start space-y-4 hover:border-white/30"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="flex items-center gap-4">
                    <motion.div whileHover={{ scale: 1.08, rotate: 10 }} transition={{ type: "spring", stiffness: 280, damping: 16 }}>
                      {card.icon}
                    </motion.div>
                    <h4 className="text-lg lg:text-xl font-bold">{card.title}</h4>
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-7">{card.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatedSection>
      </motion.div>
    </>
  );
}

export default OurTeam;
