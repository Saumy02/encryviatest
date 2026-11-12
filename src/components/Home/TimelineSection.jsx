import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, ShieldCheck, Sparkles, Cpu, TrendingUp, Award, CheckCircle2, ArrowRight } from 'lucide-react';

const timelineMilestones = [
  {
    year: '2023',
    phase: 'PHASE 01',
    icon: Rocket,
    title: 'The Core Foundation',
    subtitle: 'Integrated Web & Security Architecture',
    description: 'EncryVia was founded with a bold mission: eliminate the gap between high-speed web design, military-grade cybersecurity, and growth marketing. Built our 3-in-1 unified client platform.',
    metric: '100% Zero-Trust Ready',
    gradient: 'from-purple-500 to-indigo-500',
    align: 'right'
  },
  {
    year: '2024',
    phase: 'PHASE 02',
    icon: ShieldCheck,
    title: '100+ Security Audits & WAPT Suite',
    subtitle: 'Enterprise Threat Mitigation',
    description: 'Engineered custom Vulnerability Assessment & Penetration Testing (WAPT) frameworks. Successfully audited and secured digital assets for over 100+ retail, fintech, and SaaS brands.',
    metric: '100+ Audits Completed',
    gradient: 'from-indigo-500 to-cyan-500',
    align: 'left'
  },
  {
    year: '2025',
    phase: 'PHASE 03',
    icon: Sparkles,
    title: 'GEO & AI Search Dominance',
    subtitle: 'Generative Engine Optimization',
    description: 'Pioneered Generative Engine Optimization (GEO) in India enabling client websites to rank as the #1 recommended answer on ChatGPT, Google Gemini, and Perplexity AI.',
    metric: '140% AI Traffic Growth',
    gradient: 'from-pink-500 to-purple-500',
    align: 'right'
  },
  {
    year: '2026',
    phase: 'PHASE 04',
    icon: Cpu,
    title: 'Multi-Cloud Edge Infra',
    subtitle: 'Sub-Second Performance & PWAs',
    description: 'Deployed serverless edge networks and micro-frontend architectures, achieving guaranteed 100/100 Google Lighthouse speed scores and 99.99% enterprise uptime.',
    metric: '99.99% SLA Uptime',
    gradient: 'from-purple-500 to-emerald-500',
    align: 'left'
  },
  {
    year: '2026+',
    phase: 'FUTURE',
    icon: TrendingUp,
    title: 'Autonomous Web Intelligence',
    subtitle: 'Building What\'s Next',
    description: 'Expanding into autonomous AI web agents, real-time threat response systems, and continuous growth automation for hyper-scaling brands.',
    metric: 'Infinite Scaling',
    gradient: 'from-emerald-400 to-indigo-500',
    align: 'right'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.94 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 18 }
  }
};

const TimelineSection = () => {
  const [activeHover, setActiveHover] = useState(null);

  return (
    <div className="py-10 lg:py-16 max-w-7xl mx-auto text-white relative">
      {/* Background Decorative Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px]" />
      </div>

      {/* Section Header */}
      <div className="text-center mb-16 sm:mb-20 space-y-4 relative z-10">

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight"
        >
          From Day One to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400">What's Next</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed"
        >
          Every milestone represents a complex client challenge solved through integrated web engineering, zero-trust security, and AI search dominance.
        </motion.p>
      </div>

      {/* Main Timeline Grid & Central Animated Laser Line */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10"
      >
        {/* Central Animated Glowing Laser Beam Line */}
        <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-purple-600 via-pink-500 to-indigo-600 transform -translate-x-1/2 z-0 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.8)]" />

        {/* Floating Laser Pulse Dot traveling down */}
        <motion.div
          animate={{ y: [0, 800, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-6 md:left-1/2 top-4 w-3 h-3 bg-white rounded-full transform -translate-x-1/2 shadow-[0_0_20px_#a855f7] z-10 pointer-events-none"
        />

        <div className="space-y-12 sm:space-y-16 relative">
          {timelineMilestones.map((item, idx) => {
            const isEven = idx % 2 === 0;
            const Icon = item.icon;
            const isHovered = activeHover === idx;

            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                onMouseEnter={() => setActiveHover(idx)}
                onMouseLeave={() => setActiveHover(null)}
                className={`flex flex-col md:flex-row items-center ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Milestone Content Card */}
                <div className="w-full md:w-1/2 pl-14 pr-3 sm:pl-16 sm:pr-4 md:px-10 lg:px-12">
                  <motion.div 
                    whileHover={{ y: -6, scale: 1.02 }}
                    className={`relative p-6 sm:p-8 rounded-3xl bg-white/[0.04] border transition-colors duration-300 backdrop-blur-2xl shadow-2xl overflow-hidden ${
                      isHovered 
                        ? 'border-purple-400 shadow-purple-900/50 bg-white/[0.08]' 
                        : 'border-white/20 hover:border-purple-400/40'
                    }`}
                  >
                    {/* Glowing Top Border Highlight */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient}`} />

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="px-3 py-1 rounded-full text-xs font-black bg-purple-500/20 text-[rgb(168,85,247)] border border-purple-500/30">
                          {item.year}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold text-gray-400 bg-white/5 border border-white/10 uppercase tracking-widest">
                          {item.phase}
                        </span>
                      </div>

                      <span className="px-3 py-1 rounded-full text-xs font-extrabold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 flex items-center space-x-1">
                        <CheckCircle2 size={12} />
                        <span>{item.metric}</span>
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-1">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-semibold text-[rgb(168,85,247)] mb-3">
                      {item.subtitle}
                    </p>

                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      {item.description}
                    </p>

                    {/* Learn More link */}
                    <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                      <span className="text-xs font-bold text-gray-400">EncryVia Evolution</span>
                      <span className="text-xs font-bold text-[rgb(168,85,247)] flex items-center space-x-1 group-hover:text-[rgb(168,85,247)]">
                        <span>Milestone Achieved</span>
                        <ArrowRight size={12} />
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Central Interactive Glowing Icon Node */}
                <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 z-20">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${item.gradient} border-4 border-[#070b16] flex items-center justify-center text-white shadow-xl shadow-purple-500/40 relative cursor-pointer`}
                  >
                    {/* Outer Pulsing Ring */}
                    <span className="absolute inset-0 rounded-2xl bg-purple-500/30 animate-ping" />
                    <Icon size={22} className="relative z-10" />
                  </motion.div>
                </div>

                {/* Spacing Placeholder */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default React.memo(TimelineSection);
