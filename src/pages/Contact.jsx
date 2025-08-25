import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Icons (SVGs)
const OfficeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-blue-400">
    <rect x="2" y="7" width="20" height="15" rx="2" ry="2" strokeWidth="2" />
    <path d="M12 22V7M6 17v-1.5a1.5 1.5 0 013 0V17M15 17v-1.5a1.5 1.5 0 013 0V17M7 2h10M12 7h.01" strokeWidth="2" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-blue-400">
    <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 0111.19 19.85a19.5 19.5 0 01-3.07-8.63A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" strokeWidth="2" />
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-blue-400">
    <rect x="2" y="4" width="20" height="16" rx="2" ry="2" strokeWidth="2" />
    <path d="M22 6L12 13 2 6" strokeWidth="2" />
  </svg>
);

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.95
  },
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
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.9
  },
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

const imageVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    rotateY: -15
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    rotateY: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

const formVariants = {
  hidden: { 
    opacity: 0, 
    x: 50,
    scale: 0.95
  },
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
  tap: {
    scale: 0.95
  }
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
  return (
    <motion.div 
      className="min-h-screen text-white bg-gradient-to-br from-black via-gray-900 to-indigo-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      
      {/* Hero Section - Enhanced spacing and typography */}
      <AnimatedSection className="flex flex-col items-center justify-center py-20 lg:py-28 xl:py-32 px-4 sm:px-6 lg:px-8 text-center">
        <motion.div 
          className="max-w-4xl mx-auto space-y-8"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
            variants={textVariants}
          >
            <motion.span 
              className="text-indigo-500"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            >
              "
            </motion.span>
            Our <motion.span 
              className="text-indigo-500"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Contact Us
            </motion.span> Page
            <motion.span 
              className="text-indigo-500"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            >
              "
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            variants={textVariants}
          >
            Let's build something together — talk to our web, security, or marketing team today.
          </motion.p>
        </motion.div>
      </AnimatedSection>

      {/* Contact Section - Improved layout and spacing */}
      <AnimatedSection className="py-20 lg:py-28 xl:py-32 px-4 sm:px-6 lg:px-8" delay={0.2}>
        <motion.div 
          className="max-w-7xl mx-auto space-y-16 lg:space-y-20"
          variants={containerVariants}
        >

          {/* Heading with Line - Enhanced visual design */}
          <motion.div 
            className="flex items-center justify-center"
            variants={itemVariants}
          >
            <motion.div 
              className="border-t border-gray-600 flex-grow max-w-xs lg:max-w-sm"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
            <motion.h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mx-6 text-blue-400"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Contact Us
            </motion.h2>
            <motion.div 
              className="border-t border-gray-600 flex-grow max-w-xs lg:max-w-sm"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </motion.div>

          {/* Header Image - Enhanced presentation */}
          <motion.div 
            className="w-full"
            variants={imageVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <motion.img
                src="https://placehold.co/1203x630/555555/EEEEEE?text=Contact+Us+Header+Image"
                alt="Contact Us"
                className="w-full h-auto object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
            </div>
          </motion.div>

          {/* Text + Form Section - Improved layout */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-20 items-start">

            {/* Left: Text Content - Enhanced typography and spacing */}
            <motion.div 
              className="flex-1 space-y-8 lg:space-y-10"
              variants={containerVariants}
            >
              <motion.div 
                className="space-y-6"
                variants={itemVariants}
              >
                <motion.h3 
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
                  variants={textVariants}
                >
                  Stay Connected with Us
                </motion.h3>

                <motion.p 
                  className="text-lg lg:text-xl text-gray-300 leading-relaxed"
                  variants={textVariants}
                >
                  Got SEO, international search strategies, web design, or internet marketing issues? Looking for partnership opportunities, need some custom keyword research, or need help with your next campaign? Reach out to us—we're here to help you beat those web goals.
                </motion.p>
              </motion.div>

              <motion.div 
                className="space-y-6"
                variants={itemVariants}
              >
                <motion.h4 
                  className="text-xl lg:text-2xl font-semibold text-white"
                  variants={textVariants}
                >
                  How may we help you?
                </motion.h4>
                <motion.ul 
                  className="list-disc list-inside text-gray-300 space-y-3 text-lg"
                  variants={containerVariants}
                >
                  {[
                    "SEO consulting, keyword research consulting, and competitor analysis consulting",
                    "Guidelines for international SEO and web design trends",
                    "Backing for your online marketing plan",
                    "Professional guidance on cyber security issues for your company"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      variants={itemVariants}
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              <motion.div 
                className="space-y-4"
                variants={itemVariants}
              >
                <motion.p 
                  className="text-md text-gray-400"
                  variants={textVariants}
                >
                  We answer all questions within 24 hours. Your goals and privacy are our priorities.
                </motion.p>

                <div className="space-y-4">
                  <motion.h4 
                    className="text-lg lg:text-xl font-semibold text-blue-400"
                    variants={textVariants}
                  >
                    Why Contact Us?
                  </motion.h4>
                  <motion.p 
                    className="text-md lg:text-lg text-gray-300 leading-relaxed"
                    variants={textVariants}
                  >
                    Instant expert assistance and valuable SEO advice. Support from an experienced analyst in web development and online marketing.
                    <br /><br />
                    Today's tactics are aligned with 2025 and beyond. Let's get connected and drive your business forward!
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Contact Form - Enhanced styling and spacing */}
            <motion.div 
              className="flex-1 bg-indigo-950/70 p-8 lg:p-10 rounded-2xl shadow-2xl border border-indigo-500/20"
              variants={formVariants}
              whileHover={{ 
                boxShadow: "0 25px 50px rgba(99, 102, 241, 0.2)",
                borderColor: "rgba(99, 102, 241, 0.4)"
              }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <form className="space-y-6">
                {[
                  { id: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Enter your full name' },
                  { id: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email' },
                  { id: 'number', label: 'Number', type: 'tel', placeholder: 'Enter your phone number' },
                  { id: 'location', label: 'Location', type: 'text', placeholder: 'Enter your location' }
                ].map(({ id, label, type, placeholder }, index) => (
                  <motion.div 
                    key={id} 
                    className="space-y-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <label htmlFor={id} className="block text-sm font-medium text-gray-300">{label}</label>
                    <motion.input
                      id={id}
                      type={type}
                      placeholder={placeholder}
                      className="w-full px-4 py-3 rounded-lg bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300"
                      whileFocus={{ 
                        scale: 1.02,
                        boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.3)"
                      }}
                    />
                  </motion.div>
                ))}
                <motion.div 
                  className="pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Submit
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </AnimatedSection>

      {/* Contact Info + Map Section - Enhanced layout */}
      <AnimatedSection className="py-20 lg:py-28 xl:py-32 px-4 sm:px-6 lg:px-8" delay={0.4}>
        <motion.div 
          className="max-w-7xl mx-auto space-y-16 lg:space-y-20"
          variants={containerVariants}
        >
          
          {/* Contact Info and Image */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-20 items-center">
            
            {/* Image - Enhanced presentation */}
            <motion.div 
              className="w-full lg:w-1/2"
              variants={imageVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="rounded-[120px] overflow-hidden shadow-2xl">
                <motion.img
                  src="https://placehold.co/480x645/555555/EEEEEE?text=Mobile+Phone+Icon"
                  alt="Mobile Phone"
                  className="w-full h-auto object-cover rounded-[100px]"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </motion.div>

            {/* Contact Information - Enhanced spacing and typography */}
            <motion.div 
              className="w-full lg:w-1/2 space-y-12 text-center lg:text-right"
              variants={containerVariants}
            >
              {[
                {
                  icon: <OfficeIcon />,
                  title: 'Office Address',
                  lines: ['New Delhi, India']
                },
                {
                  icon: <PhoneIcon />,
                  title: 'Phone Number',
                  lines: ['+911234567890', '+911234567890']
                },
                {
                  icon: <MailIcon />,
                  title: 'Email Address',
                  lines: ['encryvia@gmail.com', 'info@encryvia.com']
                }
              ].map(({ icon, title, lines }, idx) => (
                <motion.div 
                  key={idx} 
                  className="space-y-3"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="flex justify-center lg:justify-end items-center gap-3"
                    whileHover={{ gap: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {icon}
                    </motion.div>
                    <h4 className="text-xl lg:text-2xl font-semibold text-white">{title}</h4>
                  </motion.div>
                  {lines.map((line, i) => (
                    <motion.p 
                      key={i} 
                      className="text-gray-300 text-lg"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.1 }}
                    >
                      {line}
                    </motion.p>
                  ))}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Map - Enhanced presentation */}
          <motion.div 
            className="w-full"
            variants={imageVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="rounded-[40px] overflow-hidden shadow-2xl">
              <motion.img
                src="https://placehold.co/1138x787/555555/EEEEEE?text=Map+of+New+Delhi"
                alt="Map of New Delhi"
                className="w-full h-auto object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </AnimatedSection>
    </motion.div>
  );
};

export default Contact;
