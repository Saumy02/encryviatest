import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, ShieldCheck, Sparkles, Terminal, Activity, Zap, CheckCircle2, 
  Lock, TrendingUp, Cpu, Flame, Globe, ArrowUpRight, Play, Eye
} from 'lucide-react';
import { Link } from 'react-router-dom';

const tabs = [
  { id: 'build', label: 'Build', sub: 'Web & App', icon: Code2, color: 'from-purple-500 to-indigo-500' },
  { id: 'secure', label: 'Secure', sub: 'Cybersecurity', icon: ShieldCheck, color: 'from-indigo-500 to-pink-500' },
  { id: 'grow', label: 'Grow', sub: 'SEO & AI GEO', icon: Sparkles, color: 'from-pink-500 to-emerald-400' },
];

const codeLines = [
  { text: '// EncryVia Core Engine Initialized', color: 'text-[rgb(168,85,247)] font-semibold' },
  { text: 'const platform = await EncryVia.build({', color: 'text-white' },
  { text: '  framework: "Next.js 15 & React 19",', color: 'text-emerald-300' },
  { text: '  security: "Zero-Trust AES-256 WAPT",', color: 'text-indigo-300' },
  { text: '  seo: "ChatGPT + Google GEO #1 Rank"', color: 'text-pink-300' },
  { text: '}); // Speed: 100/100 · 0 Vulnerabilities', color: 'text-gray-400 italic' }
];

const HeroAestheticShowcase = () => {
  const [activeTab, setActiveTab] = useState('build');
  const [chartProgress, setChartProgress] = useState(0);

  // Auto-switch tabs every 5 seconds if not manually interacted
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => {
        if (prev === 'build') return 'secure';
        if (prev === 'secure') return 'grow';
        return 'build';
      });
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-lg lg:max-w-xl mx-auto p-2 sm:p-4">
      {/* Background Cosmic Glows */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            rotate: [0, 180, 360],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          className="w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-purple-600/40 via-indigo-600/30 to-pink-500/30 blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [0.9, 1.1, 0.9]
          }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-purple-500/20 border-dashed"
        />
      </div>

      {/* Main Glassmorphism IDE / Dashboard Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative z-10 rounded-3xl bg-black/80 border border-purple-500/40 backdrop-blur-2xl shadow-2xl shadow-purple-950/60 overflow-hidden"
      >
        {/* Top Window Titlebar */}
        <div className="px-5 py-3.5 bg-white/5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="text-xs font-mono font-bold text-gray-300 ml-2">
              encryvia-core-v3.0.exe
            </span>
          </div>

          <div className="flex items-center space-x-2 text-[10px] font-bold font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>ALL SYSTEMS LIVE</span>
          </div>
        </div>

        {/* Mode Selector Tabs (Build · Secure · Grow) */}
        <div className="p-3 bg-black/40 border-b border-white/10 flex items-center justify-between gap-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-2.5 px-3 rounded-2xl transition-all duration-300 flex items-center justify-center space-x-2 text-xs font-bold ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30 border border-purple-400/40'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display Area */}
        <div className="p-5 sm:p-6 min-h-[260px] flex flex-col justify-between relative">
          <AnimatePresence mode="wait">
            {activeTab === 'build' && (
              <motion.div
                key="build"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[rgb(168,85,247)] uppercase tracking-widest flex items-center gap-1.5">
                    <Code2 size={14} />
                    <span>Web & App Engineering</span>
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-purple-500/20 text-[rgb(168,85,247)] border border-purple-500/30">
                    ⚡ LIGHTHOUSE 100/100
                  </span>
                </div>

                {/* Live Code Console */}
                <div className="p-4 rounded-2xl bg-black/90 border border-white/10 font-mono text-xs space-y-1.5 shadow-inner">
                  {codeLines.map((line, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.08 }}
                      className={line.color}
                    >
                      {line.text}
                    </motion.div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {['React 19', 'Next.js', 'Node.js', 'Tailwind', 'Cloud Edge'].map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-lg bg-purple-950/40 text-[rgb(168,85,247)] text-[11px] font-semibold border border-purple-500/20">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'secure' && (
              <motion.div
                key="secure"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest flex items-center gap-1.5">
                    <ShieldCheck size={14} />
                    <span>Cybersecurity Sentinel</span>
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    🛡️ ZERO PENETRATION
                  </span>
                </div>

                {/* Radar Scan Graphic */}
                <div className="p-4 rounded-2xl bg-black/90 border border-indigo-500/30 flex items-center justify-between relative overflow-hidden">
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-white flex items-center space-x-2">
                      <Lock size={14} className="text-indigo-400" />
                      <span>AES-256 WAPT Penetration Test</span>
                    </div>
                    <p className="text-[11px] text-gray-400">
                      Continuous OWASP Top 10 API & Server vulnerability audit.
                    </p>
                    <div className="flex items-center space-x-2 text-[10px] font-mono text-emerald-400">
                      <CheckCircle2 size={12} />
                      <span>0 Vulnerabilities Detected</span>
                    </div>
                  </div>

                  {/* Pulsing Radar Ring */}
                  <div className="w-16 h-16 rounded-full border-2 border-indigo-500/40 flex items-center justify-center relative flex-shrink-0">
                    <motion.div
                      animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0, 0.8] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 rounded-full border border-indigo-400"
                    />
                    <ShieldCheck size={28} className="text-indigo-400 animate-pulse" />
                  </div>
                </div>

                {/* Security Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {['OWASP Top 10', 'WAPT Audit', 'SSL/TLS 256-Bit', 'Cloud WAF'].map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-lg bg-indigo-950/40 text-indigo-300 text-[11px] font-semibold border border-indigo-500/20">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'grow' && (
              <motion.div
                key="grow"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-pink-400 uppercase tracking-widest flex items-center gap-1.5">
                    <Sparkles size={14} />
                    <span>SEO & Generative AI (GEO)</span>
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-pink-500/20 text-pink-300 border border-pink-500/30">
                    📈 +90% AI TRAFFIC
                  </span>
                </div>

                {/* Live Animated Growth Chart */}
                <div className="p-4 rounded-2xl bg-black/90 border border-pink-500/30 space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-white">
                    <span>Google & ChatGPT Search Rank</span>
                    <span className="text-emerald-400 font-mono">#1 Position</span>
                  </div>

                  {/* SVG Animated Growth Wave */}
                  <div className="h-16 w-full flex items-end space-x-2 pt-2">
                    {[30, 45, 60, 50, 75, 90, 100].map((val, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center h-full justify-end">
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: `${val}%` }}
                          transition={{ duration: 0.6, delay: idx * 0.08 }}
                          className="w-full rounded-t-lg bg-gradient-to-t from-pink-600 via-purple-600 to-emerald-400"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Growth Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {['ChatGPT Cited', 'Perplexity GEO', 'Google Ads ROAS', 'CRO Testing'].map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-lg bg-pink-950/40 text-pink-300 text-[11px] font-semibold border border-pink-500/20">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Footer CTA Line */}
          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
            <span className="text-gray-400 font-medium">Build, Secure, Grow in 1 Package</span>
            <Link to="/services" className="text-[rgb(168,85,247)] font-bold hover:text-white flex items-center space-x-1">
              <span>View Full Suite</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Floating Micro Badge 1 (Top Right) */}
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-4 -right-2 sm:-right-4 z-20 px-3.5 py-2 rounded-2xl bg-black/90 border border-purple-500/50 text-white text-xs font-bold shadow-xl backdrop-blur-xl flex items-center space-x-2"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-ping" />
        <span>🤖 ChatGPT & Google #1</span>
      </motion.div>

      {/* Floating Micro Badge 2 (Bottom Left) */}
      <motion.div
        animate={{ y: [6, -6, 6] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-4 -left-2 sm:-left-4 z-20 px-3.5 py-2 rounded-2xl bg-black/90 border border-emerald-500/50 text-white text-xs font-bold shadow-xl backdrop-blur-xl flex items-center space-x-2"
      >
        <CheckCircle2 size={16} className="text-emerald-400" />
        <span>⚡ 100/100 Speed Guaranteed</span>
      </motion.div>
    </div>
  );
};

export default React.memo(HeroAestheticShowcase);
