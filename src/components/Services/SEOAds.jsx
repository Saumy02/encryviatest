import React from 'react';
import { motion } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 20 }
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 120, damping: 18 }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 20 }
  }
};

// Icon Components
const StrategyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up">
    <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/>
    <polyline points="16,7 22,7 22,13"/>
  </svg>
);

const TeamIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const TargetIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
);

const FunnelIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-filter">
    <polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46"/>
  </svg>
);

// Main SEO & Ads Component
function SEOAds() {
  return (
    <motion.div 
      className="min-h-screen flex flex-col items-center justify-center text-white selection:bg-blue-500 selection:text-white font-inter"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <motion.section 
        className="flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8 text-center min-h-[calc(100vh-80px)]" 
        variants={containerVariants}
      >
        <motion.div className="relative z-10 max-w-5xl mx-auto" variants={textVariants}>
          <motion.h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 text-white">
            <span className="text-indigo-500 font-bold">"</span>
            Turn clicks into customers — data‑driven <span className="text-indigo-500">SEO</span> & Ads campaigns crafted to outsmart competitors and drive real ROI.
            <span className="text-indigo-500 font-bold">"</span>
          </motion.h1>
        </motion.div>
      </motion.section>

      {/* Service Header with Decorative Elements */}
      <motion.div className="flex items-center justify-center w-full mt-4 mb-12 max-w-6xl px-4" variants={itemVariants}>
        <div className="w-4 h-4 rounded-full bg-white mx-2"></div>
        <div className="flex-grow h-px bg-gray-500"></div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-500 whitespace-nowrap mx-4">
          SEO & Ads Service
        </h2>
        <div className="flex-grow h-px bg-gray-500"></div>
        <div className="w-4 h-4 rounded-full bg-white mx-2"></div>
      </motion.div>

      {/* Hero Image */}
      <motion.div 
        className="w-full max-w-6xl px-4 mb-20"
        variants={imageVariants}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="bg-gray-100 rounded-[60px] sm:rounded-[80px] lg:rounded-[120px] p-2  shadow-2xl overflow-hidden">
          <img 
            src="'./image/SEO_page/Content_Ads.webp"
            alt="Team collaborating on digital marketing strategies"
            className="w-full h-full lg:h-[500px]  object-cover rounded-[50px] sm:rounded-[70px] lg:rounded-[110px]"
            onError={(e) => { 
              e.target.onerror = null; 
              e.target.src = '../image/SEO_page/Content_Ads.webp'; 
            }}
          />
        </div>
      </motion.div>

      {/* Growth Philosophy Section */}
      <motion.section className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 mb-20" variants={containerVariants}>
        <motion.div className="text-center mb-12" variants={textVariants}>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-extrabold mb-6 text-white leading-tight">
            We Don't Do "<span className="text-blue-400">Traffic</span>." We Do <span className="text-blue-400">Growth</span>.
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Clicks are nice. But conversions? That's way better. We build SEO campaigns and ad programs that actually make people do something—beginning with what your crowd is already seeking out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
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
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-indigo-500/30 transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="text-blue-400 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="p-3 bg-blue-500/20 rounded-xl">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">{item.title}</h3>
              <p className="text-md text-gray-300 leading-relaxed text-center">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>


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
        <motion.section 
          key={index} 
          className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 mb-20" 
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-12 text-white leading-tight text-center"
            variants={textVariants}
          >
            {section.title}
          </motion.h2>
          
          <div className={`flex flex-col items-center gap-12 lg:gap-16 ${section.reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
            <motion.div
              className="lg:w-1/2 flex justify-center"
              variants={imageVariants}
              whileHover={{ scale: 1.03, rotate: section.reverse ? -1 : 1 }}
            >
              <div className="relative">
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full  blur-xl"
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
                  className="relative z-10 rounded-3xl shadow-2xl h-[300px] lg:h-[400px] 
                  w-full max-w-md border-2 border-cyan-400/30 object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/400x600/6B7280/ffffff?text=Image+Not+Found";
                  }}
                />
              </div>
            </motion.div>
            
            <motion.div
              className="lg:w-1/2 text-left flex flex-col justify-center space-y-6"
              variants={textVariants}
            >
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed">
                {section.description}
              </p>
              
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <h3 className="text-2xl font-bold text-indigo-400 mb-4">{section.listTitle}</h3>
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
              </div>
            </motion.div>
          </div>
        </motion.section>
      ))}

      {/* Custom CSS */}
      <style jsx>{`
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </motion.div>
  );
}

export default SEOAds;
