import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Icons (Corrected SVGs)
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
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

const formVariants = {
  hidden: { opacity: 0, x: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
    transition: {
      type: "spring",
      stiffness: 300
    }
  },
  tap: { scale: 0.95 }
};

// Animated section wrapper
const AnimatedSection = ({ children, className = "", delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px"
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

  // from link with bacekend
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate locally if needed here
    setIsSubmitting(true);

    try {
      const response = await fetch('https://encryvia-backend.vercel.app/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.fullName,   // matches your backend field 'name'
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
      setFormData({ fullName: '', email: '', number: '', messages: '' });   // reset data from frontend after submitting 
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  return (
    <motion.div
      className="min-h-screen text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >

      {/* Hero Section */}
      <AnimatedSection className="py-56 sm:py-32 lg:py-40 xl:py-48  px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
            variants={textVariants}
          >
            Let's <span className="text-indigo-500">Connect</span> and Build Together
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            variants={textVariants}
          >
            Have a project in mind or just want to learn more? Talk to our web, security, or marketing team today. We're here to help you achieve your goals.
          </motion.p>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection className="py-12 sm:py-16 lg:py-24 xl:py-24 px-4 sm:px-6 lg:px-8" delay={0.2}>
        <motion.div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 lg:space-y-20" variants={containerVariants}>

          {/* Heading */}
          <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4" variants={itemVariants}>
            <motion.div
              className="border-t border-gray-600 flex-grow max-w-xs lg:max-w-sm hidden sm:block"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-400"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Contact Us
            </motion.h2>
            <motion.div
              className="border-t border-gray-600 flex-grow max-w-xs lg:max-w-sm hidden sm:block"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </motion.div>

          {/* Text + Form */}
          <div className="flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-16 xl:gap-20 items-start">

            {/* Text */}
            <motion.div className="flex-1 space-y-8 lg:space-y-10 text-center lg:text-left" variants={containerVariants}>
              <motion.h3 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight" variants={textVariants}>
                Stay Connected with Us
              </motion.h3>
              <motion.p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed" variants={textVariants}>
                Got SEO, GEO, AI Optimization, International Search Strategies, Web Design, or Marketing issues? Looking for partnership opportunities? Reach out — we're here to help you beat those web goals.
              </motion.p>

              <motion.ul className="list-disc list-inside text-gray-300 space-y-3 text-sm sm:text-base lg:text-lg text-left" variants={containerVariants}>
                {[
                  "SEO consulting and competitor analysis",
                  "Guidelines for international SEO & web design",
                  "Backing for your online marketing plan",
                  "Professional guidance on cyber security issues"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 10, color: "#60a5fa" }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="cursor-pointer"
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>

              <motion.p className="text-sm sm:text-base text-gray-400" variants={textVariants}>
                We answer all questions within 24 hours. Your goals and privacy are our priorities.
              </motion.p>
            </motion.div>

            {/* Enhanced Form */}
            <motion.div
              className="flex-1 w-full bg-gradient-to-br from-indigo-950/70 to-purple-950/50 p-6 sm:p-8 lg:p-8 rounded-2xl shadow-2xl border border-indigo-500/30 backdrop-blur-sm"
              variants={formVariants}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { id: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Enter your full name', required: true },
                  { id: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email', required: true },
                  { id: 'number', label: 'Phone Number', type: 'tel', placeholder: 'Enter your phone number', required: true },
                  { id: 'messages', label: 'Message', type: 'textarea', placeholder: 'Enter your message', required: false }
                ].map(({ id, label, type, placeholder, required }, index) => (
                  <motion.div
                    key={id}
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
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
                            // Allow only digits
                            value = value.replace(/\D/g, "");
                            // Limit length to 10 digits
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
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
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
                    className={`text-center p-3 rounded-lg ${submitStatus === 'success'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-red-500/20 text-red-400 border border-red-500/30'
                      }`}
                  >
                    {submitStatus === 'success'
                      ? '✅ Message sent successfully! We\'ll get back to you soon.'
                      : '❌ Something went wrong. Please try again. or check all the fields'
                    }
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </AnimatedSection>

      {/* Contact Info Section */}
      <AnimatedSection className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" delay={0.4}>
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
        >
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">

            {/* Mobile Image */}
            <motion.div
              className="w-full sm:w-2/3 lg:w-1/2 flex justify-center items-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <div className="relative">
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-[50px] blur-xl"
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
                <motion.img
                  src="./image/Contact_US/mobilicon.png"
                  alt="Mobile Phone"
                  className="relative z-10 w-full max-w-sm h-auto object-cover rounded-[40px] shadow-2xl"
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="w-full lg:w-1/2 space-y-10 text-center lg:text-left"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
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
                  lines: ['+91 6390215426'],
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
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="group cursor-pointer"
                >
                  <div className="flex items-center justify-center lg:justify-start gap-4 mb-3">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="p-2 bg-blue-500/20 rounded-full"
                    >
                      {icon}
                    </motion.div>
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold group-hover:text-blue-400 transition-colors duration-300">
                      {title}
                    </h4>
                  </div>
                  {lines.map((line, i) => (
                    <p key={i} className="text-sm sm:text-base lg:text-lg text-gray-300 group-hover:text-white transition-colors duration-300">
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
  );
};

export default Contact;
