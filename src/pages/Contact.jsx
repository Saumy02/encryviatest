import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SEO from '../components/SEO';

// Icons
const OfficeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-blue-400">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-blue-400">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-blue-400">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18
    }
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35 }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 }
  }
};

const buttonVariants = {
  hover: {
    scale: 1.02,
    boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
    transition: {
      type: "spring",
      stiffness: 300
    }
  },
  tap: { scale: 0.98 }
};

// Animated section wrapper
const AnimatedSection = ({ children, className = "", delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.12,
    rootMargin: "0px 0px -10% 0px"
  });

  return (
    <motion.section
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay }}
    >
      {children}
    </motion.section>
  );
};

const Contact = () => {
  // Form state management
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    number: '',
    messages: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://encryvia-backend.vercel.app/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          number: formData.number,
          messages: formData.messages
        })
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to submit');
      }

      const data = await response.json();
      setSubmitStatus('success');
      setFormData({ fullName: '', email: '', number: '', messages: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  return (
    <>
      <SEO
        title="Contact EncryVia | Free Quote & Consultation"
        description="Get your free consultation for web development, cybersecurity or SEO services. Call, email or WhatsApp. 24-hour response time guaranteed."
        keywords="web development consultation, cybersecurity quote, SEO services contact, digital agency India, free website quote, IT services consultation, EncryVia contact"
        ogUrl="https://encryvia.com/contact"
      />

      <motion.div
        className="min-h-screen text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <AnimatedSection className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pt-12 md:pb-20 text-center">
          <motion.div className="relative z-10 max-w-5xl mx-auto space-y-6" variants={containerVariants}>
            <motion.h1
              className="text-2xl sm:text-2xl lg:text-4xl font-bold leading-tight"
              variants={textVariants}
            >
              Let's <span className="text-indigo-500">Connect</span> and Build Together
            </motion.h1>
            <motion.p
              className="text-base sm:text-md lg:text-md text-gray-300 max-w-3xl mx-auto leading-8"
              variants={textVariants}
            >
              Have a project in mind or just want to learn more? Talk to our web, security, or marketing team today. We're here to help you achieve your goals.
            </motion.p>
          </motion.div>
        </AnimatedSection>

        {/* Contact Header */}
        <AnimatedSection className="py-8 md:py-8 px-4 sm:px-6 lg:px-8" delay={0.1}>
          <motion.div
            className="flex items-center justify-center max-w-7xl mx-auto"
            variants={itemVariants}
          >
            <motion.div
              className="flex-grow border-t border-gray-700/60 max-w-[160px] sm:max-w-sm"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            />
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mx-4 sm:mx-6 text-indigo-400"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 280 }}
            >
              Contact Us
            </motion.h2>
            <motion.div
              className="flex-grow border-t border-gray-700/60 max-w-[160px] sm:max-w-sm"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            />
          </motion.div>
        </AnimatedSection>

        {/* Main Contact Section - Form & Info Side by Side */}
        <AnimatedSection className="py-12 md:py-16 px-4 sm:px-6 lg:px-8" delay={0.15}>
          <motion.div
            className="max-w-7xl mx-auto"
            variants={containerVariants}
          >
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
              {/* Left Side - Info & Description */}
              <motion.div
                className="w-full lg:w-1/2 space-y-8 text-center lg:text-left"
                variants={containerVariants}
              >
                <motion.h3
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight"
                  variants={textVariants}
                >
                  Stay Connected with Us
                </motion.h3>
                
                <motion.p
                  className="text-base sm:text-lg lg:text-xl text-gray-300 leading-8"
                  variants={textVariants}
                >
                  Got SEO, GEO, AI Optimization, International Search Strategies, Web Design, or Marketing issues? Looking for partnership opportunities? Reach out — we're here to help you beat those web goals.
                </motion.p>

                {/* Services List */}
                <motion.div
                  className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 space-y-4"
                  variants={itemVariants}
                >
                  <h4 className="text-lg lg:text-xl font-bold text-indigo-400">How We Can Help:</h4>
                  <ul className="space-y-3 text-gray-300">
                    {[
                      "SEO consulting and competitor analysis",
                      "Guidelines for international SEO & web design",
                      "Backing for your online marketing plan",
                      "Professional guidance on cyber security issues"
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start gap-3 text-sm sm:text-base"
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.06 }}
                        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                      >
                        <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.p
                  className="text-sm sm:text-base text-gray-400 italic"
                  variants={textVariants}
                >
                  We answer all questions within 24 hours. Your goals and privacy are our priorities.
                </motion.p>
              </motion.div>

              {/* Right Side - Contact Form */}
              <motion.div
                className="w-full lg:w-1/2"
                variants={itemVariants}
              >
                <div className="bg-gradient-to-br from-indigo-950/70 to-purple-950/50 p-6 sm:p-8 rounded-2xl shadow-2xl border border-indigo-500/30 backdrop-blur-sm">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {[
                      { id: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Enter your full name', required: true },
                      { id: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email', required: true },
                      { id: 'number', label: 'Phone Number', type: 'tel', placeholder: 'Enter your phone number', required: true },
                      { id: 'messages', label: 'Message', type: 'textarea', placeholder: 'Enter your message', required: false }
                    ].map(({ id, label, type, placeholder, required }, index) => (
                      <motion.div
                        key={id}
                        className="space-y-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <label htmlFor={id} className="block text-sm font-medium text-gray-300">
                          {label} {required && <span className="text-red-400">*</span>}
                        </label>

                        {type === "textarea" ? (
                          <textarea
                            id={id}
                            name={id}
                            placeholder={placeholder}
                            value={formData[id]}
                            onChange={handleInputChange}
                            required={required}
                            disabled={isSubmitting}
                            rows={4}
                            className="w-full px-4 py-3 rounded-lg bg-gray-800/50 text-white placeholder-gray-400 border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                          />
                        ) : (
                          <input
                            id={id}
                            name={id}
                            type={type}
                            placeholder={placeholder}
                            value={formData[id]}
                            onChange={(e) => {
                              let value = e.target.value;
                              if (id === "number") {
                                value = value.replace(/\D/g, "");
                                if (value.length > 10) value = value.slice(0, 10);
                              }
                              handleInputChange({ target: { name: id, value } });
                            }}
                            required={required}
                            disabled={isSubmitting}
                            pattern={id === "number" ? "\\d{10}" : undefined}
                            title={id === "number" ? "Please enter a valid 10-digit phone number" : undefined}
                            className="w-full px-4 py-3 rounded-lg bg-gray-800/50 text-white placeholder-gray-400 border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                          />
                        )}
                      </motion.div>
                    ))}

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting || !formData.fullName || !formData.email}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed mt-6"
                      variants={buttonVariants}
                      whileHover={!isSubmitting ? "hover" : {}}
                      whileTap={!isSubmitting ? "tap" : {}}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <motion.div
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Submitting...
                        </span>
                      ) : (
                        "Submit"
                      )}
                    </motion.button>

                    {/* Status Messages */}
                    {submitStatus && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`text-center p-3 rounded-lg text-sm ${submitStatus === 'success'
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : 'bg-red-500/20 text-red-400 border border-red-500/30'
                          }`}
                      >
                        {submitStatus === 'success'
                          ? '✅ Message sent successfully! We\'ll get back to you soon.'
                          : '❌ Something went wrong. Please try again or check all the fields'
                        }
                      </motion.div>
                    )}
                  </form>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Contact Info Section with Image */}
        <AnimatedSection className="py-14 md:py-20 px-4 sm:px-6 lg:px-8" delay={0.2}>
          <motion.div
            className="max-w-7xl mx-auto"
            variants={containerVariants}
          >
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Mobile Image - Left Side */}
              <motion.div
                className="w-full lg:w-1/2 flex justify-center lg:justify-start"
                variants={imageVariants}
                whileHover={{ scale: 1.01 }}
              >
                <div className="relative w-full max-w-md lg:max-w-full">
                  <motion.div
                    className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-2xl"
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <img
                    src="./image/Contact_US/mobilicon.webp"
                    alt="Mobile Phone"
                    className="relative z-10 w-full h-auto object-cover rounded-3xl shadow-2xl"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://placehold.co/600x800/4F46E5/ffffff?text=Contact+Us";
                    }}
                  />
                </div>
              </motion.div>

              {/* Contact Info - Right Side */}
              <motion.div
                className="w-full lg:w-1/2 space-y-8 text-center lg:text-left"
                variants={containerVariants}
              >
                {[
                  {
                    icon: <OfficeIcon />,
                    title: 'Office Address',
                    lines: ['Noida & New Delhi, India'],
                    link: null
                  },
                  {
                    icon: <PhoneIcon />,
                    title: 'Phone Number',
                    lines: ['+91 8796051145','+91 6390215426'],
                    link: 'tel:+916390215426'
                  },
                  {
                    icon: <MailIcon />,
                    title: 'Email Address',
                    lines: ['info@encryvia.com'],
                    link: 'mailto:info@encryvia.com'
                  }
                ].map(({ icon, title, lines, link }, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-indigo-500/30 transition-all duration-300 group"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="flex items-center justify-center lg:justify-start gap-4 mb-3">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="p-2 bg-blue-500/20 rounded-full"
                      >
                        {icon}
                      </motion.div>
                      <h4 className="text-lg sm:text-xl font-semibold group-hover:text-blue-400 transition-colors duration-300">
                        {title}
                      </h4>
                    </div>
                    {lines.map((line, i) => (
                      <p key={i} className="text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors duration-300 text-center lg:text-left">
                        {link ? (
                          <a href={link} className="hover:text-blue-400 transition-colors duration-300">
                            {line}
                          </a>
                        ) : (
                          line
                        )}
                      </p>
                    ))}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </AnimatedSection>
      </motion.div>
    </>
  );
};

export default Contact;
