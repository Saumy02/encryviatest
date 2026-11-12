import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Sparkles, Coins, Zap } from 'lucide-react';

const statsData = [
  { value: '5+ yrs', label: 'Industry Experience', icon: Award, color: 'from-purple-400 to-indigo-400' },
  { value: '24/7', label: 'Threat Monitoring', icon: ShieldCheck, color: 'from-indigo-400 to-blue-400' },
  { value: '90%*', label: 'AI Visibility Improvement', icon: Sparkles, color: 'from-purple-400 to-pink-400' },
  { value: '₹2.5L+', label: 'Potential ROI Growth', icon: Coins, color: 'from-emerald-400 to-teal-400' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 18 }
  }
};

const StatsBanner = () => {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl bg-black/50 border border-purple-500/30 backdrop-blur-xl p-6 sm:p-10 shadow-2xl relative overflow-hidden"
      >
        {/* Ambient Top Glow Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500" />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center"
        >
          {statsData.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.03 }}
                className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col items-center justify-between group shadow-lg"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-[rgb(168,85,247)] flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-purple-500 group-hover:text-white transition-all">
                  <Icon size={20} />
                </div>

                <motion.h3 
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 3 + idx, repeat: Infinity, ease: 'easeInOut' }}
                  className={`text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-1`}
                >
                  {stat.value}
                </motion.h3>

                <p className="text-xs sm:text-sm text-gray-300 font-semibold leading-snug">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-6 text-center pt-5 border-t border-white/10">
          <p className="text-[11px] sm:text-xs text-gray-400 italic">
            *AI visibility improvement is an experimental, emerging metric results vary as AI search tools evolve.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default React.memo(StatsBanner);
