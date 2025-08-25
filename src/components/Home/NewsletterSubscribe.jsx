import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const NewsletterSubscribe = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubscribe = () => {
    if (email.trim() && email.includes("@")) {
      setSuccess(true);
      setEmail("");
      setTimeout(() => setSuccess(false), 3000);
    }
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="max-w-5xl mx-auto">
        <div className="relative group">
          {/* Background glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-indigo-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
          
          {/* Main container */}
          <div className="relative bg-gradient-to-r from-purple-900/80 via-pink-900/80 to-indigo-900/80 backdrop-blur-xl border border-white/20 p-8 sm:p-12 lg:p-16 rounded-3xl shadow-2xl">
            
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30 rounded-3xl"></div>
            
            <div className="relative z-10 text-center space-y-8">
              
              {/* Header */}
              <div className="space-y-6">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Stay Ahead of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Threats</span>, 
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-400">Trends</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Tech</span>
                </h3>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  Join our newsletter for practical tips, real-world case studies, and growth strategies 
                  built for startups & SMEs. No spam, just value.
                </p>
              </div>

              {/* Features grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-300">Weekly Insights</span>
                </div>
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-300">Exclusive Tips</span>
                </div>
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-300">Early Access</span>
                </div>
              </div>

              {/* Email subscription form */}
              <div className="max-w-md mx-auto space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 bg-gray-800/50 backdrop-blur-sm text-white placeholder-gray-400 rounded-2xl border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-base"
                  />
                  <button
                    onClick={handleSubscribe}
                    className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Subscribe
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>

                {/* Success message */}
                <AnimatePresence>
                  {success && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center justify-center gap-2 text-green-400 font-medium"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Successfully subscribed! Welcome to the community.
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Privacy note */}
              <p className="text-sm text-gray-400 max-w-md mx-auto">
                We respect your privacy. Unsubscribe at any time. No spam, ever.
              </p>
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-6 right-6 w-4 h-4 bg-purple-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-6 left-6 w-3 h-3 bg-pink-400 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-8 w-2 h-2 bg-indigo-400 rounded-full animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscribe;







