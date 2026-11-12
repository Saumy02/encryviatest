import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ShieldCheck, Award, GraduationCap, Building2, CheckCircle2, Handshake, Sparkles, ArrowRight, Users, Layers, TrendingUp, Sliders, GitMerge, FileText, Bot, Check, Lightbulb, LayoutGrid, Cpu } from "lucide-react";
import SEO from "../components/SEO";

import WhyTrustUsCards from "../components/Home/WhyTrustUsCards";
import TimelineSection from "../components/Home/TimelineSection";
import ManagementTeam from "../components/AboutUs/ManagementTeam";

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

const imageVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

// Data for sections
const aboutSections = [
  {
    title: "All Development, Security, and Modern Marketing Under One Roof",
    image: "/image/About_US/Holistic.webp",
    imageAlt: "Development, Security, and Marketing Approach",
    description:
      "Why juggle multiple vendors when one partner can do it all? EncryVia integrates web development, security, and AI-powered marketing under one roof creating synergy where security builds trust, architecture enhances SEO/GEO performance, and AI optimization drives future-ready business growth.",
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
    image: "/image/About_US/Transparent.webp",
    imageAlt: "Development Process",
    description:
      "No guesswork, no surprises. Every EncryVia project delivers clear expectations, defined metrics, and regular updates that translate complex tech into actionable business insights tracking development, security, SEO, and conversions for trusted growth decisions.",
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
    image: "/image/About_US/Flexible Packages That Scale With Your Business.webp",
    imageAlt: "Flexible Packages That Scale With Your Business",
    description:
      "Start small, scale smart. Our modular services grow with you from startup security basics to enterprise-grade defense. Add services as needed, pivot when markets shift, and build digital capabilities without restrictive contracts or vendor lock-in.",
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
    image: "/image/About_US/Future-Ready.webp",
    imageAlt: "Future-Ready with Generative Engine Optimization (GEO)",
    description:
      "While others optimize for yesterday's search, we prepare you for tomorrow's AI discovery. EncryVia's GEO expertise gets you found when customers ask ChatGPT, Gemini, and other AI assistants positioning your business to lead where search is heading.",
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

const AnimatedSection = ({ children, className = "", delay = 0 }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section ref={ref} className={className}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, y: 15 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.45, delay } },
        }}
      >
        {children}
      </motion.div>
    </section>
  );
};

function OurTeam() {
  return (
    <>
      <SEO
        title="About Us | EncryVia Integrated Digital Solutions"
        description="Learn about EncryVia's integrated approach to web development, cybersecurity, and AI-driven growth marketing."
        keywords="About EncryVia, integrated IT agency, cybersecurity company India, web development team, growth marketing partner"
        ogUrl="https://encryvia.com/about-us"
      />

      <div className="min-h-screen bg-transparent text-white pt-10 sm:pt-14 pb-16 overflow-x-clip font-sans max-w-full">
        
        {/* Page Hero Header */}
        <AnimatedSection className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 sm:mb-20">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight break-words px-2">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-pink-400">EncryVia</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            We are an integrated digital agency merging web engineering, cybersecurity auditing, and AI search marketing under a single agile roof.
          </p>
        </AnimatedSection>

        {/* 1. WHY ENCRYVIA - WHY BUSINESSES CHOOSE US FOR GROWTH */}
        <AnimatedSection className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <WhyTrustUsCards />
          </div>
        </AnimatedSection>

        {/* 2. WHAT WE DELIVER & VISION / MISSION */}
        <AnimatedSection className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                What we deliver
              </h2>
            </div>

            {/* 2-Column Delivery Points Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
              {/* Left Column */}
              <div className="space-y-7">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-indigo-950/60 border border-indigo-500/30 flex items-center justify-center flex-shrink-0 text-indigo-400 mt-1 shadow-inner">
                    <Users className="w-5 h-5" />
                  </div>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    In-house team of SEO analysts, full-stack developers, and cybersecurity engineers no outsourcing, no handoffs.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-indigo-950/60 border border-indigo-500/30 flex items-center justify-center flex-shrink-0 text-indigo-400 mt-1 shadow-inner">
                    <Layers className="w-5 h-5" />
                  </div>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    Proven experience across SaaS platforms, eCommerce stores, and enterprise software systems.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-indigo-950/60 border border-indigo-500/30 flex items-center justify-center flex-shrink-0 text-indigo-400 mt-1 shadow-inner">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    Data-driven strategy focused on measurable ROI not vanity metrics.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-indigo-950/60 border border-indigo-500/30 flex items-center justify-center flex-shrink-0 text-indigo-400 mt-1 shadow-inner">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    Trusted by startups, SMBs, and enterprise brands to build secure, scalable digital solutions.
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-7">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-indigo-950/60 border border-indigo-500/30 flex items-center justify-center flex-shrink-0 text-indigo-400 mt-1 shadow-inner">
                    <Sliders className="w-5 h-5" />
                  </div>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    Flexible strategy that scales as your business grows built for long-term durability, not quick fixes.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-indigo-950/60 border border-indigo-500/30 flex items-center justify-center flex-shrink-0 text-indigo-400 mt-1 shadow-inner">
                    <GitMerge className="w-5 h-5" />
                  </div>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    One integrated team for web development, cybersecurity, and digital marketing no silos.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-indigo-950/60 border border-indigo-500/30 flex items-center justify-center flex-shrink-0 text-indigo-400 mt-1 shadow-inner">
                    <FileText className="w-5 h-5" />
                  </div>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    Transparent reporting and communication at every project stage.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-indigo-950/60 border border-indigo-500/30 flex items-center justify-center flex-shrink-0 text-indigo-400 mt-1 shadow-inner">
                    <Bot className="w-5 h-5" />
                  </div>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    GEO (Generative Engine Optimization) expertise get recommended by ChatGPT, Perplexity, and Google AI Overviews.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision & Mission Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 pt-4">
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                className="p-8 sm:p-10 rounded-3xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/15 hover:border-purple-500/40 backdrop-blur-xl shadow-xl transition-all duration-300 text-center space-y-4"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                  Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-pink-400 font-extrabold">vision</span>
                </h3>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  Help businesses of every size compete in both traditional search and AI-powered discovery through digital solutions engineered for security, speed, and long-term growth.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                className="p-8 sm:p-10 rounded-3xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/15 hover:border-purple-500/40 backdrop-blur-xl shadow-xl transition-all duration-300 text-center space-y-4"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                  Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-pink-400 font-extrabold">mission</span>
                </h3>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  Build, secure, and grow your business through in-house web development, cybersecurity, and SEO/GEO marketing engineered to earn visibility from Google rankings to AI assistant recommendations.
                </p>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* 3. ABOUT MAIN CONTENT SECTIONS (TRANSPARENT CONTAINERS) */}
        <div className="space-y-16 sm:space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {aboutSections.map((section, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="relative">
                <div className={`flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-14 ${section.reverse ? "lg:flex-row-reverse" : ""}`}>
                  
                  {/* Image Column (Balanced 5/12 width) */}
                  <motion.div 
                    className="w-full lg:w-5/12 flex justify-center" 
                    variants={imageVariants} 
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="relative w-full max-w-md lg:max-w-full rounded-2xl overflow-hidden shadow-2xl">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-2xl blur-xl -z-10" />
                      <div className="rounded-2xl border border-purple-400/30 overflow-hidden aspect-[4/3] sm:aspect-square">
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

                  {/* Content Column (Balanced 7/12 width) */}
                  <motion.div 
                    className="w-full lg:w-7/12 space-y-6 text-left" 
                    variants={containerVariants}
                  >
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight tracking-tight">
                      {section.title}
                    </h2>

                    <motion.p className="text-base sm:text-lg leading-relaxed text-gray-300" variants={textVariants}>
                      {section.description}
                    </motion.p>

                    {section.listTitle && section.items.length > 0 && (
                      <motion.div className="bg-white/[0.03] hover:bg-white/[0.05] backdrop-blur-xl rounded-2xl p-5 sm:p-6 border border-white/15 hover:border-[rgba(168,85,247,0.5)] space-y-3 shadow-xl transition-all duration-300" variants={itemVariants}>
                        <h4 className="text-base sm:text-lg font-bold text-[rgb(168,85,247)] flex items-center gap-2">
                          <Sparkles size={16} className="text-purple-400" />
                          <span>{section.listTitle}</span>
                        </h4>
                        <ul className="space-y-2.5">
                          {section.items.map((item, i) => (
                            <motion.li
                              key={i}
                              className="flex items-start gap-3 text-gray-300 text-xs sm:text-sm"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.05 }}
                              viewport={{ once: true }}
                            >
                              <div className="w-2 h-2 bg-purple-400 rounded-full mt-1.5 flex-shrink-0" />
                              <span className="leading-snug">{item}</span>
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

        {/* EXTRAORDINARY DIGITAL PRODUCTS */}
        <AnimatedSection className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Extraordinary Digital Products
              </h2>
              <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto mt-3 leading-relaxed">
                We play to our strengths: for years we've been ideating, creating and shipping wonderful things on the internet.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                className="p-8 sm:p-10 rounded-3xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/15 hover:border-indigo-500/40 backdrop-blur-xl shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                      <Lightbulb className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Vision-driven
                    </h3>
                  </div>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    Here at EncryVia, we construct digital businesses that grow companies, not websites and advertisements. Every plan, line of code, and campaign is customized to help real businesses simplify, secure, and scale.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                className="p-8 sm:p-10 rounded-3xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/15 hover:border-indigo-500/40 backdrop-blur-xl shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                      <LayoutGrid className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Problem-solving Focus
                    </h3>
                  </div>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    We think technology should solve, not create, problems. That's why EncryVia provides open solutions, secure solutions, and innovative campaigns so your business performs, protects, and thrives.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                className="p-8 sm:p-10 rounded-3xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/15 hover:border-indigo-500/40 backdrop-blur-xl shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Human + Data
                    </h3>
                  </div>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    We combine data-driven precision with human-centered creativity. From cybersecurity threat analysis to ROI-boosting marketing, we build solutions that not only get the job done but get it done better for your business.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                className="p-8 sm:p-10 rounded-3xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/15 hover:border-indigo-500/40 backdrop-blur-xl shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                      <Handshake className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Partnership Tone
                    </h3>
                  </div>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    Rather than an agency, EncryVia is an extension of your team crafting sites, protecting networks, and powering marketing that propels you forward. Transparent. Proactive. Fueled by your success.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* MANAGEMENT & LEADERSHIP TEAM */}
        <AnimatedSection>
          <ManagementTeam />
        </AnimatedSection>

        {/* 3. OUR JOURNEY TIMELINE */}
        <AnimatedSection className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <TimelineSection />
          </div>
        </AnimatedSection>

      </div>
    </>
  );
}

export default OurTeam;
