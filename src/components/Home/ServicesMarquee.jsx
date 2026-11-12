import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, ShieldCheck, Sparkles, Smartphone, Lock, Rocket, Cloud, Globe, Cpu, CheckCircle2 
} from 'lucide-react';

const serviceTags = [
  { label: 'Website Development', icon: Code2, highlight: 'Web & App' },
  { label: 'Security Audit & WAPT', icon: ShieldCheck, highlight: 'Cybersecurity' },
  { label: 'SEO & GEO (AI Search)', icon: Sparkles, highlight: 'Search Dominance' },
  { label: 'Mobile App Development', icon: Smartphone, highlight: 'iOS & Android' },
  { label: 'Penetration Testing', icon: Lock, highlight: 'Zero-Trust' },
  { label: 'PPC & Growth Ads', icon: Rocket, highlight: 'High ROAS' },
  { label: 'Cloud Architecture', icon: Cloud, highlight: 'AWS & GCP' },
  { label: 'E-Commerce Solutions', icon: Globe, highlight: 'Shopify & Custom' },
];

const ServicesMarquee = () => {
  // Duplicate array for seamless infinite scroll
  const marqueeItems = [...serviceTags, ...serviceTags, ...serviceTags];

  return (
    <div className="w-full overflow-hidden bg-black/70 border-y border-purple-500/30 py-4 relative backdrop-blur-md shadow-2xl z-20">
      {/* Left/Right Edge Fade Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

      {/* Moving Marquee Track */}
      <motion.div
        className="flex items-center space-x-6 sm:space-x-10 whitespace-nowrap w-max"
        style={{ willChange: 'transform' }}
        animate={{ x: ['0%', '-33.333%'] }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: 'linear',
        }}
        whileHover={{ animationPlayState: 'paused' }}
      >
        {marqueeItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="inline-flex items-center space-x-3 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/40 transition-all duration-300 group cursor-default"
            >
              <div className="w-7 h-7 rounded-xl bg-purple-500/20 text-[rgb(168,85,247)] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon size={16} />
              </div>
              <span className="text-sm sm:text-base font-bold text-white tracking-wide">
                {item.label}
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-purple-500/20 text-[rgb(168,85,247)] border border-purple-500/30">
                {item.highlight}
              </span>
              <span className="text-[rgb(168,85,247)]/40 font-bold ml-2">•</span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default React.memo(ServicesMarquee);
