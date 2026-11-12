import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, ShieldCheck, Sparkles, Cpu, Lock, TrendingUp, CheckCircle2, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const serviceNodes = [
  {
    id: 'web',
    title: 'Web & App Development',
    subtitle: 'High-Speed Modern Architecture',
    badge: '100/100 Lighthouse Speed',
    icon: Code2,
    color: 'from-blue-500/20 via-indigo-500/30 to-purple-600/30',
    borderColor: 'border-indigo-500/40',
    glowColor: 'shadow-indigo-500/30',
    tag: 'React · Next.js · Node · Cloud',
    stat: 'Sub-second Load',
    link: '/services/web-and-app-development'
  },
  {
    id: 'security',
    title: 'Cybersecurity & Defense',
    subtitle: 'Embedded Zero-Trust Protection',
    badge: '24/7 Threat Sentinel',
    icon: ShieldCheck,
    color: 'from-purple-500/20 via-pink-500/30 to-indigo-600/30',
    borderColor: 'border-purple-500/40',
    glowColor: 'shadow-purple-500/30',
    tag: 'WAPT Audit · AES-256 · OWASP',
    stat: 'Zero Penetration',
    link: '/services/cybersecurity'
  },
  {
    id: 'seo',
    title: 'SEO, GEO & AI Marketing',
    subtitle: 'Google + ChatGPT Rank Dominance',
    badge: '+90% AI Visibility Growth',
    icon: Sparkles,
    color: 'from-emerald-500/20 via-teal-500/30 to-indigo-600/30',
    borderColor: 'border-emerald-500/40',
    glowColor: 'shadow-emerald-500/30',
    tag: 'Generative AI · PPC Ads · CRO',
    stat: '#1 Rank AI Search',
    link: '/services/seo-geo-and-ads'
  }
];

const HeroServicesVisual = () => {
  const [activeHover, setActiveHover] = useState(null);

  return (
    <div className="relative w-full max-w-lg lg:max-w-xl mx-auto flex items-center justify-center p-2 sm:p-6">
      {/* Background Ambient Glow Halos */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          className="w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-r from-indigo-600/30 via-purple-600/30 to-pink-600/20 blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-indigo-500/20 border-dashed"
        />
      </div>

      {/* Central Floating Services Matrix */}
      <div className="relative z-10 w-full space-y-4">
        {/* Top Header Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between px-4 py-2 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-md text-xs font-semibold text-gray-300"
        >
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-white font-bold">EncryVia 3-in-1 Ecosystem</span>
          </div>
          <span className="text-indigo-400 font-mono">Integrated Stack</span>
        </motion.div>

        {/* 3 Interactive Floating Service Cards */}
        {serviceNodes.map((node, index) => {
          const Icon = node.icon;
          const isHovered = activeHover === node.id;

          return (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                y: isHovered ? -4 : [0, index % 2 === 0 ? -6 : 6, 0]
              }}
              transition={{
                opacity: { duration: 0.5, delay: index * 0.15 },
                x: { duration: 0.5, delay: index * 0.15 },
                y: isHovered ? { duration: 0.2 } : { duration: 4 + index, repeat: Infinity, ease: 'easeInOut' }
              }}
              onMouseEnter={() => setActiveHover(node.id)}
              onMouseLeave={() => setActiveHover(null)}
              className={`group relative p-5 sm:p-6 rounded-3xl bg-gradient-to-r ${node.color} border ${node.borderColor} backdrop-blur-xl shadow-xl hover:${node.glowColor} transition-all duration-300 overflow-hidden cursor-pointer`}
            >
              {/* Top Row: Icon + Badge */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-2xl bg-black/50 border border-white/15 flex items-center justify-center text-indigo-300 group-hover:scale-110 transition-transform">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {node.title}
                    </h4>
                    <p className="text-xs text-gray-300 font-medium">
                      {node.subtitle}
                    </p>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-white/10 text-emerald-300 border border-emerald-500/30 flex items-center space-x-1">
                  <Zap size={10} className="fill-emerald-400" />
                  <span>{node.stat}</span>
                </span>
              </div>

              {/* Tag & Features */}
              <div className="flex flex-wrap items-center justify-between pt-3 border-t border-white/10 text-xs text-gray-300 gap-2">
                <span className="font-mono text-gray-300">{node.tag}</span>

                <Link 
                  to={node.link}
                  className="inline-flex items-center space-x-1 text-indigo-300 hover:text-white font-bold group-hover:translate-x-1 transition-transform"
                >
                  <span>Explore</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          );
        })}

        {/* Bottom Interactive Guarantee Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="p-3.5 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 backdrop-blur-md flex items-center justify-between text-xs text-gray-300"
        >
          <div className="flex items-center space-x-2">
            <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
            <span>Built, Secured & Optimized by 1 Single Team</span>
          </div>
          <Link to="/services" className="text-indigo-400 font-bold hover:underline">
            All Services &rarr;
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default React.memo(HeroServicesVisual);
