import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const NewsletterSubscribe = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(null); // null | "subscribed" | "already"
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async () => {
    if (email.trim() && email.includes("@")) {
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
    }
  };


  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent form submit (page reload)
      handleSubscribe();
    }
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
      <div className="max-w-5xl mx-auto">
        <div className="relative group">
          {/* Background glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

          {/* Main container (glassmorphism) */}
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/20 ring-1 ring-white/10 p-6 sm:p-8 lg:p-12 rounded-3xl shadow-2xl shadow-black/50">
            {/* Glass highlight overlay */}
            <div className="pointer-events-none absolute inset-px rounded-3xl bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>

            <div className="relative z-10 text-center space-y-6 lg:space-y-8">
              {/* Header */}
              <div className="space-y-4 lg:space-y-6">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                  Stay Ahead of{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    Threats
                  </span>,
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-400">
                    Trends
                  </span>{' '}
                  &{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                    Tech
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
                    className="flex-1 px-4 py-3 lg:px-6 lg:py-4 bg-gray-800/50 backdrop-blur-sm text-white placeholder-gray-400 rounded-2xl border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-sm lg:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Email address"
                  />
                  <button
                    onClick={handleSubscribe}
                    disabled={isLoading || !email.trim() || !email.includes("@")}
                    className="group relative px-6 py-3 lg:px-8 lg:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                    aria-label="Subscribe to newsletter"
                  >
                    <span className="relative z-10 flex items-center gap-2">
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
                          Subscribe
                          <svg className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                          </svg>
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>

                {/* Status Messages */}
                <AnimatePresence>
                  {success === "subscribed" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      className="text-green-400 bg-green-50 border border-green-200 px-4 py-3 rounded-lg"
                    >
                      Email submitted successfully!
                    </motion.div>
                  )}
                  {success === "exists" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      className="text-yellow-400 bg-yellow-50 border border-yellow-200 px-4 py-3 rounded-lg"
                    >
                      Email already exists.
                    </motion.div>
                  )}
                  {success === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      className="text-red-400 bg-red-50 border border-red-200 px-4 py-3 rounded-lg"
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

            {/* Floating elements */}
            <div className="absolute top-4 right-4 lg:top-6 lg:right-6 w-3 h-3 lg:w-4 lg:h-4 bg-purple-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6 w-2 h-2 lg:w-3 lg:h-3 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-6 lg:left-8 w-1.5 h-1.5 lg:w-2 lg:h-2 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscribe;
