import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Send } from 'lucide-react';

const NewsletterSubscribe = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(null); // null | "subscribed" | "already" | "invalid"
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!email.trim() || !email.includes("@")) {
      setSuccess("invalid");
      setTimeout(() => setSuccess(null), 3000);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('https://encryvia-backend.vercel.app/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();

      if (response.ok) {
        // Success response
        setSuccess("subscribed");
        setEmail("");
      } else {
        // Error response (e.g., email exists)
        if (data.error && data.error === "Email already exists") {
          setSuccess("exists");
        } else {
          // fallback for other errors
          setSuccess("error");
        }
      }
    } catch (error) {
      console.error('Network error:', error);
      setSuccess("error");
    } finally {
      setIsLoading(false);
      setTimeout(() => setSuccess(null), 4000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent form submit (page reload)
      handleSubscribe();
    }
  };

  return (
    <div
      className="w-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Main container (pure ultra-transparent glassmorphism matching ConnectNow) */}
          <div className="relative bg-white/[0.04] border border-white/20 p-8 sm:p-10 lg:p-12 rounded-3xl backdrop-blur-2xl shadow-2xl">
            
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.05\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30 rounded-3xl"></div>
            {/* Glass highlight overlay */}
            <div className="pointer-events-none absolute inset-px rounded-3xl bg-gradient-to-b from-white/12 via-white/5 to-transparent"></div>

            <div className="relative z-10 text-center space-y-6 lg:space-y-8">
              {/* Header */}
              <div className="space-y-4 lg:space-y-6">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white leading-tight tracking-tight">
                  Stay Ahead of{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
                    Threats, Trends & Tech
                  </span>
                </h3>
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  Stay current with threats, trends, and technology.
                  Join our newsletter for practical tips, real-world case studies, and growth strategies built for startups & SMEs.
                </p>
              </div>

              {/* Features grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 max-w-2xl mx-auto">
                {[
                  {
                    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                    text: "Weekly Insights",
                    gradient: "from-purple-500 to-pink-500"
                  },
                  {
                    icon: "M13 10V3L4 14h7v7l9-11h-7z",
                    text: "Exclusive Tips",
                    gradient: "from-pink-500 to-indigo-500"
                  },
                  {
                    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                    text: "Early Access",
                    gradient: "from-indigo-500 to-purple-500"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex flex-col items-center gap-3 text-center">
                    <div className={`w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                      <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feature.icon}></path>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-300">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Email subscription form */}
              <div className="max-w-md mx-auto space-y-4">
                <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Enter your email address"
                    disabled={isLoading}
                    className="flex-1 px-4 py-3 lg:px-6 lg:py-4 bg-white/[0.05] backdrop-blur-md text-white placeholder-gray-400 rounded-2xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400/50 transition-all duration-300 text-sm lg:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Email address"
                  />
                  <button
                    onClick={handleSubscribe}
                    disabled={isLoading}
                    className="group relative px-8 py-3.5 sm:py-4 bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 hover:from-purple-400 hover:via-indigo-400 hover:to-pink-400 text-white font-extrabold text-base rounded-2xl shadow-[0_0_25px_rgba(168,85,247,0.55)] hover:shadow-[0_0_35px_rgba(236,72,153,0.75)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 border border-white/30 cursor-pointer flex-shrink-0"
                    aria-label="Subscribe to newsletter"
                  >
                    {/* Ambient Glow Halo */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 rounded-2xl opacity-60 blur-md group-hover:opacity-90 transition duration-300 pointer-events-none -z-10"></div>
                    <span className="relative z-10 flex items-center gap-2 tracking-wide font-extrabold text-white">
                      {isLoading ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Subscribing...
                        </>
                      ) : (
                        <>
                          <span>Subscribe</span>
                          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
                        </>
                      )}
                    </span>
                  </button>
                </div>

                {/* Status Messages */}
                <AnimatePresence>
                  {success === "invalid" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      className="text-amber-300 bg-amber-500/15 border border-amber-500/30 px-4 py-2.5 rounded-xl backdrop-blur-sm text-sm"
                    >
                      Please enter a valid email address.
                    </motion.div>
                  )}
                  {success === "subscribed" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      className="text-green-400 bg-green-500/10 border border-green-500/30 px-4 py-3 rounded-xl backdrop-blur-sm text-sm"
                    >
                      Email submitted successfully!
                    </motion.div>
                  )}
                  {success === "exists" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      className="text-yellow-400 bg-yellow-500/10 border border-yellow-500/30 px-4 py-3 rounded-xl backdrop-blur-sm text-sm"
                    >
                      Email already exists.
                    </motion.div>
                  )}
                  {success === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      className="text-red-400 bg-red-500/10 border border-red-500/30 px-4 py-3 rounded-xl backdrop-blur-sm text-sm"
                    >
                      Something went wrong. Please try again later.
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Privacy note */}
              <p className="text-xs lg:text-sm text-gray-400 max-w-md mx-auto">
                We respect your privacy. Unsubscribe at any time. No spam, ever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscribe;
