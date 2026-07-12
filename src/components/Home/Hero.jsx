import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const buttonVariants = {
  hover: { scale: 1.05, boxShadow: '0 20px 40px rgba(99, 102, 241, 0.3)' },
  tap: { scale: 0.95 },
};

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left space-y-6 lg:px-8">
              <div className="space-y-5">
                <h1 className="text-4xl sm:text-4xl lg:text-5xl xl:text-5xl font-extrabold leading-tight">
                  <span className="text-white">Build. Secure.</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                  Grow.
                  </span>
                </h1>

                <p className="text-lg sm:text-2xl lg:text-2xl font-medium text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Most businesses juggle a web developer, a security consultant, and a marketing agency and hope they all play nice. We're all three, working as one. Web development, cybersecurity, and digital marketing under a single roof.
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 font-semibold">
                    {' '} Plans start from ₹25,000.
                  </span>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/contact" aria-label="Get started with EncryVia services">
                  <motion.button
                    className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <span className="relative z-10">Get Started</span>
                  </motion.button>
                </Link>

                <Link to="/about-us" aria-label="Learn more about EncryVia">
                  <motion.button
                    className="group px-8 py-4 border-2 border-indigo-500/50 text-indigo-400 font-semibold rounded-xl hover:bg-indigo-500/10 hover:border-indigo-400"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center justify-center gap-2">
                      Go Deepper
                    </span>
                  </motion.button>
                </Link>
              </div>

              <div className="pt-6">
                <div className="flex flex-col items-center lg:items-start space-y-2 text-gray-400">
                  <motion.span animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}>
                    Scroll to explore
                  </motion.span>
                  <motion.div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                    <motion.div
                      className="w-1 h-3 bg-gray-400 rounded-full mt-2"
                      animate={{ y: [0, 12, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end relative">
              <img
                src="/image/hero_image.webp"
                alt="EncryVia - Web Development, Cybersecurity and SEO Solutions"
                className="w-[280px] sm:w-[360px] md:w-[420px] lg:w-[480px] xl:w-[520px] object-contain drop-shadow-2xl"
                width="520"
                height="520"
                loading="eager"
                decoding="sync"
                fetchPriority="high"
                onError={(e) => { e.currentTarget.src = 'https://placehold.co/520x520/0a0a0a/FFF?text=Hero+Image'; }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Hero);
