import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote, CheckCircle2, Shield, Code2, Sparkles, ShoppingBag, Cpu, Monitor, Zap } from 'lucide-react';

const defaultTestimonials = [
  {
    id: 1,
    category: 'EDTECH & SKILLING',
    icon: Code2,
    quote: "Partnering with EncryVia for custom web engineering and talent portal infrastructure brought exceptional speed, zero-trust security, and high reliability across all our student and enterprise portals.",
    author: "Yashvendra Kumar",
    role: "Founder & CEO",
    company: "ForkSkill",
    avatar: "YK",
    rating: 5,
    verified: true,
  },
  {
    id: 2,
    category: 'CERTIFICATION & COMPLIANCE',
    icon: Sparkles,
    quote: "EncryVia's automated credential verification and secure cloud architecture allowed us to scale digital certifications with absolute trust and 100% verifiability.",
    author: "Dhruv",
    role: "Founder",
    company: "Incertify",
    avatar: "D",
    rating: 5,
    verified: true,
  },
  {
    id: 3,
    category: 'CYBERSECURITY PARTNER',
    icon: Shield,
    quote: "Their cybersecurity WAPT audit and infrastructure hardening uncovered critical zero-day vulnerabilities before our platform release. Thanks to EncryVia's zero-trust implementation, we achieved 100% compliance with zero downtime.",
    author: "Avadhoot Sindhe",
    role: "Cybersecurity & IT Partner",
    company: "SKS Infosystem",
    avatar: "AS",
    rating: 5,
    verified: true,
  },
  {
    id: 4,
    category: 'HEALTHCARE & PHARMA',
    icon: Zap,
    quote: "EncryVia built a high-performance web platform and AI-driven data intelligence architecture that streamlined our pharmaceutical research pipeline. Qualified organic traffic grew by 140% in just 2 months.",
    author: "Sadab",
    role: "Managing Director",
    company: "DrugIntelHub",
    avatar: "S",
    rating: 5,
    verified: true,
  },
  {
    id: 5,
    category: 'E-COMMERCE & GROWTH',
    icon: Sparkles,
    quote: "EncryVia transformed our entire web ecosystem and search visibility through Generative Engine Optimization (GEO). Our e-commerce client conversions and speed scores reached top tier instantly.",
    author: "Managing Director",
    role: "Growth & E-Com Lead",
    company: "EcomBizGrow",
    avatar: "EB",
    rating: 5,
    verified: true,
  }
];

// Lightweight curated background cards (rendered statically on desktop, hidden on mobile for high FPS)
const backdropCards = [
  { text: "ZTP activation is ridiculously simple and support response is fast.", company: "Apollo Clinic", top: "2%", left: "2%", rot: -10, size: "w-40", opacity: 0.4 },
  { text: "Excellent latency optimization for remote application gateways.", company: "Vasan Eye Care", top: "1%", left: "32%", rot: -8, size: "w-40", opacity: 0.45 },
  { text: "Security audit uncovered critical API vulnerabilities.", company: "FinVault", top: "2%", left: "62%", rot: -10, size: "w-40", opacity: 0.45 },
  { text: "Sub-second load times and 100/100 Lighthouse speed score.", company: "Apex Retail", top: "1%", left: "85%", rot: 11, size: "w-40", opacity: 0.4 },

  { text: "Defends digital infrastructure against zero-day exploits.", company: "Wipro Security", top: "26%", left: "4%", rot: 8, size: "w-40", opacity: 0.35 },
  { text: "The sales and post-sales support was excellent and professional.", company: "Indus Motors", top: "24%", left: "33%", rot: 11, size: "w-40", opacity: 0.4 },
  { text: "AI search citations tripled within 45 days.", company: "Aether AI", top: "25%", left: "63%", rot: 7, size: "w-40", opacity: 0.35 },
  { text: "Best cybersecurity audit team we have worked with.", company: "CyberShield", top: "26%", left: "86%", rot: 9, size: "w-40", opacity: 0.45 },

  { text: "Zero-Touch routing reduced branch setup costs by 45%.", company: "Global Tech", top: "50%", left: "2%", rot: -12, size: "w-40", opacity: 0.45 },
  { text: "Highly secure connection across critical wards. Great support.", company: "Cure Hospital", top: "52%", left: "32%", rot: -9, size: "w-40", opacity: 0.45 },
  { text: "Seamless multi-cloud API integration without downtime.", company: "CloudNet", top: "49%", left: "62%", rot: 8, size: "w-40", opacity: 0.35 },
  { text: "Traffic doubled within months of site redesign.", company: "SaaS Startup", top: "51%", left: "85%", rot: -13, size: "w-40", opacity: 0.4 },

  { text: "Reliable failover logic and zero downtime.", company: "Federal Bank", top: "75%", left: "3%", rot: 10, size: "w-40", opacity: 0.4 },
  { text: "Sub-second load times and flawless mobile UX.", company: "ShopNext", top: "74%", left: "33%", rot: 13, size: "w-40", opacity: 0.4 },
  { text: "Threat monitoring blocked 100% of bot attacks.", company: "SecureBank", top: "76%", left: "63%", rot: 8, size: "w-40", opacity: 0.35 },
  { text: "100% compliance with zero server downtime.", company: "FinTech Corp", top: "75%", left: "86%", rot: 12, size: "w-40", opacity: 0.4 },
];

const AutoSwappingClientReview = ({ testimonials = defaultTestimonials }) => {
  const reviews = Array.isArray(testimonials) && testimonials.length > 0 ? testimonials : defaultTestimonials;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  }, [reviews.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, [reviews.length]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const current = reviews[currentIndex];
  const IconComponent = current.icon || Shield;

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Main Container (matching ConnectNow & Newsletter pure glassmorphism) */}
          <div className="relative bg-white/[0.04] border border-white/20 p-5 sm:p-8 lg:p-10 rounded-3xl backdrop-blur-2xl shadow-2xl overflow-hidden">
            {/* Background dot pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.05\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30 rounded-3xl pointer-events-none"></div>
            {/* Glass highlight overlay */}
            <div className="pointer-events-none absolute inset-px rounded-3xl bg-gradient-to-b from-white/12 via-white/5 to-transparent"></div>

            {/* Ambient Glass Light Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[120px] pointer-events-none z-0" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/25 rounded-full blur-[130px] pointer-events-none z-0" />

            {/* 1. Curated Subtle Background Review Cards (GPU-optimized, static transforms, zero JS animation overhead) */}
            <div className="hidden sm:block absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
              {backdropCards.map((card, idx) => (
                <div
                  key={idx}
                  style={{ 
                    top: card.top, 
                    left: card.left,
                    opacity: card.opacity * 0.75,
                    transform: `rotate(${card.rot}deg)`
                  }}
                  className={`absolute ${card.size} p-2.5 rounded-xl bg-[#0e132c]/85 border border-white/10 text-[9px] text-gray-200 shadow-lg space-y-1`}
                >
                  {/* Stars */}
                  <div className="flex items-center space-x-0.5 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={8} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Micro Quote */}
                  <p className="line-clamp-2 italic text-gray-200 text-[9px] leading-tight font-medium">
                    "{card.text}"
                  </p>

                  {/* Company Tag */}
                  <div className="text-[8px] font-bold text-[rgb(168,85,247)] truncate pt-0.5 border-t border-white/10">
                    {card.company}
                  </div>
                </div>
              ))}
            </div>

            {/* Subtle Contrast Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#060814]/60 via-[#060814]/40 to-[#060814]/60 pointer-events-none z-0 rounded-3xl" />

            {/* 2. Main Foreground Content & Centered Slider */}
            <div className="max-w-4xl mx-auto relative z-10">
              {/* Section Header */}
              <div className="text-center mb-5 space-y-2">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
                  Don't Take Our Word For It.{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-pink-400">
                    Over 100+ Trust Us.
                  </span>
                </h2>
              </div>

              {/* Main Testimonial Glassmorphic Slider Card */}
              <div 
                className="relative px-0 sm:px-14"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                {/* Desktop Side Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  aria-label="Previous testimonial"
                  className="hidden sm:flex absolute -left-2 sm:left-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-slate-950/90 border border-purple-500/50 text-[rgb(168,85,247)] hover:text-white hover:bg-purple-600 hover:border-purple-400 items-center justify-center transition-all duration-300 shadow-2xl backdrop-blur-xl hover:scale-110 active:scale-95"
                >
                  <ChevronLeft size={22} />
                </button>

                <button
                  onClick={nextSlide}
                  aria-label="Next testimonial"
                  className="hidden sm:flex absolute -right-2 sm:right-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-slate-950/90 border border-purple-500/50 text-[rgb(168,85,247)] hover:text-white hover:bg-purple-600 hover:border-purple-400 items-center justify-center transition-all duration-300 shadow-2xl backdrop-blur-xl hover:scale-110 active:scale-95"
                >
                  <ChevronRight size={22} />
                </button>

                {/* Active Card Frame (Heavy Frosted Glass with Maximum Contrast) */}
                <div className="relative min-h-[220px] sm:min-h-[200px] rounded-3xl bg-[#070a1c]/95 border border-purple-500/50 backdrop-blur-3xl p-5 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col justify-between">
                  {/* Glass highlight & inner glow overlays */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-indigo-500/5" />

                  {/* Top Bar inside Card */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current.id || currentIndex}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-4 relative z-10"
                    >
                      <div className="flex items-center justify-between">
                        <span className="px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-purple-500/20 text-[rgb(168,85,247)] border border-purple-500/30 flex items-center gap-1.5 backdrop-blur-md">
                          <IconComponent size={14} />
                          <span>{current.category || 'CLIENT SUCCESS'}</span>
                        </span>

                        <Quote size={32} className="text-[rgb(168,85,247)]/50" />
                      </div>

                      {/* Quote Text */}
                      <p className="text-base sm:text-lg lg:text-xl text-gray-100 font-medium leading-relaxed italic">
                        "{current.quote || current.text}"
                      </p>

                      {/* Footer Profile Row */}
                      <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex items-center space-x-3.5">
                          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 border border-white/20 flex items-center justify-center text-white font-extrabold text-sm shadow-md">
                            {current.avatar || (current.author ? current.author.charAt(0) : (current.name ? current.name.charAt(0) : 'C'))}
                          </div>
                          <div>
                            <h4 className="text-base font-bold text-white leading-tight">
                              {current.author || current.name}
                            </h4>
                            <p className="text-xs text-[rgb(168,85,247)] font-medium">
                              {current.role || 'Partner Client'} · <span className="text-gray-300">{current.company || 'Enterprise'}</span>
                            </p>
                          </div>
                        </div>

                        {/* Rating & Verified Badge */}
                        <div className="flex flex-wrap items-center gap-2.5">
                          <div className="flex items-center space-x-1 text-yellow-400">
                            {[...Array(current.rating || 5)].map((_, i) => (
                              <Star key={i} size={15} className="fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center space-x-1 backdrop-blur-md">
                            <CheckCircle2 size={12} />
                            <span>Verified Implementation</span>
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Navigation Controls: Mobile Arrow Buttons + Pagination Dots */}
              <div className="flex items-center justify-center gap-4 mt-6 relative z-10">
                {/* Mobile Prev Button */}
                <button
                  onClick={prevSlide}
                  aria-label="Previous testimonial"
                  className="sm:hidden w-10 h-10 rounded-full bg-slate-950/90 border border-purple-500/50 text-[rgb(168,85,247)] hover:text-white hover:bg-purple-600 flex items-center justify-center shadow-lg active:scale-95 transition-all"
                >
                  <ChevronLeft size={20} />
                </button>

                {/* Dots */}
                <div className="flex items-center space-x-2">
                  {reviews.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        idx === currentIndex
                          ? 'w-8 bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.8)]'
                          : 'w-2.5 bg-gray-600 hover:bg-purple-400/50'
                      }`}
                    />
                  ))}
                </div>

                {/* Mobile Next Button */}
                <button
                  onClick={nextSlide}
                  aria-label="Next testimonial"
                  className="sm:hidden w-10 h-10 rounded-full bg-slate-950/90 border border-purple-500/50 text-[rgb(168,85,247)] hover:text-white hover:bg-purple-600 flex items-center justify-center shadow-lg active:scale-95 transition-all"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(AutoSwappingClientReview);
