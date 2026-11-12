import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Sparkles, Coins } from 'lucide-react';
import HeroGraphicalAnimation from './HeroGraphicalAnimation';

const buttonVariants = {
  hover: { scale: 1.05, boxShadow: '0 20px 40px rgba(168, 85, 247, 0.4)' },
  tap: { scale: 0.95 },
};

const Hero = () => {
  return (
    <div className="relative overflow-hidden pt-14 sm:pt-14 lg:pt-16 pb-6 sm:pb-8 lg:pb-10 flex items-center w-full">
      <div className="relative flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content (order-2 on mobile/tab, order-1 on desktop) */}
            <div className="order-2 lg:order-1 text-center lg:text-left space-y-6 lg:px-2">
              <div className="space-y-4 w-full max-w-xl mx-auto lg:mx-0">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                  <span className="text-white">Build. Secure. </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400">
                    Grow
                  </span>
                </h1>

                <div className="space-y-3 text-base sm:text-lg lg:text-xl font-medium text-gray-300 leading-relaxed text-center lg:text-left">
                  <p>
                    Most businesses juggle a web developer, a security consultant, and a marketing agency and hope they all play nice.
                  </p>
                  <p className="italic text-[rgb(168,85,247)]">
                    We're all three, working as one. Web development, cybersecurity, and digital marketing under a single roof.
                  </p>
                  <p className="pt-1">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400 font-bold not-italic">
                      Plans start from ₹25,000.
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-stretch sm:items-center max-w-xl mx-auto lg:mx-0">
                <Link to="/contact" aria-label="Get started with EncryVia services" className="w-full sm:w-auto">
                  <motion.button
                    className="w-full sm:w-auto group relative px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-purple-500/30 text-sm sm:text-base"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <span className="relative z-10">Get Started</span>
                  </motion.button>
                </Link>

                <Link to="/about-us" aria-label="Learn more about EncryVia" className="w-full sm:w-auto">
                  <motion.button
                    className="w-full sm:w-auto group px-6 sm:px-8 py-3.5 sm:py-4 border-2 border-purple-500/40 text-[rgb(168,85,247)] font-bold rounded-2xl hover:bg-purple-500/10 hover:border-purple-400 transition text-sm sm:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center justify-center gap-2">
                      Go Deeper
                    </span>
                  </motion.button>
                </Link>
              </div>

              {/* Metric Cards (Sleek & compact, perfectly aligned under Get Started button) */}
              <div className="pt-2 sm:pt-3 w-full max-w-xl mx-auto lg:mx-0">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
                  {/* Card 1 */}
                  <div className="p-2.5 sm:p-3 rounded-xl bg-white/[0.04] border border-white/10 flex flex-col items-center justify-center text-center space-y-1 hover:border-purple-400/40 backdrop-blur-md shadow-md transition-all duration-300">
                    <div className="w-7 h-7 rounded-lg bg-purple-500/20 text-[rgb(168,85,247)] flex items-center justify-center border border-purple-500/30">
                      <Award size={14} />
                    </div>
                    <div className="text-base sm:text-lg font-black text-white tracking-tight">5+ yrs</div>
                    <div className="text-[9px] sm:text-[10px] text-gray-300 font-medium leading-tight">Industry Experience</div>
                  </div>

                  {/* Card 2 */}
                  <div className="p-2.5 sm:p-3 rounded-xl bg-white/[0.04] border border-white/10 flex flex-col items-center justify-center text-center space-y-1 hover:border-indigo-400/40 backdrop-blur-md shadow-md transition-all duration-300">
                    <div className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center border border-indigo-500/30">
                      <ShieldCheck size={14} />
                    </div>
                    <div className="text-base sm:text-lg font-black text-indigo-300 tracking-tight">24/7</div>
                    <div className="text-[9px] sm:text-[10px] text-gray-300 font-medium leading-tight">Threat Monitoring</div>
                  </div>

                  {/* Card 3 */}
                  <div className="p-2.5 sm:p-3 rounded-xl bg-white/[0.04] border border-white/10 flex flex-col items-center justify-center text-center space-y-1 hover:border-pink-400/40 backdrop-blur-md shadow-md transition-all duration-300">
                    <div className="w-7 h-7 rounded-lg bg-pink-500/20 text-pink-300 flex items-center justify-center border border-pink-500/30">
                      <Sparkles size={14} />
                    </div>
                    <div className="text-base sm:text-lg font-black text-pink-300 tracking-tight">90%</div>
                    <div className="text-[9px] sm:text-[10px] text-gray-300 font-medium leading-tight">AI Visibility Improvement</div>
                  </div>

                  {/* Card 4 */}
                  <div className="p-2.5 sm:p-3 rounded-xl bg-white/[0.04] border border-white/10 flex flex-col items-center justify-center text-center space-y-1 hover:border-emerald-400/40 backdrop-blur-md shadow-md transition-all duration-300">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center border border-emerald-500/30">
                      <Coins size={14} />
                    </div>
                    <div className="text-base sm:text-lg font-black text-emerald-300 tracking-tight">₹2.5L+</div>
                    <div className="text-[9px] sm:text-[10px] text-gray-300 font-medium leading-tight">Potential ROI Growth</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual: Pure 3D Graphical Animation Hub (order-1 on mobile/tab, order-2 on desktop) */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative w-full">
              <HeroGraphicalAnimation />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator (Bottom Center) */}
      <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center justify-center space-y-1 text-gray-400 text-xs flex-shrink-0 z-10 pointer-events-none">
        <motion.span 
          animate={{ opacity: [0.5, 1, 0.5] }} 
          transition={{ duration: 2, repeat: Infinity }}
          className="text-[10px] uppercase font-extrabold tracking-widest text-[rgb(168,85,247)] whitespace-nowrap"
        >
          Scroll
        </motion.span>
        <motion.div className="w-5 h-8 border-2 border-purple-400/50 rounded-full flex justify-center backdrop-blur-md bg-purple-500/10 shadow-md">
          <motion.div
            className="w-1 h-2 bg-purple-300 rounded-full mt-1.5"
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default React.memo(Hero);
