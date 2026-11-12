import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, ShieldCheck, Sparkles, Terminal, Activity, Lock, TrendingUp, CheckCircle, Cpu, Radio } from 'lucide-react';
import { Link } from 'react-router-dom';

const codeSnippets = [
  'const app = createSecurePlatform();',
  'await pentest.auditOWASP10();',
  'seo.optimizeForChatGPT();',
  'system.status = "PROTECTED";'
];

const HeroServicesVisual3D = () => {
  const [codeIndex, setCodeIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    const timer = setInterval(() => {
      setCodeIndex((prev) => (prev + 1) % codeSnippets.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-lg lg:max-w-xl mx-auto min-h-[460px] flex items-center justify-center p-4">
      {/* 1. Ambient Background Neon Glow Halos */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          className="w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-purple-600/30 via-indigo-600/40 to-pink-500/20 blur-3xl"
        />
        
        {/* Orbital Ring 1 */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-purple-500/30 border-dashed"
        />
        
        {/* Orbital Ring 2 (Reverse) */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute w-60 h-60 sm:w-80 sm:h-80 rounded-full border border-indigo-400/20 border-dotted"
        />
      </div>

      {/* 2. Floating Cyber Shield Centerpiece */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center space-y-6">
        
        {/* Central Orb / Hologram Core */}
        <motion.div
          animate={{
            y: [-8, 8, -8],
            rotateY: [0, 15, -15, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="relative group cursor-pointer"
        >
          {/* Pulsing Outer Core Ring */}
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-purple-600 via-indigo-600 to-pink-500 p-1 shadow-2xl shadow-purple-500/50 flex items-center justify-center relative overflow-hidden">
            
            {/* Sweep Light Beam */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent"
            />

            {/* Inner Core Shield Box */}
            <div className="w-full h-full rounded-full bg-black/80 backdrop-blur-md flex flex-col items-center justify-center relative z-10 border border-white/20 p-2">
              <ShieldCheck className="w-10 h-10 sm:w-14 sm:h-14 text-[rgb(168,85,247)] drop-shadow-[0_0_15px_rgba(168,85,247,0.8)] animate-pulse" />
              <span className="text-[10px] sm:text-xs font-bold text-white tracking-widest uppercase mt-1">
                ENCRYVIA CORE
              </span>
            </div>
          </div>

          {/* Floating Radar Scanning Status Badge */}
          <motion.div
            animate={{ scale: [0.95, 1.05, 0.95] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full bg-black/80 border border-emerald-500/50 text-emerald-400 text-[10px] sm:text-xs font-bold flex items-center space-x-1.5 shadow-lg backdrop-blur-md whitespace-nowrap"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <Radio size={12} className="animate-spin text-emerald-400" />
            <span>AI SENTINEL ACTIVE</span>
          </motion.div>
        </motion.div>

        {/* 3. Three Floating Orbiting Service Satellites */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 relative z-20">
          
          {/* Satellite 1: Web & App Dev */}
          <Link to="/services/web-and-app-development" className="block">
            <motion.div
              whileHover={{ scale: 1.05, y: -6 }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="p-4 rounded-2xl bg-black/70 border border-purple-500/40 hover:border-purple-400 backdrop-blur-xl shadow-xl shadow-purple-950/40 space-y-2 group transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-xl bg-purple-500/20 text-[rgb(168,85,247)] group-hover:bg-purple-500 group-hover:text-white transition">
                  <Code size={18} />
                </div>
                <span className="text-[10px] font-bold text-[rgb(168,85,247)] bg-purple-500/10 px-2 py-0.5 rounded-full border border-purple-500/20">
                  SPEED 100/100
                </span>
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-[rgb(168,85,247)] transition">
                Web & App Dev
              </h4>
              <div className="flex items-center space-x-1 font-mono text-[10px] text-gray-300 bg-black/50 p-1.5 rounded-lg border border-white/5 overflow-hidden">
                <Terminal size={12} className="text-[rgb(168,85,247)] flex-shrink-0" />
                <span className="truncate">React · Next.js · Node</span>
              </div>
            </motion.div>
          </Link>

          {/* Satellite 2: Cybersecurity Audit */}
          <Link to="/services/cybersecurity" className="block">
            <motion.div
              whileHover={{ scale: 1.05, y: -6 }}
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="p-4 rounded-2xl bg-black/70 border border-indigo-500/40 hover:border-indigo-400 backdrop-blur-xl shadow-xl shadow-indigo-950/40 space-y-2 group transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition">
                  <Lock size={18} />
                </div>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  0 THREATS
                </span>
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-indigo-300 transition">
                Cybersecurity
              </h4>
              <div className="flex items-center space-x-1 font-mono text-[10px] text-gray-300 bg-black/50 p-1.5 rounded-lg border border-white/5 overflow-hidden">
                <Activity size={12} className="text-emerald-400 flex-shrink-0" />
                <span className="truncate">WAPT · OWASP · AES-256</span>
              </div>
            </motion.div>
          </Link>

          {/* Satellite 3: SEO, GEO & AI Marketing */}
          <Link to="/services/seo-geo-and-ads" className="block">
            <motion.div
              whileHover={{ scale: 1.05, y: -6 }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="p-4 rounded-2xl bg-black/70 border border-pink-500/40 hover:border-pink-400 backdrop-blur-xl shadow-xl shadow-pink-950/40 space-y-2 group transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-xl bg-pink-500/20 text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition">
                  <Sparkles size={18} />
                </div>
                <span className="text-[10px] font-bold text-pink-300 bg-pink-500/10 px-2 py-0.5 rounded-full border border-pink-500/20">
                  +90% AI TRAFFIC
                </span>
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-pink-300 transition">
                SEO & GEO AI
              </h4>
              <div className="flex items-center space-x-1 font-mono text-[10px] text-gray-300 bg-black/50 p-1.5 rounded-lg border border-white/5 overflow-hidden">
                <TrendingUp size={12} className="text-pink-400 flex-shrink-0" />
                <span className="truncate">ChatGPT & Google #1</span>
              </div>
            </motion.div>
          </Link>
        </div>

        {/* Live Code Console Ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full p-3 rounded-2xl bg-black/80 border border-purple-500/30 font-mono text-xs text-[rgb(168,85,247)] flex items-center justify-between shadow-lg backdrop-blur-md"
        >
          <div className="flex items-center space-x-2 truncate">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse flex-shrink-0" />
            <span className="text-gray-400">$</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={codeIndex}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3 }}
                className="text-white font-semibold truncate"
              >
                {codeSnippets[codeIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
          <span className="text-[10px] text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 flex-shrink-0 ml-2">
            BUILD · SECURE · GROW
          </span>
        </motion.div>

      </div>
    </div>
  );
};

export default React.memo(HeroServicesVisual3D);
